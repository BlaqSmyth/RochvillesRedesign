import { motion } from "framer-motion";
import { ShieldCheck, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

// Import professional body logos
import ipaLogo from "@assets/stock_images/institute_of_public__8798aa31.jpg";
import ifaLogo from "@assets/stock_images/institute_of_financi_69856edd.jpg";
import aiaLogo from "@assets/stock_images/association_of_inter_b9f2b6d7.jpg";
import cmiLogo from "@assets/stock_images/chartered_management_47162a1b.jpg";
import ftaLogo from "@assets/stock_images/federation_of_tax_ad_6dd9504a.jpg";
import ciiLogo from "@assets/stock_images/chartered_insurance__e50b955b.jpg";
import pfsLogo from "@assets/stock_images/personal_finance_soc_7d414193.jpg";
import smpLogo from "@assets/stock_images/society_of_mortgage__5e2fac54.jpg";

const badges = [
  {
    logo: ipaLogo,
    title: "Institute of Public Accountants",
    abbreviation: "IPA",
    color: "from-blue-500/10 to-blue-600/5"
  },
  {
    logo: ifaLogo,
    title: "Institute of Financial Accountants",
    abbreviation: "IFA",
    color: "from-emerald-500/10 to-emerald-600/5"
  },
  {
    logo: aiaLogo,
    title: "Association of International Accountants",
    abbreviation: "AIA",
    color: "from-indigo-500/10 to-indigo-600/5"
  },
  {
    logo: cmiLogo,
    title: "Chartered Management Institute",
    abbreviation: "CMI",
    color: "from-violet-500/10 to-violet-600/5"
  },
  {
    logo: ftaLogo,
    title: "Federation of Tax Advisers",
    abbreviation: "FTA",
    color: "from-cyan-500/10 to-cyan-600/5"
  },
  {
    logo: ciiLogo,
    title: "The Chartered Insurance Institute",
    abbreviation: "CII",
    color: "from-amber-500/10 to-amber-600/5"
  },
  {
    logo: pfsLogo,
    title: "Personal Finance Society",
    abbreviation: "PFS",
    color: "from-rose-500/10 to-rose-600/5"
  },
  {
    logo: smpLogo,
    title: "Society of Mortgage Professionals",
    abbreviation: "SMP",
    color: "from-teal-500/10 to-teal-600/5"
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
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Professional Memberships</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Members of leading professional accounting and financial services bodies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
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

                <div className="relative p-6 text-center flex flex-col items-center justify-center min-h-[180px]">
                  {/* Logo with animated container */}
                  <div className="relative mb-4 w-20 h-20 rounded-xl overflow-hidden bg-white/80 dark:bg-gray-900/80 p-2 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300">
                    <img 
                      src={badge.logo} 
                      alt={`${badge.title} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="text-center">
                    <h4 className="text-sm font-bold mb-1 group-hover:text-primary transition-colors">
                      {badge.abbreviation}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-tight">
                      {badge.title}
                    </p>
                  </div>

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
