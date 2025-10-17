import { db } from '../server/db';
import { articles, testimonials } from '../shared/schema';

const articlesData = [
  {
    title: "Key Tax Deadlines for 2024/25",
    category: "Compliance",
    excerpt: "Stay on top of important tax deadlines to avoid penalties. Self-assessment deadlines, corporation tax payment dates, and VAT return submissions.",
    fullContent: `<h3>Critical Tax Deadlines for 2024/25</h3><p>Missing tax deadlines can result in significant penalties and interest charges. Here are the key dates you need to remember:</p><h4>Self-Assessment Tax Returns</h4><ul><li><strong>31st January 2025:</strong> Deadline for online self-assessment tax returns for the 2023/24 tax year</li><li><strong>31st January 2025:</strong> Payment deadline for any tax owed for 2023/24</li><li><strong>31st July 2025:</strong> Second payment on account deadline</li></ul><h4>Corporation Tax</h4><ul><li>Corporation tax is due 9 months and 1 day after your company's accounting period ends</li><li>Company tax returns must be filed within 12 months of the accounting period end</li></ul><h4>VAT Returns</h4><ul><li>Quarterly VAT returns are due one month and 7 days after the end of your VAT period</li><li>Monthly VAT returns (if applicable) are due one month and 7 days after the period end</li></ul><h4>PAYE and Payroll</h4><ul><li><strong>19th of each month:</strong> PAYE payment deadline (22nd if paying electronically)</li><li><strong>19th May 2025:</strong> End of year PAYE submissions deadline</li></ul><p><strong>Pro Tip:</strong> Set up calendar reminders at least two weeks before each deadline to ensure you have enough time to gather necessary documents and make payments.</p>`,
    readTime: "3 min read",
    published: true
  },
  {
    title: "Maximizing Tax Relief on Business Expenses",
    category: "Tax Planning",
    excerpt: "Learn which business expenses qualify for tax relief and how to claim them correctly. From office costs to travel expenses and equipment purchases.",
    fullContent: `<h3>Maximizing Your Tax Relief on Business Expenses</h3><p>Understanding which expenses qualify for tax relief can significantly reduce your tax bill. Here's your comprehensive guide:</p><h4>Office and Premises Costs</h4><ul><li>Rent, rates, and utility bills for business premises</li><li>Property insurance and security costs</li><li>Heating, lighting, and cleaning expenses</li><li>Home office allowance (if working from home)</li></ul><h4>Travel and Vehicle Expenses</h4><ul><li>Business mileage at HMRC approved rates (45p per mile for first 10,000 miles)</li><li>Fuel, parking, and tolls for business journeys</li><li>Public transport costs for business travel</li><li>Hotel accommodation for business trips</li></ul><h4>Equipment and Technology</h4><ul><li>Computers, laptops, and mobile phones used for business</li><li>Software subscriptions and licenses</li><li>Office furniture and equipment</li><li>Tools and specialized equipment for your trade</li></ul><h4>Professional Services</h4><ul><li>Accountancy and legal fees</li><li>Professional subscriptions and memberships</li><li>Training and development courses</li><li>Insurance premiums (professional indemnity, public liability)</li></ul><h4>Marketing and Business Development</h4><ul><li>Advertising and promotional costs</li><li>Website hosting and development</li><li>Business cards and stationery</li><li>Networking event costs</li></ul><p><strong>Important:</strong> Keep detailed records and receipts for all business expenses. Ensure expenses are wholly and exclusively for business purposes to qualify for tax relief.</p>`,
    readTime: "2 min read",
    published: true
  },
  {
    title: "IR35 Changes: What Contractors Need to Know",
    category: "Contractors",
    excerpt: "Understanding the latest IR35 legislation and how it affects your contracting business. Determination statements, status assessments, and compliance strategies.",
    fullContent: `<h3>IR35 Legislation: A Contractor's Guide</h3><p>IR35 rules determine whether you're genuinely self-employed or a 'disguised employee' for tax purposes. Here's what you need to know:</p><h4>What is IR35?</h4><p>IR35 is tax legislation designed to combat tax avoidance by workers who supply their services through an intermediary (usually a limited company) but would be considered employees if contracted directly.</p><h4>Who Determines Your IR35 Status?</h4><ul><li><strong>Private Sector (medium/large):</strong> The client is responsible for determining your employment status</li><li><strong>Small Private Sector:</strong> You're responsible for your own IR35 assessment</li><li><strong>Public Sector:</strong> The public authority determines your status</li></ul><h4>Key Factors in IR35 Assessment</h4><ul><li><strong>Control:</strong> Who controls what you do, how, when, and where?</li><li><strong>Substitution:</strong> Can you send a substitute to do your work?</li><li><strong>Mutuality of Obligation:</strong> Is there an obligation to offer/accept work?</li><li><strong>Financial Risk:</strong> Do you bear financial risk in your work?</li><li><strong>Equipment:</strong> Who provides the equipment and materials?</li></ul><h4>Inside vs Outside IR35</h4><p><strong>Inside IR35 (Deemed Employee):</strong></p><ul><li>Pay income tax and National Insurance through PAYE</li><li>Limited ability to claim business expenses</li><li>No flexibility on how you take income</li></ul><p><strong>Outside IR35 (Genuinely Self-Employed):</strong></p><ul><li>Take salary and dividends tax-efficiently</li><li>Claim legitimate business expenses</li><li>Greater control over your tax position</li></ul><h4>Compliance Best Practices</h4><ul><li>Review your contract carefully before signing</li><li>Keep evidence of how you work in practice</li><li>Obtain a Status Determination Statement (SDS) from clients</li><li>Consider IR35 insurance for protection</li><li>Seek professional advice for contract reviews</li></ul><p><strong>Action Point:</strong> If you're unsure about your IR35 status, get a professional contract review. The wrong determination can be costly.</p>`,
    readTime: "3 min read",
    published: true
  },
  {
    title: "Capital Allowances: A Complete Guide",
    category: "Tax Relief",
    excerpt: "Everything you need to know about claiming capital allowances on business assets. Annual Investment Allowance, writing down allowances, and super-deduction.",
    fullContent: `<h3>Capital Allowances: Maximizing Your Tax Relief</h3><p>Capital allowances let you deduct the cost of certain business assets from your profits before tax. Here's how to make the most of them:</p><h4>What are Capital Allowances?</h4><p>Capital allowances are a form of tax relief for businesses that invest in assets. Instead of deducting the full cost immediately, you claim allowances over time.</p><h4>Annual Investment Allowance (AIA)</h4><ul><li>Claim 100% of the cost of qualifying equipment in the year of purchase</li><li>Current limit: £1 million per year</li><li>Applies to most plant and machinery</li><li>Significant tax relief in year one</li></ul><h4>Writing Down Allowances (WDA)</h4><p>For assets not covered by AIA or over the AIA limit:</p><ul><li><strong>Main Pool (18%):</strong> Most business equipment and machinery</li><li><strong>Special Rate Pool (6%):</strong> Integral features, long-life assets</li><li>Claimed annually on the reducing balance</li></ul><h4>First Year Allowances</h4><ul><li>100% allowance for certain environmentally friendly equipment</li><li>Zero-emission cars and electric vehicle charge points</li><li>Energy-efficient and water-efficient equipment</li></ul><h4>Structures and Buildings Allowance (SBA)</h4><ul><li>3% allowance per year for non-residential structures and buildings</li><li>Applies to construction costs incurred after October 2018</li><li>Cannot be claimed alongside other capital allowances on the same asset</li></ul><h4>What Qualifies for Capital Allowances?</h4><p><strong>Qualifying assets include:</strong></p><ul><li>Equipment, machinery, and tools</li><li>Business vehicles (restrictions apply to cars)</li><li>Computer equipment and software</li><li>Office furniture and fixtures</li><li>Certain building improvements (integral features)</li></ul><p><strong>Non-qualifying items:</strong></p><ul><li>Land and buildings (unless SBA applies)</li><li>Items used only temporarily</li><li>Assets not owned by the business</li></ul><h4>Planning Tips</h4><ul><li>Time purchases to maximize AIA in a single accounting period</li><li>Consider the tax year-end when making significant purchases</li><li>Keep detailed records of all asset purchases</li><li>Review your capital allowances pool annually</li><li>Consider selling unused assets to trigger balancing allowances</li></ul><p><strong>Expert Tip:</strong> If you're planning significant capital investment, speak to us about optimizing the timing and structure to maximize your tax relief.</p>`,
    readTime: "2 min read",
    published: true
  },
  {
    title: "VAT Tips for Small Businesses",
    category: "VAT",
    excerpt: "Essential VAT guidance for small businesses. Registration thresholds, flat rate schemes, and Making Tax Digital compliance.",
    fullContent: `<h3>VAT Essentials for Small Businesses</h3><p>Understanding VAT can save you money and keep you compliant. Here's what every small business needs to know:</p><h4>VAT Registration Thresholds</h4><ul><li><strong>Mandatory registration:</strong> When taxable turnover exceeds £85,000 in a 12-month period</li><li><strong>Voluntary registration:</strong> You can register even if below the threshold</li><li><strong>Deregistration:</strong> When turnover falls below £83,000</li></ul><h4>Should You Register Voluntarily?</h4><p><strong>Benefits:</strong></p><ul><li>Reclaim VAT on business purchases and expenses</li><li>Appear more established to clients</li><li>Essential if your customers are VAT-registered businesses</li></ul><p><strong>Drawbacks:</strong></p><ul><li>Additional administrative burden</li><li>Quarterly VAT returns required</li><li>Prices increase by 20% for non-VAT registered customers</li></ul><h4>VAT Schemes for Small Businesses</h4><p><strong>1. Flat Rate Scheme</strong></p><ul><li>Pay a fixed percentage of your turnover as VAT</li><li>Available if turnover is £150,000 or less</li><li>Simpler accounting, but can't reclaim VAT on most purchases</li><li>Rates vary by industry (typically 6.5% to 14.5%)</li></ul><p><strong>2. Cash Accounting Scheme</strong></p><ul><li>Pay VAT when customers pay you (not when you invoice)</li><li>Helps with cash flow</li><li>Available if turnover is £1.35m or less</li></ul><p><strong>3. Annual Accounting Scheme</strong></p><ul><li>One VAT return per year instead of quarterly</li><li>Make advance payments towards your VAT bill</li><li>Available if turnover is £1.35m or less</li></ul><h4>Making Tax Digital (MTD) for VAT</h4><p>All VAT-registered businesses must:</p><ul><li>Keep digital records</li><li>Use MTD-compatible software</li><li>Submit returns digitally through approved software</li></ul><h4>Common VAT Mistakes to Avoid</h4><ul><li>Missing the registration deadline (register within 30 days of exceeding threshold)</li><li>Not charging VAT when required</li><li>Incorrectly reclaiming VAT on non-business items</li><li>Missing VAT return deadlines (penalties apply)</li><li>Not keeping adequate records (must retain for 6 years)</li></ul><p><strong>Action Point:</strong> Review your turnover monthly to avoid missing the registration threshold. If you're close to £85,000, plan ahead for VAT registration.</p>`,
    readTime: "1 min read",
    published: true
  },
  {
    title: "Year-End Tax Planning Strategies",
    category: "Tax Planning",
    excerpt: "Strategic tax planning tips for year-end. Pension contributions, dividend planning, and timing of income and expenses to optimize your tax position.",
    fullContent: `<h3>Year-End Tax Planning Strategies</h3><p>Strategic planning before year-end can significantly reduce your tax liability. Here are proven strategies to optimize your tax position:</p><h4>1. Pension Contributions</h4><p>One of the most tax-efficient ways to reduce your tax bill:</p><ul><li><strong>Tax relief:</strong> Get tax relief at your highest marginal rate (20%, 40%, or 45%)</li><li><strong>Annual allowance:</strong> Up to £60,000 per year (or 100% of earnings if less)</li><li><strong>Carry forward:</strong> Use unused allowances from previous 3 years</li><li><strong>Employer contributions:</strong> Deductible for corporation tax, no National Insurance</li></ul><h4>2. Dividend Planning for Limited Companies</h4><p>Optimize how you extract profits:</p><ul><li>Use the £500 dividend allowance (tax-free dividends)</li><li>Consider timing of dividend declarations</li><li>Split dividends with spouse for tax efficiency</li><li>Balance salary vs dividends based on your tax position</li><li>Remember: dividends are taxed at 8.75%, 33.75%, or 39.35% depending on your band</li></ul><h4>3. Timing of Income and Expenses</h4><p><strong>Defer Income:</strong></p><ul><li>Delay invoicing until after year-end if it won't affect cash flow</li><li>Consider spreading large bonuses across tax years</li><li>Time capital disposals strategically</li></ul><p><strong>Accelerate Expenses:</strong></p><ul><li>Bring forward planned purchases before year-end</li><li>Pay outstanding invoices before the tax year closes</li><li>Prepay expenses where commercially sensible</li></ul><h4>4. Capital Allowances and Asset Planning</h4><ul><li>Maximize Annual Investment Allowance (£1 million)</li><li>Purchase qualifying equipment before year-end</li><li>Consider timing of asset disposals</li><li>Review and optimize your capital allowances pool</li></ul><h4>5. Personal Allowances and Reliefs</h4><ul><li><strong>Personal allowance:</strong> £12,570 (tapers if income exceeds £100,000)</li><li><strong>Marriage allowance:</strong> Transfer £1,260 to spouse if they're a basic rate taxpayer</li><li><strong>Gift aid donations:</strong> Extend your basic rate band</li><li><strong>EIS/SEIS investments:</strong> Tax relief on investments in qualifying companies</li></ul><h4>6. Tax-Efficient Investments</h4><ul><li><strong>ISAs:</strong> Use the £20,000 annual allowance (tax-free growth and income)</li><li><strong>Junior ISAs:</strong> £9,000 per child per year</li><li><strong>Venture Capital Trusts:</strong> 30% income tax relief on investments up to £200,000</li><li><strong>EIS/SEIS:</strong> Income tax relief and CGT exemptions</li></ul><h4>7. Capital Gains Tax Planning</h4><ul><li>Use your annual CGT allowance (£6,000 for 2024/25)</li><li>Consider transferring assets to spouse before disposal</li><li>Time disposals to spread gains across tax years</li><li>Offset gains with losses (including brought-forward losses)</li><li>Consider Business Asset Disposal Relief (10% CGT rate on qualifying disposals)</li></ul><h4>8. Year-End Checklist</h4><ul><li>Review your profit forecast and tax liability</li><li>Maximize all available allowances and reliefs</li><li>Consider pension contributions (personal and employer)</li><li>Review salary and dividend strategy</li><li>Assess capital expenditure requirements</li><li>Plan any asset disposals strategically</li><li>Ensure all expenses are properly recorded</li><li>Review and update tax planning for next year</li></ul><p><strong>Important:</strong> Tax planning should be done well before year-end. Last-minute decisions can be costly. Contact us early in your financial year for optimal tax planning.</p><p><strong>Deadline Alert:</strong> Many tax-saving strategies must be implemented before your accounting year-end. Don't leave it too late!</p>`,
    readTime: "3 min read",
    published: true
  }
];

const testimonialsData = [
  {
    name: "Joseph Chuma",
    company: "Highland Solicitors",
    role: "Founder",
    content: "Rochvilles & Co transformed our accounting processes. Their proactive tax planning saved us over £15,000 last year. The team is responsive, knowledgeable, and truly cares about our success.",
    rating: 5,
    published: true
  },
  {
    name: "Arthur Kopa",
    company: "A Kopa Constructions Ltd",
    role: "CEO",
    content: "As a construction company, managing finances and compliance can be complex. Rochvilles handles everything seamlessly - from VAT returns to strategic tax planning. Outstanding service!",
    rating: 5,
    published: true
  },
  {
    name: "Carmen Pipenco",
    company: "Hotel Quality Cleaning LTD",
    role: "CEO",
    content: "Switching to Rochvilles was the best decision for our growing business. Their cloud-based system gives us real-time insights, and their advice has been invaluable for our expansion plans.",
    rating: 5,
    published: true
  },
  {
    name: "Iana Marshall",
    company: "Landbridge Consulting LTD",
    role: "CEO",
    content: "Professional, reliable, and always ahead of deadlines. Rochvilles & Co has been instrumental in keeping our compliance on track while providing strategic financial guidance.",
    rating: 5,
    published: true
  },
  {
    name: "Judith Kwentoh",
    company: "J3 Business Consultancy LTD",
    role: "CEO",
    content: "The expertise and dedication of Rochvilles & Co are unmatched. They've helped us navigate complex tax regulations and optimize our financial operations with exceptional professionalism.",
    rating: 5,
    published: true
  },
  {
    name: "Ade Adewale",
    company: "Armour Energy LTD",
    role: "CEO",
    content: "Rochvilles provides exactly what we need - expert accounting services with transparent pricing. Their industry knowledge in the energy sector has been invaluable to our growth.",
    rating: 5,
    published: true
  },
  {
    name: "Chris Mundia",
    company: "West Kent Group LTD",
    role: "CEO",
    content: "Outstanding service from start to finish. Rochvilles & Co has transformed how we manage our finances, providing clear insights and proactive advice that drives our business forward.",
    rating: 5,
    published: true
  },
  {
    name: "Olagoke Sokoya",
    company: "Oatbuy2 Lets Properties",
    role: "CEO",
    content: "Managing property finances requires precision and expertise. Rochvilles delivers both with exceptional service. Their guidance on tax efficiency has significantly improved our bottom line.",
    rating: 5,
    published: true
  }
];

async function populate() {
  console.log("Populating articles...");
  for (const article of articlesData) {
    await db.insert(articles).values(article);
    console.log(`✓ Added: ${article.title}`);
  }
  
  console.log("\nPopulating testimonials...");
  for (const testimonial of testimonialsData) {
    await db.insert(testimonials).values(testimonial);
    console.log(`✓ Added: ${testimonial.name} - ${testimonial.company}`);
  }
  
  console.log("\n✅ All content populated successfully!");
  process.exit(0);
}

populate().catch(console.error);
