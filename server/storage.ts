import { 
  type User, 
  type InsertUser, 
  type ContactSubmission, 
  type InsertContact,
  type AdminUser,
  type InsertAdminUser,
  type Article,
  type InsertArticle,
  type Testimonial,
  type InsertTestimonial,
  type Service,
  type InsertService,
  type SiteSetting,
  type InsertSiteSetting,
  adminUsers,
  articles,
  testimonials,
  services,
  siteSettings,
  users,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // Original user methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form methods
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmission(id: string): Promise<ContactSubmission | undefined>;

  // Admin User methods
  getAdminUser(id: number): Promise<AdminUser | undefined>;
  getAdminUserByUsername(username: string): Promise<AdminUser | undefined>;
  getAdminUserByEmail(email: string): Promise<AdminUser | undefined>;
  createAdminUser(user: InsertAdminUser): Promise<AdminUser>;

  // Article methods
  getArticles(published?: boolean): Promise<Article[]>;
  getArticle(id: number): Promise<Article | undefined>;
  createArticle(article: InsertArticle): Promise<Article>;
  updateArticle(id: number, article: Partial<InsertArticle>): Promise<Article | undefined>;
  deleteArticle(id: number): Promise<boolean>;

  // Testimonial methods
  getTestimonials(published?: boolean): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>): Promise<Testimonial | undefined>;
  deleteTestimonial(id: number): Promise<boolean>;

  // Service methods
  getServices(published?: boolean): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  updateService(id: number, service: Partial<InsertService>): Promise<Service | undefined>;
  deleteService(id: number): Promise<boolean>;

  // Site Settings methods
  getSiteSettings(category?: string): Promise<SiteSetting[]>;
  getSiteSetting(key: string): Promise<SiteSetting | undefined>;
  upsertSiteSetting(setting: InsertSiteSetting): Promise<SiteSetting>;
}

export class DatabaseStorage implements IStorage {
  // Admin User methods
  async getAdminUser(id: number): Promise<AdminUser | undefined> {
    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.id, id));
    return user || undefined;
  }

  async getAdminUserByUsername(username: string): Promise<AdminUser | undefined> {
    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.username, username));
    return user || undefined;
  }

  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.email, email));
    return user || undefined;
  }

  async createAdminUser(insertUser: InsertAdminUser): Promise<AdminUser> {
    const [user] = await db
      .insert(adminUsers)
      .values(insertUser)
      .returning();
    return user;
  }

  // Article methods
  async getArticles(published?: boolean): Promise<Article[]> {
    if (published !== undefined) {
      return await db
        .select()
        .from(articles)
        .where(eq(articles.published, published))
        .orderBy(desc(articles.createdAt));
    }
    return await db.select().from(articles).orderBy(desc(articles.createdAt));
  }

  async getArticle(id: number): Promise<Article | undefined> {
    const [article] = await db.select().from(articles).where(eq(articles.id, id));
    return article || undefined;
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const [article] = await db
      .insert(articles)
      .values(insertArticle)
      .returning();
    return article;
  }

  async updateArticle(id: number, updateData: Partial<InsertArticle>): Promise<Article | undefined> {
    const [article] = await db
      .update(articles)
      .set({ ...updateData, updatedAt: new Date() })
      .where(eq(articles.id, id))
      .returning();
    return article || undefined;
  }

  async deleteArticle(id: number): Promise<boolean> {
    const result = await db.delete(articles).where(eq(articles.id, id));
    return result.rowCount ? result.rowCount > 0 : false;
  }

  // Testimonial methods
  async getTestimonials(published?: boolean): Promise<Testimonial[]> {
    if (published !== undefined) {
      return await db
        .select()
        .from(testimonials)
        .where(eq(testimonials.published, published))
        .orderBy(desc(testimonials.createdAt));
    }
    return await db.select().from(testimonials).orderBy(desc(testimonials.createdAt));
  }

  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    const [testimonial] = await db.select().from(testimonials).where(eq(testimonials.id, id));
    return testimonial || undefined;
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const [testimonial] = await db
      .insert(testimonials)
      .values(insertTestimonial)
      .returning();
    return testimonial;
  }

  async updateTestimonial(id: number, updateData: Partial<InsertTestimonial>): Promise<Testimonial | undefined> {
    const [testimonial] = await db
      .update(testimonials)
      .set(updateData)
      .where(eq(testimonials.id, id))
      .returning();
    return testimonial || undefined;
  }

  async deleteTestimonial(id: number): Promise<boolean> {
    const result = await db.delete(testimonials).where(eq(testimonials.id, id));
    return result.rowCount ? result.rowCount > 0 : false;
  }

  // Service methods
  async getServices(published?: boolean): Promise<Service[]> {
    if (published !== undefined) {
      return await db
        .select()
        .from(services)
        .where(eq(services.published, published))
        .orderBy(services.displayOrder);
    }
    return await db.select().from(services).orderBy(services.displayOrder);
  }

  async getService(id: number): Promise<Service | undefined> {
    const [service] = await db.select().from(services).where(eq(services.id, id));
    return service || undefined;
  }

  async createService(insertService: InsertService): Promise<Service> {
    const [service] = await db
      .insert(services)
      .values(insertService)
      .returning();
    return service;
  }

  async updateService(id: number, updateData: Partial<InsertService>): Promise<Service | undefined> {
    const [service] = await db
      .update(services)
      .set(updateData)
      .where(eq(services.id, id))
      .returning();
    return service || undefined;
  }

  async deleteService(id: number): Promise<boolean> {
    const result = await db.delete(services).where(eq(services.id, id));
    return result.rowCount ? result.rowCount > 0 : false;
  }

  // Site Settings methods
  async getSiteSettings(category?: string): Promise<SiteSetting[]> {
    if (category) {
      return await db
        .select()
        .from(siteSettings)
        .where(eq(siteSettings.category, category));
    }
    return await db.select().from(siteSettings);
  }

  async getSiteSetting(key: string): Promise<SiteSetting | undefined> {
    const [setting] = await db.select().from(siteSettings).where(eq(siteSettings.key, key));
    return setting || undefined;
  }

  async upsertSiteSetting(insertSetting: InsertSiteSetting): Promise<SiteSetting> {
    const existing = await this.getSiteSetting(insertSetting.key);
    
    if (existing) {
      const [updated] = await db
        .update(siteSettings)
        .set({ ...insertSetting, updatedAt: new Date() })
        .where(eq(siteSettings.key, insertSetting.key))
        .returning();
      return updated;
    }
    
    const [created] = await db
      .insert(siteSettings)
      .values(insertSetting)
      .returning();
    return created;
  }

  // Original user methods (kept for compatibility)
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Contact form methods (kept as placeholder - needs proper table implementation)
  async createContactSubmission(contact: InsertContact): Promise<ContactSubmission> {
    // This would need a proper table implementation
    const submission: ContactSubmission = {
      ...contact,
      id: crypto.randomUUID(),
      submittedAt: new Date().toISOString(),
      status: "new",
    };
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return [];
  }

  async getContactSubmission(id: string): Promise<ContactSubmission | undefined> {
    return undefined;
  }
}

export const storage = new DatabaseStorage();
