import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

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

  const httpServer = createServer(app);

  return httpServer;
}
