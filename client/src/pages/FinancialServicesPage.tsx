import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { TrendingUp, PiggyBank, Shield, LineChart, Users, Building, Home, Briefcase, FileCheck, Award, CheckCircle2, BadgeCheck } from "lucide-react";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import financialImage from "@assets/stock_images/financial_planning_i_9844cce1.jpg";

export default function FinancialServicesPage() {
  const coreServices = [
    {
      icon: Home,
      title: "Residential & Commercial Mortgages",
      description: "Authorized by the Financial Services Authority to conduct residential mortgage business. We provide whole-of-market mortgage advice, ensuring you get the best deal available.",
      features: [
        "Whole-of-market mortgage advice",
        "First-time buyer mortgages",
        "Remortgage services",
        "Buy-to-let mortgages",
        "Commercial property finance",
        "Mortgage protection insurance"
      ],
      color: "purple"
    },
    {
      icon: PiggyBank,
      title: "Retirement & Pension Planning",
      description: "Comprehensive pension planning to secure your financial future. Maximize pension contributions, choose optimal schemes, and plan for a comfortable retirement.",
      features: [
        "Personal pension schemes",
        "Workplace pension optimization",
        "Pension consolidation",
        "Retirement income planning",
        "Annuity advice",
        "Pension tax efficiency"
      ],
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Investment Planning",
      description: "Strategic investment advice to grow your wealth. ISAs, investment bonds, and portfolio management tailored to your risk profile and financial goals.",
      features: [
        "ISA planning & management",
        "Investment bonds",
        "Portfolio diversification",
        "Tax-efficient investing",
        "Risk assessment",
        "Regular portfolio reviews"
      ],
      color: "green"
    },
    {
      icon: Shield,
      title: "Protection & Insurance",
      description: "Safeguard your family and business with appropriate insurance coverage. Comprehensive protection planning for all life stages.",
      features: [
        "Life insurance",
        "Critical illness cover",
        "Income protection",
        "Family protection",
        "Business protection",
        "Key person insurance"
      ],
      color: "red"
    },
    {
      icon: LineChart,
      title: "Wealth Management",
      description: "Holistic wealth management services for high net worth individuals. Estate planning, tax-efficient investing, and generational wealth transfer.",
      features: [
        "Estate planning",
        "Inheritance tax planning",
        "Generational wealth transfer",
        "Investment portfolio management",
        "Tax mitigation strategies",
        "Trust & estate services"
      ],
      color: "orange"
    },
    {
      icon: Briefcase,
      title: "Corporate Financial Planning",
      description: "Strategic financial planning for business owners and directors. Optimize your business finances and personal wealth simultaneously.",
      features: [
        "Director pension schemes",
        "Profit extraction strategies",
        "Succession planning",
        "Share schemes",
        "Corporate investments",
        "Exit planning"
      ],
      color: "teal"
    }
  ];

  const colorClasses = {
    purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400" },
    blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400" },
    green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400" },
    red: { bg: "bg-red-500/10", text: "text-red-600 dark:text-red-400" },
    orange: { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400" },
    teal: { bg: "bg-teal-500/10", text: "text-teal-600 dark:text-teal-400" }
  };

  const mortgageServices = [
    {
      title: "Residential Mortgages",
      description: "Comprehensive residential mortgage advice for homeowners and first-time buyers",
      items: ["First-time buyer mortgages", "Remortgages", "Moving home", "Buy-to-let", "Help to Buy schemes"]
    },
    {
      title: "Commercial Mortgages",
      description: "Specialist commercial property finance for business owners and investors",
      items: ["Commercial property purchase", "Business premises finance", "Property portfolio loans", "Bridging finance", "Development finance"]
    },
    {
      title: "Specialist Mortgages",
      description: "Tailored mortgage solutions for unique circumstances and requirements",
      items: ["Self-employed mortgages", "Contractor mortgages", "Adverse credit mortgages", "Large loan mortgages", "Interest-only mortgages"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Free no-obligation meeting to discuss your financial goals and current situation"
    },
    {
      step: "2",
      title: "Financial Analysis",
      description: "Comprehensive review of your finances, identifying opportunities and risks"
    },
    {
      step: "3",
      title: "Tailored Recommendations",
      description: "Personalized financial plan with clear, actionable recommendations"
    },
    {
      step: "4",
      title: "Implementation",
      description: "Expert guidance and support to implement your financial strategy"
    },
    {
      step: "5",
      title: "Ongoing Review",
      description: "Regular reviews to ensure your plan stays on track and adapts to life changes"
    }
  ];

  const regulations = [
    {
      icon: BadgeCheck,
      title: "FSA Authorized",
      description: "Authorized by the Financial Services Authority to conduct residential mortgage business and provide regulated financial advice"
    },
    {
      icon: Award,
      title: "Professional Qualifications",
      description: "Our advisors hold professional qualifications and undergo continuous professional development to stay current with regulations"
    },
    {
      icon: FileCheck,
      title: "Whole-of-Market Advice",
      description: "We search the entire market to find the best products and rates, not tied to any specific provider or lender"
    },
    {
      icon: Shield,
      title: "Client Protection",
      description: "Full FCA regulation ensures your interests are protected with professional indemnity insurance and complaint procedures"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-24 md:py-32 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-0 left-0"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary flex items-center gap-2" data-testid="text-badge-financial-services">
                  <TrendingUp className="w-4 h-4" />
                  FSA Authorized Financial Services
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="heading-rfs-title">Rochvilles Financial Services (RFS)</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Authorized by the Financial Services Authority to provide whole-of-market financial advice. 
                Professional financial planning, mortgage services, and wealth management tailored to your unique circumstances.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Whole-of-Market Mortgage Advice</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Independent Financial Planning</span>
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
                    scale: [1, 1.1, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{ duration: 15, repeat: Infinity }}
                  className="absolute -inset-6 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-3xl"
                />
                <img 
                  src={financialImage} 
                  alt="Financial planning" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                  data-testid="img-hero-financial"
                />
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="heading-core-services">Comprehensive Financial Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert financial planning and mortgage advice to help you build, protect, and grow your wealth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="border-2 hover:border-primary/50 transition-all duration-300 h-full" data-testid={`service-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${colorClasses[service.color as keyof typeof colorClasses].bg}`}>
                        <service.icon className={`h-5 w-5 ${colorClasses[service.color as keyof typeof colorClasses].text}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
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

      {/* Mortgage Services Section */}
      <section className="bg-muted/30 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="heading-mortgage-services">Whole-of-Market Mortgage Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As an FSA authorized firm, we provide independent mortgage advice across the entire market. 
              We're not tied to any lender, ensuring you get the best rates and products available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mortgageServices.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover-elevate" data-testid={`mortgage-category-${index}`}>
                  <CardHeader>
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
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

      {/* Regulation & Authorization Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="heading-regulation">Regulation & Authorization</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your protection and peace of mind are our priorities. We operate under strict regulatory standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regulations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
                data-testid={`regulation-card-${index}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4"
                >
                  <item.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 py-24 md:py-32 relative overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="heading-process">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to financial planning that puts your needs first
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center"
                data-testid={`process-step-${index}`}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4 shadow-lg"
                >
                  {item.step}
                </motion.div>
                <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 shadow-2xl" data-testid="card-why-choose">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Why Choose Rochvilles Financial Services?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  {[
                    {
                      title: "FSA Authorized",
                      desc: "Fully authorized by the Financial Services Authority to provide mortgage and investment advice. Your protection is guaranteed through FCA regulation."
                    },
                    {
                      title: "Whole-of-Market Access",
                      desc: "We search the entire market to find the best products and rates. Not tied to any lender or provider, ensuring truly independent advice."
                    },
                    {
                      title: "Qualified Advisors",
                      desc: "Our team holds professional qualifications and undergoes continuous training to stay current with regulations and best practices."
                    },
                    {
                      title: "Transparent Fees",
                      desc: "Clear, upfront fee structure with no hidden charges. You'll always know exactly what you're paying for our services."
                    },
                    {
                      title: "Holistic Approach",
                      desc: "We consider all aspects of your financial life, integrating mortgages, tax planning, investments, and protection into one cohesive strategy."
                    },
                    {
                      title: "Local Expertise",
                      desc: "Based in Ilford, Essex, serving London and the surrounding areas with personalized, face-to-face advice and ongoing support."
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      data-testid={`why-choose-item-${index}`}
                    >
                      <h3 className="font-semibold mb-2 text-lg flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic border-t pt-6">
                  Rochvilles Financial Services is a trading name of Rochvilles & Co. Financial advice is provided 
                  by qualified and regulated financial advisors. Rochvilles Financial Services is authorized by the 
                  Financial Services Authority to conduct residential mortgage business and insurance mediation activities.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Start Your Financial Journey"
        description="Book a free consultation to discuss your financial goals and discover how we can help you achieve them."
        buttonText="Book Free Consultation"
        buttonHref="/contact"
      />
    </div>
  );
}
