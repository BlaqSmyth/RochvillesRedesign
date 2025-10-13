import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTASection({ title, description, buttonText, buttonHref }: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -top-20 -right-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -bottom-20 -left-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-1/4 w-6 h-6 text-primary-foreground/20 animate-float" />
        <Sparkles className="absolute top-40 right-1/3 w-8 h-8 text-primary-foreground/20 animate-float" style={{ animationDelay: "0.5s" }} />
        <Sparkles className="absolute bottom-20 left-1/3 w-6 h-6 text-primary-foreground/20 animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          {description}
        </p>
        <Link href={buttonHref}>
          <Button size="lg" variant="secondary" className="group shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.2s" }} data-testid="button-cta">
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
