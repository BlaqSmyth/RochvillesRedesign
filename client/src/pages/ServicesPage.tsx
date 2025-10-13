import { Calculator, FileText, Users, Building2, ShieldCheck, PieChart } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

export default function ServicesPage() {
  const services = [
    {
      icon: Calculator,
      title: "Tax Planning & Compliance",
      description: "Strategic tax planning to minimize liability while ensuring full HMRC compliance. Personal tax, corporation tax, VAT returns, and capital gains tax advice. We stay updated with the latest tax legislation to optimize your position."
    },
    {
      icon: FileText,
      title: "Bookkeeping & Accounts",
      description: "Professional bookkeeping services, management accounts, and statutory accounts preparation. Regular financial reporting, bank reconciliation, and year-end accounts to keep your business finances in perfect order."
    },
    {
      icon: Users,
      title: "Payroll & Pension Administration",
      description: "Complete payroll processing including RTI submissions, P11D preparation, and auto-enrollment pension schemes. We ensure your employees are paid correctly and all HMRC requirements are met on time."
    },
    {
      icon: Building2,
      title: "Business Formation & Setup",
      description: "Expert guidance on business structure selection, company formation, and registration. We help you choose between sole trader, partnership, or limited company, and handle all the incorporation paperwork."
    },
    {
      icon: ShieldCheck,
      title: "Audit & Assurance",
      description: "Statutory audits, independent examinations, and internal audit services. We provide assurance that your financial statements are accurate and comply with accounting standards and regulations."
    },
    {
      icon: PieChart,
      title: "Management Consultancy",
      description: "Strategic business advice, financial forecasting, and performance analysis. We help you make informed decisions with detailed financial reports, KPI tracking, and growth strategies."
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive accounting and business services designed to support your success. 
              From tax planning to payroll, we provide expert solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Tailored Solutions for Every Business</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're a sole trader, small business, or growing enterprise, we adapt our services 
              to match your specific requirements. Our flexible approach ensures you only pay for what you need, 
              when you need it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-background rounded-lg" data-testid="industry-startups">
                <h3 className="font-semibold mb-2">Startups & Sole Traders</h3>
                <p className="text-sm text-muted-foreground">Foundation services to get you started right</p>
              </div>
              <div className="p-6 bg-background rounded-lg" data-testid="industry-smb">
                <h3 className="font-semibold mb-2">SMEs</h3>
                <p className="text-sm text-muted-foreground">Growth-focused accounting and advice</p>
              </div>
              <div className="p-6 bg-background rounded-lg" data-testid="industry-contractors">
                <h3 className="font-semibold mb-2">Contractors</h3>
                <p className="text-sm text-muted-foreground">Specialist IR35 and limited company services</p>
              </div>
            </div>
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
