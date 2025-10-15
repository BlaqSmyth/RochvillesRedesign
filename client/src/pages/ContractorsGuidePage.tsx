import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, Briefcase, Shield, FileCheck, TrendingUp, AlertTriangle, Users } from "lucide-react";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import contractorImage from "@assets/stock_images/freelancer_contracto_09d92917.jpg";

export default function ContractorsGuidePage() {
  const services = [
    "Limited company formation and setup",
    "IR35 status assessments and compliance",
    "Contractor-optimized accounting",
    "Corporation tax planning",
    "Personal tax planning and returns",
    "Dividend planning strategies",
    "Expense management and claims",
    "VAT registration and returns"
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                For Contractors
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contractors Guide</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Specialist accounting services for contractors and freelancers. Expert guidance on IR35, 
              limited company management, tax-efficient contracting, and navigating complex HMRC regulations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Contractors Choose Us</h2>
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
                className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
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
                className="mt-8"
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-2xl"
                  />
                  <img 
                    src={contractorImage} 
                    alt="Freelancer working" 
                    className="relative rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Contractor Services</h2>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {services.map((service, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 10 }}
                        className="flex items-start gap-3"
                        data-testid={`service-${index}`}
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Understanding IR35 Section */}
      <section className="bg-muted/30 py-24 md:py-32 relative overflow-hidden">
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 50, 0]
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
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className={`hover-elevate transition-all duration-300 h-full border-2 ${
                  item.color === 'orange' 
                    ? 'border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-background dark:from-orange-950/20' 
                    : 'border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-background dark:from-green-950/20'
                }`} data-testid={`ir35-status-${index}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-3 rounded-lg ${
                        item.color === 'orange' 
                          ? 'bg-orange-500/10' 
                          : 'bg-green-500/10'
                      }`}>
                        <item.icon className={`h-6 w-6 ${
                          item.color === 'orange' 
                            ? 'text-orange-600 dark:text-orange-400' 
                            : 'text-green-600 dark:text-green-400'
                        }`} />
                      </div>
                      <h3 className="text-2xl font-bold">{item.type}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
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
            <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 border-2 border-red-200 dark:border-red-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
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

      {/* Travel & Subsistence Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Travel & Subsistence Expenses</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Understanding the rules around claiming travel and subsistence expenses is essential for contractors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travelSubsistence.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="hover-elevate transition-all duration-300 h-full border-2 hover:border-primary/50" data-testid={`travel-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.content}</p>
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
            className="mt-8"
          >
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
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

      {/* Contract Review Section */}
      <section className="bg-muted/30 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <FileCheck className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-3">Contract Review Service</h2>
                    <p className="text-lg text-muted-foreground">
                      A contract can be written to fall outside IR35, but if it doesn't accurately reflect your working 
                      practices, it's worthless. HMRC reviews your actual working environment and practices.
                    </p>
                  </div>
                </div>
                
                <div className="bg-background/50 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold mb-3">What We Review:</h3>
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
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
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
                <h2 className="text-3xl font-bold mb-4">Fixed Monthly Fee</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our contractor packages start from just £95 per month (plus VAT), providing you with 
                  complete peace of mind and predictable costs. No hidden fees, no surprises.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "All accounting and bookkeeping included",
                    "Annual accounts and tax returns",
                    "Unlimited support and advice",
                    "IR35 status review and guidance"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      {item}
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
