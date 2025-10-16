import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, Briefcase, Shield, FileCheck, TrendingUp, AlertTriangle, Users, ArrowRight, Sparkles, Calculator, DollarSign, Award } from "lucide-react";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import contractorImage from "@assets/stock_images/freelancer_contracto_09d92917.jpg";
import itContractorImage from "@assets/stock_images/it_contractor_develo_68cbc05e.jpg";
import contractSigningImage from "@assets/stock_images/business_contract_si_adfb15a5.jpg";
import workspaceImage from "@assets/stock_images/modern_workspace_off_ad07179a.jpg";
import taxComplianceImage from "@assets/stock_images/tax_compliance_docum_bd806d16.jpg";

export default function ContractorsGuidePage() {
  const services = [
    {
      title: "Limited company formation and setup",
      icon: Briefcase
    },
    {
      title: "IR35 status assessments and compliance",
      icon: Shield
    },
    {
      title: "Contractor-optimized accounting",
      icon: Calculator
    },
    {
      title: "Corporation tax planning",
      icon: TrendingUp
    },
    {
      title: "Personal tax planning and returns",
      icon: FileCheck
    },
    {
      title: "Dividend planning strategies",
      icon: DollarSign
    },
    {
      title: "Expense management and claims",
      icon: Users
    },
    {
      title: "VAT registration and returns",
      icon: Award
    }
  ];

  const ir35InsideOutside = [
    {
      type: "Inside IR35",
      icon: AlertTriangle,
      color: "orange",
      description: "If your contract is deemed inside IR35, you're considered a 'disguised employee' and must pay tax accordingly.",
      points: [
        "Pay PAYE tax and National Insurance",
        "Limited tax planning opportunities",
        "Client deducts tax at source",
        "Penalties for non-compliance can be severe"
      ]
    },
    {
      type: "Outside IR35",
      icon: Shield,
      color: "green",
      description: "Working outside IR35 means you're genuinely self-employed with greater tax efficiency.",
      points: [
        "Must prove genuine autonomy in role",
        "No supervision, direction or control",
        "Substitution clause must be genuine",
        "Working practices must reflect contract terms"
      ]
    }
  ];

  const travelSubsistence = [
    {
      title: "Travel & Subsistence Rules",
      icon: AlertCircle,
      content: "From April 2016, contractors working through intermediaries cannot claim tax relief on travel and subsistence expenses if under supervision, direction or control (SDC) of anyone in the contractual chain."
    },
    {
      title: "Temporary Workplace Definition",
      icon: FileCheck,
      content: "A workplace is temporary if you attend it for a task of limited duration. However, the 24-month rule prevents a workplace from being temporary if you work there for more than 24 months."
    },
    {
      title: "Overarching Contract",
      icon: Users,
      content: "An overarching contract of employment links all your assignments under a single employment, allowing travel expenses to temporary workplaces (subject to rules and conditions)."
    }
  ];

  return (
    <div className="relative">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-green-500/5 to-background" />
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-20 h-20 border-2 border-orange-500/30 rounded-lg rotate-12" />
          <div className="absolute top-40 left-20 w-16 h-16 border-2 border-green-500/30 rounded-full" />
          <div className="absolute bottom-20 right-1/4 w-24 h-24 border-2 border-blue-500/30 rounded-lg -rotate-12" />
        </div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-96 h-96 bg-gradient-to-br from-orange-500/10 to-green-500/10 rounded-full blur-3xl top-0 right-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-green-500/10 rounded-full border border-orange-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium text-orange-600 dark:text-orange-400 flex items-center gap-2" data-testid="text-badge-contractors">
                  <Briefcase className="w-4 h-4" />
                  For Contractors & Freelancers
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent" data-testid="heading-contractors-guide">
                Contractors Guide
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Specialist accounting services for contractors and freelancers. Expert guidance on IR35, 
                limited company management, tax-efficient contracting, and navigating complex HMRC regulations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-orange-500/10">
                  <Shield className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                  <span className="text-sm font-medium">IR35 Compliance Experts</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-green-500/10">
                  <Calculator className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span className="text-sm font-medium">Tax-Efficient Contracting</span>
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
                  className="absolute -inset-6 bg-gradient-to-r from-orange-500/20 via-green-500/20 to-blue-500/20 rounded-2xl blur-2xl"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                  <img 
                    src={itContractorImage} 
                    alt="IT contractor working" 
                    className="w-full h-auto"
                    data-testid="img-hero-contractor"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="relative overflow-hidden border-2 border-primary/20 shadow-2xl">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-orange-500/5 to-green-500/5" />
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full" data-testid="badge-special-offer">
                    SPECIAL OFFER
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-new-business-offer">
                  All New Businesses Package
                </h2>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-primary" data-testid="text-price-399">£399.00</span>
                  <span className="text-xl text-muted-foreground">plus VAT per year</span>
                </div>
                <p className="text-lg text-muted-foreground">
                  Complete Accountancy, Bookkeeping, VAT and Payroll services<br />
                  <span className="text-sm">(Directors & up to 6 Employees)</span>
                </p>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-8">
                {/* Contractors & Umbrella Payroll Services */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" data-testid="heading-contractor-umbrella">
                    <Briefcase className="w-6 h-6 text-primary" />
                    Contractors & Umbrella Payroll Services
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Rochvilles & Co. Accountants can provide you with all the accounting help you need to run your limited company as a contractor as smoothly as possible, also as your payroll services provider to those contractors who would rather delegate all their day-to-day activities to an HMRC compliant umbrella service.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Rochvilles & Co. specialises in the contracting sector and can offer the expertise necessary to maximise your contracting returns and ensure you stay 100% compliant with legislation affecting you.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg border border-primary/10 hover-elevate" data-testid="card-benefit-specialist">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Contractor Accounting Specialists</h4>
                      <p className="text-sm text-muted-foreground">Expert knowledge in contractor-specific accounting needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg border border-primary/10 hover-elevate" data-testid="card-benefit-service">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Personalised Service</h4>
                      <p className="text-sm text-muted-foreground">No call centres - direct access to your dedicated accountant</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg border border-primary/10 hover-elevate" data-testid="card-benefit-inclusive">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Fully Inclusive Service</h4>
                      <p className="text-sm text-muted-foreground">Tax returns, accounts, payroll, tailored record keeping options</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg border border-primary/10 hover-elevate" data-testid="card-benefit-experts">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Tax, VAT & IR35 Experts</h4>
                      <p className="text-sm text-muted-foreground">Specialists in all aspects of contractor taxation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg border border-primary/10 hover-elevate" data-testid="card-benefit-planning">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Strategic Tax Planning</h4>
                      <p className="text-sm text-muted-foreground">Full advice and support including property tax specialists</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg border border-primary/10 hover-elevate" data-testid="card-benefit-fees">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Competitive Fixed Fees</h4>
                      <p className="text-sm text-muted-foreground">Relatively half of what most other contractors charge</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a href="/contact" className="inline-flex">
                    <button className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover-elevate active-elevate-2 transition-all flex items-center justify-center gap-2" data-testid="button-get-started-offer">
                      Get Started Today
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </a>
                  <a href="/fees" className="inline-flex">
                    <button className="w-full sm:w-auto border border-primary/20 px-8 py-3 rounded-lg font-semibold hover-elevate active-elevate-2 transition-all" data-testid="button-view-pricing">
                      View All Pricing
                    </button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 md:py-32 relative">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(var(--primary-rgb),0.05)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-block mb-4 px-4 py-2 bg-primary/5 rounded-full border border-primary/10"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium text-primary">Why Choose Us</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Specialist Contractor Accounting</h2>
              <p className="text-muted-foreground mb-6">
                As a contractor, you need an accountant who understands the unique challenges and opportunities 
                of your working arrangement. We specialize in contractor accounting and provide dedicated support 
                to help you maximize your take-home pay while staying fully compliant.
              </p>
              <p className="text-muted-foreground mb-8">
                Our contractor package includes everything you need to run your limited company efficiently, 
                from incorporation to ongoing accounting, tax planning, and IR35 compliance.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-xl p-6 mb-6"
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 rounded-lg bg-primary/10"
                  >
                    <AlertCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">IR35 Expertise</h3>
                    <p className="text-sm text-muted-foreground">
                      Navigating IR35 legislation can be complex. Our team stays up-to-date with the latest 
                      regulations and provides clear, practical advice to ensure your compliance.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-2xl blur-2xl"
                  />
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20">
                    <img 
                      src={contractorImage} 
                      alt="Freelancer working" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-block mb-4 px-4 py-2 bg-green-500/5 rounded-full border border-green-500/10"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium text-green-600 dark:text-green-400">Our Services</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Contractor Services Package</h2>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <Card className="border-2 hover:border-primary/50 transition-all duration-300 bg-gradient-to-r from-card to-green-500/5" data-testid={`service-${index}`}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="p-2 rounded-lg bg-green-500/10"
                          >
                            <service.icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                          </motion.div>
                          <span className="font-medium">{service.title}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Divider Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={workspaceImage} 
            alt="Modern contractor workspace" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-orange-500/80 to-green-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-4xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Focus on Your Contracts, We Handle the Rest</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Let our specialist team manage your accounting, tax, and compliance while you focus on delivering value to your clients
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Shield className="w-5 h-5" />
                <span className="font-medium">IR35 Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Calculator className="w-5 h-5" />
                <span className="font-medium">Tax Efficient</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Sparkles className="w-5 h-5" />
                <span className="font-medium">Fixed Monthly Fee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Understanding IR35 Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-orange-500/30 rounded-full" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-green-500/30 rounded-lg rotate-45" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-orange-500/5 rounded-full border border-orange-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-orange-600 dark:text-orange-400">Understanding IR35</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What is IR35?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              IR35 was introduced in April 2000 to catch contractors operating as 'disguised employees'. 
              Understanding whether you're inside or outside IR35 is crucial for compliance and tax efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {ir35InsideOutside.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className={`hover-elevate transition-all duration-300 h-full border-2 ${
                  item.color === 'orange' 
                    ? 'border-orange-500/20 bg-gradient-to-br from-orange-500/20 to-orange-500/5' 
                    : 'border-green-500/20 bg-gradient-to-br from-green-500/20 to-green-500/5'
                }`} data-testid={`ir35-status-${index}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        className={`p-3 rounded-xl ${
                          item.color === 'orange' 
                            ? 'bg-orange-500/10 border border-orange-500/20' 
                            : 'bg-green-500/10 border border-green-500/20'
                        }`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className={`h-6 w-6 ${
                          item.color === 'orange' 
                            ? 'text-orange-600 dark:text-orange-400' 
                            : 'text-green-600 dark:text-green-400'
                        }`} />
                      </motion.div>
                      <h3 className="text-2xl font-bold">{item.type}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ArrowRight className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                            item.color === 'orange' 
                              ? 'text-orange-600 dark:text-orange-400' 
                              : 'text-green-600 dark:text-green-400'
                          }`} />
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-2 border-red-500/20 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 rounded-lg bg-red-500/10"
                  >
                    <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-red-900 dark:text-red-100">Important Warning</h3>
                    <p className="text-sm text-red-800 dark:text-red-200 mb-3">
                      If you're falsely operating outside IR35, you could face severe penalties including:
                    </p>
                    <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 dark:bg-red-400 rounded-full"></span>
                        Repayment of all previously underpaid tax
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 dark:bg-red-400 rounded-full"></span>
                        Penalties of similar value to the underpaid tax
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 dark:bg-red-400 rounded-full"></span>
                        Interest charges for the entire period
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 dark:bg-red-400 rounded-full"></span>
                        HMRC can investigate up to 5 years of accounts
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contract Review Image Divider */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={contractSigningImage} 
            alt="Contract signing and review" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-500/80 to-green-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Contract Review Services</h2>
            <p className="text-lg text-white/90">
              Ensure your contracts and working practices align for proper IR35 compliance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Travel & Subsistence Section */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-500/5 to-background" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-blue-500/5 rounded-full border border-blue-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Tax & Expenses</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Travel & Subsistence Expenses</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Understanding the rules around claiming travel and subsistence expenses is essential for contractors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {travelSubsistence.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="hover-elevate transition-all duration-300 h-full border-2 hover:border-primary/50 bg-gradient-to-br from-card to-blue-500/5" data-testid={`travel-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-blue-500/10 to-green-500/10 border-2 border-blue-500/20 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 rounded-lg bg-blue-500/10"
                  >
                    <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Umbrella Company Solution</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      An umbrella company removes the burden of IR35 compliance. By operating as an employee of an umbrella company, 
                      IR35 rules don't apply to you, eliminating worries about additional tax bills and penalties.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Work as a contractor without the administrative overhead and compliance risks of running your own limited company.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tax Compliance Image Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={taxComplianceImage} 
            alt="Tax compliance and planning" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 via-green-500/80 to-blue-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-4xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Stay Compliant, Maximize Your Income</h2>
            <p className="text-lg md:text-xl text-white/90">
              Expert tax planning and compliance services designed specifically for contractors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contract Review Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-green-500/5 to-background" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-green-500/10 via-primary/10 to-blue-500/10 border-2 border-green-500/20 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl" />
              <CardContent className="p-8 md:p-12 relative">
                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    className="p-3 rounded-xl bg-green-500/10 border border-green-500/20"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FileCheck className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </motion.div>
                  <div>
                    <h2 className="text-3xl font-bold mb-3">Contract Review Service</h2>
                    <p className="text-lg text-muted-foreground">
                      A contract can be written to fall outside IR35, but if it doesn't accurately reflect your working 
                      practices, it's worthless. HMRC reviews your actual working environment and practices.
                    </p>
                  </div>
                </div>
                
                <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 mb-6 border border-green-500/10">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
                    What We Review:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Contract terms vs actual working practices",
                      "Substitution clauses (must be genuine and practical)",
                      "Control and supervision arrangements",
                      "Mutuality of obligation",
                      "Financial risk and business operation"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-muted-foreground italic">
                  Important: Only operate outside IR35 if you are absolutely certain of your status. Our expert review 
                  gives you confidence and documentation to support your position.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-primary/10 via-orange-500/10 to-green-500/10 border-2 border-primary/20 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl" />
              <CardContent className="p-8 md:p-12 relative">
                <div className="text-center mb-8">
                  <motion.div 
                    className="inline-block mb-4 px-4 py-2 bg-background/50 backdrop-blur-sm rounded-full border border-primary/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm font-medium text-primary flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Transparent Pricing
                    </span>
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Fixed Monthly Fee</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Our contractor packages start from just £95 per month (plus VAT), providing you with 
                    complete peace of mind and predictable costs. No hidden fees, no surprises.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    { text: "All accounting and bookkeeping included", icon: Calculator },
                    { text: "Annual accounts and tax returns", icon: FileCheck },
                    { text: "Unlimited support and advice", icon: Users },
                    { text: "IR35 status review and guidance", icon: Shield }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      className="flex items-center gap-3 p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Contracting?"
        description="Let us handle your accounting while you focus on your contracts. Get started with our contractor package today."
        buttonText="Get Started"
        buttonHref="/contact"
      />
    </div>
  );
}
