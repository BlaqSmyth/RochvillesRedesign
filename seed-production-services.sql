-- Seed Production Database with All Services
-- Run this in Supabase SQL Editor for your production database

-- Clear existing services first (optional - remove these 2 lines if you want to keep existing data)
TRUNCATE services CASCADE;
ALTER SEQUENCE services_id_seq RESTART WITH 1;

-- Insert Core Services (6 services)
INSERT INTO services (name, category, description, features, published) VALUES
('Accountancy Services', 'Core Services', 'Comprehensive accounting solutions for businesses of all sizes', ARRAY['Financial statements', 'Tax returns', 'VAT submissions', 'Payroll services'], true),
('Corporation Tax', 'Core Services', 'Expert corporation tax planning and compliance services', ARRAY['Tax planning', 'Corporation tax returns', 'Tax relief optimization', 'HMRC compliance'], true),
('Mergers & Acquisitions', 'Core Services', 'Professional M&A advisory and due diligence services', ARRAY['Business valuation', 'Due diligence', 'Deal structuring', 'Post-merger integration'], true),
('Fund Raising', 'Core Services', 'Assistance with raising capital for business growth', ARRAY['Investor relations', 'Funding proposals', 'Venture capital connections', 'Financial modeling'], true),
('Company Formation', 'Core Services', 'Complete company registration and setup services', ARRAY['Company registration', 'Legal compliance', 'Share structure', 'Director appointments'], true),
('Personal Tax', 'Core Services', 'Personal tax planning and return preparation', ARRAY['Self-assessment', 'Tax planning', 'Capital gains tax', 'Inheritance tax'], true);

-- Insert Specialist Services (12 services)
INSERT INTO services (name, category, description, features, published) VALUES
('Payroll Bureau', 'Specialist Services', 'Comprehensive payroll management services', ARRAY['Payroll processing', 'PAYE submissions', 'Pension administration', 'RTI compliance'], true),
('Bookkeeping', 'Specialist Services', 'Professional bookkeeping and financial record management', ARRAY['Transaction recording', 'Bank reconciliation', 'Accounts payable/receivable', 'Financial reports'], true),
('Commercial Loan Brokerage', 'Specialist Services', 'Commercial finance and loan arrangement services', ARRAY['Loan sourcing', 'Application support', 'Lender negotiations', 'Rate comparisons'], true),
('Bridging Finance', 'Specialist Services', 'Short-term bridging loan solutions', ARRAY['Fast approval', 'Property purchase', 'Auction finance', 'Development funding'], true),
('Business Start Up', 'Specialist Services', 'Complete business startup support and guidance', ARRAY['Business planning', 'Structure advice', 'Registration assistance', 'Initial accounting setup'], true),
('VAT and Capital Gains Tax', 'Specialist Services', 'VAT registration, returns, and capital gains planning', ARRAY['VAT registration', 'Quarterly returns', 'CGT calculations', 'Tax optimization'], true),
('Due Diligence', 'Specialist Services', 'Thorough financial and business due diligence', ARRAY['Financial analysis', 'Risk assessment', 'Compliance review', 'Detailed reporting'], true),
('Cash Flow Forecasting', 'Specialist Services', 'Cash flow analysis and forecasting services', ARRAY['Cash flow projections', 'Working capital analysis', 'Scenario planning', 'Financial modeling'], true),
('Interim Management Accounts', 'Specialist Services', 'Regular management accounts and financial reporting', ARRAY['Monthly accounts', 'KPI tracking', 'Budget variance analysis', 'Board reports'], true),
('Directors P11D & Dividends', 'Specialist Services', 'Director benefits and dividend administration', ARRAY['P11D preparation', 'Dividend planning', 'Tax efficient remuneration', 'Benefit optimization'], true),
('CIS Services', 'Specialist Services', 'Construction Industry Scheme compliance services', ARRAY['CIS registration', 'Monthly returns', 'Subcontractor verification', 'Tax deduction management'], true),
('Struck Off Company Restorations', 'Specialist Services', 'Company restoration and reinstatement services', ARRAY['Application preparation', 'Companies House liaison', 'Legal documentation', 'Fast-track processing'], true);

-- Insert Additional Services (8 services)
INSERT INTO services (name, category, description, features, published) VALUES
('Secretarial Services', 'Additional Services', 'Company secretarial and compliance services', ARRAY['Annual returns', 'Statutory registers', 'Board minutes', 'Compliance monitoring'], true),
('Registered Office Address', 'Additional Services', 'Professional registered office address service', ARRAY['UK business address', 'Mail forwarding', 'Legal compliance', 'Professional image'], true),
('Corporate Finance', 'Additional Services', 'Strategic corporate finance advisory', ARRAY['M&A advisory', 'Capital raising', 'Restructuring', 'Exit strategies'], true),
('Insurance', 'Additional Services', 'Business and professional insurance solutions', ARRAY['Professional indemnity', 'Business insurance', 'Risk assessment', 'Claims support'], true),
('Umbrella Company Services', 'Additional Services', 'Comprehensive umbrella company solutions for contractors', ARRAY['PAYE processing', 'Expense claims', 'Tax compliance', 'IR35 protection'], true),
('Agency Workers Payroll', 'Additional Services', 'Specialized payroll for agency workers', ARRAY['Weekly/monthly payroll', 'AWR compliance', 'Holiday pay', 'Pension administration'], true),
('IT Contractors Payroll & Umbrella', 'Additional Services', 'Tailored services for IT contractors', ARRAY['Limited company support', 'Umbrella services', 'IR35 assessments', 'Tax optimization'], true),
('NHS & Public Sector Umbrella', 'Additional Services', 'Specialist umbrella services for NHS and public sector workers', ARRAY['Public sector compliance', 'IR35 protection', 'Pension support', 'Quick onboarding'], true);

-- Verify insertion
SELECT category, COUNT(*) as count 
FROM services 
WHERE published = true 
GROUP BY category 
ORDER BY category;
