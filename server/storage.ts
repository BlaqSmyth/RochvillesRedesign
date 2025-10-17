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
  type PayrollPackage,
  type InsertPayrollPackage,
  type BusinessType,
  type InsertBusinessType,
  type PricingTier,
  type InsertPricingTier,
  type AdditionalService,
  type InsertAdditionalService,
  adminUsers,
  articles,
  testimonials,
  services,
  siteSettings,
  users,
  payrollPackages,
  businessTypes,
  pricingTiers,
  additionalServices,
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

  // Payroll Package methods
  getPayrollPackages(published?: boolean): Promise<PayrollPackage[]>;
  getPayrollPackage(id: number): Promise<PayrollPackage | undefined>;
  createPayrollPackage(pkg: InsertPayrollPackage): Promise<PayrollPackage>;
  updatePayrollPackage(id: number, pkg: Partial<InsertPayrollPackage>): Promise<PayrollPackage | undefined>;
  deletePayrollPackage(id: number): Promise<boolean>;

  // Business Type methods
  getBusinessTypes(published?: boolean): Promise<BusinessType[]>;
  getBusinessType(id: number): Promise<BusinessType | undefined>;
  createBusinessType(type: InsertBusinessType): Promise<BusinessType>;
  updateBusinessType(id: number, type: Partial<InsertBusinessType>): Promise<BusinessType | undefined>;
  deleteBusinessType(id: number): Promise<boolean>;

  // Pricing Tier methods
  getPricingTiers(businessTypeId?: number): Promise<PricingTier[]>;
  getPricingTier(id: number): Promise<PricingTier | undefined>;
  createPricingTier(tier: InsertPricingTier): Promise<PricingTier>;
  updatePricingTier(id: number, tier: Partial<InsertPricingTier>): Promise<PricingTier | undefined>;
  deletePricingTier(id: number): Promise<boolean>;

  // Additional Service methods
  getAdditionalServices(published?: boolean): Promise<AdditionalService[]>;
  getAdditionalService(id: number): Promise<AdditionalService | undefined>;
  createAdditionalService(service: InsertAdditionalService): Promise<AdditionalService>;
  updateAdditionalService(id: number, service: Partial<InsertAdditionalService>): Promise<AdditionalService | undefined>;
  deleteAdditionalService(id: number): Promise<boolean>;
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

  // Payroll Package methods
  async getPayrollPackages(published?: boolean): Promise<PayrollPackage[]> {
    if (published !== undefined) {
      return await db
        .select()
        .from(payrollPackages)
        .where(eq(payrollPackages.published, published))
        .orderBy(payrollPackages.displayOrder);
    }
    return await db.select().from(payrollPackages).orderBy(payrollPackages.displayOrder);
  }

  async getPayrollPackage(id: number): Promise<PayrollPackage | undefined> {
    const [pkg] = await db.select().from(payrollPackages).where(eq(payrollPackages.id, id));
    return pkg || undefined;
  }

  async createPayrollPackage(insertPkg: InsertPayrollPackage): Promise<PayrollPackage> {
    const [pkg] = await db
      .insert(payrollPackages)
      .values(insertPkg)
      .returning();
    return pkg;
  }

  async updatePayrollPackage(id: number, updateData: Partial<InsertPayrollPackage>): Promise<PayrollPackage | undefined> {
    const [pkg] = await db
      .update(payrollPackages)
      .set(updateData)
      .where(eq(payrollPackages.id, id))
      .returning();
    return pkg || undefined;
  }

  async deletePayrollPackage(id: number): Promise<boolean> {
    const result = await db.delete(payrollPackages).where(eq(payrollPackages.id, id));
    return result.rowCount ? result.rowCount > 0 : false;
  }

  // Business Type methods
  async getBusinessTypes(published?: boolean): Promise<BusinessType[]> {
    if (published !== undefined) {
      return await db
        .select()
        .from(businessTypes)
        .where(eq(businessTypes.published, published))
        .orderBy(businessTypes.displayOrder);
    }
    return await db.select().from(businessTypes).orderBy(businessTypes.displayOrder);
  }

  async getBusinessType(id: number): Promise<BusinessType | undefined> {
    const [type] = await db.select().from(businessTypes).where(eq(businessTypes.id, id));
    return type || undefined;
  }

  async createBusinessType(insertType: InsertBusinessType): Promise<BusinessType> {
    const [type] = await db
      .insert(businessTypes)
      .values(insertType)
      .returning();
    return type;
  }

  async updateBusinessType(id: number, updateData: Partial<InsertBusinessType>): Promise<BusinessType | undefined> {
    const [type] = await db
      .update(businessTypes)
      .set(updateData)
      .where(eq(businessTypes.id, id))
      .returning();
    return type || undefined;
  }

  async deleteBusinessType(id: number): Promise<boolean> {
    const result = await db.delete(businessTypes).where(eq(businessTypes.id, id));
    return result.rowCount ? result.rowCount > 0 : false;
  }

  // Pricing Tier methods
  async getPricingTiers(businessTypeId?: number): Promise<PricingTier[]> {
    if (businessTypeId !== undefined) {
      return await db
        .select()
        .from(pricingTiers)
        .where(eq(pricingTiers.businessTypeId, businessTypeId))
        .orderBy(pricingTiers.displayOrder);
    }
    return await db.select().from(pricingTiers).orderBy(pricingTiers.displayOrder);
  }

  async getPricingTier(id: number): Promise<PricingTier | undefined> {
    const [tier] = await db.select().from(pricingTiers).where(eq(pricingTiers.id, id));
    return tier || undefined;
  }

  async createPricingTier(insertTier: InsertPricingTier): Promise<PricingTier> {
    const [tier] = await db
      .insert(pricingTiers)
      .values(insertTier)
      .returning();
    return tier;
  }

  async updatePricingTier(id: number, updateData: Partial<InsertPricingTier>): Promise<PricingTier | undefined> {
    const [tier] = await db
      .update(pricingTiers)
      .set(updateData)
      .where(eq(pricingTiers.id, id))
      .returning();
    return tier || undefined;
  }

  async deletePricingTier(id: number): Promise<boolean> {
    const result = await db.delete(pricingTiers).where(eq(pricingTiers.id, id));
    return result.rowCount ? result.rowCount > 0 : false;
  }

  // Additional Service methods
  async getAdditionalServices(published?: boolean): Promise<AdditionalService[]> {
    if (published !== undefined) {
      return await db
        .select()
        .from(additionalServices)
        .where(eq(additionalServices.published, published))
        .orderBy(additionalServices.displayOrder);
    }
    return await db.select().from(additionalServices).orderBy(additionalServices.displayOrder);
  }

  async getAdditionalService(id: number): Promise<AdditionalService | undefined> {
    const [service] = await db.select().from(additionalServices).where(eq(additionalServices.id, id));
    return service || undefined;
  }

  async createAdditionalService(insertService: InsertAdditionalService): Promise<AdditionalService> {
    const [service] = await db
      .insert(additionalServices)
      .values(insertService)
      .returning();
    return service;
  }

  async updateAdditionalService(id: number, updateData: Partial<InsertAdditionalService>): Promise<AdditionalService | undefined> {
    const [service] = await db
      .update(additionalServices)
      .set(updateData)
      .where(eq(additionalServices.id, id))
      .returning();
    return service || undefined;
  }

  async deleteAdditionalService(id: number): Promise<boolean> {
    const result = await db.delete(additionalServices).where(eq(additionalServices.id, id));
    return result.rowCount ? result.rowCount > 0 : false;
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
