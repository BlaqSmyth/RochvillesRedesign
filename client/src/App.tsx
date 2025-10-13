import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import TaxTipsPage from "@/pages/TaxTipsPage";
import ContractorsGuidePage from "@/pages/ContractorsGuidePage";
import CompliancePage from "@/pages/CompliancePage";
import FinancialServicesPage from "@/pages/FinancialServicesPage";
import FeesPage from "@/pages/FeesPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/tax-tips" component={TaxTipsPage} />
      <Route path="/contractors-guide" component={ContractorsGuidePage} />
      <Route path="/compliance" component={CompliancePage} />
      <Route path="/financial-services" component={FinancialServicesPage} />
      <Route path="/fees" component={FeesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
