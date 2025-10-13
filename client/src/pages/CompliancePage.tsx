import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ShieldCheck, FileCheck, AlertTriangle, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import complianceImage from "@assets/stock_images/compliance_audit_doc_4d2a5d70.jpg";

export default function CompliancePage() {
  const complianceAreas = [
    {
      icon: FileCheck,
      title: "Statutory Accounts",
      description: "Preparation and filing of annual statutory accounts with Companies House, ensuring full compliance with UK accounting standards and company law requirements."
    },
    {
      icon: ShieldCheck,
      title: "Tax Compliance",
      description: "Complete management of all tax compliance obligations including corporation tax, VAT, PAYE, and self-assessment returns, filed accurately and on time."
    },
    {
      icon: AlertTriangle,
      title: "HMRC Investigations",
      description: "Expert support during HMRC enquiries and investigations. We handle all correspondence and represent your interests to achieve the best possible outcome."
    },
    {
      icon: CheckCircle2,
      title: "Regulatory Filings",
      description: "Management of all regulatory requirements including confirmation statements, PSC register updates, and annual returns to maintain good standing."
    }
  ];

  const standards = [
    {
      title: "Professional Standards",
      items: [
        "Members of professional accounting bodies",
        "Adherence to UK GAAP and FRS 102",
        "Regular professional development",
        "Quality assurance processes"
      ]
    },
    {
      title: "Data Protection",
      items: [
        "Full GDPR compliance",
        "Secure cloud-based systems",
        "Encrypted data transmission",
        "Regular security audits"
      ]
    },
    {
      title: "Anti-Money Laundering",
      items: [
        "AML compliance procedures",
        "Client due diligence",
        "Suspicious activity monitoring",
        "Regular staff training"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-24 md:py-32 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-0 right-0"
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
                  <ShieldCheck className="w-4 h-4" />
                  Compliance & Standards
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Stay Compliant, Stay Protected</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Ensuring your business meets all regulatory requirements. From statutory filings to tax compliance, 
                we keep you on track and protect your business reputation.
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
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="absolute -inset-6 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-3xl"
                />
                <img 
                  src={complianceImage} 
                  alt="Compliance documents" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Services */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Compliance Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive compliance support to keep your business in good standing with all regulatory authorities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="hover-elevate transition-all duration-300 h-full border-2 hover:border-primary/50 hover:shadow-xl" data-testid={`compliance-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0"
                      >
                        <area.icon className="h-6 w-6" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                        <p className="text-muted-foreground">{area.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="bg-muted/30 py-24 md:py-32 relative overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Standards & Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest professional standards and comply with all relevant regulations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Card className="hover-elevate transition-all duration-300 h-full" data-testid={`standard-${index}`}>
                  <CardHeader>
                    <h3 className="text-xl font-semibold">{standard.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {standard.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
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
                <h2 className="text-3xl font-bold mb-4">Peace of Mind Guarantee</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We guarantee 100% compliance with all statutory requirements. If any penalties arise due to 
                  our error, we'll cover the costs and work with HMRC on your behalf to resolve the issue.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Deadline Monitoring", desc: "We track all deadlines for you" },
                    { title: "Proactive Reminders", desc: "Advance notice of upcoming filings" },
                    { title: "Expert Preparation", desc: "All submissions checked by qualified staff" },
                    { title: "Direct Filing", desc: "We file directly with authorities" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Stay Compliant, Stay Confident"
        description="Let us handle your compliance requirements so you can focus on running your business. Contact us for a compliance review."
        buttonText="Schedule a Review"
        buttonHref="/contact"
      />
    </div>
  );
}
