import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Moon, Sun } from "lucide-react";
import rochvillesLogo from "@assets/rochvilles-header-logo.png";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Tax Tips", href: "/tax-tips" },
    { name: "Contractors Guide", href: "/contractors-guide" },
    { name: "Compliance", href: "/compliance" },
    { name: "Financial Services", href: "/financial-services" },
    { name: "Fees", href: "/fees" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-xl bg-background/95 shadow-lg transition-all duration-300" style={{ backdropFilter: 'blur(24px)' }}>
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between gap-4" style={{ marginLeft: '96px' }}>
          {/* Logo Section */}
          <Link href="/" data-testid="link-logo">
            <div className="cursor-pointer hover-elevate active-elevate-2 rounded-lg px-3 py-2 transition-all group" style={{ marginLeft: '-192px' }}>
              <img 
                src={rochvillesLogo} 
                alt="Rochvilles & Co. Accountants - Chartered Management Consultants, Accountants & Tax advisers" 
                className="h-20 w-auto transition-transform group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <Button
                  variant={location === item.href ? "secondary" : "ghost"}
                  size="default"
                  className={`text-sm px-4 transition-all relative group ${
                    location === item.href ? 'font-semibold' : ''
                  }`}
                >
                  {item.name}
                  {location === item.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                  )}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 rounded-full group-hover:w-4/5 transition-all duration-300" />
                </Button>
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5">
            <div className="hidden xl:flex items-center gap-2">
              <a 
                href="tel:02085144953" 
                className="flex items-center gap-1.5 px-2 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-all group rounded-lg hover-elevate active-elevate-2" 
                data-testid="link-phone"
              >
                <div className="p-1 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-3.5 w-3.5 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-medium whitespace-nowrap">0208 514 4953</span>
              </a>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="transition-all hover:rotate-12 hover-elevate"
              data-testid="button-theme-toggle"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Link href="/contact">
              <Button 
                variant="default" 
                size="sm" 
                className="hidden md:flex shadow-md hover:shadow-xl transition-all bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary" 
                data-testid="button-contact-header"
              >
                Contact Us
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4 animate-fade-in-up" data-testid="mobile-menu">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button
                    variant={location === item.href ? "secondary" : "ghost"}
                    className={`w-full justify-start transition-all ${
                      location === item.href ? 'font-semibold bg-primary/10 border-2 border-primary/30' : ''
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              <Link href="/contact">
                <Button 
                  variant="default" 
                  className="w-full mt-2 bg-gradient-to-r from-primary to-primary/90" 
                  onClick={() => setMobileMenuOpen(false)} 
                  data-testid="button-contact-mobile"
                >
                  Contact Us
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
