import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ShieldCheck, FileCheck, AlertTriangle, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function CompliancePage() {
  const complianceAreas = [
    {
      icon: FileCheck,
      title: "Statutory Accounts",
      description: "Preparation and filing of annual statutory accounts with Companies House, ensuring full compliance with UK accounting standards and company law requirements."
    },
    {
      icon: ShieldCheck,
      title: "Tax Compliance",
      description: "Complete management of all tax compliance obligations including corporation tax, VAT, PAYE, and self-assessment returns, filed accurately and on time."
    },
    {
      icon: AlertTriangle,
      title: "HMRC Investigations",
      description: "Expert support during HMRC enquiries and investigations. We handle all correspondence and represent your interests to achieve the best possible outcome."
    },
    {
      icon: CheckCircle2,
      title: "Regulatory Filings",
      description: "Management of all regulatory requirements including confirmation statements, PSC register updates, and annual returns to maintain good standing."
    }
  ];

  const standards = [
    {
      title: "Professional Standards",
      items: [
        "Members of professional accounting bodies",
        "Adherence to UK GAAP and FRS 102",
        "Regular professional development",
        "Quality assurance processes"
      ]
    },
    {
      title: "Data Protection",
      items: [
        "Full GDPR compliance",
        "Secure cloud-based systems",
        "Encrypted data transmission",
        "Regular security audits"
      ]
    },
    {
      title: "Anti-Money Laundering",
      items: [
        "AML compliance procedures",
        "Client due diligence",
        "Suspicious activity monitoring",
        "Regular staff training"
      ]
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Compliance & Standards</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ensuring your business meets all regulatory requirements. From statutory filings to tax compliance, 
              we keep you on track and protect your business reputation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive compliance support to keep your business in good standing with all regulatory authorities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceAreas.map((area, index) => (
              <Card key={index} className="hover-elevate transition-all duration-200" data-testid={`compliance-card-${index}`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <area.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                      <p className="text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Standards & Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest professional standards and comply with all relevant regulations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <Card key={index} data-testid={`standard-${index}`}>
                <CardHeader>
                  <h3 className="text-xl font-semibold">{standard.title}</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {standard.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
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
              <h2 className="text-2xl font-bold mb-4">Peace of Mind Guarantee</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We guarantee 100% compliance with all statutory requirements. If any penalties arise due to 
                our error, we'll cover the costs and work with HMRC on your behalf to resolve the issue.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Deadline Monitoring</p>
                    <p className="text-sm text-muted-foreground">We track all deadlines for you</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Proactive Reminders</p>
                    <p className="text-sm text-muted-foreground">Advance notice of upcoming filings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Expert Preparation</p>
                    <p className="text-sm text-muted-foreground">All submissions checked by qualified staff</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Direct Filing</p>
                    <p className="text-sm text-muted-foreground">We file directly with authorities</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection
        title="Stay Compliant, Stay Confident"
        description="Let us handle your compliance requirements so you can focus on running your business. Contact us for a compliance review."
        buttonText="Schedule a Review"
        buttonHref="/contact"
      />
    </div>
  );
}
