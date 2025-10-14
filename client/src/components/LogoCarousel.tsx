import { motion } from "framer-motion";

const clientLogos = [
  { name: "TechStart Solutions", display: "TechStart" },
  { name: "Thompson Contractors", display: "Thompson" },
  { name: "The Wellness Studio", display: "Wellness" },
  { name: "Patterson & Associates", display: "Patterson" },
  { name: "London Properties Ltd", display: "LP" },
  { name: "Digital Dynamics", display: "Digital" },
  { name: "Green Energy Co", display: "GEC" },
  { name: "Royal Consulting", display: "Royal" },
  { name: "Metro Finance", display: "Metro" },
  { name: "Essex Builders", display: "Essex" },
  { name: "Prime Healthcare", display: "Prime" },
  { name: "Swift Logistics", display: "Swift" },
  { name: "Bright Media", display: "Bright" },
  { name: "Apex Industries", display: "Apex" },
  { name: "Vision Systems", display: "Vision" },
  { name: "Crown Capital", display: "Crown" }
];

export default function LogoCarousel() {
  // Duplicate the logos array to create seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="py-12 overflow-hidden bg-muted/30">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />
        
        <motion.div
          className="flex gap-8 md:gap-16"
          animate={{
            x: [0, -50 + "%"],
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
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 w-32 md:w-40 h-20 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 hover-elevate transition-all duration-300"
              data-testid={`logo-${logo.name.toLowerCase().replace(/\s+/g, '-')}-${index}`}
            >
              <span className="text-lg md:text-xl font-bold text-muted-foreground">
                {logo.display}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          Trusted by 500+ businesses across London, Essex, and beyond
        </p>
      </div>
    </div>
  );
}
