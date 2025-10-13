import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Moon, Sun } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Tax Tips", href: "/tax-tips" },
    { name: "Contractors Guide", href: "/contractors-guide" },
    { name: "Compliance", href: "/compliance" },
    { name: "Financial Services", href: "/financial-services" },
    { name: "Fees", href: "/fees" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 cursor-pointer hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3">
              <div className="text-2xl font-bold text-primary">Rochvilles & Co</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <Button
                  variant={location === item.href ? "secondary" : "ghost"}
                  size="sm"
                  className="text-sm"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-3 mr-2">
              <a href="tel:02085144953" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground" data-testid="link-phone">
                <Phone className="h-4 w-4" />
                <span>0208 514 4953</span>
              </a>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              data-testid="button-theme-toggle"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Link href="/contact">
              <Button variant="default" size="sm" className="hidden md:flex" data-testid="button-contact-header">
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

        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4" data-testid="mobile-menu">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button
                    variant={location === item.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              <Link href="/contact">
                <Button variant="default" className="w-full" onClick={() => setMobileMenuOpen(false)} data-testid="button-contact-mobile">
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
