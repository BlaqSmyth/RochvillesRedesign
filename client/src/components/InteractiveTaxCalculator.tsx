import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, TrendingDown, Calculator, Sparkles, FileText, Wallet } from "lucide-react";

interface TaxBreakdown {
  personalAllowance: number;
  basicRate: number;
  higherRate: number;
  additionalRate: number;
  totalIncomeTax: number;
  nationalInsurance: number;
  totalTax: number;
  takeHome: number;
}

export default function InteractiveTaxCalculator() {
  const [income, setIncome] = useState([50000]);
  const [showResult, setShowResult] = useState(false);
  const [showTaxResult, setShowTaxResult] = useState(false);

  const calculateSavings = () => {
    const estimatedSavings = income[0] * 0.15; // 15% potential savings
    return Math.round(estimatedSavings);
  };

  const calculateIncomeTax = (): TaxBreakdown => {
    const salary = income[0];
    
    // UK Tax Bands 2024/25
    const personalAllowance = 12570;
    const basicRateLimit = 50270;
    const higherRateLimit = 125140;
    
    let taxableIncome = Math.max(0, salary - personalAllowance);
    
    // Calculate tax for each band
    let basicRateTax = 0;
    let higherRateTax = 0;
    let additionalRateTax = 0;
    
    if (taxableIncome > 0) {
      const basicRateIncome = Math.min(taxableIncome, basicRateLimit - personalAllowance);
      basicRateTax = basicRateIncome * 0.20;
      
      if (taxableIncome > basicRateLimit - personalAllowance) {
        const higherRateIncome = Math.min(
          taxableIncome - (basicRateLimit - personalAllowance),
          higherRateLimit - basicRateLimit
        );
        higherRateTax = higherRateIncome * 0.40;
        
        if (taxableIncome > higherRateLimit - personalAllowance) {
          const additionalRateIncome = taxableIncome - (higherRateLimit - personalAllowance);
          additionalRateTax = additionalRateIncome * 0.45;
        }
      }
    }
    
    const totalIncomeTax = basicRateTax + higherRateTax + additionalRateTax;
    
    // Calculate National Insurance
    const niThreshold = 12570;
    const niUpperLimit = 50270;
    let nationalInsurance = 0;
    
    if (salary > niThreshold) {
      const niableIncome = Math.min(salary - niThreshold, niUpperLimit - niThreshold);
      nationalInsurance = niableIncome * 0.12;
      
      if (salary > niUpperLimit) {
        nationalInsurance += (salary - niUpperLimit) * 0.02;
      }
    }
    
    const totalTax = totalIncomeTax + nationalInsurance;
    const takeHome = salary - totalTax;
    
    return {
      personalAllowance: Math.min(salary, personalAllowance),
      basicRate: basicRateTax,
      higherRate: higherRateTax,
      additionalRate: additionalRateTax,
      totalIncomeTax,
      nationalInsurance,
      totalTax,
      takeHome
    };
  };

  const handleCalculate = () => {
    setShowResult(true);
  };

  const handleCalculateTax = () => {
    setShowTaxResult(true);
  };

  const taxBreakdown = calculateIncomeTax();

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
            <h3 className="text-2xl font-bold">Tax Calculator</h3>
          </div>
          <p className="text-muted-foreground">
            Calculate your tax liability and potential savings
          </p>
        </CardHeader>

        <CardContent className="relative z-10">
          <Tabs defaultValue="savings" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="savings" data-testid="tab-tax-savings">
                <TrendingDown className="h-4 w-4 mr-2" />
                Tax Savings
              </TabsTrigger>
              <TabsTrigger value="income" data-testid="tab-income-tax">
                <Wallet className="h-4 w-4 mr-2" />
                Income Tax
              </TabsTrigger>
            </TabsList>

            <TabsContent value="savings" className="space-y-6">
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
                  max={1000000}
                  step={10000}
                  className="mb-6"
                  data-testid="slider-income"
                />

                <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                  <div>£20k</div>
                  <div className="text-center">£510k</div>
                  <div className="text-right">£1M</div>
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
            </TabsContent>

            <TabsContent value="income" className="space-y-6">
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
                  max={1000000}
                  step={10000}
                  className="mb-6"
                  data-testid="slider-income-tax"
                />

                <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                  <div>£20k</div>
                  <div className="text-center">£510k</div>
                  <div className="text-right">£1M</div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  onClick={handleCalculateTax} 
                  className="w-full shadow-lg group"
                  size="lg"
                  data-testid="button-calculate-income-tax"
                >
                  <FileText className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Calculate Income Tax
                </Button>
              </motion.div>

              <AnimatePresence mode="wait">
                {showTaxResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden space-y-4"
                  >
                    {/* Take Home Pay - Main Result */}
                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", duration: 0.6 }}
                            className="p-3 rounded-full bg-blue-500/20"
                          >
                            <Wallet className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                          </motion.div>
                          <div>
                            <div className="text-sm text-muted-foreground">Annual Take-Home Pay</div>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2, type: "spring" }}
                              className="text-3xl font-bold text-blue-600 dark:text-blue-400"
                              data-testid="text-take-home"
                            >
                              £{Math.round(taxBreakdown.takeHome).toLocaleString()}
                            </motion.div>
                            <div className="text-xs text-muted-foreground mt-1">
                              £{Math.round(taxBreakdown.takeHome / 12).toLocaleString()}/month
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Tax Breakdown */}
                    <Card className="bg-background/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          Tax Breakdown
                        </h4>
                        <div className="space-y-3">
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex justify-between text-sm"
                          >
                            <span className="text-muted-foreground">Personal Allowance (0%)</span>
                            <span className="font-medium" data-testid="text-personal-allowance">
                              £{Math.round(taxBreakdown.personalAllowance).toLocaleString()}
                            </span>
                          </motion.div>
                          
                          {taxBreakdown.basicRate > 0 && (
                            <motion.div 
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                              className="flex justify-between text-sm"
                            >
                              <span className="text-muted-foreground">Basic Rate Tax (20%)</span>
                              <span className="font-medium text-orange-600 dark:text-orange-400" data-testid="text-basic-rate">
                                £{Math.round(taxBreakdown.basicRate).toLocaleString()}
                              </span>
                            </motion.div>
                          )}
                          
                          {taxBreakdown.higherRate > 0 && (
                            <motion.div 
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 }}
                              className="flex justify-between text-sm"
                            >
                              <span className="text-muted-foreground">Higher Rate Tax (40%)</span>
                              <span className="font-medium text-orange-600 dark:text-orange-400" data-testid="text-higher-rate">
                                £{Math.round(taxBreakdown.higherRate).toLocaleString()}
                              </span>
                            </motion.div>
                          )}
                          
                          {taxBreakdown.additionalRate > 0 && (
                            <motion.div 
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 }}
                              className="flex justify-between text-sm"
                            >
                              <span className="text-muted-foreground">Additional Rate Tax (45%)</span>
                              <span className="font-medium text-red-600 dark:text-red-400" data-testid="text-additional-rate">
                                £{Math.round(taxBreakdown.additionalRate).toLocaleString()}
                              </span>
                            </motion.div>
                          )}
                          
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex justify-between text-sm pt-2 border-t"
                          >
                            <span className="text-muted-foreground">Total Income Tax</span>
                            <span className="font-semibold" data-testid="text-total-income-tax">
                              £{Math.round(taxBreakdown.totalIncomeTax).toLocaleString()}
                            </span>
                          </motion.div>
                          
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex justify-between text-sm"
                          >
                            <span className="text-muted-foreground">National Insurance</span>
                            <span className="font-semibold" data-testid="text-national-insurance">
                              £{Math.round(taxBreakdown.nationalInsurance).toLocaleString()}
                            </span>
                          </motion.div>
                          
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex justify-between text-sm pt-3 border-t font-bold"
                          >
                            <span>Total Tax Deductions</span>
                            <span className="text-destructive" data-testid="text-total-tax">
                              £{Math.round(taxBreakdown.totalTax).toLocaleString()}
                            </span>
                          </motion.div>
                        </div>
                        
                        <p className="text-xs text-muted-foreground mt-4">
                          Based on UK tax bands 2024/25. This is an estimate for illustration purposes only.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
}
