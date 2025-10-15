import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Calendar, Clock, TrendingUp, Lightbulb, BookOpen, Sparkles } from "lucide-react";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import taxPlanningImage from "@assets/stock_images/tax_planning_financi_1bccad55.jpg";
import taxSavingsImage from "@assets/stock_images/business_tax_savings_ee70625a.jpg";
import taxDeadlineImage from "@assets/stock_images/tax_deadline_calenda_07b5e5be.jpg";
import complianceSuccessImage from "@assets/stock_images/financial_compliance_4dc9f628.jpg";

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
    <div className="relative overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/5 to-background" />
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-20 h-20 border-2 border-blue-500/30 rounded-lg rotate-12" />
          <div className="absolute top-40 left-20 w-16 h-16 border-2 border-green-500/30 rounded-full" />
          <div className="absolute bottom-20 right-1/4 w-24 h-24 border-2 border-purple-500/30 rounded-lg -rotate-12" />
        </div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-96 h-96 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full blur-3xl top-0 right-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full border border-blue-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2" data-testid="text-badge-insights">
                  <Lightbulb className="w-4 h-4" />
                  Expert Insights
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent" data-testid="heading-tax-tips">
                Tax Tips & Insights
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Stay informed with the latest tax news, tips, and strategies from our expert accountants. 
                Regular updates to help you navigate the complex world of UK taxation.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-blue-500/10">
                  <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium">Expert Articles</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-green-500/10">
                  <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium">Regular Updates</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-green-500/20 to-purple-500/20 rounded-2xl blur-2xl"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                  <img 
                    src={taxPlanningImage} 
                    alt="Tax planning and strategy" 
                    className="w-full h-auto"
                    data-testid="img-hero-tax-planning"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Divider Section 1 */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={taxSavingsImage} 
            alt="Business tax savings" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-500/80 to-green-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-4xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Maximize Your Tax Savings</h2>
            <p className="text-lg md:text-xl text-white/90">
              Expert guidance to help you stay compliant and optimize your tax position
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-blue-500/5 rounded-full border border-blue-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Latest Articles</span>
            </motion.div>
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
                <Card className="hover-elevate transition-all duration-300 flex flex-col h-full border-2 hover:border-primary/50 hover:shadow-xl group bg-gradient-to-br from-card to-muted/5" data-testid={`card-tax-tip-${index}`}>
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

      {/* Image Divider Section 2 */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={taxDeadlineImage} 
            alt="Tax deadlines and organization" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 via-green-500/80 to-purple-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-4xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Never Miss a Deadline</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Stay on top of critical tax dates and compliance requirements
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Key Dates</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Timely Reminders</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-purple-500/30 rounded-full" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-blue-500/30 rounded-lg rotate-45" />
        </div>

        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl top-0 left-1/2"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block mb-6 px-4 py-2 bg-purple-500/5 rounded-full border border-purple-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Newsletter</span>
            </motion.div>
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

      {/* Image Divider Section 3 */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={complianceSuccessImage} 
            alt="Compliance success" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-blue-500/80 to-green-600/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Tax Advice When You Need It</h2>
            <p className="text-lg text-white/90">
              Professional guidance to help you navigate tax challenges with confidence
            </p>
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
