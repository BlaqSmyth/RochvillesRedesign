import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { TrendingUp, PiggyBank, Shield, LineChart, Users, Building, Home, Briefcase, FileCheck, Award, CheckCircle2, BadgeCheck, ArrowRight, Star, Sparkles, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import { motion, useScroll } from "framer-motion";
import { StatCard } from "@/components/StatCard";
import { useState, useEffect } from "react";
import financialImage from "@assets/stock_images/financial_planning_i_9844cce1.jpg";
import advisorImage from "@assets/stock_images/professional_financi_9f6c56c8.jpg";
import familyImage from "@assets/stock_images/happy_family_home_pl_6dcd5c2d.jpg";
import testimonial1 from "@assets/stock_images/professional_headsho_1cc53ea0.jpg";
import testimonial2 from "@assets/stock_images/professional_headsho_ad3a003d.jpg";
import testimonial3 from "@assets/stock_images/professional_headsho_43ccae4f.jpg";

export default function FinancialServicesPage() {
  const { scrollYProgress } = useScroll();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
    purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/20" },
    blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20" },
    green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/20" },
    red: { bg: "bg-red-500/10", text: "text-red-600 dark:text-red-400", border: "border-red-500/20" },
    orange: { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20" },
    teal: { bg: "bg-teal-500/10", text: "text-teal-600 dark:text-teal-400", border: "border-teal-500/20" }
  };

  const mortgageServices = [
    {
      title: "Residential Mortgages",
      description: "Comprehensive residential mortgage advice for homeowners and first-time buyers",
      items: ["First-time buyer mortgages", "Remortgages", "Moving home", "Buy-to-let", "Help to Buy schemes"],
      icon: Home
    },
    {
      title: "Commercial Mortgages",
      description: "Specialist commercial property finance for business owners and investors",
      items: ["Commercial property purchase", "Business premises finance", "Property portfolio loans", "Bridging finance", "Development finance"],
      icon: Building
    },
    {
      title: "Specialist Mortgages",
      description: "Tailored mortgage solutions for unique circumstances and requirements",
      items: ["Self-employed mortgages", "Contractor mortgages", "Adverse credit mortgages", "Large loan mortgages", "Interest-only mortgages"],
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

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "First-Time Buyer",
      image: testimonial1,
      rating: 5,
      text: "Rochvilles made buying our first home stress-free. Their whole-of-market approach saved us thousands on our mortgage. Highly recommended!"
    },
    {
      name: "James Thompson",
      role: "Business Owner",
      image: testimonial2,
      rating: 5,
      text: "Excellent financial planning service. They helped restructure my business finances and personal pension. Professional and knowledgeable team."
    },
    {
      name: "Emily Carter",
      role: "Property Investor",
      image: testimonial3,
      rating: 5,
      text: "Outstanding mortgage advice for my property portfolio. Their FSA-authorized advisors found the best commercial rates available. Fantastic service!"
    }
  ];

  const stats = [
    { label: "Years Experience", value: 25, suffix: "+" },
    { label: "Happy Clients", value: 500, suffix: "+" },
    { label: "Mortgages Arranged", value: 50, prefix: "£", suffix: "M+" },
    { label: "Client Satisfaction", value: 98, suffix: "%" }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-600 to-blue-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
        data-testid="scroll-progress-indicator"
      />

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background" />
        
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
                  FSA Authorized Financial Services
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent" data-testid="heading-rfs-title">
                Rochvilles Financial Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Authorized by the Financial Services Authority to provide whole-of-market financial advice. 
                Professional financial planning, mortgage services, and wealth management tailored to your unique circumstances.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">Whole-of-Market Mortgage Advice</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-purple-500/10">
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
                    data-testid="img-hero-financial"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-blue-500/5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                label={stat.label}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24 md:py-32 relative">
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
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className={`border-2 ${colorClasses[service.color as keyof typeof colorClasses].border} hover:border-primary/50 transition-all duration-300 h-full bg-card/50 backdrop-blur-sm`} data-testid={`service-card-${index}`}>
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
              Our FSA-authorized advisors provide whole-of-market financial planning tailored to your unique goals
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <BadgeCheck className="w-5 h-5" />
                <span className="font-medium">FSA Authorized</span>
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

      {/* Testimonials Carousel Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-primary/5 rounded-full border border-primary/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-primary">Client Success Stories</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="heading-testimonials">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Trusted by hundreds of families across Ilford, Essex, and London
            </p>
          </motion.div>

          <div className="relative">
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-md border-2 border-primary/20 shadow-2xl" data-testid="testimonial-carousel">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20">
                      <img 
                        src={testimonials[activeTestimonial].image} 
                        alt={testimonials[activeTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                      <Quote className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  key={`content-${activeTestimonial}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex-1 text-center md:text-left"
                >
                  <div className="flex gap-1 mb-4 justify-center md:justify-start">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic text-muted-foreground">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <div>
                    <p className="font-bold text-lg">{testimonials[activeTestimonial].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].role}</p>
                  </div>
                </motion.div>
              </div>

              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  data-testid="button-testimonial-prev"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeTestimonial ? 'bg-primary w-8' : 'bg-primary/30'
                      }`}
                      data-testid={`button-testimonial-dot-${index}`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  data-testid="button-testimonial-next"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </Card>
          </div>
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
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Mortgage Expertise</span>
            </motion.div>
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
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover-elevate bg-card/50 backdrop-blur-sm border-2 border-purple-500/10" data-testid={`mortgage-category-${index}`}>
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
                <Card className="p-6 h-full border-2 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm">
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
                <Card className="p-6 h-full border-2 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm">
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
            <Card className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10 border-2 border-primary/20 shadow-2xl overflow-hidden backdrop-blur-sm" data-testid="card-why-choose">
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
                      title: "FSA Authorized",
                      desc: "Fully authorized by the Financial Services Authority to provide mortgage and investment advice. Your protection is guaranteed through FCA regulation.",
                      icon: BadgeCheck
                    },
                    {
                      title: "Whole-of-Market Access",
                      desc: "We search the entire market to find the best products and rates. Not tied to any lender or provider, ensuring truly independent advice.",
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
                    Rochvilles Financial Services is a trading name of Rochvilles & Co. Financial advice is provided 
                    by qualified and regulated financial advisors. Rochvilles Financial Services is authorized by the 
                    Financial Services Authority to conduct residential mortgage business and insurance mediation activities.
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
