import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Users, Sparkles, DollarSign, Phone, Mail, Calendar, Award, FileText, Calculator } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import heroImage from "@assets/stock_images/professional_busines_f585c442.jpg";

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.2]);

  const trustPoints = [
    { text: "Trusted by 500+ businesses", icon: Users },
    { text: "Expert tax planning", icon: TrendingUp },
    { text: "Compliance guaranteed", icon: Shield }
  ];

  const floatingElements = [
    { Icon: TrendingUp, delay: 0, x: "10%", y: "20%" },
    { Icon: Shield, delay: 0.5, x: "80%", y: "30%" },
    { Icon: DollarSign, delay: 1, x: "15%", y: "70%" },
    { Icon: Sparkles, delay: 1.5, x: "85%", y: "65%" }
  ];

  const quickServices = [
    { icon: Calculator, label: "Chartered Management Consultants", href: "/services" },
    { icon: FileText, label: "Accountants", href: "/services" },
    { icon: TrendingUp, label: "Registered Tax Advisors", href: "/services" }
  ];

  return (
    <section ref={ref} className="relative min-h-[65vh] md:min-h-[70vh] flex items-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y, scale }} 
        className="absolute inset-0 will-change-transform"
      >
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional team collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60"></div>
        </div>
      </motion.div>

      {/* Animated Gradient Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-primary-foreground/10 to-transparent rounded-full blur-3xl -top-40 -left-40"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-l from-primary-foreground/10 to-transparent rounded-full blur-3xl top-40 right-0"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[500px] h-[500px] bg-gradient-to-t from-primary-foreground/5 to-transparent rounded-full blur-3xl bottom-0 left-1/2"
        />
      </div>

      {/* Floating Interactive Icons */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {floatingElements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 6,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{ left: item.x, top: item.y }}
          >
            <item.Icon className="w-20 h-20 text-primary-foreground" />
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        style={{ opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 z-10"
      >
        <div className="max-w-5xl">
          {/* Badge with entrance animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="px-5 py-2 bg-primary-foreground/10 backdrop-blur-md rounded-full border border-primary-foreground/20 shadow-lg">
              <span className="text-sm font-medium text-primary-foreground flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Professional Accounting Services in Essex
              </span>
            </div>
          </motion.div>
          
          {/* Choreographed text reveal */}
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-primary-foreground"
            >
              Expert Accountants for
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block bg-gradient-to-r from-primary-foreground via-primary-foreground/90 to-primary-foreground/80 bg-clip-text text-transparent"
              >
                Your Business Success
              </motion.span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed"
          >
            Professional accounting, tax planning, and financial services for businesses in London and across the United Kingdom. 
            Let us handle your finances while you focus on growing your business.
          </motion.p>
          
          {/* Animated CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="secondary" className="group shadow-2xl" data-testid="button-get-started">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
            <Link href="/services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 shadow-xl" 
                  data-testid="button-our-services"
                >
                  Our Services
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Trust points with stagger animation */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.8
                }
              }
            }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md px-5 py-3 rounded-full border border-primary-foreground/20 shadow-lg cursor-pointer" 
                data-testid={`trust-point-${index}`}
              >
                <point.icon className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium text-primary-foreground/90">{point.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Service Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
          >
            {quickServices.map((service, index) => (
              <Link key={index} href={service.href}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="bg-primary-foreground/25 backdrop-blur-md border-2 border-primary-foreground/40 hover-elevate active-elevate-2 cursor-pointer shadow-xl">
                    <CardContent className="p-5 flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary-foreground/30">
                        <service.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <span className="font-semibold text-primary-foreground text-sm">{service.label}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Floating Contact Widget */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hidden xl:block absolute right-8 bottom-48 z-20"
        >
          <Card className="bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20 shadow-2xl w-56">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-4 w-4 text-primary-foreground" />
                <h3 className="font-semibold text-primary-foreground text-sm">Get in Touch</h3>
              </div>
              <div className="space-y-2">
                <a 
                  href="tel:02085144953" 
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-primary-foreground/10 hover-elevate active-elevate-2 transition-all group"
                  data-testid="hero-contact-phone"
                >
                  <Phone className="h-4 w-4 text-primary-foreground group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs text-primary-foreground/70">Call us</div>
                    <div className="text-sm font-medium text-primary-foreground">0208 514 4953</div>
                  </div>
                </a>
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-primary-foreground/10 hover-elevate active-elevate-2 transition-all cursor-pointer"
                    data-testid="hero-contact-consultation"
                  >
                    <Calendar className="h-4 w-4 text-primary-foreground" />
                    <div>
                      <div className="text-xs text-primary-foreground/70">Free consultation</div>
                      <div className="text-sm font-medium text-primary-foreground">Book now</div>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
    </section>
  );
}
