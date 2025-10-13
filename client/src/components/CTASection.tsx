import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTASection({ title, description, buttonText, buttonHref }: CTASectionProps) {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
          {description}
        </p>
        <Link href={buttonHref}>
          <Button size="lg" variant="secondary" className="group" data-testid="button-cta">
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
