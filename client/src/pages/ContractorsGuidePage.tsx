import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, Briefcase } from "lucide-react";
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

  const ir35Considerations = [
    {
      title: "Status Determination",
      description: "Understanding whether you're inside or outside IR35 is crucial. We provide detailed assessments and documentation."
    },
    {
      title: "Contract Review",
      description: "We review your contracts to identify potential IR35 risks and suggest amendments to clarify your working arrangements."
    },
    {
      title: "Working Practices",
      description: "Advice on structuring your working practices to demonstrate genuine self-employment and business operation."
    },
    {
      title: "Compliance Documentation",
      description: "Maintaining proper records and documentation to support your IR35 position in case of HMRC enquiries."
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
              limited company management, and tax-efficient contracting.
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

      {/* IR35 Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">IR35 Compliance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding and managing IR35 is essential for all contractors. Here's how we help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ir35Considerations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="hover-elevate transition-all duration-300 h-full border-2 hover:border-primary/50" data-testid={`ir35-card-${index}`}>
                  <CardHeader>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
                    "Unlimited support and advice"
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
