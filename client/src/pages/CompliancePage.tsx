import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ShieldCheck, FileCheck, AlertTriangle, CheckCircle2, Users, Calculator, Wallet, FileText, Clock, Banknote, UserCheck, Receipt, Award, Shield } from "lucide-react";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

import complianceImage from "@assets/stock_images/compliance_audit_doc_4d2a5d70.jpg";
import regulatoryImage from "@assets/stock_images/regulatory_complianc_444dbc96.jpg";
import legalComplianceImage from "@assets/stock_images/legal_compliance_doc_be784695.jpg";
import complianceSecurityImage from "@assets/stock_images/compliance_security__fc9ac17d.jpg";
import complianceExcellenceImage from "@assets/stock_images/compliance_excellenc_288bf283.jpg";

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

  const umbrellaServices = [
    {
      icon: UserCheck,
      title: "Employee Eligibility Checks",
      description: "We verify each contractor is eligible to work in the UK by checking full UK or foreign passports with Home Office stamps and UKBA biometric cards. All identity documents are securely stored to comply with UKBA requirements and immigration law."
    },
    {
      icon: FileText,
      title: "Full Employment Contract",
      description: "Each contractor receives a comprehensive contract of employment providing all statutory protections including holiday entitlement, sick pay, maternity and paternity pay, with assistance for invoicing and end-of-year returns."
    },
    {
      icon: Banknote,
      title: "PAYE & NI Deductions",
      description: "All contractors are classified as employees. We deduct full PAYE and National Insurance contributions as per government regulations using the appropriate tax code issued by HMRC, paid weekly or monthly."
    },
    {
      icon: Receipt,
      title: "Genuine Expense Processing",
      description: "We only process expenses in accordance with HMRC guidelines. All expense claims must be fully supported by receipts where necessary, and contractors must keep receipts for at least six years."
    }
  ];

  const paymentProcess = [
    {
      step: "1",
      title: "Submit Timesheet",
      description: "Submit your timesheet and expenses (if applicable) so we can correctly calculate your take-home pay"
    },
    {
      step: "2",
      title: "Same Day Processing",
      description: "Your money is processed with same day payments upon receipt of funds from your agency or client"
    },
    {
      step: "3",
      title: "Bank Transfer",
      description: "Payment arrives in your bank account the same day we receive funds, accurate to the penny"
    }
  ];

  const standardFeatures = [
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

  const contractorBenefits = [
    "Full Accountancy Support",
    "Company Incorporation Service Provided",
    "Tax Returns Completed On Your Behalf",
    "Hassle Free Accounting Service",
    "Free IR35 Reviews and Advice",
    "Self-Assessment Tax Return (Free of Charge)",
    "Expense Recording and Tax Refund Calculation",
    "All HMRC Payments Handled"
  ];

  return (
    <div className="relative overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/5 to-background" />
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-20 h-20 border-2 border-blue-500/30 rounded-lg rotate-12" />
          <div className="absolute top-40 left-20 w-16 h-16 border-2 border-green-500/30 rounded-full" />
          <div className="absolute bottom-20 right-1/4 w-24 h-24 border-2 border-purple-500/30 rounded-lg -rotate-12" />
        </div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-96 h-96 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full blur-3xl top-0 -right-48"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full border border-blue-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2" data-testid="text-badge-compliance">
                  <ShieldCheck className="w-4 h-4" />
                  Compliance & Standards
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent" data-testid="heading-compliance">
                Stay Compliant, Stay Protected
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Ensuring your business meets all regulatory requirements. From statutory filings to tax compliance, 
                we keep you on track and protect your business reputation.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-blue-500/10">
                  <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium">Full Compliance</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-green-500/10">
                  <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium">Expert Support</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-green-500/20 to-purple-500/20 rounded-2xl blur-2xl"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                  <img 
                    src={complianceImage} 
                    alt="Compliance documents" 
                    className="w-full h-auto"
                    data-testid="img-hero-compliance"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Services */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-500/5 to-background" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-blue-500/5 rounded-full border border-blue-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Core Services</span>
            </motion.div>
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
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="hover-elevate transition-all duration-300 h-full border-2 hover:border-primary/50 hover:shadow-xl bg-gradient-to-br from-blue-500/5 to-card" data-testid={`compliance-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-3 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex-shrink-0"
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

      {/* Image Divider Section 1 */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={regulatoryImage} 
            alt="Regulatory compliance standards" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-500/80 to-green-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-4xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Regulatory Excellence</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Meeting and exceeding all compliance standards for your peace of mind
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-medium">100% Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Award className="w-5 h-5" />
                <span className="font-medium">Expert Team</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Umbrella Workers & Contractors Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-green-500/30 rounded-full" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-blue-500/30 rounded-lg rotate-45" />
        </div>

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl bottom-0 -right-48"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-green-500/5 rounded-full border border-green-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-green-600 dark:text-green-400">Contractor Services</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Umbrella Workers & Contractors</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive compliance and payroll services for contractors working through our umbrella company
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {umbrellaServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="hover-elevate transition-all duration-300 h-full border-2 hover:border-primary/50 bg-gradient-to-br from-green-500/5 to-card" data-testid={`umbrella-service-${index}`}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-3 rounded-lg bg-green-500/10"
                      >
                        <service.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Divider Section 2 */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={legalComplianceImage} 
            alt="Legal compliance documentation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 via-green-500/80 to-purple-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Legal Compliance Assured</h2>
            <p className="text-lg text-white/90">
              Expert guidance ensuring full compliance with all UK regulations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Claiming Expenses Section */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Claiming Expenses</h2>
              <p className="text-muted-foreground mb-6">
                One of the many benefits when working as a contractor is being able to claim for tax-reducing expenses. 
                These will enable you to maximise your earnings and help with your tax management.
              </p>
              <p className="text-muted-foreground mb-6">
                Since recent changes, our expense policy continues to offer tax relief for genuine expenses incurred 
                in the duty of performing your role. For those not deemed to be working under Supervision, Direction 
                or Control, we process expenses at tax year-end via SA100 form at no additional cost.
              </p>
              
              <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="p-2 rounded-lg bg-blue-500/10"
                    >
                      <Receipt className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Expense Requirements</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          Update expenses regularly via our spreadsheet
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          Ensure expenses are genuine and evidenced
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          Submit acceptable invoices or receipts
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          File documentation online for verification
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-primary/10 via-green-500/10 to-blue-500/10 border-2 border-primary/20">
                <CardHeader>
                  <h3 className="text-2xl font-bold mb-3">What We Handle For You</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <motion.li 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Calculate your tax and NI contributions</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Make PAYE payments to HMRC on your behalf</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Record all your business expenses</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Complete Self-Assessment tax returns (free of charge)</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Calculate potential tax refunds based on expenses</span>
                    </motion.li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Process Section */}
      <section className="py-24 relative bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-purple-500/5 rounded-full border border-purple-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Payment Process</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How You Are Paid</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our professional employment organisation manages your contractor payroll from start to finish, 
              ensuring payments are correct, on-time, and fully HMRC compliant.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {paymentProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="hover-elevate transition-all duration-300 h-full border-2 hover:border-primary/50 bg-gradient-to-br from-purple-500/5 to-card" data-testid={`payment-step-${index}`}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">{item.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
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
          >
            <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 rounded-lg bg-green-500/10"
                  >
                    <Clock className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Same Day Payment Guarantee</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      All money received from contractor agencies is paid out the same day, subject to deduction 
                      of necessary taxes, National Insurance contributions, and our fees.
                    </p>
                    <p className="text-muted-foreground">
                      Your take-home pay is calculated accurately to the penny, as long as we receive your 
                      timesheet on time and ready for payment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Image Divider Section 3 */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={complianceSecurityImage} 
            alt="Compliance security and trust" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-blue-500/80 to-green-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-4xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Security & Trust</h2>
            <p className="text-lg md:text-xl text-white/90">
              Your data and compliance are protected by the highest security standards
            </p>
          </motion.div>
        </div>
      </section>

      {/* PAYE & Employment Status Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-500/5 to-background" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full border-2 hover-elevate bg-gradient-to-br from-blue-500/5 to-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      className="p-3 rounded-lg bg-blue-500/10"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Wallet className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold">What is PAYE?</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    In the UK, Pay As You Earn Tax is the system HMRC uses to collect Income Tax and National 
                    Insurance Contributions from employees' pay as it is earned.
                  </p>
                  <p className="text-muted-foreground">
                    The amount due is calculated by your employer according to HMRC regulations, then deducted 
                    from your earnings before being paid to HMRC each week or month.
                  </p>
                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> We relieve you of all PAYE stress and hassle. We take care of all 
                      PAYE and VAT payments to HMRC, and you won't even have to complete a self-assessment tax 
                      form for income earned while on assignment with us.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full border-2 hover-elevate bg-gradient-to-br from-green-500/5 to-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      className="p-3 rounded-lg bg-green-500/10"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <UserCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold">Employment Status Verification</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Since the introduction of Onshore Employment Intermediaries legislation for False 
                    Self-Employment, we provide solutions to help establish the correct employment status 
                    of contracted workforce.
                  </p>
                  <p className="text-muted-foreground">
                    We've established a process to determine correct employment status for all workers, 
                    particularly agency workers in the public sector (NHS, local authorities, and government departments).
                  </p>
                  <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded">
                    <p className="text-sm text-muted-foreground">
                      <strong>Our Solution:</strong> We provide the important link between worker and client 
                      to establish correct pay treatment and limit exposure to unpaid taxes and HMRC enforcement.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overarching Contracts & Calculator Section */}
      <section className="py-24 relative bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      className="p-3 rounded-lg bg-purple-500/10"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold">Overarching Contracts</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    All employees of Rochvilles & Co. Ltd have an overarching contract of employment that 
                    provides for a series of different assignments.
                  </p>
                  <p className="text-muted-foreground">
                    In these circumstances, each workplace is regarded by HMRC as a "temporary workplace" 
                    and the mileage rate is allowable as a tax benefit.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      className="p-3 rounded-lg bg-blue-500/10"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Calculator className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold">Umbrella Calculator</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    As a contractor, the most important question is: "How much money will I take home?"
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We can help you calculate your take-home pay to the nearest penny using our Umbrella 
                    Calculator, as long as your tax code is one of the standard codes (1250L) and we're 
                    calculating like for like.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Your take-home pay depends on your tax code and circumstances, including student loan 
                    deductions, pension contributions, and apprentice levy if applicable.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Divider Section 4 */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={complianceExcellenceImage} 
            alt="Compliance excellence" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 via-blue-500/80 to-purple-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Excellence in Compliance</h2>
            <p className="text-lg text-white/90">
              Setting the standard for professional compliance services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-green-500/5 to-background" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-green-500/5 rounded-full border border-green-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-green-600 dark:text-green-400">Standards & Certifications</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Standards & Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest professional standards and comply with all relevant regulations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {standardFeatures.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Card className="hover-elevate transition-all duration-300 h-full bg-gradient-to-br from-green-500/5 to-card border-2 hover:border-primary/50" data-testid={`standard-${index}`}>
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
                          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
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

      {/* Pricing & Benefits Section */}
      <section className="py-24 relative bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-primary/10 via-blue-500/10 to-green-500/10 border-2 border-primary/20 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
              <CardContent className="p-8 md:p-12 relative">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold mb-4">Our Fees</h2>
                  <div className="inline-block">
                    <div className="text-5xl font-bold text-primary mb-2">£12</div>
                    <p className="text-lg text-muted-foreground">per week per timesheet submitted</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Any period of absence or nil work will not be charged
                  </p>
                </div>

                <div className="border-t pt-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">What You Get</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contractorBenefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-card border-2 border-primary/20 shadow-2xl">
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
