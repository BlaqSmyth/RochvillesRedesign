import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Calendar, Clock, TrendingUp } from "lucide-react";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function TaxTipsPage() {
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

  const categoryColors: Record<string, string> = {
    "Compliance": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    "Tax Planning": "bg-green-500/10 text-green-600 dark:text-green-400",
    "Contractors": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    "Tax Relief": "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    "VAT": "bg-red-500/10 text-red-600 dark:text-red-400"
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-24 md:py-32 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-0 right-0"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
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
              <span className="text-sm font-medium text-primary flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Expert Insights
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Tax Tips & Insights</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Stay informed with the latest tax news, tips, and strategies from our expert accountants. 
              Regular updates to help you navigate the complex world of UK taxation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground">
              Expert guidance to help you stay compliant and maximize your tax efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {taxTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="hover-elevate transition-all duration-300 flex flex-col h-full border-2 hover:border-primary/50 hover:shadow-xl group" data-testid={`card-tax-tip-${index}`}>
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`inline-block px-3 py-1 ${categoryColors[tip.category]} text-xs font-medium rounded-full mb-3 w-fit`}
                    >
                      {tip.category}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{tip.title}</h3>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-br from-muted/50 to-muted/30 py-24 relative overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl top-0 left-1/2"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest tax tips, updates, and insights delivered straight to your inbox every month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                data-testid="input-newsletter-email"
              />
              <Button size="lg" data-testid="button-subscribe">
                Subscribe
              </Button>
            </div>
          </motion.div>
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
