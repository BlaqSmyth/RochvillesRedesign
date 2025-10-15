import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Check, Star, Users, Building2, Briefcase, Scale, Calculator, FileText, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

export default function FeesPage() {
  const payrollPackages = [
    {
      name: "Small Payroll",
      employees: "Up to 10 employees",
      price: "£45",
      icon: Users,
      features: [
        "Monthly payroll processing",
        "RTI submissions to HMRC",
        "Payslips for all employees",
        "P60s and P45s",
        "Pension auto-enrolment support"
      ]
    },
    {
      name: "Medium Payroll",
      employees: "10-25 employees",
      price: "£75",
      icon: Building2,
      features: [
        "All Small Payroll features",
        "Advanced reporting",
        "Multi-location support",
        "Dedicated payroll specialist",
        "Priority support"
      ]
    }
  ];

  const businessTypes = [
    {
      type: "Sole Trader",
      icon: Briefcase,
      tiers: [
        { turnover: "Up to £25k", price: "£550" },
        { turnover: "£26k - £35k", price: "£650" },
        { turnover: "£35k - £100k", price: "£1,000" },
        { turnover: "Above £100k", price: "POA" }
      ]
    },
    {
      type: "Partnership",
      icon: Users,
      tiers: [
        { turnover: "Up to £25k", price: "£650" },
        { turnover: "£26k - £35k", price: "£750" },
        { turnover: "£35k - £100k", price: "£1,250" },
        { turnover: "Above £100k", price: "POA" }
      ]
    },
    {
      type: "Limited Company",
      icon: Building2,
      popular: true,
      tiers: [
        { turnover: "Up to £25k", price: "£850" },
        { turnover: "£26k - £35k", price: "£1,000" },
        { turnover: "£35k - £100k", price: "£1,850" },
        { turnover: "Above £100k", price: "POA" }
      ]
    },
    {
      type: "Solicitors",
      icon: Scale,
      tiers: [
        { turnover: "Up to £25k", price: "£1,250" },
        { turnover: "£26k - £35k", price: "£1,500" },
        { turnover: "£35k - £100k", price: "£2,300" },
        { turnover: "Above £100k", price: "POA" }
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Calculator,
      service: "VAT Returns",
      price: "£200",
      period: "per quarter",
      description: "Quarterly VAT return preparation and submission"
    },
    {
      icon: FileText,
      service: "Management Accounts",
      price: "£300",
      period: "per quarter",
      description: "Quarterly management accounts with recommendations"
    },
    {
      icon: Users,
      service: "Extra Partner/Director Tax Return",
      price: "£180",
      period: "per return",
      description: "Individual tax return for additional partners or directors"
    },
    {
      icon: TrendingUp,
      service: "Business Plans & Start-ups",
      price: "£850",
      period: "per case",
      description: "Comprehensive business plan development"
    },
    {
      icon: Building2,
      service: "Company Formation (Express)",
      price: "£150",
      period: "one-off",
      description: "Fast-track company incorporation service"
    },
    {
      icon: Building2,
      service: "Company Formation (Off-the-Shelf)",
      price: "£100",
      period: "one-off",
      description: "Ready-made company purchase"
    },
    {
      icon: FileText,
      service: "Due Diligence",
      price: "£1,500",
      period: "per case",
      description: "Comprehensive business due diligence"
    },
    {
      icon: Scale,
      service: "Accountants Opinion/Review",
      price: "£550",
      period: "per review",
      description: "Professional opinion and review services"
    },
    {
      icon: Calculator,
      service: "Software Setup & Training",
      price: "£180",
      period: "per hour",
      description: "Accounting software implementation and training"
    },
    {
      icon: TrendingUp,
      service: "Financial Plan/Cashflow Projections",
      price: "£850",
      period: "per case",
      description: "Detailed financial planning and projections"
    }
  ];

  const includedInPrice = [
    "Annual accounts preparation",
    "Business tax return filing",
    "One owner's personal tax return",
    "Email and phone support",
    "HMRC correspondence handling",
    "Cloud accounting software access"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Fee Structure</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Clear, competitive pricing with no hidden charges. All fees are subject to VAT at 20% if applicable.
            </p>
            <p className="text-sm text-muted-foreground">
              With effect from 1st April 2024. For further information, please contact us directly on <a href="tel:02085144953" className="text-primary hover:underline" data-testid="link-phone-contact">0208 5144953</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Payroll Services */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Monthly Payroll Services</h2>
            <p className="text-lg text-muted-foreground">
              Professional payroll processing for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {payrollPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="border-2 hover:border-primary/50 transition-all duration-300 h-full" data-testid={`payroll-package-${index}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <pkg.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{pkg.name}</h3>
                        <p className="text-sm text-muted-foreground">{pkg.employees}</p>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1 mt-4">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-muted-foreground">per month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Type Pricing */}
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Accountancy & Taxation Services</h2>
            <p className="text-lg text-muted-foreground">
              Pricing based on your business structure and turnover
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessTypes.map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative"
              >
                <Card className={`border-2 transition-all duration-300 h-full ${
                  business.popular ? 'border-primary shadow-xl' : 'hover:border-primary/50'
                }`} data-testid={`business-type-${index}`}>
                  {business.popular && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg"
                    >
                      Most Popular
                    </motion.div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg ${business.popular ? 'bg-primary text-primary-foreground' : 'bg-primary/10'}`}>
                        <business.icon className={`h-6 w-6 ${business.popular ? '' : 'text-primary'}`} />
                      </div>
                      <h3 className="text-xl font-bold">{business.type}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {business.tiers.map((tier, idx) => (
                        <div key={idx} className="flex justify-between items-center pb-3 border-b last:border-b-0">
                          <span className="text-sm text-muted-foreground">{tier.turnover}</span>
                          <span className="font-bold">{tier.price}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-3">What's Included in All Prices</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {includedInPrice.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground">
              Flexible add-ons to customize your accounting package
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="border-2 hover:border-primary/50 transition-all duration-300 h-full" data-testid={`additional-service-${index}`}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <service.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{service.service}</h3>
                        <p className="text-xs text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold">{service.price}</span>
                      <span className="text-sm text-muted-foreground">/ {service.period}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Umbrella Services */}
      <section className="bg-muted/30 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border-2 border-purple-200 dark:border-purple-800 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-purple-500/10">
                    <Briefcase className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-3">Umbrella & Agency Payroll Services</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Professional payroll management for contractors and agency workers
                    </p>
                    <div className="inline-flex items-baseline gap-2 bg-background/50 rounded-lg px-6 py-4">
                      <span className="text-5xl font-bold text-purple-600 dark:text-purple-400">£20</span>
                      <span className="text-lg text-muted-foreground">per week</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Fee margin for comprehensive umbrella and agency payroll services
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Solicitors Notice */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/20 border-2 border-amber-200 dark:border-amber-800">
              <CardContent className="p-8">
                <div className="flex items-start gap-3">
                  <Scale className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Note for Solicitors</h3>
                    <p className="text-muted-foreground">
                      Add 100% of the fee for solicitor reports requiring professional opinion or detailed analysis. 
                      Our specialized legal accounting services ensure full compliance with SRA regulations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-muted/30 py-24">
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
                <h2 className="text-3xl font-bold mb-6">Standard Package Inclusions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                <div className="border-t pt-6">
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Important:</strong> These fees should be used as a guide only. All prices exclude VAT (20% if applicable).
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Bespoke packages available for larger businesses and specific requirements. Contact us on <a href="tel:02085144953" className="text-primary hover:underline font-medium" data-testid="link-phone-contact-footer">0208 5144953</a> for a tailored quote.
                  </p>
                </div>
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
