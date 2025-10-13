import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface AnimatedServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  image?: string;
  index: number;
}

export default function AnimatedServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  href,
  image,
  index 
}: AnimatedServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Card 
        className="hover-elevate transition-all duration-500 h-full flex flex-col group cursor-pointer border-2 hover:border-primary/50 hover:shadow-2xl relative overflow-hidden" 
        data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Animated geometric shape */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileHover={{ scale: 1, rotate: 180 }}
          transition={{ duration: 0.6 }}
          className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full"
        />
        
        {image && (
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
            <motion.div
              className="absolute inset-0 bg-primary/20"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}

        <CardHeader className="flex-none relative z-10">
          <div className="flex items-start gap-4">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="p-3 rounded-lg bg-primary/10 text-primary"
            >
              <Icon className="h-6 w-6" />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {title}
              </h3>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col relative z-10">
          <p className="text-muted-foreground mb-4 flex-1">{description}</p>
          {href && (
            <Link href={href}>
              <Button 
                variant="ghost" 
                size="sm" 
                className="group/btn -ml-4" 
                data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </motion.span>
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
