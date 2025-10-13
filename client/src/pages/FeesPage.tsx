import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import CTASection from "@/components/CTASection";

export default function FeesPage() {
  const packages = [
    {
      name: "Sole Trader",
      price: "£50",
      period: "per month",
      description: "Perfect for self-employed individuals and freelancers",
      features: [
        "Annual accounts preparation",
        "Self-assessment tax return",
        "Basic tax planning advice",
        "Unlimited email support",
        "Quarterly management accounts"
      ]
    },
    {
      name: "Limited Company",
      price: "£95",
      period: "per month",
      description: "Comprehensive package for small limited companies",
      features: [
        "Everything in Sole Trader, plus:",
        "Corporation tax return",
        "Confirmation statement filing",
        "Dividend planning advice",
        "VAT returns (if applicable)",
        "Dedicated account manager",
        "Phone support"
      ],
      popular: true
    },
    {
      name: "Contractor",
      price: "£95",
      period: "per month",
      description: "Specialized service for IT contractors and consultants",
      features: [
        "All Limited Company features, plus:",
        "IR35 status assessments",
        "Contract reviews",
        "Optimized remuneration planning",
        "Expense claim management",
        "Real-time cloud accounting"
      ]
    }
  ];

  const additionalServices = [
    { service: "VAT registration and returns", price: "From £25/quarter" },
    { service: "Payroll processing (1-5 employees)", price: "From £15/month" },
    { service: "Company formation", price: "£150 (one-off)" },
    { service: "Personal tax return", price: "From £150" },
    { service: "Tax investigation insurance", price: "£50/year" }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Simple, fixed monthly fees with no hidden charges. Choose the package that fits your needs 
              and upgrade or downgrade anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative flex flex-col ${pkg.popular ? 'border-primary shadow-lg scale-105' : ''}`}
                data-testid={`package-${index}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground">+ VAT</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.period}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button 
                      variant={pkg.popular ? "default" : "outline"} 
                      className="w-full"
                      data-testid={`button-select-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-muted-foreground">
              Flexible add-ons to customize your accounting package
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {additionalServices.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center pb-4 border-b last:border-b-0 last:pb-0"
                    data-testid={`additional-service-${index}`}
                  >
                    <span className="font-medium">{item.service}</span>
                    <span className="text-muted-foreground">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">What's Included in All Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Secure cloud accounting software</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Regular financial updates</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Proactive tax planning</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>HMRC correspondence handling</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>No long-term contracts</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                All prices exclude VAT. Bespoke packages available for larger businesses - please contact us 
                for a tailored quote.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection
        title="Questions About Pricing?"
        description="Not sure which package is right for you? Get in touch and we'll help you find the perfect solution."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </div>
  );
}
