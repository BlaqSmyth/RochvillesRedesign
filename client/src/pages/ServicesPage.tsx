import { Calculator, FileText, Users, Building2, ShieldCheck, PieChart, TrendingUp, Briefcase, Home, Scale, DollarSign, Banknote, BookOpen, Handshake, LineChart, Sparkles, Award, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

import accountingTeamImage from "@assets/stock_images/professional_account_056a0694.jpg";
import financialPlanningImage from "@assets/stock_images/business_financial_p_af4632a3.jpg";
import officeWorkspaceImage from "@assets/stock_images/modern_accounting_of_d8580445.jpg";
import consultationImage from "@assets/stock_images/professional_busines_167f51bd.jpg";

export default function ServicesPage() {
  const coreServices = [
    {
      icon: Calculator,
      title: "Accountancy Services",
      description: "Complete accounting preparation and taxation services. We ensure your accounts and self-assessment are completed on time, well before filing deadlines. We use historical accounts as vital tools for planning your future and assessing areas requiring attention.",
      features: ["Annual accounts preparation", "Tax returns", "Financial analysis", "Strategic planning"]
    },
    {
      icon: Building2,
      title: "Corporation Tax",
      description: "Expert tax planning to save thousands legitimately. We handle all routine tax work ensuring returns are submitted well before deadlines. Fellows of the Federation of Tax Advisors guarantee you receive the best tax advice possible.",
      features: ["Tax planning", "Corporation tax returns", "Self-assessment", "HMRC liaison"]
    },
    {
      icon: Handshake,
      title: "Mergers & Acquisitions",
      description: "We help you buy or sell a business quickly and easily at the best possible price. Whether retirement, new challenges, or strategic change, we're committed to making the process painless.",
      features: ["Business valuations", "Broker services", "Due diligence", "Deal structuring"]
    },
    {
      icon: DollarSign,
      title: "Fund Raising",
      description: "Your success is our success. We assist clients to source the best possible funding available to meet day-to-day working capital and run businesses efficiently.",
      features: ["Funding applications", "Working capital solutions", "Investment sourcing", "Financial planning"]
    },
    {
      icon: Building2,
      title: "Company Formation",
      description: "Company formation agent service with 24-hour setup. Off-the-shelf or same-day company formation, or custom name within seven working days. Includes memorandum of association, nominee secretary, and registered office services.",
      features: ["24-hour formation", "Custom company names", "Registered office", "Nominee secretary"]
    },
    {
      icon: FileText,
      title: "Personal Tax",
      description: "Self-assessment has placed greater burden on taxpayers. We deal with HMRC on your behalf, ensuring compliance with tax and accounting rules while minimizing your tax bill to the best possible terms.",
      features: ["Self-assessment returns", "Tax planning", "HMRC representation", "Tax optimization"]
    }
  ];

  const colorClasses = {
    blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20", gradient: "from-blue-500/20 to-blue-500/5" },
    green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/20", gradient: "from-green-500/20 to-green-500/5" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/20", gradient: "from-purple-500/20 to-purple-500/5" },
    orange: { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20", gradient: "from-orange-500/20 to-orange-500/5" },
    red: { bg: "bg-red-500/10", text: "text-red-600 dark:text-red-400", border: "border-red-500/20", gradient: "from-red-500/20 to-red-500/5" },
    teal: { bg: "bg-teal-500/10", text: "text-teal-600 dark:text-teal-400", border: "border-teal-500/20", gradient: "from-teal-500/20 to-teal-500/5" }
  };

  const specialistServices = [
    {
      icon: Users,
      title: "Payroll Bureau",
      description: "Life becomes complex when hiring your first employee. We relieve you of the payroll burden, ensuring proper calculations and legal compliance. Experienced professionals handle all HMRC dealings and form submissions.",
      features: ["Monthly payroll processing", "RTI submissions", "HMRC compliance", "P11D preparation"],
      color: "blue" as keyof typeof colorClasses
    },
    {
      icon: BookOpen,
      title: "Bookkeeping",
      description: "Professional bookkeeping services to keep your financial records accurate and up-to-date. Regular reconciliation, transaction recording, and financial reporting.",
      features: ["Transaction recording", "Bank reconciliation", "VAT preparation", "Financial reports"],
      color: "green" as keyof typeof colorClasses
    },
    {
      icon: Building2,
      title: "Commercial Loan Brokerage",
      description: "Expert commercial finance solutions for businesses. We source competitive commercial loans and property finance to help your business grow and expand with confidence.",
      features: ["Commercial property loans", "Business expansion finance", "Asset finance", "Competitive rates"],
      color: "purple" as keyof typeof colorClasses
    },
    {
      icon: Banknote,
      title: "Bridging Finance",
      description: "Fast, flexible short-term financing solutions. Bridging loans for property purchases, development projects, and time-sensitive opportunities when quick access to capital is essential.",
      features: ["Rapid approvals", "Property bridging loans", "Development finance", "Flexible terms"],
      color: "orange" as keyof typeof colorClasses
    },
    {
      icon: TrendingUp,
      title: "Business Start Up",
      description: "Comprehensive start-up support to ensure you don't leap into the unknown. Guidance on business structure, tax efficiency, HMRC dealings, accounting records, legislation compliance, and authority registration.",
      features: ["Structure selection", "Business registration", "Tax setup", "Compliance guidance"],
      color: "red" as keyof typeof colorClasses
    },
    {
      icon: Calculator,
      title: "VAT and Capital Gains Tax",
      description: "Expert VAT registration, returns, and capital gains tax planning. We ensure compliance while maximizing available reliefs and exemptions including taper relief, indexation allowance, and annual exemptions.",
      features: ["VAT registration", "Quarterly returns", "CGT planning", "Relief optimization"],
      color: "teal" as keyof typeof colorClasses
    },
    {
      icon: ShieldCheck,
      title: "Due Diligence",
      description: "In-depth business analysis for acquisitions. Three-year performance review, income/expenditure verification, P&L and balance sheet checks, with expert opinion on future viability.",
      features: ["Performance analysis", "Financial verification", "Viability assessment", "Expert reporting"],
      color: "purple" as keyof typeof colorClasses
    }
  ];

  const additionalServices = [
    { icon: FileText, title: "Secretarial Services", description: "Company secretarial support and compliance services" },
    { icon: Building2, title: "Registered Office Address", description: "Professional registered office service" },
    { icon: LineChart, title: "Corporate Finance", description: "Strategic financial advice and planning" },
    { icon: ShieldCheck, title: "Insurance", description: "Business insurance and protection advice" },
    { icon: Briefcase, title: "Umbrella Company Services", description: "Comprehensive contractor umbrella services" },
    { icon: Users, title: "Agency Workers Payroll", description: "Specialist payroll for agency workers" },
    { icon: Calculator, title: "IT Contractors Payroll & Umbrella", description: "Dedicated IT contractor services" },
    { icon: Users, title: "NHS & Public Sector Umbrella", description: "Specialized NHS and public sector umbrella services" }
  ];

  const detailedServices = [
    {
      title: "Accounts Preparation & Taxation",
      icon: FileText,
      content: "Accounts preparation and taxation are part of our day-to-day activities at Rochvilles & Co. With the current regime of filing deadlines and penalties, timely service has become all the more important. We pride ourselves in getting our clients' accounts and self-assessment completed on time, well before their filing deadline.",
      highlights: [
        "Historical accounts as vital planning tools",
        "Assessment of business areas requiring attention",
        "Clear explanation of accounts and tax situation",
        "Prompt and efficient service delivery"
      ]
    },
    {
      title: "Business Plans & Start-ups",
      icon: TrendingUp,
      content: "When you decide to take that leap and start your own business, you need substantial preparations to ensure it's not a leap into the unknown. Failure to plan often means planning to fail. We guide you from beginning to end, including writing business plans, registering with authorities, and providing ongoing support.",
      highlights: [
        "Sole trader, partnership, or limited company guidance",
        "Tax efficiency decision support",
        "HMRC registration and dealings",
        "Legislation and regulation compliance"
      ]
    },
    {
      title: "Business Transfer Agent",
      icon: Handshake,
      content: "Expert in our field, if you're starting up and buying an existing business, we provide expert opinion, carry out due diligence, and report back. We take an in-depth look at three-year business performance, check all income and expenditure records including P&L and balance sheets.",
      highlights: [
        "Expert business valuation opinion",
        "Comprehensive due diligence",
        "Three-year performance analysis",
        "Viability assessment for foreseeable future"
      ]
    },
    {
      title: "Personal & Capital Gains Tax",
      icon: Scale,
      content: "Capital gains tax is payable by UK residents on asset disposals. Main exemptions include your only residence, private motor cars, chattels under £6,000, ISA shares, and gambling winnings. Various deductions apply including sale costs, original costs, capital losses, indexation allowance, taper relief, and annual exemptions.",
      highlights: [
        "Annual exemption (currently £8,500 for 2005/2006)",
        "Tax rates at 10%, 20%, or 40% based on income",
        "Payment due 31 January following assessment year",
        "Strategic planning for asset disposals"
      ]
    }
  ];

  return (
    <div className="relative overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-background" />
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-20 h-20 border-2 border-blue-500/30 rounded-lg rotate-12" />
          <div className="absolute top-40 left-20 w-16 h-16 border-2 border-purple-500/30 rounded-full" />
          <div className="absolute bottom-20 right-1/4 w-24 h-24 border-2 border-green-500/30 rounded-lg -rotate-12" />
        </div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl top-0 right-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2" data-testid="text-badge-services">
                  <Sparkles className="w-4 h-4" />
                  Our Services
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-testid="heading-services">
                Comprehensive Accounting Solutions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Expert accounting and business services designed to support your success. 
                From tax planning to payroll, we provide tailored solutions for businesses of all sizes.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-blue-500/10">
                  <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-sm font-medium">Fellows of Federation of Tax Advisors</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-purple-500/10">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <span className="text-sm font-medium">Timely Service Guarantee</span>
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
                  className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 rounded-2xl blur-2xl"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                  <img 
                    src={accountingTeamImage} 
                    alt="Professional accounting team" 
                    className="w-full h-auto"
                    data-testid="img-hero-accounting"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24 md:py-32 relative">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.05)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-primary/5 rounded-full border border-primary/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-primary">Core Services</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert services delivered with dedication and care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="hover-elevate transition-all duration-300 h-full border-2 hover:border-primary/50 bg-gradient-to-br from-primary/5 to-card" data-testid={`core-service-${index}`}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="p-3 rounded-lg bg-primary/10"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          {feature}
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
            src={financialPlanningImage} 
            alt="Financial planning meeting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-500/80 to-purple-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-4xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Strategic Financial Planning</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              We use historical accounts as vital planning tools for your future success
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Calculator className="w-5 h-5" />
                <span className="font-medium">Expert Analysis</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">Growth Focus</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Award className="w-5 h-5" />
                <span className="font-medium">Tax Advisors</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialist Services */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-32 h-32 border-4 border-blue-500/30 rounded-full" />
          <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-purple-500/30 rounded-lg rotate-45" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-purple-500/5 rounded-full border border-purple-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Specialist Services</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Specialized Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions for specific business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialistServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className={`hover-elevate transition-all duration-300 h-full border-2 ${colorClasses[service.color].border} bg-gradient-to-br ${colorClasses[service.color].gradient}`} data-testid={`specialist-service-${index}`}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <motion.div 
                        className={`p-2 rounded-lg ${colorClasses[service.color].bg}`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className={`h-5 w-5 ${colorClasses[service.color].text}`} />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                              <span className={`w-1 h-1 rounded-full ${colorClasses[service.color].text}`}></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Divider Section 2 */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={officeWorkspaceImage} 
            alt="Modern accounting office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-purple-500/80 to-green-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Modern Accounting Technology</h2>
            <p className="text-lg text-white/90">
              Leveraging the latest technology to deliver efficient and accurate accounting services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Service Information */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-green-500/5 to-background" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-green-500/5 rounded-full border border-green-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-green-600 dark:text-green-400">Service Details</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">In-Depth Service Information</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive details about our key service offerings
            </p>
          </motion.div>

          <div className="space-y-8">
            {detailedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="hover-elevate transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-green-500/5 to-card" data-testid={`detailed-service-${index}`}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        className="p-3 rounded-lg bg-green-500/10"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.content}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.highlights.map((highlight, idx) => (
                            <motion.div 
                              key={idx} 
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
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
            src={consultationImage} 
            alt="Professional business consultation" 
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Personalized Business Consultation</h2>
            <p className="text-lg md:text-xl text-white/90">
              Every business is unique - we provide tailored advice and solutions for your specific needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 relative bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Additional Services</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Extended Service Offerings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive business support across all areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <Card className="hover-elevate transition-all duration-300 h-full border-2 hover:border-primary/50 bg-gradient-to-br from-blue-500/5 to-card" data-testid={`additional-service-${index}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div 
                        className="p-2 rounded-lg bg-blue-500/10"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                      <h3 className="font-semibold text-sm">{service.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-primary/10 via-blue-500/10 to-purple-500/10 border-2 border-primary/20 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl" />
              <CardContent className="p-8 md:p-12 relative">
                <div className="text-center mb-8">
                  <motion.div 
                    className="inline-block mb-4 px-4 py-2 bg-background/50 backdrop-blur-sm rounded-full border border-primary/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm font-medium text-primary flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Our Commitment
                    </span>
                  </motion.div>
                  <h2 className="text-3xl font-bold mb-4">Our Commitment to You</h2>
                  <p className="text-muted-foreground">
                    We pride ourselves on delivering exceptional service across all areas
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Timely Service", desc: "Accounts and returns completed well before deadlines" },
                    { title: "Expert Guidance", desc: "Fellows of the Federation of Tax Advisors" },
                    { title: "Strategic Focus", desc: "Historical accounts used as planning tools" },
                    { title: "Full Support", desc: "From business start to growth and beyond" },
                    { title: "Compliance Assured", desc: "All legislation and regulations handled" },
                    { title: "Clear Communication", desc: "Full explanation of accounts and tax situations" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      className="flex items-start gap-3 p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Let's Discuss Your Needs"
        description="Every business is unique. Contact us for a personalized service package that fits your requirements and budget."
        buttonText="Get a Free Consultation"
        buttonHref="/contact"
      />
    </div>
  );
}
