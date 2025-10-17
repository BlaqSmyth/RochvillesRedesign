import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import TaxTipsPage from "@/pages/TaxTipsPage";
import ContractorsGuidePage from "@/pages/ContractorsGuidePage";
import CompliancePage from "@/pages/CompliancePage";
import FinancialServicesPage from "@/pages/FinancialServicesPage";
import FeesPage from "@/pages/FeesPage";
import ContactPage from "@/pages/ContactPage";
import AdminLoginPage from "@/pages/AdminLoginPage";
import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";
import AdminArticlesPage from "@/pages/admin/AdminArticlesPage";
import AdminTestimonialsPage from "@/pages/admin/AdminTestimonialsPage";
import AdminServicesPage from "@/pages/admin/AdminServicesPage";
import AdminLayout from "@/pages/admin/AdminLayout";
import NotFound from "@/pages/not-found";

function Router({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Admin routes don't need header/footer
  if (location.startsWith('/admin')) {
    return (
      <Switch>
        <Route path="/admin/login" component={AdminLoginPage} />
        <Route path="/admin/dashboard">
          <AdminLayout>
            <AdminDashboardPage />
          </AdminLayout>
        </Route>
        <Route path="/admin/articles">
          <AdminLayout>
            <AdminArticlesPage />
          </AdminLayout>
        </Route>
        <Route path="/admin/testimonials">
          <AdminLayout>
            <AdminTestimonialsPage />
          </AdminLayout>
        </Route>
        <Route path="/admin/services">
          <AdminLayout>
            <AdminServicesPage />
          </AdminLayout>
        </Route>
        <Route component={NotFound} />
      </Switch>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/tax-tips" component={TaxTipsPage} />
          <Route path="/contractors-guide" component={ContractorsGuidePage} />
          <Route path="/compliance" component={CompliancePage} />
          <Route path="/financial-services" component={FinancialServicesPage} />
          <Route path="/fees" component={FeesPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
