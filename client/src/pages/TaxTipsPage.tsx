import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Calendar, Clock, TrendingUp, Lightbulb, BookOpen, Sparkles, X } from "lucide-react";
import CTASection from "@/components/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import taxPlanningImage from "@assets/stock_images/tax_planning_financi_1bccad55.jpg";
import taxSavingsImage from "@assets/stock_images/business_tax_savings_ee70625a.jpg";
import taxDeadlineImage from "@assets/stock_images/tax_deadline_calenda_07b5e5be.jpg";
import complianceSuccessImage from "@assets/stock_images/financial_compliance_4dc9f628.jpg";

interface TaxTip {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  category: string;
  fullContent: string;
}

export default function TaxTipsPage() {
  const taxTips: TaxTip[] = [
    {
      title: "Key Tax Deadlines for 2024/25",
      date: "March 2024",
      readTime: "5 min read",
      excerpt: "Stay on top of important tax deadlines to avoid penalties. Self-assessment deadlines, corporation tax payment dates, and VAT return submissions.",
      category: "Compliance",
      fullContent: `
        <h3>Critical Tax Deadlines for 2024/25</h3>
        <p>Missing tax deadlines can result in significant penalties and interest charges. Here are the key dates you need to remember:</p>
        
        <h4>Self-Assessment Tax Returns</h4>
        <ul>
          <li><strong>31st January 2025:</strong> Deadline for online self-assessment tax returns for the 2023/24 tax year</li>
          <li><strong>31st January 2025:</strong> Payment deadline for any tax owed for 2023/24</li>
          <li><strong>31st July 2025:</strong> Second payment on account deadline</li>
        </ul>

        <h4>Corporation Tax</h4>
        <ul>
          <li>Corporation tax is due 9 months and 1 day after your company's accounting period ends</li>
          <li>Company tax returns must be filed within 12 months of the accounting period end</li>
        </ul>

        <h4>VAT Returns</h4>
        <ul>
          <li>Quarterly VAT returns are due one month and 7 days after the end of your VAT period</li>
          <li>Monthly VAT returns (if applicable) are due one month and 7 days after the period end</li>
        </ul>

        <h4>PAYE and Payroll</h4>
        <ul>
          <li><strong>19th of each month:</strong> PAYE payment deadline (22nd if paying electronically)</li>
          <li><strong>19th May 2025:</strong> End of year PAYE submissions deadline</li>
        </ul>

        <p><strong>Pro Tip:</strong> Set up calendar reminders at least two weeks before each deadline to ensure you have enough time to gather necessary documents and make payments.</p>
      `
    },
    {
      title: "Maximizing Tax Relief on Business Expenses",
      date: "February 2024",
      readTime: "7 min read",
      excerpt: "Learn which business expenses qualify for tax relief and how to claim them correctly. From office costs to travel expenses and equipment purchases.",
      category: "Tax Planning",
      fullContent: `
        <h3>Maximizing Your Tax Relief on Business Expenses</h3>
        <p>Understanding which expenses qualify for tax relief can significantly reduce your tax bill. Here's your comprehensive guide:</p>
        
        <h4>Office and Premises Costs</h4>
        <ul>
          <li>Rent, rates, and utility bills for business premises</li>
          <li>Property insurance and security costs</li>
          <li>Heating, lighting, and cleaning expenses</li>
          <li>Home office allowance (if working from home)</li>
        </ul>

        <h4>Travel and Vehicle Expenses</h4>
        <ul>
          <li>Business mileage at HMRC approved rates (45p per mile for first 10,000 miles)</li>
          <li>Fuel, parking, and tolls for business journeys</li>
          <li>Public transport costs for business travel</li>
          <li>Hotel accommodation for business trips</li>
        </ul>

        <h4>Equipment and Technology</h4>
        <ul>
          <li>Computers, laptops, and mobile phones used for business</li>
          <li>Software subscriptions and licenses</li>
          <li>Office furniture and equipment</li>
          <li>Tools and specialized equipment for your trade</li>
        </ul>

        <h4>Professional Services</h4>
        <ul>
          <li>Accountancy and legal fees</li>
          <li>Professional subscriptions and memberships</li>
          <li>Training and development courses</li>
          <li>Insurance premiums (professional indemnity, public liability)</li>
        </ul>

        <h4>Marketing and Business Development</h4>
        <ul>
          <li>Advertising and promotional costs</li>
          <li>Website hosting and development</li>
          <li>Business cards and stationery</li>
          <li>Networking event costs</li>
        </ul>

        <p><strong>Important:</strong> Keep detailed records and receipts for all business expenses. Ensure expenses are wholly and exclusively for business purposes to qualify for tax relief.</p>
      `
    },
    {
      title: "IR35 Changes: What Contractors Need to Know",
      date: "February 2024",
      readTime: "6 min read",
      excerpt: "Understanding the latest IR35 legislation and how it affects your contracting business. Determination statements, status assessments, and compliance strategies.",
      category: "Contractors",
      fullContent: `
        <h3>IR35 Legislation: A Contractor's Guide</h3>
        <p>IR35 rules determine whether you're genuinely self-employed or a 'disguised employee' for tax purposes. Here's what you need to know:</p>
        
        <h4>What is IR35?</h4>
        <p>IR35 is tax legislation designed to combat tax avoidance by workers who supply their services through an intermediary (usually a limited company) but would be considered employees if contracted directly.</p>

        <h4>Who Determines Your IR35 Status?</h4>
        <ul>
          <li><strong>Private Sector (medium/large):</strong> The client is responsible for determining your employment status</li>
          <li><strong>Small Private Sector:</strong> You're responsible for your own IR35 assessment</li>
          <li><strong>Public Sector:</strong> The public authority determines your status</li>
        </ul>

        <h4>Key Factors in IR35 Assessment</h4>
        <ul>
          <li><strong>Control:</strong> Who controls what you do, how, when, and where?</li>
          <li><strong>Substitution:</strong> Can you send a substitute to do your work?</li>
          <li><strong>Mutuality of Obligation:</strong> Is there an obligation to offer/accept work?</li>
          <li><strong>Financial Risk:</strong> Do you bear financial risk in your work?</li>
          <li><strong>Equipment:</strong> Who provides the equipment and materials?</li>
        </ul>

        <h4>Inside vs Outside IR35</h4>
        <p><strong>Inside IR35 (Deemed Employee):</strong></p>
        <ul>
          <li>Pay income tax and National Insurance through PAYE</li>
          <li>Limited ability to claim business expenses</li>
          <li>No flexibility on how you take income</li>
        </ul>

        <p><strong>Outside IR35 (Genuinely Self-Employed):</strong></p>
        <ul>
          <li>Take salary and dividends tax-efficiently</li>
          <li>Claim legitimate business expenses</li>
          <li>Greater control over your tax position</li>
        </ul>

        <h4>Compliance Best Practices</h4>
        <ul>
          <li>Review your contract carefully before signing</li>
          <li>Keep evidence of how you work in practice</li>
          <li>Obtain a Status Determination Statement (SDS) from clients</li>
          <li>Consider IR35 insurance for protection</li>
          <li>Seek professional advice for contract reviews</li>
        </ul>

        <p><strong>Action Point:</strong> If you're unsure about your IR35 status, get a professional contract review. The wrong determination can be costly.</p>
      `
    },
    {
      title: "Capital Allowances: A Complete Guide",
      date: "January 2024",
      readTime: "8 min read",
      excerpt: "Everything you need to know about claiming capital allowances on business assets. Annual Investment Allowance, writing down allowances, and super-deduction.",
      category: "Tax Relief",
      fullContent: `
        <h3>Capital Allowances: Maximizing Your Tax Relief</h3>
        <p>Capital allowances let you deduct the cost of certain business assets from your profits before tax. Here's how to make the most of them:</p>
        
        <h4>What are Capital Allowances?</h4>
        <p>Capital allowances are a form of tax relief for businesses that invest in assets. Instead of deducting the full cost immediately, you claim allowances over time.</p>

        <h4>Annual Investment Allowance (AIA)</h4>
        <ul>
          <li>Claim 100% of the cost of qualifying equipment in the year of purchase</li>
          <li>Current limit: £1 million per year</li>
          <li>Applies to most plant and machinery</li>
          <li>Significant tax relief in year one</li>
        </ul>

        <h4>Writing Down Allowances (WDA)</h4>
        <p>For assets not covered by AIA or over the AIA limit:</p>
        <ul>
          <li><strong>Main Pool (18%):</strong> Most business equipment and machinery</li>
          <li><strong>Special Rate Pool (6%):</strong> Integral features, long-life assets</li>
          <li>Claimed annually on the reducing balance</li>
        </ul>

        <h4>First Year Allowances</h4>
        <ul>
          <li>100% allowance for certain environmentally friendly equipment</li>
          <li>Zero-emission cars and electric vehicle charge points</li>
          <li>Energy-efficient and water-efficient equipment</li>
        </ul>

        <h4>Structures and Buildings Allowance (SBA)</h4>
        <ul>
          <li>3% allowance per year for non-residential structures and buildings</li>
          <li>Applies to construction costs incurred after October 2018</li>
          <li>Cannot be claimed alongside other capital allowances on the same asset</li>
        </ul>

        <h4>What Qualifies for Capital Allowances?</h4>
        <p><strong>Qualifying assets include:</strong></p>
        <ul>
          <li>Equipment, machinery, and tools</li>
          <li>Business vehicles (restrictions apply to cars)</li>
          <li>Computer equipment and software</li>
          <li>Office furniture and fixtures</li>
          <li>Certain building improvements (integral features)</li>
        </ul>

        <p><strong>Non-qualifying items:</strong></p>
        <ul>
          <li>Land and buildings (unless SBA applies)</li>
          <li>Items used only temporarily</li>
          <li>Assets not owned by the business</li>
        </ul>

        <h4>Planning Tips</h4>
        <ul>
          <li>Time purchases to maximize AIA in a single accounting period</li>
          <li>Consider the tax year-end when making significant purchases</li>
          <li>Keep detailed records of all asset purchases</li>
          <li>Review your capital allowances pool annually</li>
          <li>Consider selling unused assets to trigger balancing allowances</li>
        </ul>

        <p><strong>Expert Tip:</strong> If you're planning significant capital investment, speak to us about optimizing the timing and structure to maximize your tax relief.</p>
      `
    },
    {
      title: "VAT Tips for Small Businesses",
      date: "January 2024",
      readTime: "5 min read",
      excerpt: "Essential VAT guidance for small businesses. Registration thresholds, flat rate schemes, and Making Tax Digital compliance.",
      category: "VAT",
      fullContent: `
        <h3>VAT Essentials for Small Businesses</h3>
        <p>Understanding VAT can save you money and keep you compliant. Here's what every small business needs to know:</p>
        
        <h4>VAT Registration Thresholds</h4>
        <ul>
          <li><strong>Mandatory registration:</strong> When taxable turnover exceeds £85,000 in a 12-month period</li>
          <li><strong>Voluntary registration:</strong> You can register even if below the threshold</li>
          <li><strong>Deregistration:</strong> When turnover falls below £83,000</li>
        </ul>

        <h4>Should You Register Voluntarily?</h4>
        <p><strong>Benefits:</strong></p>
        <ul>
          <li>Reclaim VAT on business purchases and expenses</li>
          <li>Appear more established to clients</li>
          <li>Essential if your customers are VAT-registered businesses</li>
        </ul>

        <p><strong>Drawbacks:</strong></p>
        <ul>
          <li>Additional administrative burden</li>
          <li>Quarterly VAT returns required</li>
          <li>Prices increase by 20% for non-VAT registered customers</li>
        </ul>

        <h4>VAT Schemes for Small Businesses</h4>
        
        <p><strong>1. Flat Rate Scheme</strong></p>
        <ul>
          <li>Pay a fixed percentage of your turnover as VAT</li>
          <li>Available if turnover is £150,000 or less</li>
          <li>Simpler accounting, but can't reclaim VAT on most purchases</li>
          <li>Rates vary by industry (typically 6.5% to 14.5%)</li>
        </ul>

        <p><strong>2. Cash Accounting Scheme</strong></p>
        <ul>
          <li>Pay VAT when customers pay you (not when you invoice)</li>
          <li>Helps with cash flow</li>
          <li>Available if turnover is £1.35m or less</li>
        </ul>

        <p><strong>3. Annual Accounting Scheme</strong></p>
        <ul>
          <li>One VAT return per year instead of quarterly</li>
          <li>Make advance payments towards your VAT bill</li>
          <li>Available if turnover is £1.35m or less</li>
        </ul>

        <h4>Making Tax Digital (MTD) for VAT</h4>
        <p>All VAT-registered businesses must:</p>
        <ul>
          <li>Keep digital records</li>
          <li>Use MTD-compatible software</li>
          <li>Submit returns digitally through approved software</li>
        </ul>

        <h4>Common VAT Mistakes to Avoid</h4>
        <ul>
          <li>Missing the registration deadline (register within 30 days of exceeding threshold)</li>
          <li>Not charging VAT when required</li>
          <li>Incorrectly reclaiming VAT on non-business items</li>
          <li>Missing VAT return deadlines (penalties apply)</li>
          <li>Not keeping adequate records (must retain for 6 years)</li>
        </ul>

        <p><strong>Action Point:</strong> Review your turnover monthly to avoid missing the registration threshold. If you're close to £85,000, plan ahead for VAT registration.</p>
      `
    },
    {
      title: "Year-End Tax Planning Strategies",
      date: "December 2023",
      readTime: "10 min read",
      excerpt: "Strategic tax planning tips for year-end. Pension contributions, dividend planning, and timing of income and expenses to optimize your tax position.",
      category: "Tax Planning",
      fullContent: `
        <h3>Year-End Tax Planning Strategies</h3>
        <p>Strategic planning before year-end can significantly reduce your tax liability. Here are proven strategies to optimize your tax position:</p>
        
        <h4>1. Pension Contributions</h4>
        <p>One of the most tax-efficient ways to reduce your tax bill:</p>
        <ul>
          <li><strong>Tax relief:</strong> Get tax relief at your highest marginal rate (20%, 40%, or 45%)</li>
          <li><strong>Annual allowance:</strong> Up to £60,000 per year (or 100% of earnings if less)</li>
          <li><strong>Carry forward:</strong> Use unused allowances from previous 3 years</li>
          <li><strong>Employer contributions:</strong> Deductible for corporation tax, no National Insurance</li>
        </ul>

        <h4>2. Dividend Planning for Limited Companies</h4>
        <p>Optimize how you extract profits:</p>
        <ul>
          <li>Use the £500 dividend allowance (tax-free dividends)</li>
          <li>Consider timing of dividend declarations</li>
          <li>Split dividends with spouse for tax efficiency</li>
          <li>Balance salary vs dividends based on your tax position</li>
          <li>Remember: dividends are taxed at 8.75%, 33.75%, or 39.35% depending on your band</li>
        </ul>

        <h4>3. Timing of Income and Expenses</h4>
        <p><strong>Defer Income:</strong></p>
        <ul>
          <li>Delay invoicing until after year-end if it won't affect cash flow</li>
          <li>Consider spreading large bonuses across tax years</li>
          <li>Time capital disposals strategically</li>
        </ul>

        <p><strong>Accelerate Expenses:</strong></p>
        <ul>
          <li>Bring forward planned purchases before year-end</li>
          <li>Pay outstanding invoices before the tax year closes</li>
          <li>Prepay expenses where commercially sensible</li>
        </ul>

        <h4>4. Capital Allowances and Asset Planning</h4>
        <ul>
          <li>Maximize Annual Investment Allowance (£1 million)</li>
          <li>Purchase qualifying equipment before year-end</li>
          <li>Consider timing of asset disposals</li>
          <li>Review and optimize your capital allowances pool</li>
        </ul>

        <h4>5. Personal Allowances and Reliefs</h4>
        <ul>
          <li><strong>Personal allowance:</strong> £12,570 (tapers if income exceeds £100,000)</li>
          <li><strong>Marriage allowance:</strong> Transfer £1,260 to spouse if they're a basic rate taxpayer</li>
          <li><strong>Gift aid donations:</strong> Extend your basic rate band</li>
          <li><strong>EIS/SEIS investments:</strong> Tax relief on investments in qualifying companies</li>
        </ul>

        <h4>6. Tax-Efficient Investments</h4>
        <ul>
          <li><strong>ISAs:</strong> Use the £20,000 annual allowance (tax-free growth and income)</li>
          <li><strong>Junior ISAs:</strong> £9,000 per child per year</li>
          <li><strong>Venture Capital Trusts:</strong> 30% income tax relief on investments up to £200,000</li>
          <li><strong>EIS/SEIS:</strong> Income tax relief and CGT exemptions</li>
        </ul>

        <h4>7. Capital Gains Tax Planning</h4>
        <ul>
          <li>Use your annual CGT allowance (£6,000 for 2024/25)</li>
          <li>Consider transferring assets to spouse before disposal</li>
          <li>Time disposals to spread gains across tax years</li>
          <li>Offset gains with losses (including brought-forward losses)</li>
          <li>Consider Business Asset Disposal Relief (10% CGT rate on qualifying disposals)</li>
        </ul>

        <h4>8. Year-End Checklist</h4>
        <ul>
          <li>Review your profit forecast and tax liability</li>
          <li>Maximize all available allowances and reliefs</li>
          <li>Consider pension contributions (personal and employer)</li>
          <li>Review salary and dividend strategy</li>
          <li>Assess capital expenditure requirements</li>
          <li>Plan any asset disposals strategically</li>
          <li>Ensure all expenses are properly recorded</li>
          <li>Review and update tax planning for next year</li>
        </ul>

        <p><strong>Important:</strong> Tax planning should be done well before year-end. Last-minute decisions can be costly. Contact us early in your financial year for optimal tax planning.</p>

        <p><strong>Deadline Alert:</strong> Many tax-saving strategies must be implemented before your accounting year-end. Don't leave it too late!</p>
      `
    }
  ];

  const categoryColors: Record<string, string> = {
    "Compliance": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    "Tax Planning": "bg-green-500/10 text-green-600 dark:text-green-400",
    "Contractors": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    "Tax Relief": "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    "VAT": "bg-red-500/10 text-red-600 dark:text-red-400"
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/5 to-background" />
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-20 h-20 border-2 border-blue-500/30 rounded-lg rotate-12" />
          <div className="absolute top-40 left-20 w-16 h-16 border-2 border-green-500/30 rounded-full" />
          <div className="absolute bottom-20 right-1/4 w-24 h-24 border-2 border-purple-500/30 rounded-lg -rotate-12" />
        </div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-96 h-96 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full blur-3xl top-0 right-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full border border-blue-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2" data-testid="text-badge-insights">
                  <Lightbulb className="w-4 h-4" />
                  Expert Insights
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent" data-testid="heading-tax-tips">
                Tax Tips & Insights
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Stay informed with the latest tax news, tips, and strategies from our expert accountants. 
                Regular updates to help you navigate the complex world of UK taxation.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-blue-500/10">
                  <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium">Expert Articles</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-green-500/10">
                  <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium">Regular Updates</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-green-500/20 to-purple-500/20 rounded-2xl blur-2xl"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                  <img 
                    src={taxPlanningImage} 
                    alt="Tax planning and strategy" 
                    className="w-full h-auto"
                    data-testid="img-hero-tax-planning"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Divider Section 1 */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={taxSavingsImage} 
            alt="Business tax savings" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-500/80 to-green-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-4xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Maximize Your Tax Savings</h2>
            <p className="text-lg md:text-xl text-white/90">
              Expert guidance to help you stay compliant and optimize your tax position
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-blue-500/5 rounded-full border border-blue-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Latest Articles</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground">
              Expert guidance to help you stay compliant and maximize your tax efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {taxTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <button 
                      type="button"
                      className="text-left w-full h-full"
                      data-testid={`button-tax-tip-${index}`}
                    >
                      <Card className="hover-elevate transition-all duration-300 flex flex-col h-full border-2 hover:border-primary/50 hover:shadow-xl group bg-gradient-to-br from-card to-muted/5 cursor-pointer">
                        <CardHeader>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className={`inline-block px-3 py-1 ${categoryColors[tip.category]} text-xs font-medium rounded-full mb-3 w-fit`}
                          >
                            {tip.category}
                          </motion.div>
                          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{tip.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{tip.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{tip.readTime}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <p className="text-muted-foreground">{tip.excerpt}</p>
                        </CardContent>
                      </Card>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <>
                      <DialogHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`inline-block px-3 py-1 ${categoryColors[tip.category]} text-xs font-medium rounded-full`}>
                            {tip.category}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{tip.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{tip.readTime}</span>
                            </div>
                          </div>
                        </div>
                        <DialogTitle className="text-3xl font-bold">{tip.title}</DialogTitle>
                        <DialogDescription className="sr-only">
                          {tip.excerpt}
                        </DialogDescription>
                      </DialogHeader>
                      <div 
                        className="prose prose-lg dark:prose-invert max-w-none mt-6"
                        dangerouslySetInnerHTML={{ __html: tip.fullContent }}
                      />
                    </>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Divider Section 2 */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={taxDeadlineImage} 
            alt="Tax deadlines and organization" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 via-green-500/80 to-purple-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-4xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Never Miss a Deadline</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Stay on top of critical tax dates and compliance requirements
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Key Dates</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Timely Reminders</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-purple-500/30 rounded-full" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-blue-500/30 rounded-lg rotate-45" />
        </div>

        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl top-0 left-1/2"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block mb-6 px-4 py-2 bg-purple-500/5 rounded-full border border-purple-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Newsletter</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest tax tips, updates, and insights delivered straight to your inbox every month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                data-testid="input-newsletter-email"
              />
              <Button size="lg" data-testid="button-subscribe">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Divider Section 3 */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={complianceSuccessImage} 
            alt="Compliance success" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-blue-500/80 to-green-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Tax Advice When You Need It</h2>
            <p className="text-lg text-white/90">
              Professional guidance to help you navigate tax challenges with confidence
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Need Professional Tax Advice?"
        description="Our expert team is ready to help with all your tax planning and compliance needs. Schedule a consultation today."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </div>
  );
}
