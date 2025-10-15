import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import ifaLogo from "@assets/institute-of-financial-accountants-logo-png_seeklogo-508022_1760548920320.png";
import rochvillesLogo from "@assets/rochvilles-logo.png";

export default function Footer() {
  const services = [
    { name: "Tax Planning", href: "/services" },
    { name: "Bookkeeping", href: "/services" },
    { name: "Payroll", href: "/services" },
    { name: "Contractor Accounting", href: "/contractors-guide" },
  ];

  const company = [
    { name: "Services", href: "/services" },
    { name: "Tax Tips", href: "/tax-tips" },
    { name: "Compliance", href: "/compliance" },
    { name: "Fees", href: "/fees" },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={rochvillesLogo} 
                alt="Rochvilles & Co logo" 
                className="h-10 w-10 flex-shrink-0"
              />
              <h3 className="text-lg font-semibold">Rochvilles & Co</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Expert accountants serving businesses in Ilford, Essex and London with professional tax, compliance, and financial services.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors" data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors" data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <a href="tel:02085144953" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-phone">
                  0208 514 4953
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <a href="mailto:info@rochvilles.co.uk" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-email">
                  info@rochvilles.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  411 Ilford Lane<br />
                  Ilford, Essex<br />
                  IG1 2SN
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Authorization Statement */}
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-white/80 dark:bg-gray-900/80 p-2 shadow-md border-2 border-primary/20">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">AIA</div>
                  <div className="text-[8px] text-muted-foreground leading-tight">Association of International Accountants</div>
                </div>
              </div>
              <div className="w-32 h-20 rounded-lg overflow-hidden bg-white/80 dark:bg-gray-900/80 p-2 shadow-md">
                <img 
                  src={ifaLogo} 
                  alt="Institute of Financial Accountants logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-center text-muted-foreground max-w-3xl">
              <span className="font-semibold text-foreground">Authorised by Association of International Accountants & Institute of Financial Accountants</span> to engage in public practise
            </p>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rochvilles & Co. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
