import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Website Design", path: "/services/website-design" },
  { name: "Graphic Design", path: "/services/graphic-design" },
  { name: "Oracle DBA", path: "/services/oracle-dba" },
  { name: "MongoDB Development", path: "/services/mongodb-development" },
  { name: "CRM Software", path: "/services/crm-software" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Portfolio", path: "/#portfolio" },
    { name: "Blogs", path: "/#blogs" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="w-full gradient-navy text-white/80 text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+918448668060" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" /> +91 8448668060
            </a>
            <a href="mailto:info@capstoneittrends.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" /> info@capstoneittrends.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className="sticky top-0 z-50 w-full gradient-navy border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://www.capstoneittrends.com/_next/image?url=%2Flogo.png&w=256&q=75"
              alt="Capstone IT Trends"
              className="h-10"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? "text-[hsl(var(--primary))]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white flex items-center gap-1 transition-colors">
                Services <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-56 glass-card rounded-lg shadow-xl py-2 mt-1">
                  {services.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:block">
            <Button className="gradient-orange text-white font-semibold px-6 border-0 hover:opacity-90">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden gradient-navy border-t border-white/10 pb-4">
            <div className="px-4 pt-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-white/80 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 py-2 text-sm font-medium text-white/60">Services</div>
              {services.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-2 text-sm text-white/80 hover:text-white"
                >
                  {s.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button className="w-full gradient-orange text-white font-semibold border-0">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
