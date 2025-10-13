import { Calculator, FileText, Users, Building2, ShieldCheck, PieChart } from "lucide-react";
import AnimatedServiceCard from "@/components/AnimatedServiceCard";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

import taxImage from "@assets/stock_images/business_person_anal_2e0a2ff2.jpg";
import dataImage from "@assets/stock_images/digital_technology_d_8c488575.jpg";
import strategyImage from "@assets/stock_images/modern_business_team_876904bd.jpg";
import growthImage from "@assets/stock_images/business_growth_succ_97d5375f.jpg";
import complianceImage from "@assets/stock_images/compliance_audit_doc_4d2a5d70.jpg";
import calculatorImage from "@assets/stock_images/calculator_financial_6f3333eb.jpg";

export default function ServicesPage() {
  const services = [
    {
      icon: Calculator,
      title: "Tax Planning & Compliance",
      description: "Strategic tax planning to minimize liability while ensuring full HMRC compliance. Personal tax, corporation tax, VAT returns, and capital gains tax advice. We stay updated with the latest tax legislation to optimize your position.",
      image: taxImage
    },
    {
      icon: FileText,
      title: "Bookkeeping & Accounts",
      description: "Professional bookkeeping services, management accounts, and statutory accounts preparation. Regular financial reporting, bank reconciliation, and year-end accounts to keep your business finances in perfect order.",
      image: dataImage
    },
    {
      icon: Users,
      title: "Payroll & Pension Administration",
      description: "Complete payroll processing including RTI submissions, P11D preparation, and auto-enrollment pension schemes. We ensure your employees are paid correctly and all HMRC requirements are met on time.",
      image: strategyImage
    },
    {
      icon: Building2,
      title: "Business Formation & Setup",
      description: "Expert guidance on business structure selection, company formation, and registration. We help you choose between sole trader, partnership, or limited company, and handle all the incorporation paperwork.",
      image: growthImage
    },
    {
      icon: ShieldCheck,
      title: "Audit & Assurance",
      description: "Statutory audits, independent examinations, and internal audit services. We provide assurance that your financial statements are accurate and comply with accounting standards and regulations.",
      image: complianceImage
    },
    {
      icon: PieChart,
      title: "Management Consultancy",
      description: "Strategic business advice, financial forecasting, and performance analysis. We help you make informed decisions with detailed financial reports, KPI tracking, and growth strategies.",
      image: calculatorImage
    }
  ];

  const industries = [
    { title: "Startups & Sole Traders", desc: "Foundation services to get you started right", testId: "industry-startups" },
    { title: "SMEs", desc: "Growth-focused accounting and advice", testId: "industry-smb" },
    { title: "Contractors", desc: "Specialist IR35 and limited company services", testId: "industry-contractors" }
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
            className="max-w-3xl"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Comprehensive Accounting Solutions</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Expert accounting and business services designed to support your success. 
              From tax planning to payroll, we provide tailored solutions for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional services delivered with expertise and care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-muted/30 py-24 relative overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute w-64 h-64 bg-primary/5 rounded-full blur-3xl top-0 left-1/4"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tailored Solutions for Every Business</h2>
            <p className="text-lg text-muted-foreground">
              Whether you're a sole trader, small business, or growing enterprise, we adapt our services 
              to match your specific requirements. Our flexible approach ensures you only pay for what you need, 
              when you need it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Card className="p-6 bg-background hover-elevate transition-all duration-300 h-full" data-testid={industry.testId}>
                  <h3 className="font-semibold mb-2 text-xl">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground">{industry.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Discuss Your Needs"
        description="Every business is unique. Contact us for a personalized service package that fits your requirements and budget."
        buttonText="Get a Free Consultation"
        buttonHref="/contact"
      />
    </div>
  );
}
