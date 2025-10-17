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

  // ========== PAYROLL PACKAGES ROUTES ==========
  
  // Get all payroll packages (public - can filter by published)
  app.get("/api/payroll-packages", async (req, res) => {
    try {
      const published = req.query.published === 'true' ? true : 
                       req.query.published === 'false' ? false : undefined;
      const packages = await storage.getPayrollPackages(published);
      res.json(packages);
    } catch (error) {
      console.error("Get payroll packages error:", error);
      res.status(500).json({ error: "Failed to fetch payroll packages" });
    }
  });

  // Get single payroll package (public)
  app.get("/api/payroll-packages/:id", async (req, res) => {
    try {
      const pkg = await storage.getPayrollPackage(parseInt(req.params.id));
      if (!pkg) {
        return res.status(404).json({ error: "Payroll package not found" });
      }
      res.json(pkg);
    } catch (error) {
      console.error("Get payroll package error:", error);
      res.status(500).json({ error: "Failed to fetch payroll package" });
    }
  });

  // Get all payroll packages for admin (includes unpublished)
  app.get("/api/admin/payroll-packages", requireAdmin, async (req, res) => {
    try {
      const packages = await storage.getPayrollPackages(); // Get all, including unpublished
      res.json(packages);
    } catch (error) {
      console.error("Get admin payroll packages error:", error);
      res.status(500).json({ error: "Failed to fetch payroll packages" });
    }
  });

  // Create payroll package (admin only)
  app.post("/api/admin/payroll-packages", requireAdmin, async (req, res) => {
    try {
      const pkg = await storage.createPayrollPackage(req.body);
      res.status(201).json(pkg);
    } catch (error) {
      console.error("Create payroll package error:", error);
      res.status(500).json({ error: "Failed to create payroll package" });
    }
  });

  // Update payroll package (admin only)
  app.patch("/api/admin/payroll-packages/:id", requireAdmin, async (req, res) => {
    try {
      const pkg = await storage.updatePayrollPackage(parseInt(req.params.id), req.body);
      if (!pkg) {
        return res.status(404).json({ error: "Payroll package not found" });
      }
      res.json(pkg);
    } catch (error) {
      console.error("Update payroll package error:", error);
      res.status(500).json({ error: "Failed to update payroll package" });
    }
  });

  // Delete payroll package (admin only)
  app.delete("/api/admin/payroll-packages/:id", requireAdmin, async (req, res) => {
    try {
      const success = await storage.deletePayrollPackage(parseInt(req.params.id));
      if (!success) {
        return res.status(404).json({ error: "Payroll package not found" });
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Delete payroll package error:", error);
      res.status(500).json({ error: "Failed to delete payroll package" });
    }
  });

  // ========== BUSINESS TYPES ROUTES ==========
  
  // Get all business types (public - can filter by published)
  app.get("/api/business-types", async (req, res) => {
    try {
      const published = req.query.published === 'true' ? true : 
                       req.query.published === 'false' ? false : undefined;
      const types = await storage.getBusinessTypes(published);
      res.json(types);
    } catch (error) {
      console.error("Get business types error:", error);
      res.status(500).json({ error: "Failed to fetch business types" });
    }
  });

  // Get single business type (public)
  app.get("/api/business-types/:id", async (req, res) => {
    try {
      const type = await storage.getBusinessType(parseInt(req.params.id));
      if (!type) {
        return res.status(404).json({ error: "Business type not found" });
      }
      res.json(type);
    } catch (error) {
      console.error("Get business type error:", error);
      res.status(500).json({ error: "Failed to fetch business type" });
    }
  });

  // Get all business types for admin (includes unpublished)
  app.get("/api/admin/business-types", requireAdmin, async (req, res) => {
    try {
      const types = await storage.getBusinessTypes(); // Get all, including unpublished
      res.json(types);
    } catch (error) {
      console.error("Get admin business types error:", error);
      res.status(500).json({ error: "Failed to fetch business types" });
    }
  });

  // Create business type (admin only)
  app.post("/api/admin/business-types", requireAdmin, async (req, res) => {
    try {
      const type = await storage.createBusinessType(req.body);
      res.status(201).json(type);
    } catch (error) {
      console.error("Create business type error:", error);
      res.status(500).json({ error: "Failed to create business type" });
    }
  });

  // Update business type (admin only)
  app.patch("/api/admin/business-types/:id", requireAdmin, async (req, res) => {
    try {
      const type = await storage.updateBusinessType(parseInt(req.params.id), req.body);
      if (!type) {
        return res.status(404).json({ error: "Business type not found" });
      }
      res.json(type);
    } catch (error) {
      console.error("Update business type error:", error);
      res.status(500).json({ error: "Failed to update business type" });
    }
  });

  // Delete business type (admin only)
  app.delete("/api/admin/business-types/:id", requireAdmin, async (req, res) => {
    try {
      const success = await storage.deleteBusinessType(parseInt(req.params.id));
      if (!success) {
        return res.status(404).json({ error: "Business type not found" });
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Delete business type error:", error);
      res.status(500).json({ error: "Failed to delete business type" });
    }
  });

  // ========== PRICING TIERS ROUTES ==========
  
  // Get all pricing tiers (public - can filter by business type)
  app.get("/api/pricing-tiers", async (req, res) => {
    try {
      const businessTypeId = req.query.businessTypeId ? parseInt(req.query.businessTypeId as string) : undefined;
      const tiers = await storage.getPricingTiers(businessTypeId);
      res.json(tiers);
    } catch (error) {
      console.error("Get pricing tiers error:", error);
      res.status(500).json({ error: "Failed to fetch pricing tiers" });
    }
  });

  // Get single pricing tier (public)
  app.get("/api/pricing-tiers/:id", async (req, res) => {
    try {
      const tier = await storage.getPricingTier(parseInt(req.params.id));
      if (!tier) {
        return res.status(404).json({ error: "Pricing tier not found" });
      }
      res.json(tier);
    } catch (error) {
      console.error("Get pricing tier error:", error);
      res.status(500).json({ error: "Failed to fetch pricing tier" });
    }
  });

  // Get all pricing tiers for admin
  app.get("/api/admin/pricing-tiers", requireAdmin, async (req, res) => {
    try {
      const tiers = await storage.getPricingTiers(); // Get all tiers
      res.json(tiers);
    } catch (error) {
      console.error("Get admin pricing tiers error:", error);
      res.status(500).json({ error: "Failed to fetch pricing tiers" });
    }
  });

  // Create pricing tier (admin only)
  app.post("/api/admin/pricing-tiers", requireAdmin, async (req, res) => {
    try {
      const tier = await storage.createPricingTier(req.body);
      res.status(201).json(tier);
    } catch (error) {
      console.error("Create pricing tier error:", error);
      res.status(500).json({ error: "Failed to create pricing tier" });
    }
  });

  // Update pricing tier (admin only)
  app.patch("/api/admin/pricing-tiers/:id", requireAdmin, async (req, res) => {
    try {
      const tier = await storage.updatePricingTier(parseInt(req.params.id), req.body);
      if (!tier) {
        return res.status(404).json({ error: "Pricing tier not found" });
      }
      res.json(tier);
    } catch (error) {
      console.error("Update pricing tier error:", error);
      res.status(500).json({ error: "Failed to update pricing tier" });
    }
  });

  // Delete pricing tier (admin only)
  app.delete("/api/admin/pricing-tiers/:id", requireAdmin, async (req, res) => {
    try {
      const success = await storage.deletePricingTier(parseInt(req.params.id));
      if (!success) {
        return res.status(404).json({ error: "Pricing tier not found" });
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Delete pricing tier error:", error);
      res.status(500).json({ error: "Failed to delete pricing tier" });
    }
  });

  // ========== ADDITIONAL SERVICES ROUTES ==========
  
  // Get all additional services (public - can filter by published)
  app.get("/api/additional-services", async (req, res) => {
    try {
      const published = req.query.published === 'true' ? true : 
                       req.query.published === 'false' ? false : undefined;
      const services = await storage.getAdditionalServices(published);
      res.json(services);
    } catch (error) {
      console.error("Get additional services error:", error);
      res.status(500).json({ error: "Failed to fetch additional services" });
    }
  });

  // Get single additional service (public)
  app.get("/api/additional-services/:id", async (req, res) => {
    try {
      const service = await storage.getAdditionalService(parseInt(req.params.id));
      if (!service) {
        return res.status(404).json({ error: "Additional service not found" });
      }
      res.json(service);
    } catch (error) {
      console.error("Get additional service error:", error);
      res.status(500).json({ error: "Failed to fetch additional service" });
    }
  });

  // Get all additional services for admin (includes unpublished)
  app.get("/api/admin/additional-services", requireAdmin, async (req, res) => {
    try {
      const services = await storage.getAdditionalServices(); // Get all, including unpublished
      res.json(services);
    } catch (error) {
      console.error("Get admin additional services error:", error);
      res.status(500).json({ error: "Failed to fetch additional services" });
    }
  });

  // Create additional service (admin only)
  app.post("/api/admin/additional-services", requireAdmin, async (req, res) => {
    try {
      const service = await storage.createAdditionalService(req.body);
      res.status(201).json(service);
    } catch (error) {
      console.error("Create additional service error:", error);
      res.status(500).json({ error: "Failed to create additional service" });
    }
  });

  // Update additional service (admin only)
  app.patch("/api/admin/additional-services/:id", requireAdmin, async (req, res) => {
    try {
      const service = await storage.updateAdditionalService(parseInt(req.params.id), req.body);
      if (!service) {
        return res.status(404).json({ error: "Additional service not found" });
      }
      res.json(service);
    } catch (error) {
      console.error("Update additional service error:", error);
      res.status(500).json({ error: "Failed to update additional service" });
    }
  });

  // Delete additional service (admin only)
  app.delete("/api/admin/additional-services/:id", requireAdmin, async (req, res) => {
    try {
      const success = await storage.deleteAdditionalService(parseInt(req.params.id));
      if (!success) {
        return res.status(404).json({ error: "Additional service not found" });
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Delete additional service error:", error);
      res.status(500).json({ error: "Failed to delete additional service" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
