import { motion } from "framer-motion";
import { ShieldCheck, Award, CheckCircle2, Users } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "ACCA Certified",
    description: "Qualified Chartered Accountants"
  },
  {
    icon: Award,
    title: "ICAEW Members",
    description: "Institute of Chartered Accountants"
  },
  {
    icon: CheckCircle2,
    title: "AAT Licensed",
    description: "Professional Bookkeepers"
  },
  {
    icon: Users,
    title: "500+ Clients",
    description: "Trusted Across UK"
  }
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-2">Professional Certifications</h3>
          <p className="text-muted-foreground">Trusted expertise you can rely on</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
              data-testid={`trust-badge-${index}`}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              >
                <badge.icon className="h-8 w-8" />
              </motion.div>
              <h4 className="font-semibold mb-1">{badge.title}</h4>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
