import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

// Import official professional body logos
import ciiLogo from "@assets/chartered-insurance-institute-logo-png_seeklogo-358677_1760548490997.png";
import ftaLogo from "@assets/id7rxvLLLa_1760547035151_1760548511605.png";
import ipaLogo from "@assets/idfMqNUqBD_1760546699175_1760548520266.png";
import pfsLogo from "@assets/PFS_NoStrapline_DarkGrey_Reduced_uk7jy_resized_medium_1760548562667.png";
import smpLogo from "@assets/Member_SMP_Black_CMYK_with_strapline_1760548599999.png";
import cmiLogo from "@assets/CMI_idJ8_s4bmY_0_1760548668823.png";
import ifaLogo from "@assets/institute-of-financial-accountants-logo-png_seeklogo-508022_1760548920320.png";

const credentials = [
  {
    logo: ipaLogo,
    name: "Institute of Public Accountants",
    abbreviation: "IPA",
  },
  {
    logo: ifaLogo,
    name: "Institute of Financial Accountants",
    abbreviation: "IFA",
  },
  {
    logo: cmiLogo,
    name: "Chartered Management Institute",
    abbreviation: "CMI",
  },
  {
    logo: ftaLogo,
    name: "Federation of Tax Advisers",
    abbreviation: "FTA",
  },
  {
    logo: ciiLogo,
    name: "Chartered Insurance Institute",
    abbreviation: "CII",
  },
  {
    logo: pfsLogo,
    name: "Personal Finance Society",
    abbreviation: "PFS",
  },
  {
    logo: smpLogo,
    name: "Society of Mortgage Professionals",
    abbreviation: "SMP",
  }
];

export default function TrustBadges() {
  // Duplicate credentials for seamless infinite scroll
  const duplicatedCredentials = [...credentials, ...credentials, ...credentials];

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

        {/* Infinite scrolling carousel */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -1 * (credentials.length * 288)],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedCredentials.map((credential, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ duration: 0.3 }}
                  data-testid={`credential-badge-${index}`}
                >
                  <Card className="w-64 h-56 relative overflow-hidden border-2 hover:border-primary/30 hover-elevate transition-all duration-500 group">
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />

                    <div className="relative p-6 h-full flex flex-col items-center justify-center">
                      {/* Logo container */}
                      <div className="relative mb-4 w-32 h-24 flex items-center justify-center">
                        <img 
                          src={credential.logo} 
                          alt={`${credential.name} logo`}
                          className="max-w-full max-h-full object-contain filter dark:brightness-90"
                        />
                      </div>

                      <div className="text-center">
                        <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                          {credential.abbreviation}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-tight">
                          {credential.name}
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
            </motion.div>
          </div>
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
