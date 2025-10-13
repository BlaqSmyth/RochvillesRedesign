import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="hover-elevate transition-all duration-300 h-full flex flex-col group cursor-pointer border-2 hover:border-primary/50 hover:shadow-xl relative overflow-hidden" 
      data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      <CardHeader className="flex-none relative z-10">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg bg-primary/10 text-primary transition-all duration-300 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col relative z-10">
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
        {href && (
          <Link href={href}>
            <Button variant="ghost" size="sm" className="group/btn -ml-4" data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              Learn More
              <ArrowRight className={`ml-1 h-4 w-4 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
