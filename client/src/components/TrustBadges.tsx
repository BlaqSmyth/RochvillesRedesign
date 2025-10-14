import { motion } from "framer-motion";
import { ShieldCheck, Award, CheckCircle2, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const badges = [
  {
    icon: ShieldCheck,
    title: "ACCA Certified",
    description: "Qualified Chartered Accountants",
    color: "from-blue-500/10 to-blue-600/5"
  },
  {
    icon: Award,
    title: "ICAEW Members",
    description: "Institute of Chartered Accountants",
    color: "from-amber-500/10 to-amber-600/5"
  },
  {
    icon: CheckCircle2,
    title: "AAT Licensed",
    description: "Professional Bookkeepers",
    color: "from-green-500/10 to-green-600/5"
  },
  {
    icon: Users,
    title: "500+ Clients",
    description: "Trusted Across UK",
    color: "from-purple-500/10 to-purple-600/5"
  }
];

export default function TrustBadges() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-muted/30 via-background to-muted/20">
      {/* Animated background gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl top-0 left-1/4"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl bottom-0 right-1/4"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Our Credentials</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Professional Certifications</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Backed by professional qualifications and years of expertise in accounting and financial services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              data-testid={`trust-badge-${index}`}
            >
              <Card className="relative overflow-hidden h-full hover-elevate transition-all duration-500 border-2 hover:border-primary/30 group">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />

                <div className="relative p-8 text-center">
                  {/* Icon with animated ring */}
                  <div className="relative inline-block mb-6">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-2 border-primary/20 scale-125"
                    />
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300"
                    >
                      <badge.icon className="h-10 w-10" strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {badge.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {badge.description}
                  </p>

                  {/* Decorative bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Registered with HMRC</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Professional Indemnity Insurance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Data Protection Compliant</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
