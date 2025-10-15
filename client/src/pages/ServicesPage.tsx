import { Calculator, FileText, Users, Building2, ShieldCheck, PieChart, TrendingUp, Briefcase, Home, Scale, DollarSign, Banknote, BookOpen, Handshake, LineChart } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

import taxImage from "@assets/stock_images/business_person_anal_2e0a2ff2.jpg";
import dataImage from "@assets/stock_images/digital_technology_d_8c488575.jpg";
import strategyImage from "@assets/stock_images/modern_business_team_876904bd.jpg";
import growthImage from "@assets/stock_images/business_growth_succ_97d5375f.jpg";
import complianceImage from "@assets/stock_images/compliance_audit_doc_4d2a5d70.jpg";
import calculatorImage from "@assets/stock_images/calculator_financial_6f3333eb.jpg";

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
    blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400" },
    green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400" },
    orange: { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400" },
    red: { bg: "bg-red-500/10", text: "text-red-600 dark:text-red-400" },
    teal: { bg: "bg-teal-500/10", text: "text-teal-600 dark:text-teal-400" }
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
      icon: Home,
      title: "Residential & Commercial Mortgages",
      description: "Authorized by the Financial Services Authority to conduct residential mortgage business. Rochvilles Financial Services advises on whole-of-market mortgages and insurance mediations.",
      features: ["Whole market advice", "FSA authorized", "Mortgage applications", "Insurance mediation"],
      color: "purple" as keyof typeof colorClasses
    },
    {
      icon: TrendingUp,
      title: "Business Start Up",
      description: "Comprehensive start-up support to ensure you don't leap into the unknown. Guidance on business structure, tax efficiency, HMRC dealings, accounting records, legislation compliance, and authority registration.",
      features: ["Structure selection", "Business registration", "Tax setup", "Compliance guidance"],
      color: "orange" as keyof typeof colorClasses
    },
    {
      icon: Calculator,
      title: "VAT and Capital Gains Tax",
      description: "Expert VAT registration, returns, and capital gains tax planning. We ensure compliance while maximizing available reliefs and exemptions including taper relief, indexation allowance, and annual exemptions.",
      features: ["VAT registration", "Quarterly returns", "CGT planning", "Relief optimization"],
      color: "red" as keyof typeof colorClasses
    },
    {
      icon: ShieldCheck,
      title: "Due Diligence",
      description: "In-depth business analysis for acquisitions. Three-year performance review, income/expenditure verification, P&L and balance sheet checks, with expert opinion on future viability.",
      features: ["Performance analysis", "Financial verification", "Viability assessment", "Expert reporting"],
      color: "teal" as keyof typeof colorClasses
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
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-24 md:py-32 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-0 right-0"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl bottom-0 left-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Comprehensive Accounting Solutions</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Expert accounting and business services designed to support your success. 
              From tax planning to payroll, we provide tailored solutions for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional services delivered with expertise and care
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
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="border-2 hover:border-primary/50 transition-all duration-300 h-full" data-testid={`core-service-${index}`}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
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

      {/* Specialist Services */}
      <section className="bg-muted/30 py-24 md:py-32 relative overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl bottom-0 right-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Specialist Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise for specific business needs
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
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="border-2 hover:border-primary/50 transition-all duration-300 h-full" data-testid={`specialist-service-${index}`}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${colorClasses[service.color].bg}`}>
                        <service.icon className={`h-5 w-5 ${colorClasses[service.color].text}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-primary"></span>
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

      {/* Detailed Service Information */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Service Details</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth information about our key service offerings
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
                <Card className="border-2 hover:border-primary/50 transition-all duration-300" data-testid={`detailed-service-${index}`}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.content}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </div>
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

      {/* Additional Services */}
      <section className="bg-muted/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extended service offerings for comprehensive business support
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
                whileHover={{ scale: 1.05 }}
              >
                <Card className="hover-elevate transition-all duration-300 h-full" data-testid={`additional-service-${index}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <service.icon className="h-4 w-4 text-primary" />
                      </div>
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
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Commitment to You</h2>
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
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
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
