import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { TrendingUp, PiggyBank, Shield, LineChart, Users, Building } from "lucide-react";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import financialImage from "@assets/stock_images/financial_planning_i_9844cce1.jpg";

export default function FinancialServicesPage() {
  const services = [
    {
      icon: PiggyBank,
      title: "Retirement Planning",
      description: "Comprehensive pension planning to secure your financial future. We help you maximize pension contributions, choose the right schemes, and plan for a comfortable retirement."
    },
    {
      icon: TrendingUp,
      title: "Investment Planning",
      description: "Strategic investment advice to grow your wealth. ISAs, investment bonds, and portfolio management tailored to your risk profile and financial goals."
    },
    {
      icon: Shield,
      title: "Protection & Insurance",
      description: "Safeguard your family and business with appropriate insurance coverage. Life insurance, critical illness cover, and business protection policies."
    },
    {
      icon: LineChart,
      title: "Wealth Management",
      description: "Holistic wealth management services for high net worth individuals. Estate planning, tax-efficient investing, and generational wealth transfer."
    },
    {
      icon: Users,
      title: "Corporate Financial Planning",
      description: "Strategic financial planning for business owners. Director pension schemes, profit extraction strategies, and succession planning."
    },
    {
      icon: Building,
      title: "Mortgage & Property",
      description: "Mortgage advice and property investment planning. Buy-to-let mortgages, commercial property finance, and portfolio optimization."
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
                <span className="text-sm font-medium text-primary flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Financial Services
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Rochvilles Financial Services (RFS)</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Professional financial planning and wealth management services. We help you build, protect, 
                and grow your wealth with expert advice tailored to your unique circumstances.
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
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Financial Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial planning solutions to help you achieve your goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="hover-elevate transition-all duration-300 h-full border-2 hover:border-primary/50 hover:shadow-xl" data-testid={`service-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0"
                      >
                        <service.icon className="h-6 w-6" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
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
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Why Choose RFS?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  {[
                    {
                      title: "Independent Advice",
                      desc: "We're not tied to any product providers, ensuring truly independent recommendations that serve your best interests."
                    },
                    {
                      title: "Qualified Advisors",
                      desc: "Our team holds professional qualifications and undergoes regular training to stay current with regulations and best practices."
                    },
                    {
                      title: "Holistic Approach",
                      desc: "We consider all aspects of your financial life, integrating tax planning, investments, and protection into one cohesive strategy."
                    },
                    {
                      title: "Transparent Fees",
                      desc: "Clear, upfront fee structure with no hidden charges. You'll always know exactly what you're paying for our services."
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Rochvilles Financial Services is a trading name of Rochvilles & Co. Financial advice is provided 
                  by qualified and regulated financial advisors.
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
