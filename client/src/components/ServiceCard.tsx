import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-200 h-full flex flex-col" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="flex-none">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
        {href && (
          <Link href={href}>
            <Button variant="ghost" size="sm" className="group -ml-4" data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              Learn More
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
