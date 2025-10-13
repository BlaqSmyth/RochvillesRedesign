import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, TrendingDown, Calculator, Sparkles } from "lucide-react";

export default function InteractiveTaxCalculator() {
  const [income, setIncome] = useState([50000]);
  const [showResult, setShowResult] = useState(false);

  const calculateSavings = () => {
    const estimatedSavings = income[0] * 0.15; // 15% potential savings
    return Math.round(estimatedSavings);
  };

  const handleCalculate = () => {
    setShowResult(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <Card className="bg-gradient-to-br from-primary/5 via-background to-primary/10 border-2 border-primary/20 shadow-2xl overflow-hidden relative">
        {/* Animated background orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl -top-20 -right-20"
        />

        <CardHeader className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="p-3 rounded-lg bg-primary/10"
            >
              <Calculator className="h-6 w-6 text-primary" />
            </motion.div>
            <h3 className="text-2xl font-bold">Tax Savings Calculator</h3>
          </div>
          <p className="text-muted-foreground">
            Discover how much you could save with expert tax planning
          </p>
        </CardHeader>

        <CardContent className="relative z-10 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-sm font-medium">Annual Income</label>
              <motion.div
                key={income[0]}
                initial={{ scale: 1.2, color: "var(--primary)" }}
                animate={{ scale: 1, color: "var(--foreground)" }}
                className="text-2xl font-bold"
              >
                £{income[0].toLocaleString()}
              </motion.div>
            </div>

            <Slider
              value={income}
              onValueChange={setIncome}
              min={20000}
              max={200000}
              step={5000}
              className="mb-6"
            />

            <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
              <div>£20k</div>
              <div className="text-center">£110k</div>
              <div className="text-right">£200k</div>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              onClick={handleCalculate} 
              className="w-full shadow-lg group"
              size="lg"
              data-testid="button-calculate-savings"
            >
              <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              Calculate Potential Savings
            </Button>
          </motion.div>

          <AnimatePresence mode="wait">
            {showResult && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", duration: 0.6 }}
                        className="p-3 rounded-full bg-green-500/20"
                      >
                        <TrendingDown className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </motion.div>
                      <div>
                        <div className="text-sm text-muted-foreground">Estimated Annual Savings</div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="text-3xl font-bold text-green-600 dark:text-green-400 flex items-center gap-2"
                        >
                          <DollarSign className="h-6 w-6" />
                          £{calculateSavings().toLocaleString()}
                        </motion.div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on effective tax planning strategies. Actual savings may vary.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}
