import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, FileText } from "lucide-react";
import { motion } from "framer-motion";
import InteractiveTaxCalculator from "./InteractiveTaxCalculator";
import QuoteWizard from "./QuoteWizard";

export default function BusinessToolsSection() {
  const [tabValue, setTabValue] = useState("calculator");

  useEffect(() => {
    if (window.location.hash === "#get-quote") {
      setTabValue("quote");
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <motion.div
      id="get-quote"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <Tabs value={tabValue} onValueChange={setTabValue} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8 h-auto p-1" data-testid="tabs-business-tools">
          <TabsTrigger value="calculator" className="py-3 gap-2" data-testid="tab-tax-calculator">
            <Calculator className="h-4 w-4" />
            <span className="hidden sm:inline">Tax Calculator</span>
            <span className="sm:hidden">Calculator</span>
          </TabsTrigger>
          <TabsTrigger value="quote" className="py-3 gap-2" data-testid="tab-get-quote">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Get a Quote</span>
            <span className="sm:hidden">Quote</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="mt-0" forceMount>
          <div className={`${tabValue === "calculator" ? "block" : "hidden"}`}>
            <InteractiveTaxCalculator />
          </div>
        </TabsContent>

        <TabsContent value="quote" className="mt-0" forceMount>
          <div className={`${tabValue === "quote" ? "block" : "hidden"}`}>
            <QuoteWizard embedded={true} />
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
