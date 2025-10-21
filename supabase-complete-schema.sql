-- ========================================
-- ROCHVILLES & CO. ACCOUNTANTS - COMPLETE DATABASE SCHEMA
-- Run this in Supabase SQL Editor
-- ========================================

-- Drop existing tables if they exist (be careful!)
DROP TABLE IF EXISTS quote_requests CASCADE;
DROP TABLE IF EXISTS pricing_tiers CASCADE;
DROP TABLE IF EXISTS additional_services CASCADE;
DROP TABLE IF EXISTS business_types CASCADE;
DROP TABLE IF EXISTS payroll_packages CASCADE;
DROP TABLE IF EXISTS site_settings CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS testimonials CASCADE;
DROP TABLE IF EXISTS articles CASCADE;
DROP TABLE IF EXISTS admin_users CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- ========================================
-- 1. ADMIN USERS (for CMS authentication)
-- ========================================
CREATE TABLE admin_users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- ========================================
-- 2. ARTICLES (Tax Tips / Blog)
-- ========================================
CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  full_content TEXT NOT NULL,
  read_time TEXT NOT NULL,
  published BOOLEAN DEFAULT TRUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- ========================================
-- 3. TESTIMONIALS
-- ========================================
CREATE TABLE testimonials (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5 NOT NULL,
  published BOOLEAN DEFAULT TRUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- ========================================
-- 4. SERVICES
-- ========================================
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  price TEXT NOT NULL,
  features TEXT[] NOT NULL,
  popular BOOLEAN DEFAULT FALSE NOT NULL,
  published BOOLEAN DEFAULT TRUE NOT NULL,
  display_order INTEGER DEFAULT 0 NOT NULL
);

-- ========================================
-- 5. SITE SETTINGS
-- ========================================
CREATE TABLE site_settings (
  id SERIAL PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  category TEXT NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- ========================================
-- 6. USERS (Legacy - kept for compatibility)
-- ========================================
CREATE TABLE users (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

-- ========================================
-- 7. PAYROLL PACKAGES
-- ========================================
CREATE TABLE payroll_packages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  employee_range TEXT NOT NULL,
  price TEXT NOT NULL,
  features TEXT[] NOT NULL,
  display_order INTEGER DEFAULT 0 NOT NULL,
  published BOOLEAN DEFAULT TRUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- ========================================
-- 8. BUSINESS TYPES
-- ========================================
CREATE TABLE business_types (
  id SERIAL PRIMARY KEY,
  type TEXT NOT NULL,
  icon TEXT NOT NULL,
  popular BOOLEAN DEFAULT FALSE NOT NULL,
  display_order INTEGER DEFAULT 0 NOT NULL,
  published BOOLEAN DEFAULT TRUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- ========================================
-- 9. PRICING TIERS (with foreign key to business_types)
-- ========================================
CREATE TABLE pricing_tiers (
  id SERIAL PRIMARY KEY,
  business_type_id INTEGER NOT NULL REFERENCES business_types(id) ON DELETE CASCADE,
  turnover TEXT NOT NULL,
  price TEXT NOT NULL,
  display_order INTEGER DEFAULT 0 NOT NULL
);

-- ========================================
-- 10. ADDITIONAL SERVICES
-- ========================================
CREATE TABLE additional_services (
  id SERIAL PRIMARY KEY,
  service_name TEXT NOT NULL,
  price TEXT NOT NULL,
  period TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  display_order INTEGER DEFAULT 0 NOT NULL,
  published BOOLEAN DEFAULT TRUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- ========================================
-- 11. QUOTE REQUESTS
-- ========================================
CREATE TABLE quote_requests (
  id SERIAL PRIMARY KEY,
  -- Business details
  business_type_id INTEGER NOT NULL REFERENCES business_types(id),
  business_type_name TEXT NOT NULL,
  turnover TEXT NOT NULL,
  employee_count INTEGER DEFAULT 0 NOT NULL,
  
  -- Selected services
  payroll_package_id INTEGER REFERENCES payroll_packages(id),
  payroll_package_name TEXT,
  additional_service_ids TEXT[] DEFAULT '{}' NOT NULL,
  additional_service_names TEXT[] DEFAULT '{}' NOT NULL,
  
  -- Calculated pricing
  base_price TEXT NOT NULL,
  payroll_price TEXT DEFAULT '0' NOT NULL,
  additional_services_total TEXT DEFAULT '0' NOT NULL,
  subtotal TEXT NOT NULL,
  vat_amount TEXT NOT NULL,
  grand_total TEXT NOT NULL,
  
  -- Contact information
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT,
  
  -- Status tracking
  status TEXT DEFAULT 'new' NOT NULL,
  admin_notes TEXT,
  
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- ========================================
-- SEED DATA
-- ========================================

-- Insert Business Types
INSERT INTO business_types (type, icon, popular, display_order, published) VALUES
('Sole Trader', 'Briefcase', true, 1, true),
('Limited Company', 'Building2', true, 2, true),
('Partnership', 'Users', false, 3, true),
('LLP', 'Network', false, 4, true);

-- Insert Pricing Tiers (9 tiers for each business type - up to £5M)
-- Sole Trader Pricing
INSERT INTO pricing_tiers (business_type_id, turnover, price, display_order) VALUES
(1, 'Up to £15,000', '£50', 1),
(1, '£15,001 - £30,000', '£75', 2),
(1, '£30,001 - £60,000', '£100', 3),
(1, '£60,001 - £85,000', '£150', 4),
(1, '£85,001 - £150,000', '£200', 5),
(1, '£150,001 - £500,000', '£300', 6),
(1, '£500,001 - £1,000,000', '£450', 7),
(1, '£1,000,001 - £3,000,000', '£700', 8),
(1, '£3,000,001 - £5,000,000', '£1,000', 9);

-- Limited Company Pricing
INSERT INTO pricing_tiers (business_type_id, turnover, price, display_order) VALUES
(2, 'Up to £15,000', '£75', 1),
(2, '£15,001 - £30,000', '£100', 2),
(2, '£30,001 - £60,000', '£150', 3),
(2, '£60,001 - £85,000', '£200', 4),
(2, '£85,001 - £150,000', '£300', 5),
(2, '£150,001 - £500,000', '£450', 6),
(2, '£500,001 - £1,000,000', '£700', 7),
(2, '£1,000,001 - £3,000,000', '£1,100', 8),
(2, '£3,000,001 - £5,000,000', '£1,500', 9);

-- Partnership Pricing
INSERT INTO pricing_tiers (business_type_id, turnover, price, display_order) VALUES
(3, 'Up to £15,000', '£100', 1),
(3, '£15,001 - £30,000', '£150', 2),
(3, '£30,001 - £60,000', '£200', 3),
(3, '£60,001 - £85,000', '£250', 4),
(3, '£85,001 - £150,000', '£350', 5),
(3, '£150,001 - £500,000', '£500', 6),
(3, '£500,001 - £1,000,000', '£750', 7),
(3, '£1,000,001 - £3,000,000', '£1,200', 8),
(3, '£3,000,001 - £5,000,000', '£1,700', 9);

-- LLP Pricing
INSERT INTO pricing_tiers (business_type_id, turnover, price, display_order) VALUES
(4, 'Up to £15,000', '£100', 1),
(4, '£15,001 - £30,000', '£150', 2),
(4, '£30,001 - £60,000', '£200', 3),
(4, '£60,001 - £85,000', '£250', 4),
(4, '£85,001 - £150,000', '£350', 5),
(4, '£150,001 - £500,000', '£500', 6),
(4, '£500,001 - £1,000,000', '£750', 7),
(4, '£1,000,001 - £3,000,000', '£1,200', 8),
(4, '£3,000,001 - £5,000,000', '£1,700', 9);

-- Insert Payroll Packages
INSERT INTO payroll_packages (name, employee_range, price, features, display_order, published) VALUES
('Small Payroll', '1-5 employees', '£25', ARRAY['Monthly payroll processing', 'RTI submissions', 'Payslips generation', 'P60 year-end processing'], 1, true),
('Medium Payroll', '6-15 employees', '£50', ARRAY['Monthly payroll processing', 'RTI submissions', 'Payslips generation', 'P60 year-end processing', 'Pension auto-enrolment'], 2, true),
('Large Payroll', '16-30 employees', '£100', ARRAY['Monthly payroll processing', 'RTI submissions', 'Payslips generation', 'P60 year-end processing', 'Pension auto-enrolment', 'Dedicated support'], 3, true),
('Enterprise Payroll', '30+ employees', 'Custom', ARRAY['Monthly payroll processing', 'RTI submissions', 'Payslips generation', 'P60 year-end processing', 'Pension auto-enrolment', 'Dedicated account manager', 'Priority support'], 4, true);

-- Insert Additional Services
INSERT INTO additional_services (service_name, price, period, description, icon, display_order, published) VALUES
('New Business Setup', '£150', 'one-time', 'Complete company registration and setup assistance', 'Rocket', 1, true),
('VAT Registration', '£100', 'one-time', 'VAT registration with HMRC and compliance guidance', 'FileText', 2, true),
('Management Accounts', '£150', 'monthly', 'Monthly financial reporting and analysis', 'BarChart3', 3, true),
('Tax Planning', '£200', 'annual', 'Strategic tax planning and optimization', 'Calculator', 4, true),
('CIS Returns', '£50', 'monthly', 'Construction Industry Scheme returns', 'HardHat', 5, true),
('Bookkeeping', '£100', 'monthly', 'Full bookkeeping service with monthly reconciliation', 'BookOpen', 6, true),
('Year-End Accounts', '£300', 'annual', 'Preparation and filing of annual accounts', 'Calendar', 7, true),
('Corporation Tax', '£200', 'annual', 'Corporation tax computation and filing', 'Building2', 8, true),
('Self Assessment', '£150', 'annual', 'Personal tax return preparation and submission', 'User', 9, true),
('Confirmation Statement', '£50', 'annual', 'Companies House confirmation statement filing', 'CheckCircle', 10, true);

-- Insert Sample Testimonials
INSERT INTO testimonials (name, company, role, content, rating, published) VALUES
('Olagoke Sokoya', 'Tech Startup Ltd', 'Founder & CEO', 'Rochvilles has been instrumental in helping us navigate complex tax regulations. Their expertise saved us thousands in the first year alone.', 5, true),
('Sarah Mitchell', 'Mitchell & Associates', 'Managing Partner', 'Professional, responsive, and incredibly knowledgeable. The team at Rochvilles goes above and beyond for their clients.', 5, true),
('David Thompson', 'Thompson Consulting', 'Director', 'I have been working with Rochvilles for 5 years. Their attention to detail and proactive approach is exceptional.', 5, true),
('Emily Chen', 'Chen Enterprises', 'Owner', 'Switching to Rochvilles was the best decision for my business. They handle everything seamlessly.', 5, true),
('James Peterson', 'Peterson & Co', 'Financial Controller', 'Outstanding service and expert advice. Highly recommend for any business looking for reliable accounting support.', 5, true);

-- Insert Sample Articles
INSERT INTO articles (title, category, excerpt, full_content, read_time, published) VALUES
('Understanding Making Tax Digital (MTD)', 'Tax Tips', 'Learn how Making Tax Digital affects your business and how to prepare for the transition to digital record-keeping.', 'Making Tax Digital (MTD) is a key part of the government''s plans to make it easier for individuals and businesses to get their tax right and keep on top of their affairs. This comprehensive guide will help you understand what MTD means for your business...', '5 min read', true),
('VAT Registration: When and Why', 'Business Advice', 'Discover the benefits of voluntary VAT registration and when your business is required to register for VAT.', 'VAT registration is mandatory once your taxable turnover exceeds £85,000. However, there are several benefits to voluntary registration...', '4 min read', true),
('Year-End Tax Planning Strategies', 'Tax Tips', 'Maximize your tax efficiency with these proven year-end planning strategies for UK businesses.', 'As the tax year draws to a close, it''s crucial to review your financial position and identify opportunities to minimize your tax liability...', '6 min read', true);

-- Success message
SELECT 'Database schema created successfully!' AS status;
