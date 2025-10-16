import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Award, Users, Shield, TrendingUp, Target, CheckCircle2, Building2, Briefcase, MapPin, Quote } from "lucide-react";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import ifaLogo from "@assets/institute-of-financial-accountants-logo-png_seeklogo-508022_1760548920320.png";
import aiaLogo from "@assets/stock_images/association_of_inter_b9f2b6d7.jpg";
import ciiLogo from "@assets/chartered-insurance-institute-logo-png_seeklogo-358677_1760548490997.png";
import cmiLogo from "@assets/CMI_idJ8_s4bmY_0_1760548668823.png";
import ftaLogo from "@assets/id7rxvLLLa_1760547035151_1760618930986.png";
import ipaLogo from "@assets/idfMqNUqBD_1760546699175_1760618958013.png";
import pfsLogo from "@assets/PFS_NoStrapline_DarkGrey_Reduced_uk7jy_resized_medium_1760548562667.png";
import smpLogo from "@assets/Member_SMP_Black_CMYK_with_strapline_1760619084342.png";
import heroImage from "@assets/istockphoto-2171857890-612x612_1760615546462.jpg";
import officeImage from "@assets/stock_images/modern_workspace_off_ad07179a.jpg";
import ceoPhoto from "@assets/PHOTO-2025-10-16-12-36-12_1760614692778.jpg";

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Professional Excellence",
      description: "Authorised by AIA & IFA to provide top-tier accounting services with unwavering professional standards."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Personalised service with no call centres - direct access to your dedicated accountant who understands your business."
    },
    {
      icon: TrendingUp,
      title: "Tax Efficiency",
      description: "Expert strategic tax planning to maximise your returns while ensuring 100% HMRC compliance."
    },
    {
      icon: Target,
      title: "Specialist Knowledge",
      description: "Deep expertise in contracting, IR35, property tax, and complex business structures."
    }
  ];

  const whyChooseUs = [
    "Authorised by Association of International Accountants (AIA)",
    "Authorised by Institute of Financial Accountants (IFA)",
    "Specialist knowledge in contractor accounting and IR35",
    "Fixed competitive fees - half of industry average",
    "No hidden charges or surprise bills",
    "Dedicated personal service - no call centres",
    "Cloud-based systems for real-time access",
    "Comprehensive tax planning and compliance",
    "Serving Ilford, Essex, London and surrounding areas"
  ];

  const expertise = [
    {
      icon: Briefcase,
      title: "Contractor Specialists",
      areas: ["Limited Company Setup", "IR35 Compliance", "Tax-Efficient Structures", "Umbrella Payroll"]
    },
    {
      icon: Building2,
      title: "Business Accounting",
      areas: ["Annual Accounts", "Tax Returns", "VAT Services", "Payroll Management"]
    },
    {
      icon: TrendingUp,
      title: "Advisory Services",
      areas: ["Strategic Tax Planning", "Business Plans", "Cash Flow Forecasting", "Financial Analysis"]
    }
  ];

  return (
    <div className="relative">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-500/5 to-background" />
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-20 h-20 border-2 border-primary/30 rounded-lg rotate-12" />
          <div className="absolute top-40 left-20 w-16 h-16 border-2 border-blue-500/30 rounded-full" />
          <div className="absolute bottom-20 right-1/4 w-24 h-24 border-2 border-green-500/30 rounded-lg -rotate-12" />
        </div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl top-0 right-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full border border-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium text-primary flex items-center gap-2" data-testid="text-badge-about">
                  <Award className="w-4 h-4" />
                  About Rochvilles & Co
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent" data-testid="heading-about">
                Expert Accountants You Can Trust
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Rochvilles & Co. Accountants is a professional accounting firm based in London & Essex, 
                serving businesses and contractors in London & Essex and across the United Kingdom.
              </p>
              <p className="text-muted-foreground mb-6">
                As authorised members of both the Association of International Accountants (AIA) and 
                Institute of Financial Accountants (IFA), we provide comprehensive accounting, tax planning, 
                and financial advisory services with the highest professional standards.
              </p>
              <div className="flex items-center gap-2 p-4 bg-card rounded-lg border border-primary/10">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Our Office</p>
                  <p className="text-sm text-muted-foreground">411 Ilford Lane, Ilford, Essex IG1 2SN</p>
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
                  className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-blue-500/20 to-green-500/20 rounded-2xl blur-2xl"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                  <img 
                    src={heroImage} 
                    alt="Professional accounting technology" 
                    className="w-full h-auto"
                    data-testid="img-hero-about"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-16 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8" data-testid="heading-memberships">
              Professional Memberships & Authorisations
            </h2>
            <div className="flex flex-col items-center gap-8 mb-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {/* AIA Logo */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center justify-center h-28 rounded-lg bg-white dark:bg-gray-900 p-4 shadow-lg border-2 border-primary/20 hover-elevate"
                >
                  <img 
                    src={aiaLogo} 
                    alt="Association of International Accountants (AIA)"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* IFA Logo */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center justify-center h-28 rounded-lg bg-white dark:bg-gray-900 p-4 shadow-lg border-2 border-primary/20 hover-elevate"
                >
                  <img 
                    src={ifaLogo} 
                    alt="Institute of Financial Accountants (IFA)"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* CII Logo */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center justify-center h-28 rounded-lg bg-white dark:bg-gray-900 p-4 shadow-lg border-2 border-primary/20 hover-elevate"
                >
                  <img 
                    src={ciiLogo} 
                    alt="Chartered Insurance Institute (CII)"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* CMI Logo */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center justify-center h-28 rounded-lg bg-white dark:bg-gray-900 p-4 shadow-lg border-2 border-primary/20 hover-elevate"
                >
                  <img 
                    src={cmiLogo} 
                    alt="Chartered Management Institute (CMI)"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* FTA Logo */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center justify-center h-28 rounded-lg bg-white dark:bg-gray-900 p-4 shadow-lg border-2 border-primary/20 hover-elevate"
                >
                  <img 
                    src={ftaLogo} 
                    alt="Federation of Tax Advisers (FTA)"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* IPA Logo */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center justify-center h-28 rounded-lg bg-white dark:bg-gray-900 p-4 shadow-lg border-2 border-primary/20 hover-elevate"
                >
                  <img 
                    src={ipaLogo} 
                    alt="Institute of Public Accountants (IPA)"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* PFS Logo */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center justify-center h-28 rounded-lg bg-white dark:bg-gray-900 p-4 shadow-lg border-2 border-primary/20 hover-elevate"
                >
                  <img 
                    src={pfsLogo} 
                    alt="Personal Finance Society (PFS)"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* SMP Logo */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center justify-center h-28 rounded-lg bg-white dark:bg-gray-900 p-4 shadow-lg border-2 border-primary/20 hover-elevate"
                >
                  <img 
                    src={smpLogo} 
                    alt="Society of Mortgage Professionals (SMP)"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>
              <p className="text-sm text-center text-muted-foreground max-w-3xl">
                <span className="font-semibold text-foreground">Authorised and accredited by leading professional bodies</span> to provide comprehensive accounting, tax, and financial advisory services
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO Statement */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/20" />
                <div className="relative bg-gradient-to-br from-primary/5 to-blue-500/5 p-8 rounded-2xl border-2 border-primary/10" data-testid="container-ceo-statement">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-ceo-statement">
                    A Message from our Founder
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      "At Rochvilles & Co., we believe that every business deserves access to professional, 
                      transparent, and personalized accounting services. Our commitment is to provide exceptional 
                      financial guidance that empowers our clients to achieve their business goals."
                    </p>
                    <p className="text-lg leading-relaxed">
                      "With our authorisations from AIA and IFA, combined with our deep expertise in contractor 
                      accounting and tax planning, we offer more than just compliance, we provide strategic partnership 
                      that drives success. Our competitive fixed-fee structure ensures you receive top-tier service 
                      without the premium prices."
                    </p>
                    <p className="text-lg leading-relaxed">
                      "Whether you're a contractor navigating IR35, a business seeking growth, or an individual 
                      requiring tax planning, we're here to deliver clarity, efficiency, and results you can trust."
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t-2 border-primary/10">
                    <p className="font-bold text-xl text-foreground" data-testid="text-ceo-name">Marcellinius Oguh</p>
                    <p className="text-primary font-semibold" data-testid="text-ceo-title">CEO & Founder, Rochvilles & Co. Accountants</p>
                    <p className="text-sm text-muted-foreground mt-1">AIA, IFA</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-blue-500/20 to-green-500/20 rounded-2xl blur-2xl"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                  <img 
                    src={ceoPhoto} 
                    alt="Marcellinius Oguh - CEO of Rochvilles & Co. Accountants" 
                    className="w-full h-auto"
                    data-testid="img-ceo"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-values">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="h-full hover-elevate transition-all duration-300 border-2 hover:border-primary/50" data-testid={`card-value-${index}`}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="p-3 rounded-lg bg-primary/10"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <value.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-24 md:py-32 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-expertise">Our Areas of Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive accounting and tax services tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="h-full hover-elevate transition-all duration-300 border-2 hover:border-primary/50" data-testid={`card-expertise-${index}`}>
                  <CardHeader>
                    <div className="flex flex-col items-center text-center">
                      <motion.div 
                        className="p-4 rounded-lg bg-primary/10 mb-4"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <area.icon className="h-8 w-8 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.areas.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-blue-500/20 to-green-500/20 rounded-2xl blur-2xl"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                  <img 
                    src={officeImage} 
                    alt="Modern office workspace" 
                    className="w-full h-auto"
                    data-testid="img-office"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-why-choose">Why Choose Rochvilles & Co?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine professional expertise with personalised service to deliver exceptional value to our clients.
              </p>
              <div className="space-y-3">
                {whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-3 bg-card rounded-lg border border-primary/10 hover-elevate"
                    data-testid={`reason-${index}`}
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Get Started?"
        description="Let us help you achieve your financial goals with professional accounting and tax planning services."
        buttonText="Contact Us Today"
        buttonHref="/contact"
      />
    </div>
  );
}
