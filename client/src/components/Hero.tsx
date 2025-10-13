import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const trustPoints = [
    "Trusted by 500+ businesses",
    "Expert tax planning",
    "Compliance guaranteed"
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/50 via-transparent to-transparent opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Expert Accountants for Your Business Success
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            Professional accounting, tax planning, and financial services for businesses in Ilford, Essex and London. 
            Let us handle your finances while you focus on growing your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="group" data-testid="button-get-started">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20" data-testid="button-our-services">
                Our Services
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-6">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2" data-testid={`trust-point-${index}`}>
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium text-primary-foreground/90">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/20 to-transparent"></div>
    </section>
  );
}
