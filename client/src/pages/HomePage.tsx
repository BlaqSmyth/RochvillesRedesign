import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, FileText, Users, ShieldCheck, TrendingUp, Briefcase, Award, Clock, Target, Heart } from "lucide-react";
import servicesImage from "@assets/stock_images/accountant_working_f_68d5c60d.jpg";
import officeImage from "@assets/stock_images/modern_office_interi_001cee9b.jpg";

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
      icon: Award,
      title: "Expert Team",
      description: "Our qualified accountants have extensive experience across all industries and business sizes."
    },
    {
      icon: Clock,
      title: "Proactive Service",
      description: "We don't just respond to your needs - we anticipate them and provide strategic advice year-round."
    },
    {
      icon: Target,
      title: "Transparent Pricing",
      description: "No hidden fees. Clear, competitive pricing structures tailored to your business needs."
    },
    {
      icon: Heart,
      title: "Technology Driven",
      description: "Modern cloud-based systems for real-time financial insights and seamless collaboration."
    }
  ];

  return (
    <div>
      <Hero />
      
      <StatsSection stats={stats} />

      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive accounting and financial services tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Rochvilles & Co?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're more than just accountants - we're your trusted financial partners committed to your success.
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <Card key={index} className="hover-elevate transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-2xl"></div>
                <img 
                  src={servicesImage} 
                  alt="Professional accountant at work" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl blur-2xl"></div>
                <img 
                  src={officeImage} 
                  alt="Modern office workspace" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">Our Approach</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Modern Accounting for Modern Business</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We combine traditional expertise with cutting-edge technology to deliver accounting services 
                that truly make a difference to your business.
              </p>
              <p className="text-muted-foreground mb-8">
                Our cloud-based systems give you real-time access to your financial data, while our experienced 
                team provides the strategic insights you need to make informed decisions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-muted-foreground">Real-time financial reporting and insights</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-muted-foreground">Proactive tax planning and advice</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-muted-foreground">Dedicated support when you need it</span>
                </li>
              </ul>
            </div>
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
