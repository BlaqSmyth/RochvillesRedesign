import { db } from "../server/db";
import { payrollPackages, businessTypes, pricingTiers, additionalServices } from "../shared/schema";

async function populatePricing() {
  console.log("Starting pricing population...");

  // Payroll Packages
  console.log("Adding payroll packages...");
  const payrollData = [
    {
      name: "Small Payroll",
      employeeRange: "Up to 10 employees",
      price: "£45",
      features: [
        "Monthly payroll processing",
        "RTI submissions to HMRC",
        "Payslips for all employees",
        "P60s and P45s",
        "Pension auto-enrolment support"
      ],
      displayOrder: 1
    },
    {
      name: "Medium Payroll",
      employeeRange: "10-25 employees",
      price: "£75",
      features: [
        "All Small Payroll features",
        "Advanced reporting",
        "Multi-location support",
        "Dedicated payroll specialist",
        "Priority support"
      ],
      displayOrder: 2
    }
  ];

  for (const pkg of payrollData) {
    await db.insert(payrollPackages).values(pkg);
  }

  // Business Types with Pricing Tiers
  console.log("Adding business types and pricing tiers...");
  const businessTypeData = [
    {
      type: "Sole Trader",
      icon: "Briefcase",
      popular: false,
      displayOrder: 1,
      tiers: [
        { turnover: "Up to £25k", price: "£550", displayOrder: 1 },
        { turnover: "£26k - £35k", price: "£650", displayOrder: 2 },
        { turnover: "£35k - £100k", price: "£1,000", displayOrder: 3 },
        { turnover: "Above £100k", price: "POA", displayOrder: 4 }
      ]
    },
    {
      type: "Partnership",
      icon: "Users",
      popular: false,
      displayOrder: 2,
      tiers: [
        { turnover: "Up to £25k", price: "£650", displayOrder: 1 },
        { turnover: "£26k - £35k", price: "£750", displayOrder: 2 },
        { turnover: "£35k - £100k", price: "£1,250", displayOrder: 3 },
        { turnover: "Above £100k", price: "POA", displayOrder: 4 }
      ]
    },
    {
      type: "Limited Company",
      icon: "Building2",
      popular: true,
      displayOrder: 3,
      tiers: [
        { turnover: "Up to £25k", price: "£850", displayOrder: 1 },
        { turnover: "£26k - £35k", price: "£1,000", displayOrder: 2 },
        { turnover: "£35k - £100k", price: "£1,850", displayOrder: 3 },
        { turnover: "Above £100k", price: "POA", displayOrder: 4 }
      ]
    },
    {
      type: "Solicitors",
      icon: "Scale",
      popular: false,
      displayOrder: 4,
      tiers: [
        { turnover: "Up to £25k", price: "£1,250", displayOrder: 1 },
        { turnover: "£26k - £35k", price: "£1,500", displayOrder: 2 },
        { turnover: "£35k - £100k", price: "£2,300", displayOrder: 3 },
        { turnover: "Above £100k", price: "POA", displayOrder: 4 }
      ]
    }
  ];

  for (const bt of businessTypeData) {
    const [insertedBT] = await db.insert(businessTypes).values({
      type: bt.type,
      icon: bt.icon,
      popular: bt.popular,
      displayOrder: bt.displayOrder
    }).returning();

    for (const tier of bt.tiers) {
      await db.insert(pricingTiers).values({
        businessTypeId: insertedBT.id,
        turnover: tier.turnover,
        price: tier.price,
        displayOrder: tier.displayOrder
      });
    }
  }

  // Additional Services
  console.log("Adding additional services...");
  const servicesData = [
    {
      serviceName: "VAT Returns",
      price: "£200",
      period: "per quarter",
      description: "Quarterly VAT return preparation and submission",
      icon: "Calculator",
      displayOrder: 1
    },
    {
      serviceName: "Management Accounts",
      price: "£300",
      period: "per quarter",
      description: "Quarterly management accounts with recommendations",
      icon: "FileText",
      displayOrder: 2
    },
    {
      serviceName: "Interim Management Accounts",
      price: "£400",
      period: "per report",
      description: "Detailed interim management accounts forecast with financial analysis",
      icon: "LineChart",
      displayOrder: 3
    },
    {
      serviceName: "Cash Flow Forecasting",
      price: "£500",
      period: "per forecast",
      description: "12-month cash flow forecasts for business planning and working capital management",
      icon: "TrendingUp",
      displayOrder: 4
    },
    {
      serviceName: "Directors P11D & Dividends",
      price: "£150",
      period: "per director",
      description: "P11D benefit reporting and dividend administration",
      icon: "Receipt",
      displayOrder: 5
    },
    {
      serviceName: "CIS Services",
      price: "£100",
      period: "per month",
      description: "Construction Industry Scheme returns and compliance",
      icon: "Hammer",
      displayOrder: 6
    },
    {
      serviceName: "Extra Partner/Director Tax Return",
      price: "£180",
      period: "per return",
      description: "Individual tax return for additional partners or directors",
      icon: "Users",
      displayOrder: 7
    },
    {
      serviceName: "Business Plans & Start-ups",
      price: "£850",
      period: "per case",
      description: "Comprehensive business plan development",
      icon: "TrendingUp",
      displayOrder: 8
    },
    {
      serviceName: "Company Formation (Express)",
      price: "£150",
      period: "one-off",
      description: "Fast-track company incorporation service",
      icon: "Building2",
      displayOrder: 9
    },
    {
      serviceName: "Company Formation (Off-the-Shelf)",
      price: "£100",
      period: "one-off",
      description: "Ready-made company purchase",
      icon: "Building2",
      displayOrder: 10
    },
    {
      serviceName: "Due Diligence",
      price: "£1,500",
      period: "per case",
      description: "Comprehensive business due diligence for acquisitions",
      icon: "FileText",
      displayOrder: 11
    },
    {
      serviceName: "Mergers & Acquisitions",
      price: "POA",
      period: "per transaction",
      description: "Complete M&A advisory, valuation, and transaction support",
      icon: "Handshake",
      displayOrder: 12
    },
    {
      serviceName: "Struck Off Company Restorations",
      price: "£1,200",
      period: "per case",
      description: "Professional restoration of dissolved companies to Companies House register",
      icon: "RefreshCcw",
      displayOrder: 13
    },
    {
      serviceName: "Accountants Opinion/Review",
      price: "£550",
      period: "per review",
      description: "Professional opinion and review services",
      icon: "Scale",
      displayOrder: 14
    },
    {
      serviceName: "Software Setup & Training",
      price: "£180",
      period: "per hour",
      description: "Accounting software implementation and training",
      icon: "Calculator",
      displayOrder: 15
    },
    {
      serviceName: "Financial Plan/Cashflow Projections",
      price: "£850",
      period: "per case",
      description: "Comprehensive financial planning with multi-year projections, budgeting, and strategic analysis",
      icon: "TrendingUp",
      displayOrder: 16
    }
  ];

  for (const service of servicesData) {
    await db.insert(additionalServices).values(service);
  }

  console.log("Pricing population completed successfully!");
  process.exit(0);
}

populatePricing().catch((error) => {
  console.error("Error populating pricing:", error);
  process.exit(1);
});
