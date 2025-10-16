import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Check, Star, Users, Building2, Briefcase, Scale, Calculator, FileText, Clock, TrendingUp, Sparkles, Award, DollarSign, Shield, LineChart, Handshake, RefreshCcw, Receipt, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

import pricingImage from "@assets/stock_images/transparent_pricing__7edf573a.jpg";
import businessValueImage from "@assets/stock_images/business_value_cost__d53ab898.jpg";
import consultationImage from "@assets/stock_images/professional_account_2d70c25c.jpg";
import successImage from "@assets/stock_images/financial_success_gr_6aa3b709.jpg";

export default function FeesPage() {
  const payrollPackages = [
    {
      name: "Small Payroll",
      employees: "Up to 10 employees",
      price: "£45",
      icon: Users,
      features: [
        "Monthly payroll processing",
        "RTI submissions to HMRC",
        "Payslips for all employees",
        "P60s and P45s",
        "Pension auto-enrolment support"
      ]
    },
    {
      name: "Medium Payroll",
      employees: "10-25 employees",
      price: "£75",
      icon: Building2,
      features: [
        "All Small Payroll features",
        "Advanced reporting",
        "Multi-location support",
        "Dedicated payroll specialist",
        "Priority support"
      ]
    }
  ];

  const businessTypes = [
    {
      type: "Sole Trader",
      icon: Briefcase,
      tiers: [
        { turnover: "Up to £25k", price: "£550" },
        { turnover: "£26k - £35k", price: "£650" },
        { turnover: "£35k - £100k", price: "£1,000" },
        { turnover: "Above £100k", price: "POA" }
      ]
    },
    {
      type: "Partnership",
      icon: Users,
      tiers: [
        { turnover: "Up to £25k", price: "£650" },
        { turnover: "£26k - £35k", price: "£750" },
        { turnover: "£35k - £100k", price: "£1,250" },
        { turnover: "Above £100k", price: "POA" }
      ]
    },
    {
      type: "Limited Company",
      icon: Building2,
      popular: true,
      tiers: [
        { turnover: "Up to £25k", price: "£850" },
        { turnover: "£26k - £35k", price: "£1,000" },
        { turnover: "£35k - £100k", price: "£1,850" },
        { turnover: "Above £100k", price: "POA" }
      ]
    },
    {
      type: "Solicitors",
      icon: Scale,
      tiers: [
        { turnover: "Up to £25k", price: "£1,250" },
        { turnover: "£26k - £35k", price: "£1,500" },
        { turnover: "£35k - £100k", price: "£2,300" },
        { turnover: "Above £100k", price: "POA" }
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Calculator,
      service: "VAT Returns",
      price: "£200",
      period: "per quarter",
      description: "Quarterly VAT return preparation and submission"
    },
    {
      icon: FileText,
      service: "Management Accounts",
      price: "£300",
      period: "per quarter",
      description: "Quarterly management accounts with recommendations"
    },
    {
      icon: LineChart,
      service: "Interim Management Accounts",
      price: "£400",
      period: "per report",
      description: "Detailed interim management accounts forecast with financial analysis"
    },
    {
      icon: TrendingUp,
      service: "Cash Flow Forecasting",
      price: "£500",
      period: "per forecast",
      description: "12-month cash flow forecasts for business planning and working capital management"
    },
    {
      icon: Receipt,
      service: "Directors P11D & Dividends",
      price: "£150",
      period: "per director",
      description: "P11D benefit reporting and dividend administration"
    },
    {
      icon: Hammer,
      service: "CIS Services",
      price: "£100",
      period: "per month",
      description: "Construction Industry Scheme returns and compliance"
    },
    {
      icon: Users,
      service: "Extra Partner/Director Tax Return",
      price: "£180",
      period: "per return",
      description: "Individual tax return for additional partners or directors"
    },
    {
      icon: TrendingUp,
      service: "Business Plans & Start-ups",
      price: "£850",
      period: "per case",
      description: "Comprehensive business plan development"
    },
    {
      icon: Building2,
      service: "Company Formation (Express)",
      price: "£150",
      period: "one-off",
      description: "Fast-track company incorporation service"
    },
    {
      icon: Building2,
      service: "Company Formation (Off-the-Shelf)",
      price: "£100",
      period: "one-off",
      description: "Ready-made company purchase"
    },
    {
      icon: FileText,
      service: "Due Diligence",
      price: "£1,500",
      period: "per case",
      description: "Comprehensive business due diligence for acquisitions"
    },
    {
      icon: Handshake,
      service: "Mergers & Acquisitions",
      price: "POA",
      period: "per transaction",
      description: "Complete M&A advisory, valuation, and transaction support"
    },
    {
      icon: RefreshCcw,
      service: "Struck Off Company Restorations",
      price: "£1,200",
      period: "per case",
      description: "Professional restoration of dissolved companies to Companies House register"
    },
    {
      icon: Scale,
      service: "Accountants Opinion/Review",
      price: "£550",
      period: "per review",
      description: "Professional opinion and review services"
    },
    {
      icon: Calculator,
      service: "Software Setup & Training",
      price: "£180",
      period: "per hour",
      description: "Accounting software implementation and training"
    },
    {
      icon: TrendingUp,
      service: "Financial Plan/Cashflow Projections",
      price: "£850",
      period: "per case",
      description: "Comprehensive financial planning with multi-year projections, budgeting, and strategic analysis"
    }
  ];

  const includedInPrice = [
    "Annual accounts preparation",
    "Business tax return filing",
    "One owner's personal tax return",
    "Email and phone support",
    "HMRC correspondence handling",
    "Cloud accounting software access"
  ];

  return (
    <div className="relative overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/5 to-background" />
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-20 h-20 border-2 border-green-500/30 rounded-lg rotate-12" />
          <div className="absolute top-40 left-20 w-16 h-16 border-2 border-blue-500/30 rounded-full" />
          <div className="absolute bottom-20 right-1/4 w-24 h-24 border-2 border-purple-500/30 rounded-lg -rotate-12" />
        </div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl top-0 right-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full border border-green-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center gap-2" data-testid="text-badge-pricing">
                  <DollarSign className="w-4 h-4" />
                  Transparent Pricing
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent" data-testid="heading-fees">
                Our Fee Structure
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4">
                Clear, competitive pricing with no hidden charges. All fees are subject to VAT at 20% if applicable.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-green-500/10">
                  <Shield className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span className="text-sm font-medium">No Hidden Charges</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-blue-500/10">
                  <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-sm font-medium">Flexible Packages Available</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                With effect from 1st April 2024. For further information, please contact us directly on <a href="tel:02085144953" className="text-primary hover:underline font-medium" data-testid="link-phone-contact">0208 5144953</a>
              </p>
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
                  className="absolute -inset-6 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                  <img 
                    src={pricingImage} 
                    alt="Transparent pricing and planning" 
                    className="w-full h-auto"
                    data-testid="img-hero-pricing"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner - Concise */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-orange-500/5 to-green-500/5" data-testid="card-special-offer-banner">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full" data-testid="badge-special-offer-fees">
                        SPECIAL OFFER
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2" data-testid="heading-new-business-package">
                      New Business Package: £399 <span className="text-lg font-normal text-muted-foreground">+ VAT/year</span>
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Complete Accountancy, Bookkeeping, VAT & Payroll services for Directors & up to 6 Employees
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span>Contractor Specialists</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span>IR35 Experts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span>Fixed Fees - Half Industry Rate</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contractors-guide">
                      <Button className="w-full sm:w-auto hover-elevate active-elevate-2" data-testid="button-learn-more-offer">
                        Learn More
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full sm:w-auto hover-elevate active-elevate-2" data-testid="button-get-quote-offer">
                        Get a Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Payroll Services */}
      <section className="py-24 md:py-32 relative">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(var(--primary-rgb),0.05)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-green-500/5 rounded-full border border-green-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-green-600 dark:text-green-400">Payroll Services</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Monthly Payroll Services</h2>
            <p className="text-lg text-muted-foreground">
              Professional payroll processing for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {payrollPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="hover-elevate transition-all duration-300 h-full border-2 hover:border-primary/50 bg-gradient-to-br from-green-500/5 to-card" data-testid={`payroll-package-${index}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        className="p-3 rounded-lg bg-green-500/10"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <pkg.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold">{pkg.name}</h3>
                        <p className="text-sm text-muted-foreground">{pkg.employees}</p>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1 mt-4">
                      <span className="text-4xl font-bold text-green-600 dark:text-green-400">{pkg.price}</span>
                      <span className="text-muted-foreground">per month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Divider Section 1 */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={businessValueImage} 
            alt="Business value and efficiency" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 via-green-500/80 to-blue-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-4xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Exceptional Value for Your Business</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Quality accounting services at competitive prices - invest in your business success
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Award className="w-5 h-5" />
                <span className="font-medium">Expert Service</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Shield className="w-5 h-5" />
                <span className="font-medium">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Star className="w-5 h-5" />
                <span className="font-medium">Fixed Pricing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Type Pricing */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-32 h-32 border-4 border-blue-500/30 rounded-full" />
          <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-green-500/30 rounded-lg rotate-45" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-blue-500/5 rounded-full border border-blue-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Accountancy & Taxation</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Accountancy & Taxation Services</h2>
            <p className="text-lg text-muted-foreground">
              Pricing based on your business structure and turnover
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessTypes.map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative"
              >
                <Card className={`hover-elevate transition-all duration-300 h-full border-2 ${
                  business.popular ? 'border-primary bg-gradient-to-br from-primary/10 to-primary/5 shadow-xl' : 'hover:border-primary/50 bg-gradient-to-br from-blue-500/5 to-card'
                }`} data-testid={`business-type-${index}`}>
                  {business.popular && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg"
                    >
                      Most Popular
                    </motion.div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        className={`p-3 rounded-lg ${business.popular ? 'bg-primary text-primary-foreground' : 'bg-blue-500/10'}`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <business.icon className={`h-6 w-6 ${business.popular ? '' : 'text-blue-600 dark:text-blue-400'}`} />
                      </motion.div>
                      <h3 className="text-xl font-bold">{business.type}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {business.tiers.map((tier, idx) => (
                        <div key={idx} className="flex justify-between items-center pb-3 border-b last:border-b-0">
                          <span className="text-sm text-muted-foreground">{tier.turnover}</span>
                          <span className="font-bold">{tier.price}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 rounded-lg bg-blue-500/10"
                  >
                    <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">What's Included in All Prices</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {includedInPrice.map((item, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Image Divider Section 2 */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={consultationImage} 
            alt="Professional consultation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-500/80 to-purple-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Consultation Included</h2>
            <p className="text-lg text-white/90">
              Free initial consultation to find the perfect package for your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-purple-500/5 rounded-full border border-purple-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Additional Services</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground">
              Flexible add-ons to customize your accounting package
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="hover-elevate transition-all duration-300 h-full border-2 hover:border-primary/50 bg-gradient-to-br from-purple-500/5 to-card" data-testid={`additional-service-${index}`}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <motion.div 
                        className="p-2 rounded-lg bg-purple-500/10"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{service.service}</h3>
                        <p className="text-xs text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">{service.price}</span>
                      <span className="text-sm text-muted-foreground">/ {service.period}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Divider Section 3 */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={successImage} 
            alt="Financial success and growth" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-purple-500/80 to-green-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-4xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Invest in Your Success</h2>
            <p className="text-lg md:text-xl text-white/90">
              Quality accounting services that help your business thrive and grow
            </p>
          </motion.div>
        </div>
      </section>

      {/* Umbrella Services */}
      <section className="py-24 relative bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-card border-2 border-purple-500/20 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
              <CardContent className="p-8 md:p-12 relative">
                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    className="p-3 rounded-lg bg-purple-500/10"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Briefcase className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </motion.div>
                  <div>
                    <h2 className="text-3xl font-bold mb-3">Umbrella & Agency Payroll Services</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Professional payroll management for contractors and agency workers
                    </p>
                    <div className="inline-flex items-baseline gap-2 bg-background/50 backdrop-blur-sm rounded-lg px-6 py-4 border border-purple-500/20">
                      <span className="text-5xl font-bold text-purple-600 dark:text-purple-400">£20</span>
                      <span className="text-lg text-muted-foreground">per week</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Fee margin for comprehensive umbrella and agency payroll services
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Solicitors Notice */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-amber-500/5 to-background" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-2 border-amber-500/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-3">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 rounded-lg bg-amber-500/10"
                  >
                    <Scale className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Note for Solicitors</h3>
                    <p className="text-muted-foreground">
                      Add 100% of the fee for solicitor reports requiring professional opinion or detailed analysis. 
                      Our specialized legal accounting services ensure full compliance with SRA regulations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 relative bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-primary/10 via-green-500/10 to-blue-500/10 border-2 border-primary/20 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl" />
              <CardContent className="p-8 md:p-12 relative">
                <div className="text-center mb-8">
                  <motion.div 
                    className="inline-block mb-4 px-4 py-2 bg-background/50 backdrop-blur-sm rounded-full border border-primary/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm font-medium text-primary flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Package Inclusions
                    </span>
                  </motion.div>
                  <h2 className="text-3xl font-bold mb-4">Standard Package Inclusions</h2>
                  <p className="text-muted-foreground">
                    Every package includes these essential services
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    "Free initial consultation",
                    "Secure cloud accounting software",
                    "Regular financial updates",
                    "Proactive tax planning",
                    "HMRC correspondence handling",
                    "No long-term contracts"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      className="flex items-start gap-2 p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="border-t pt-6">
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Important:</strong> These fees should be used as a guide only. All prices exclude VAT (20% if applicable).
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Bespoke packages available for larger businesses and specific requirements. Contact us on <a href="tel:02085144953" className="text-primary hover:underline font-medium" data-testid="link-phone-contact-footer">0208 5144953</a> for a tailored quote.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Questions About Pricing?"
        description="Not sure which package is right for you? Get in touch and we'll help you find the perfect solution."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </div>
  );
}
