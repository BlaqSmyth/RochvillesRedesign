import ParallaxHero from "@/components/ParallaxHero";
import AnimatedServiceCard from "@/components/AnimatedServiceCard";
import AnimatedStatsSection from "@/components/AnimatedStatsSection";
import InteractiveTaxCalculator from "@/components/InteractiveTaxCalculator";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollProgress from "@/components/ScrollProgress";
import TrustBadges from "@/components/TrustBadges";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, FileText, Users, ShieldCheck, TrendingUp, Briefcase, Award, Clock, Target, Heart } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import taxImage from "@assets/stock_images/business_person_anal_2e0a2ff2.jpg";
import strategyImage from "@assets/stock_images/modern_business_team_876904bd.jpg";
import dataImage from "@assets/stock_images/digital_technology_d_8c488575.jpg";
import growthImage from "@assets/stock_images/business_growth_succ_97d5375f.jpg";
import contractorImage from "@assets/stock_images/freelancer_contracto_09d92917.jpg";
import complianceImage from "@assets/stock_images/compliance_audit_doc_4d2a5d70.jpg";
import teamCelebrationImage from "@assets/stock_images/diverse_business_tea_09553b19.jpg";
import whyChooseUsImage from "@assets/qualifications_664632699-web_1760484365191.jpg";
import ourApproachImage from "@assets/istockphoto-2171857890-612x612_1760484996229.jpg";

export default function HomePage() {
  const servicesRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const services = [
    {
      icon: Calculator,
      title: "Tax Planning & Returns",
      description: "Expert tax planning to minimize your liability while ensuring full HMRC compliance. We handle all types of tax returns for individuals and businesses.",
      href: "/services",
      image: taxImage,
      popular: true
    },
    {
      icon: FileText,
      title: "Bookkeeping & Accounts",
      description: "Comprehensive bookkeeping services and statutory accounts preparation. Keep your financial records accurate and up-to-date.",
      href: "/services",
      image: dataImage,
      popular: false
    },
    {
      icon: Users,
      title: "Payroll Services",
      description: "Efficient payroll processing, RTI submissions, and pension scheme administration. We ensure your employees are paid accurately and on time.",
      href: "/services",
      image: strategyImage,
      popular: false
    },
    {
      icon: Briefcase,
      title: "Contractor Accounting",
      description: "Specialized accounting for contractors and freelancers. IR35 compliance, limited company management, and optimal tax structures.",
      href: "/contractors-guide",
      image: contractorImage,
      popular: true
    },
    {
      icon: ShieldCheck,
      title: "Compliance & Audit",
      description: "Ensure your business meets all regulatory requirements. Audit support, compliance reviews, and statutory filings.",
      href: "/compliance",
      image: complianceImage,
      popular: false
    },
    {
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Strategic financial advice to help your business grow. Investment planning, retirement planning, and wealth management.",
      href: "/financial-services",
      image: growthImage,
      popular: false
    }
  ];

  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "20+", label: "Years Experience" },
    { value: "£5M+", label: "Tax Savings" },
    { value: "100%", label: "Compliance Rate" }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expert Team",
      description: "Our qualified accountants have extensive experience across all small to medium enterprise (SME) businesses."
    },
    {
      icon: Clock,
      title: "Proactive Service",
      description: "We don't just respond to your needs - we anticipate them and provide strategic advice year-round."
    },
    {
      icon: Target,
      title: "Transparent Pricing",
      description: "No hidden fees. Clear, competitive pricing structures tailored to your business needs."
    },
    {
      icon: Heart,
      title: "Technology Driven",
      description: "Modern cloud-based systems for real-time financial insights and seamless collaboration."
    }
  ];

  return (
    <div>
      <ScrollProgress />
      <ParallaxHero />
      
      <AnimatedStatsSection stats={stats} />
      
      <TrustBadges />

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 md:py-32 relative overflow-hidden">
        {/* Parallax background decoration */}
        <motion.div 
          style={{ y: parallaxY }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive accounting and financial services tailored to your business needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedServiceCard key={index} {...service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                asChild
                className="shadow-lg"
                data-testid="button-view-all-services"
              >
                <a href="/services">
                  View All Services
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Magazine Style Split Screen */}
      <section className="bg-background py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Rochvilles & Co?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're more than just accountants - we're your trusted financial partners committed to your success.
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <Card className="hover-elevate transition-all duration-300 border-2 hover:border-primary/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0"
                          >
                            <item.icon className="h-6 w-6" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                {/* Animated gradient blob */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 0]
                  }}
                  transition={{ duration: 15, repeat: Infinity }}
                  className="absolute -inset-8 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-3xl"
                />
                
                <motion.img 
                  src={whyChooseUsImage} 
                  alt="Team collaboration and financial planning" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Approach Section with Parallax */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, -180, 0]
                  }}
                  transition={{ duration: 18, repeat: Infinity }}
                  className="absolute -inset-8 bg-gradient-to-l from-primary/10 to-primary/20 rounded-3xl blur-3xl"
                />
                
                <motion.img 
                  src={ourApproachImage} 
                  alt="Modern technology-driven accounting with real-time financial insights" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">Our Approach</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Modern Accounting for Modern Business</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We combine traditional expertise with cutting-edge technology to deliver accounting services 
                that truly make a difference to your business.
              </p>
              <p className="text-muted-foreground mb-8">
                Our cloud-based systems give you real-time access to your financial data, while our experienced 
                team provides the strategic insights you need to make informed decisions.
              </p>
              
              <div className="space-y-4">
                {[
                  "Real-time financial reporting and insights",
                  "Proactive tax planning and advice",
                  "Dedicated support when you need it"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
                    >
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </motion.div>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Success Section */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl bottom-0 right-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Success is Our Success</h2>
            <p className="text-lg text-muted-foreground">
              When you succeed, we celebrate with you. Our team is dedicated to helping your business thrive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 rounded-3xl blur-3xl"
            />
            <img 
              src={teamCelebrationImage} 
              alt="Team celebrating success" 
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl top-0 left-0"
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See Your Potential Savings</h2>
            <p className="text-lg text-muted-foreground">
              Find out how much you could save with professional tax planning
            </p>
          </motion.div>

          <InteractiveTaxCalculator />
        </div>
      </section>

      <TestimonialCarousel />

      <FAQAccordion />

      <CTASection
        title="Ready to Get Started?"
        description="Let our expert accountants help you achieve your financial goals. Contact us today for a free consultation."
        buttonText="Contact Us Today"
        buttonHref="/contact"
      />

      <FloatingCTA />
    </div>
  );
}
