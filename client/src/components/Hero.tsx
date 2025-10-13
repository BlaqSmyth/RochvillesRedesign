import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Users } from "lucide-react";
import heroImage from "@assets/stock_images/professional_busines_f585c442.jpg";

export default function Hero() {
  const trustPoints = [
    "Trusted by 500+ businesses",
    "Expert tax planning",
    "Compliance guaranteed"
  ];

  const floatingIcons = [
    { icon: TrendingUp, delay: "0s", position: "top-20 right-20" },
    { icon: Shield, delay: "0.5s", position: "top-40 right-40" },
    { icon: Users, delay: "1s", position: "top-60 right-60" }
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional team collaboration" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/70"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl top-40 right-0 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl bottom-0 left-1/2 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.position} animate-float opacity-20`}
            style={{ animationDelay: item.delay }}
          >
            <item.icon className="w-16 h-16 text-primary-foreground" />
          </div>
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20">
            <span className="text-sm font-medium text-primary-foreground">Professional Accounting Services</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-primary-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Expert Accountants for Your Business Success
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Professional accounting, tax planning, and financial services for businesses in Ilford, Essex and London. 
            Let us handle your finances while you focus on growing your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="group shadow-xl hover:shadow-2xl transition-all hover:scale-105" data-testid="button-get-started">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 shadow-lg hover:scale-105 transition-all" data-testid="button-our-services">
                Our Services
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20" data-testid={`trust-point-${index}`}>
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium text-primary-foreground/90">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
    </section>
  );
}
