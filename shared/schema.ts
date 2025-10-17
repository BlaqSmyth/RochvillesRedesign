import { sql } from "drizzle-orm";
import { pgTable, text, varchar, serial, timestamp, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Admin Users for CMS Authentication
export const adminUsers = pgTable("admin_users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertAdminUserSchema = createInsertSchema(adminUsers).omit({
  id: true,
  createdAt: true,
});

export type InsertAdminUser = z.infer<typeof insertAdminUserSchema>;
export type AdminUser = typeof adminUsers.$inferSelect;

// Articles/Tax Tips
export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  excerpt: text("excerpt").notNull(),
  fullContent: text("full_content").notNull(),
  readTime: text("read_time").notNull(),
  published: boolean("published").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertArticleSchema = createInsertSchema(articles).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type Article = typeof articles.$inferSelect;

// Testimonials
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company").notNull(),
  role: text("role").notNull(),
  content: text("content").notNull(),
  rating: integer("rating").notNull().default(5),
  published: boolean("published").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
  createdAt: true,
});

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

// Services/Pricing
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(), // e.g., "Bookkeeping", "Tax Services"
  description: text("description").notNull(),
  price: text("price").notNull(), // e.g., "From £150/month"
  features: text("features").array().notNull(),
  popular: boolean("popular").default(false).notNull(),
  published: boolean("published").default(true).notNull(),
  displayOrder: integer("display_order").default(0).notNull(),
});

export const insertServiceSchema = createInsertSchema(services).omit({
  id: true,
});

export type InsertService = z.infer<typeof insertServiceSchema>;
export type Service = typeof services.$inferSelect;

// Site Settings
export const siteSettings = pgTable("site_settings", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(),
  value: text("value").notNull(),
  category: text("category").notNull(), // e.g., "contact", "about", "general"
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertSiteSettingSchema = createInsertSchema(siteSettings).omit({
  id: true,
  updatedAt: true,
});

export type InsertSiteSetting = z.infer<typeof insertSiteSettingSchema>;
export type SiteSetting = typeof siteSettings.$inferSelect;

// Original users table (kept for compatibility)
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Payroll Packages
export const payrollPackages = pgTable("payroll_packages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  employeeRange: text("employee_range").notNull(),
  price: text("price").notNull(),
  features: text("features").array().notNull(),
  displayOrder: integer("display_order").default(0).notNull(),
  published: boolean("published").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertPayrollPackageSchema = createInsertSchema(payrollPackages).omit({
  id: true,
  createdAt: true,
});

export type InsertPayrollPackage = z.infer<typeof insertPayrollPackageSchema>;
export type PayrollPackage = typeof payrollPackages.$inferSelect;

// Business Types (for pricing)
export const businessTypes = pgTable("business_types", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(),
  icon: text("icon").notNull(),
  popular: boolean("popular").default(false).notNull(),
  displayOrder: integer("display_order").default(0).notNull(),
  published: boolean("published").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertBusinessTypeSchema = createInsertSchema(businessTypes).omit({
  id: true,
  createdAt: true,
});

export type InsertBusinessType = z.infer<typeof insertBusinessTypeSchema>;
export type BusinessType = typeof businessTypes.$inferSelect;

// Pricing Tiers (for business types)
export const pricingTiers = pgTable("pricing_tiers", {
  id: serial("id").primaryKey(),
  businessTypeId: integer("business_type_id").notNull().references(() => businessTypes.id, { onDelete: 'cascade' }),
  turnover: text("turnover").notNull(),
  price: text("price").notNull(),
  displayOrder: integer("display_order").default(0).notNull(),
});

export const insertPricingTierSchema = createInsertSchema(pricingTiers).omit({
  id: true,
});

export type InsertPricingTier = z.infer<typeof insertPricingTierSchema>;
export type PricingTier = typeof pricingTiers.$inferSelect;

// Additional Services
export const additionalServices = pgTable("additional_services", {
  id: serial("id").primaryKey(),
  serviceName: text("service_name").notNull(),
  price: text("price").notNull(),
  period: text("period").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  displayOrder: integer("display_order").default(0).notNull(),
  published: boolean("published").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertAdditionalServiceSchema = createInsertSchema(additionalServices).omit({
  id: true,
  createdAt: true,
});

export type InsertAdditionalService = z.infer<typeof insertAdditionalServiceSchema>;
export type AdditionalService = typeof additionalServices.$inferSelect;

// Contact Form Schema
export const contactSubmissions = {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  message: text("message").notNull(),
  submittedAt: text("submitted_at").notNull(),
  status: text("status").notNull().default("new"), // new, read, responded
};

export const insertContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  submittedAt: string;
  status: string;
};

// Quote Requests
export const quoteRequests = pgTable("quote_requests", {
  id: serial("id").primaryKey(),
  // Business details
  businessTypeId: integer("business_type_id").notNull().references(() => businessTypes.id),
  businessTypeName: text("business_type_name").notNull(),
  turnover: text("turnover").notNull(),
  employeeCount: integer("employee_count").default(0).notNull(),
  
  // Selected services
  payrollPackageId: integer("payroll_package_id").references(() => payrollPackages.id),
  payrollPackageName: text("payroll_package_name"),
  additionalServiceIds: text("additional_service_ids").array().default([]).notNull(),
  additionalServiceNames: text("additional_service_names").array().default([]).notNull(),
  
  // Calculated pricing
  basePrice: text("base_price").notNull(), // From pricing tier
  payrollPrice: text("payroll_price").default("0").notNull(),
  additionalServicesTotal: text("additional_services_total").default("0").notNull(),
  subtotal: text("subtotal").notNull(),
  vatAmount: text("vat_amount").notNull(),
  grandTotal: text("grand_total").notNull(),
  
  // Contact information
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  message: text("message"),
  
  // Status tracking
  status: text("status").default("new").notNull(), // new, contacted, converted, lost
  adminNotes: text("admin_notes"),
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertQuoteRequestSchema = createInsertSchema(quoteRequests).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertQuoteRequest = z.infer<typeof insertQuoteRequestSchema>;
export type QuoteRequest = typeof quoteRequests.$inferSelect;
