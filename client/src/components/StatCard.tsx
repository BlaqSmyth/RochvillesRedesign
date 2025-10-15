import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

interface StatCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  index: number;
}

export function StatCard({ label, value, prefix = "", suffix = "", index }: StatCardProps) {
  const { count, ref } = useCountUp({ end: value, duration: 2000 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
      data-testid={`stat-${index}`}
    >
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 transition-all">
        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
          {prefix}{count}{suffix}
        </div>
        <div className="text-sm text-muted-foreground font-medium">{label}</div>
      </Card>
    </motion.div>
  );
}
