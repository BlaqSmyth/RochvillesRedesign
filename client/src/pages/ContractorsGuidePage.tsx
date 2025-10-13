import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertCircle } from "lucide-react";
import CTASection from "@/components/CTASection";

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
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contractors Guide</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Specialist accounting services for contractors and freelancers. Expert guidance on IR35, 
              limited company management, and tax-efficient contracting.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Contractors Choose Us</h2>
              <p className="text-muted-foreground mb-6">
                As a contractor, you need an accountant who understands the unique challenges and opportunities 
                of your working arrangement. We specialize in contractor accounting and provide dedicated support 
                to help you maximize your take-home pay while staying fully compliant.
              </p>
              <p className="text-muted-foreground mb-8">
                Our contractor package includes everything you need to run your limited company efficiently, 
                from incorporation to ongoing accounting, tax planning, and IR35 compliance.
              </p>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">IR35 Expertise</h3>
                    <p className="text-sm text-muted-foreground">
                      Navigating IR35 legislation can be complex. Our team stays up-to-date with the latest 
                      regulations and provides clear, practical advice to ensure your compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Our Contractor Services</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3" data-testid={`service-${index}`}>
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">IR35 Compliance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding and managing IR35 is essential for all contractors. Here's how we help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ir35Considerations.map((item, index) => (
              <Card key={index} data-testid={`ir35-card-${index}`}>
                <CardHeader>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Fixed Monthly Fee</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our contractor packages start from just £95 per month (plus VAT), providing you with 
                complete peace of mind and predictable costs. No hidden fees, no surprises.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  All accounting and bookkeeping included
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Annual accounts and tax returns
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Unlimited support and advice
                </li>
              </ul>
            </CardContent>
          </Card>
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
