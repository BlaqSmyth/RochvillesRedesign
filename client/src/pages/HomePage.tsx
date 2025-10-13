import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import { Calculator, FileText, Users, ShieldCheck, TrendingUp, Briefcase } from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Calculator,
      title: "Tax Planning & Returns",
      description: "Expert tax planning to minimize your liability while ensuring full HMRC compliance. We handle all types of tax returns for individuals and businesses.",
      href: "/services"
    },
    {
      icon: FileText,
      title: "Bookkeeping & Accounts",
      description: "Comprehensive bookkeeping services and statutory accounts preparation. Keep your financial records accurate and up-to-date.",
      href: "/services"
    },
    {
      icon: Users,
      title: "Payroll Services",
      description: "Efficient payroll processing, RTI submissions, and pension scheme administration. We ensure your employees are paid accurately and on time.",
      href: "/services"
    },
    {
      icon: Briefcase,
      title: "Contractor Accounting",
      description: "Specialized accounting for contractors and freelancers. IR35 compliance, limited company management, and optimal tax structures.",
      href: "/contractors-guide"
    },
    {
      icon: ShieldCheck,
      title: "Compliance & Audit",
      description: "Ensure your business meets all regulatory requirements. Audit support, compliance reviews, and statutory filings.",
      href: "/compliance"
    },
    {
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Strategic financial advice to help your business grow. Investment planning, retirement planning, and wealth management.",
      href: "/financial-services"
    }
  ];

  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "£5M+", label: "Tax Savings" },
    { value: "100%", label: "Compliance Rate" }
  ];

  const whyChooseUs = [
    {
      title: "Expert Team",
      description: "Our qualified accountants have extensive experience across all industries and business sizes."
    },
    {
      title: "Proactive Service",
      description: "We don't just respond to your needs - we anticipate them and provide strategic advice year-round."
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees. Clear, competitive pricing structures tailored to your business needs."
    },
    {
      title: "Technology Driven",
      description: "Modern cloud-based systems for real-time financial insights and seamless collaboration."
    }
  ];

  return (
    <div>
      <Hero />
      
      <StatsSection stats={stats} />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive accounting and financial services tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Rochvilles & Co?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're more than just accountants - we're your trusted financial partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center" data-testid={`why-choose-${index}`}>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Let our expert accountants help you achieve your financial goals. Contact us today for a free consultation."
        buttonText="Contact Us Today"
        buttonHref="/contact"
      />
    </div>
  );
}
