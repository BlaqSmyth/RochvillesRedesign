import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertAdminUserSchema, adminUsers } from "@shared/schema";
import { ZodError } from "zod";
import { hashPassword, verifyPassword, requireAdmin, serializeAdminUser } from "./auth";
import { db } from "./db";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Log submission for server-side tracking (not exposed to public)
      console.log(`Contact form submission received: ${submission.id} from ${submission.email}`);
      
      // Return success response (without exposing internal ID)
      res.status(201).json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you within 24 hours."
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Validation error
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data",
          errors: error.errors 
        });
      } else {
        // Server error
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred. Please try again later." 
        });
      }
    }
  });

  // ========== ADMIN AUTHENTICATION ROUTES ==========
  
  // Admin login
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ error: "Username and password required" });
      }

      const adminUser = await storage.getAdminUserByUsername(username);
      
      if (!adminUser) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const isValid = await verifyPassword(password, adminUser.password);
      
      if (!isValid) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      req.session.adminUser = serializeAdminUser(adminUser);
      
      res.json({ 
        success: true, 
        user: serializeAdminUser(adminUser) 
      });
    } catch (error) {
      console.error("Admin login error:", error);
      res.status(500).json({ error: "Login failed" });
    }
  });

  // Admin logout
  app.post("/api/admin/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Logout failed" });
      }
      res.json({ success: true });
    });
  });

  // Check admin session
  app.get("/api/admin/session", (req, res) => {
    if (req.session?.adminUser) {
      res.json({ authenticated: true, user: req.session.adminUser });
    } else {
      res.json({ authenticated: false });
    }
  });

  // Create initial admin user (only if NO admin users exist at all)
  app.post("/api/admin/setup", async (req, res) => {
    try {
      // SECURITY: Check if ANY admin users exist - prevent unauthorized admin creation
      const allAdmins = await db.select().from(adminUsers).limit(1);
      
      if (allAdmins.length > 0) {
        return res.status(403).json({ 
          error: "Admin setup disabled", 
          message: "Admin users already exist. This endpoint is disabled for security." 
        });
      }

      const validatedData = insertAdminUserSchema.parse(req.body);
      const hashedPassword = await hashPassword(validatedData.password);
      
      const adminUser = await storage.createAdminUser({
        ...validatedData,
        password: hashedPassword,
      });

      console.log("Initial admin user created successfully");
      res.status(201).json({ 
        success: true, 
        message: "Admin user created successfully" 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ error: "Invalid data", details: error.errors });
      }
      console.error("Admin setup error:", error);
      res.status(500).json({ error: "Admin setup failed" });
    }
  });

  // ========== ARTICLE MANAGEMENT ROUTES ==========
  
  // Get all articles (public - can filter by published)
  app.get("/api/articles", async (req, res) => {
    try {
      const published = req.query.published === 'true' ? true : 
                       req.query.published === 'false' ? false : undefined;
      const articles = await storage.getArticles(published);
      res.json(articles);
    } catch (error) {
      console.error("Get articles error:", error);
      res.status(500).json({ error: "Failed to fetch articles" });
    }
  });

  // Get single article (public)
  app.get("/api/articles/:id", async (req, res) => {
    try {
      const article = await storage.getArticle(parseInt(req.params.id));
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      console.error("Get article error:", error);
      res.status(500).json({ error: "Failed to fetch article" });
    }
  });

  // Create article (admin only)
  app.post("/api/articles", requireAdmin, async (req, res) => {
    try {
      const article = await storage.createArticle(req.body);
      res.status(201).json(article);
    } catch (error) {
      console.error("Create article error:", error);
      res.status(500).json({ error: "Failed to create article" });
    }
  });

  // Update article (admin only)
  app.patch("/api/articles/:id", requireAdmin, async (req, res) => {
    try {
      const article = await storage.updateArticle(parseInt(req.params.id), req.body);
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      console.error("Update article error:", error);
      res.status(500).json({ error: "Failed to update article" });
    }
  });

  // Delete article (admin only)
  app.delete("/api/articles/:id", requireAdmin, async (req, res) => {
    try {
      const success = await storage.deleteArticle(parseInt(req.params.id));
      if (!success) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Delete article error:", error);
      res.status(500).json({ error: "Failed to delete article" });
    }
  });

  // ========== TESTIMONIAL MANAGEMENT ROUTES ==========
  
  // Get all testimonials (public - can filter by published)
  app.get("/api/testimonials", async (req, res) => {
    try {
      const published = req.query.published === 'true' ? true : 
                       req.query.published === 'false' ? false : undefined;
      const testimonials = await storage.getTestimonials(published);
      res.json(testimonials);
    } catch (error) {
      console.error("Get testimonials error:", error);
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  // Get single testimonial (public)
  app.get("/api/testimonials/:id", async (req, res) => {
    try {
      const testimonial = await storage.getTestimonial(parseInt(req.params.id));
      if (!testimonial) {
        return res.status(404).json({ error: "Testimonial not found" });
      }
      res.json(testimonial);
    } catch (error) {
      console.error("Get testimonial error:", error);
      res.status(500).json({ error: "Failed to fetch testimonial" });
    }
  });

  // Create testimonial (admin only)
  app.post("/api/testimonials", requireAdmin, async (req, res) => {
    try {
      const testimonial = await storage.createTestimonial(req.body);
      res.status(201).json(testimonial);
    } catch (error) {
      console.error("Create testimonial error:", error);
      res.status(500).json({ error: "Failed to create testimonial" });
    }
  });

  // Update testimonial (admin only)
  app.patch("/api/testimonials/:id", requireAdmin, async (req, res) => {
    try {
      const testimonial = await storage.updateTestimonial(parseInt(req.params.id), req.body);
      if (!testimonial) {
        return res.status(404).json({ error: "Testimonial not found" });
      }
      res.json(testimonial);
    } catch (error) {
      console.error("Update testimonial error:", error);
      res.status(500).json({ error: "Failed to update testimonial" });
    }
  });

  // Delete testimonial (admin only)
  app.delete("/api/testimonials/:id", requireAdmin, async (req, res) => {
    try {
      const success = await storage.deleteTestimonial(parseInt(req.params.id));
      if (!success) {
        return res.status(404).json({ error: "Testimonial not found" });
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Delete testimonial error:", error);
      res.status(500).json({ error: "Failed to delete testimonial" });
    }
  });

  // ========== SERVICE MANAGEMENT ROUTES ==========
  
  // Get all services (public - can filter by published)
  app.get("/api/services", async (req, res) => {
    try {
      const published = req.query.published === 'true' ? true : 
                       req.query.published === 'false' ? false : undefined;
      const services = await storage.getServices(published);
      res.json(services);
    } catch (error) {
      console.error("Get services error:", error);
      res.status(500).json({ error: "Failed to fetch services" });
    }
  });

  // Get single service (public)
  app.get("/api/services/:id", async (req, res) => {
    try {
      const service = await storage.getService(parseInt(req.params.id));
      if (!service) {
        return res.status(404).json({ error: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      console.error("Get service error:", error);
      res.status(500).json({ error: "Failed to fetch service" });
    }
  });

  // Create service (admin only)
  app.post("/api/services", requireAdmin, async (req, res) => {
    try {
      const service = await storage.createService(req.body);
      res.status(201).json(service);
    } catch (error) {
      console.error("Create service error:", error);
      res.status(500).json({ error: "Failed to create service" });
    }
  });

  // Update service (admin only)
  app.patch("/api/services/:id", requireAdmin, async (req, res) => {
    try {
      const service = await storage.updateService(parseInt(req.params.id), req.body);
      if (!service) {
        return res.status(404).json({ error: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      console.error("Update service error:", error);
      res.status(500).json({ error: "Failed to update service" });
    }
  });

  // Delete service (admin only)
  app.delete("/api/services/:id", requireAdmin, async (req, res) => {
    try {
      const success = await storage.deleteService(parseInt(req.params.id));
      if (!success) {
        return res.status(404).json({ error: "Service not found" });
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Delete service error:", error);
      res.status(500).json({ error: "Failed to delete service" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
