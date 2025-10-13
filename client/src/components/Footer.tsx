import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

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
            <h3 className="text-lg font-semibold mb-4">Rochvilles & Co</h3>
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
                    <a className="text-sm text-muted-foreground hover:text-foreground" data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item.name}
                    </a>
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
                    <a className="text-sm text-muted-foreground hover:text-foreground" data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item.name}
                    </a>
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
                <a href="tel:02085144953" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-phone">
                  0208 514 4953
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <a href="mailto:info@rochvilles.co.uk" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-email">
                  info@rochvilles.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Ilford, Essex
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rochvilles & Co. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
