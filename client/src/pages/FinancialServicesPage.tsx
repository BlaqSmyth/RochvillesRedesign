import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { TrendingUp, PiggyBank, Shield, LineChart, Users, Building, Home, Briefcase, FileCheck, Award, CheckCircle2, BadgeCheck, ArrowRight, Star, Sparkles } from "lucide-react";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import financialImage from "@assets/stock_images/financial_planning_i_9844cce1.jpg";
import advisorImage from "@assets/stock_images/professional_financi_9f6c56c8.jpg";
import cityImage from "@assets/stock_images/modern_office_buildi_b535312f.jpg";
import familyImage from "@assets/stock_images/happy_family_home_pl_6dcd5c2d.jpg";
import growthImage from "@assets/stock_images/investment_growth_ch_582e8251.jpg";

export default function FinancialServicesPage() {
  const coreServices = [
    {
      icon: Building,
      title: "Commercial Mortgages & Loan Brokerage",
      description: "Expert commercial finance solutions including commercial mortgages, loan brokerage, and bridging finance. We source the best commercial lending options to support your business growth and property investments.",
      features: [
        "Commercial property finance",
        "Commercial loan brokerage",
        "Bridging finance",
        "Business expansion loans",
        "Property portfolio finance",
        "Development finance"
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
    purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/20" },
    blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20" },
    green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/20" },
    red: { bg: "bg-red-500/10", text: "text-red-600 dark:text-red-400", border: "border-red-500/20" },
    orange: { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20" },
    teal: { bg: "bg-teal-500/10", text: "text-teal-600 dark:text-teal-400", border: "border-teal-500/20" }
  };

  const mortgageServices = [
    {
      title: "Commercial Mortgages",
      description: "Specialist commercial property finance for business owners and investors",
      items: ["Commercial property purchase", "Business premises finance", "Property portfolio loans", "Multi-unit commercial finance", "Investment property loans"],
      icon: Building
    },
    {
      title: "Commercial Loan Brokerage",
      description: "Expert brokerage services for business loans and commercial finance",
      items: ["Business expansion loans", "Working capital finance", "Equipment finance", "Asset-backed lending", "Commercial credit lines"],
      icon: Briefcase
    },
    {
      title: "Bridging Finance",
      description: "Fast, flexible short-term financing for time-sensitive opportunities",
      items: ["Property bridging loans", "Development bridging finance", "Auction finance", "Chain break solutions", "Refurbishment finance"],
      icon: Star
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Free no-obligation meeting to discuss your financial goals and current situation",
      icon: Users
    },
    {
      step: "2",
      title: "Financial Analysis",
      description: "Comprehensive review of your finances, identifying opportunities and risks",
      icon: LineChart
    },
    {
      step: "3",
      title: "Tailored Recommendations",
      description: "Personalized financial plan with clear, actionable recommendations",
      icon: FileCheck
    },
    {
      step: "4",
      title: "Implementation",
      description: "Expert guidance and support to implement your financial strategy",
      icon: Briefcase
    },
    {
      step: "5",
      title: "Ongoing Review",
      description: "Regular reviews to ensure your plan stays on track and adapts to life changes",
      icon: TrendingUp
    }
  ];

  const regulations = [
    {
      icon: BadgeCheck,
      title: "Professional Credentials",
      description: "Members of leading professional bodies including AIA and IFA, providing expert financial and accounting services with integrity"
    },
    {
      icon: Award,
      title: "Professional Qualifications",
      description: "Our advisors hold professional qualifications and undergo continuous professional development to stay current with regulations"
    },
    {
      icon: FileCheck,
      title: "Independent Advice",
      description: "We search the entire market to find the best commercial finance products and rates, not tied to any specific provider or lender"
    },
    {
      icon: Shield,
      title: "Client Protection",
      description: "Professional indemnity insurance and established complaint procedures ensure your interests are protected"
    }
  ];

  return (
    <div className="relative">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background" />
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-lg rotate-12" />
          <div className="absolute top-40 right-20 w-16 h-16 border-2 border-purple-500/20 rounded-full" />
          <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-blue-500/20 rounded-lg -rotate-12" />
        </div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-96 h-96 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl top-0 right-0"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full border border-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium text-primary flex items-center gap-2" data-testid="text-badge-financial-services">
                  <Sparkles className="w-4 h-4" />
                  Professional Financial Services
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent" data-testid="heading-rfs-title">
                Rochvilles Financial Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Professional financial planning, commercial finance, and wealth management services tailored to your unique circumstances. 
                Expert guidance for businesses and individuals across the United Kingdom.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">Commercial Finance Solutions</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-purple-500/10">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <span className="text-sm font-medium">Independent Financial Planning</span>
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
                  className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-2xl"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                  <img 
                    src={financialImage} 
                    alt="Financial planning" 
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                    data-testid="img-hero-financial"
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
              <span className="text-sm font-medium text-primary">Our Services</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="heading-core-services">Comprehensive Financial Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert commercial finance, business advisory, and wealth management services to help your business thrive and grow
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
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className={`border-2 ${colorClasses[service.color as keyof typeof colorClasses].border} hover:border-primary/50 transition-all duration-300 h-full bg-gradient-to-br from-card to-card/50 backdrop-blur-sm`} data-testid={`service-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <motion.div 
                        className={`p-3 rounded-xl ${colorClasses[service.color as keyof typeof colorClasses].bg} border ${colorClasses[service.color as keyof typeof colorClasses].border}`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className={`h-6 w-6 ${colorClasses[service.color as keyof typeof colorClasses].text}`} />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <ArrowRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colorClasses[service.color as keyof typeof colorClasses].text}`} />
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

      {/* Image Divider Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={advisorImage} 
            alt="Professional financial advisor" 
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            width="1920"
            height="600"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-purple-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-4xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Expert Financial Guidance You Can Trust</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Our professional advisors provide comprehensive financial planning and commercial finance solutions tailored to your unique goals
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <BadgeCheck className="w-5 h-5" />
                <span className="font-medium">Professional Service</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Award className="w-5 h-5" />
                <span className="font-medium">Professional Advisors</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Star className="w-5 h-5" />
                <span className="font-medium">Whole-of-Market</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mortgage Services Section */}
      <section className="py-24 md:py-32 relative bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Commercial Finance Expertise</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="heading-mortgage-services">Commercial Finance Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Expert commercial mortgage, loan brokerage, and bridging finance services for businesses. 
              We source competitive commercial lending solutions from across the market to support your business growth.
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
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover-elevate bg-gradient-to-br from-card via-card to-purple-500/5 border-2 border-purple-500/10" data-testid={`mortgage-category-${index}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-purple-500/10">
                        <category.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
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
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
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
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Regulation & Trust</span>
            </motion.div>
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
                whileHover={{ y: -8 }}
                className="text-center"
                data-testid={`regulation-card-${index}`}
              >
                <Card className="p-6 h-full border-2 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-primary/5">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 border-2 border-primary/20"
                  >
                    <item.icon className="h-8 w-8" />
                  </motion.div>
                  <h3 className="font-bold mb-3 text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Images */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-32 h-32 border-4 border-primary/30 rounded-full" />
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
              className="inline-block mb-4 px-4 py-2 bg-green-500/5 rounded-full border border-green-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-green-600 dark:text-green-400">Our Methodology</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="heading-process">Our 5-Step Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to financial planning that puts your needs first
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center"
                data-testid={`process-step-${index}`}
              >
                <Card className="p-6 h-full border-2 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-green-500/5">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-600 text-primary-foreground font-bold text-2xl mb-4 shadow-lg"
                  >
                    {item.step}
                  </motion.div>
                  <div className="mb-3">
                    <item.icon className="h-8 w-8 mx-auto text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Image Section */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={familyImage} 
            alt="Happy family planning their future" 
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            width="1920"
            height="500"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Building Financial Security for Families</h2>
            <p className="text-lg text-white/90">
              Helping families across Ilford, Essex, and London achieve their financial goals and secure their future
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-500/5 to-background" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10 border-2 border-primary/20 shadow-2xl overflow-hidden" data-testid="card-why-choose">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
              <CardContent className="p-8 md:p-12 relative">
                <div className="text-center mb-8">
                  <motion.div 
                    className="inline-block mb-4 px-4 py-2 bg-background/50 backdrop-blur-sm rounded-full border border-primary/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm font-medium text-primary flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Why Choose Us
                    </span>
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Rochvilles Financial Services?</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Professional Excellence",
                      desc: "Members of Association of International Accountants and Institute of Financial Accountants, providing expert financial services with the highest professional standards.",
                      icon: BadgeCheck
                    },
                    {
                      title: "Market-Wide Access",
                      desc: "We search the entire commercial lending market to find the best products and rates. Not tied to any lender or provider, ensuring truly independent advice.",
                      icon: Star
                    },
                    {
                      title: "Qualified Advisors",
                      desc: "Our team holds professional qualifications and undergoes continuous training to stay current with regulations and best practices.",
                      icon: Award
                    },
                    {
                      title: "Transparent Fees",
                      desc: "Clear, upfront fee structure with no hidden charges. You'll always know exactly what you're paying for our services.",
                      icon: FileCheck
                    },
                    {
                      title: "Holistic Approach",
                      desc: "We consider all aspects of your financial life, integrating mortgages, tax planning, investments, and protection into one cohesive strategy.",
                      icon: Sparkles
                    },
                    {
                      title: "Local Expertise",
                      desc: "Based in Ilford, Essex, serving London and the surrounding areas with personalized, face-to-face advice and ongoing support.",
                      icon: Building
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      className="p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10"
                      data-testid={`why-choose-item-${index}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="border-t border-primary/20 pt-6">
                  <p className="text-sm text-muted-foreground italic text-center">
                    Rochvilles Financial Services is a trading name of Rochvilles & Co. Commercial finance and business advisory services 
                    provided by qualified professional advisors. Members of Association of International Accountants and Institute of Financial Accountants.
                  </p>
                </div>
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
