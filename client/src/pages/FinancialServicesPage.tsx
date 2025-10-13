import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { TrendingUp, PiggyBank, Shield, LineChart, Users, Building } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function FinancialServicesPage() {
  const services = [
    {
      icon: PiggyBank,
      title: "Retirement Planning",
      description: "Comprehensive pension planning to secure your financial future. We help you maximize pension contributions, choose the right schemes, and plan for a comfortable retirement."
    },
    {
      icon: TrendingUp,
      title: "Investment Planning",
      description: "Strategic investment advice to grow your wealth. ISAs, investment bonds, and portfolio management tailored to your risk profile and financial goals."
    },
    {
      icon: Shield,
      title: "Protection & Insurance",
      description: "Safeguard your family and business with appropriate insurance coverage. Life insurance, critical illness cover, and business protection policies."
    },
    {
      icon: LineChart,
      title: "Wealth Management",
      description: "Holistic wealth management services for high net worth individuals. Estate planning, tax-efficient investing, and generational wealth transfer."
    },
    {
      icon: Users,
      title: "Corporate Financial Planning",
      description: "Strategic financial planning for business owners. Director pension schemes, profit extraction strategies, and succession planning."
    },
    {
      icon: Building,
      title: "Mortgage & Property",
      description: "Mortgage advice and property investment planning. Buy-to-let mortgages, commercial property finance, and portfolio optimization."
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Free no-obligation meeting to discuss your financial goals and current situation"
    },
    {
      step: "2",
      title: "Financial Analysis",
      description: "Comprehensive review of your finances, identifying opportunities and risks"
    },
    {
      step: "3",
      title: "Tailored Recommendations",
      description: "Personalized financial plan with clear, actionable recommendations"
    },
    {
      step: "4",
      title: "Implementation",
      description: "Expert guidance and support to implement your financial strategy"
    },
    {
      step: "5",
      title: "Ongoing Review",
      description: "Regular reviews to ensure your plan stays on track and adapts to life changes"
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Rochvilles Financial Services (RFS)</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Professional financial planning and wealth management services. We help you build, protect, 
              and grow your wealth with expert advice tailored to your unique circumstances.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Financial Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial planning solutions to help you achieve your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate transition-all duration-200" data-testid={`service-card-${index}`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to financial planning that puts your needs first
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center" data-testid={`process-step-${index}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Why Choose RFS?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold mb-2">Independent Advice</h3>
                  <p className="text-muted-foreground">
                    We're not tied to any product providers, ensuring truly independent recommendations 
                    that serve your best interests.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Qualified Advisors</h3>
                  <p className="text-muted-foreground">
                    Our team holds professional qualifications and undergoes regular training to stay 
                    current with regulations and best practices.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Holistic Approach</h3>
                  <p className="text-muted-foreground">
                    We consider all aspects of your financial life, integrating tax planning, 
                    investments, and protection into one cohesive strategy.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Transparent Fees</h3>
                  <p className="text-muted-foreground">
                    Clear, upfront fee structure with no hidden charges. You'll always know exactly 
                    what you're paying for our services.
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Rochvilles Financial Services is a trading name of Rochvilles & Co. Financial advice is provided 
                by qualified and regulated financial advisors.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection
        title="Start Your Financial Journey"
        description="Book a free consultation to discuss your financial goals and discover how we can help you achieve them."
        buttonText="Book Free Consultation"
        buttonHref="/contact"
      />
    </div>
  );
}
