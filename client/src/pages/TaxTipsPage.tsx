import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function TaxTipsPage() {
  // TODO: remove mock data
  const taxTips = [
    {
      title: "Key Tax Deadlines for 2024/25",
      date: "March 2024",
      readTime: "5 min read",
      excerpt: "Stay on top of important tax deadlines to avoid penalties. Self-assessment deadlines, corporation tax payment dates, and VAT return submissions.",
      category: "Compliance"
    },
    {
      title: "Maximizing Tax Relief on Business Expenses",
      date: "February 2024",
      readTime: "7 min read",
      excerpt: "Learn which business expenses qualify for tax relief and how to claim them correctly. From office costs to travel expenses and equipment purchases.",
      category: "Tax Planning"
    },
    {
      title: "IR35 Changes: What Contractors Need to Know",
      date: "February 2024",
      readTime: "6 min read",
      excerpt: "Understanding the latest IR35 legislation and how it affects your contracting business. Determination statements, status assessments, and compliance strategies.",
      category: "Contractors"
    },
    {
      title: "Capital Allowances: A Complete Guide",
      date: "January 2024",
      readTime: "8 min read",
      excerpt: "Everything you need to know about claiming capital allowances on business assets. Annual Investment Allowance, writing down allowances, and super-deduction.",
      category: "Tax Relief"
    },
    {
      title: "VAT Tips for Small Businesses",
      date: "January 2024",
      readTime: "5 min read",
      excerpt: "Essential VAT guidance for small businesses. Registration thresholds, flat rate schemes, and Making Tax Digital compliance.",
      category: "VAT"
    },
    {
      title: "Year-End Tax Planning Strategies",
      date: "December 2023",
      readTime: "10 min read",
      excerpt: "Strategic tax planning tips for year-end. Pension contributions, dividend planning, and timing of income and expenses to optimize your tax position.",
      category: "Tax Planning"
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tax Tips & Insights</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Stay informed with the latest tax news, tips, and strategies from our expert accountants. 
              Regular updates to help you navigate the complex world of UK taxation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taxTips.map((tip, index) => (
              <Card key={index} className="hover-elevate transition-all duration-200 flex flex-col" data-testid={`card-tax-tip-${index}`}>
                <CardHeader>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3 w-fit">
                    {tip.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{tip.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{tip.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{tip.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest tax tips, updates, and insights delivered straight to your inbox every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border bg-background"
              data-testid="input-newsletter-email"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2" data-testid="button-subscribe">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Professional Tax Advice?"
        description="Our expert team is ready to help with all your tax planning and compliance needs. Schedule a consultation today."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </div>
  );
}
