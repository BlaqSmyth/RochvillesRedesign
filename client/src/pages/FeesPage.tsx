import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

export default function FeesPage() {
  const packages = [
    {
      name: "Sole Trader",
      price: "£50",
      period: "per month",
      description: "Perfect for self-employed individuals and freelancers",
      features: [
        "Annual accounts preparation",
        "Self-assessment tax return",
        "Basic tax planning advice",
        "Unlimited email support",
        "Quarterly management accounts"
      ]
    },
    {
      name: "Limited Company",
      price: "£95",
      period: "per month",
      description: "Comprehensive package for small limited companies",
      features: [
        "Everything in Sole Trader, plus:",
        "Corporation tax return",
        "Confirmation statement filing",
        "Dividend planning advice",
        "VAT returns (if applicable)",
        "Dedicated account manager",
        "Phone support"
      ],
      popular: true
    },
    {
      name: "Contractor",
      price: "£95",
      period: "per month",
      description: "Specialized service for IT contractors and consultants",
      features: [
        "All Limited Company features, plus:",
        "IR35 status assessments",
        "Contract reviews",
        "Optimized remuneration planning",
        "Expense claim management",
        "Real-time cloud accounting"
      ]
    }
  ];

  const additionalServices = [
    { service: "VAT registration and returns", price: "From £25/quarter" },
    { service: "Payroll processing (1-5 employees)", price: "From £15/month" },
    { service: "Company formation", price: "£150 (one-off)" },
    { service: "Personal tax return", price: "From £150" },
    { service: "Tax investigation insurance", price: "£50/year" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-24 md:py-32 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-0 right-0"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl bottom-0 left-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary flex items-center gap-2">
                <Star className="w-4 h-4" />
                Transparent Pricing
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Fixed Monthly Fees</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              No hidden charges. Choose the package that fits your needs 
              and upgrade or downgrade anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: pkg.popular ? 1.05 : 1.02 }}
                className="relative"
              >
                <Card 
                  className={`relative flex flex-col h-full border-2 transition-all duration-300 ${pkg.popular ? 'border-primary shadow-2xl' : 'hover:border-primary/50'}`}
                  data-testid={`package-${index}`}
                >
                  {pkg.popular && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-lg"
                    >
                      Most Popular
                    </motion.div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: 0.2 + index * 0.1 }}
                      className="flex items-baseline justify-center gap-1"
                    >
                      <span className="text-4xl md:text-5xl font-bold">{pkg.price}</span>
                      <span className="text-muted-foreground">+ VAT</span>
                    </motion.div>
                    <p className="text-sm text-muted-foreground">{pkg.period}</p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-8 flex-1">
                      {pkg.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          variant={pkg.popular ? "default" : "outline"} 
                          className="w-full shadow-lg"
                          data-testid={`button-select-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          Get Started
                        </Button>
                      </motion.div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-muted/30 py-24 relative overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute w-64 h-64 bg-primary/5 rounded-full blur-3xl top-0 right-0"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-muted-foreground">
              Flexible add-ons to customize your accounting package
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {additionalServices.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex justify-between items-center pb-4 border-b last:border-b-0 last:pb-0"
                      data-testid={`additional-service-${index}`}
                    >
                      <span className="font-medium">{item.service}</span>
                      <span className="text-muted-foreground font-semibold">{item.price}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
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
                <h2 className="text-3xl font-bold mb-6">What's Included in All Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Free initial consultation",
                    "Secure cloud accounting software",
                    "Regular financial updates",
                    "Proactive tax planning",
                    "HMRC correspondence handling",
                    "No long-term contracts"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-8 text-sm text-muted-foreground">
                  All prices exclude VAT. Bespoke packages available for larger businesses - please contact us 
                  for a tailored quote.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Questions About Pricing?"
        description="Not sure which package is right for you? Get in touch and we'll help you find the perfect solution."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </div>
  );
}
