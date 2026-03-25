import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu, X, Phone, Mail, ChevronDown,
  Code2, Smartphone, Globe, Database, Settings, Palette,
  AppWindow, Layers, Watch, FileCode, Box, MonitorSmartphone,
  Blocks, FileText, TrendingUp
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [technologiesMenuOpen, setTechnologiesMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasSubmenu: true },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Technologies", href: "/technologies", hasSubmenu: true },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const servicesSubmenu = {
    softwareDevelopment: {
      title: "SOFTWARE DEVELOPMENT",
      items: [
        { name: "Website Design Services", icon: Globe, href: "/services/website-design" },
        { name: "Graphic Design Services", icon: Palette, href: "/services/graphic-design" },
        { name: "Oracle DBA Services", icon: Database, href: "/services/oracle-dba" },
        { name: "MongoDB Development", icon: Database, href: "/services/mongodb-development" },
        { name: "CRM Software Development", icon: Settings, href: "/services/crm-software" },
      ],
    },
    appDevelopment: {
      title: "APP DEVELOPMENT",
      items: [
        { name: "Android App Development", icon: Smartphone, href: "/services/android-app" },
        { name: "iOS App Development", icon: AppWindow, href: "/services/ios-app" },
        { name: "Flutter App Development", icon: Layers, href: "/services/flutter-app" },
        { name: "Hybrid App Development", icon: MonitorSmartphone, href: "/services/hybrid-app" },
        { name: "Wearable App Development", icon: Watch, href: "/services/wearable-app" },
      ],
    },
    webDevelopment: {
      title: "WEB DEVELOPMENT",
      items: [
        { name: "PHP MySql Development", icon: FileCode, href: "/services/php-mysql" },
        { name: "Laravel Web Development", icon: Box, href: "/services/laravel" },
        { name: "React Web Development", icon: Code2, href: "/services/react" },
        { name: "AngularJS Web Development", icon: Blocks, href: "/services/angular" },
        { name: "WordPress Web Development", icon: FileText, href: "/services/wordpress" },
      ],
    },
    digitalMarketing: {
      title: "DIGITAL MARKETING",
      items: [
        { name: "Digital Marketing Services", icon: TrendingUp, href: "/services/digital-marketing" },
      ],
    },
  };

  const technologiesSubmenu = {
    mobile: {
      title: "MOBILE",
      items: [
        { name: "Android", icon: Smartphone, href: "/technologies/android" },
        { name: "iOS", icon: AppWindow, href: "/technologies/ios" },
        { name: "React Native", icon: Code2, href: "/technologies/react-native" },
        { name: "Flutter", icon: Layers, href: "/technologies/flutter" },
      ],
    },
    cms: {
      title: "CMS",
      items: [
        { name: "WordPress", icon: FileText, href: "/technologies/wordpress" },
        { name: "Shopify", icon: Globe, href: "/technologies/shopify" },
        { name: "Magento", icon: Globe, href: "/technologies/magento" },
      ],
    },
    technology: {
      title: "TECHNOLOGY",
      items: [
        { name: "Java", icon: Code2, href: "/technologies/java" },
        { name: "PHP", icon: FileCode, href: "/technologies/php" },
        { name: "Node.js", icon: Box, href: "/technologies/nodejs" },
        { name: "Oracle", icon: Database, href: "/technologies/oracle" },
        { name: ".NET", icon: Box, href: "/technologies/dotnet" },
      ],
    },
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-sm">
            <a href="tel:9151555290" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>9151555290</span>
            </a>
            <a href="mailto:sales@capstoneittrends.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span>sales@capstoneittrends.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <img src="/images/png.png" alt="Capstone IT Trends" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasSubmenu ? (
                  <>
                    <Link
                      to={item.href}
                      className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-[hsl(var(--accent))] transition-colors"
                      onMouseEnter={() => {
                        if (item.name === "Services") { setServicesMenuOpen(true); setTechnologiesMenuOpen(false); }
                        else if (item.name === "Technologies") { setTechnologiesMenuOpen(true); setServicesMenuOpen(false); }
                      }}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Link>

                    {item.name === "Services" && servicesMenuOpen && (
                      <div
                        className="absolute top-full left-0 pt-2 w-[800px] -translate-x-1/4"
                        onMouseEnter={() => setServicesMenuOpen(true)}
                        onMouseLeave={() => setServicesMenuOpen(false)}
                      >
                        <div className="bg-background border border-border rounded-lg shadow-xl p-6">
                          <div className="grid grid-cols-3 gap-6">
                            {Object.values(servicesSubmenu).map((category) => (
                              <div key={category.title}>
                                <h3 className="text-sm font-bold text-[hsl(var(--primary))] mb-3 pb-2 border-b border-border uppercase tracking-wide">
                                  {category.title}
                                </h3>
                                <ul className="space-y-2">
                                  {category.items.map((service) => (
                                    <li key={service.name}>
                                      <Link
                                        to={service.href}
                                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[hsl(var(--accent))] transition-colors group/item py-1.5"
                                        onClick={() => setServicesMenuOpen(false)}
                                      >
                                        <service.icon className="h-4 w-4 text-[hsl(var(--accent))]/70 group-hover/item:text-[hsl(var(--accent))] flex-shrink-0" />
                                        <span className="text-xs leading-tight">{service.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {item.name === "Technologies" && technologiesMenuOpen && (
                      <div
                        className="absolute top-full left-0 pt-2 w-[700px] -translate-x-1/3"
                        onMouseEnter={() => setTechnologiesMenuOpen(true)}
                        onMouseLeave={() => setTechnologiesMenuOpen(false)}
                      >
                        <div className="bg-background border border-border rounded-lg shadow-xl p-6">
                          <div className="grid grid-cols-3 gap-6">
                            {Object.values(technologiesSubmenu).map((category) => (
                              <div key={category.title}>
                                <h3 className="text-sm font-bold text-[hsl(var(--primary))] mb-3 pb-2 border-b border-border uppercase tracking-wide">
                                  {category.title}
                                </h3>
                                <ul className="space-y-2">
                                  {category.items.map((tech) => (
                                    <li key={tech.name}>
                                      <Link
                                        to={tech.href}
                                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[hsl(var(--accent))] transition-colors group/item py-1.5"
                                        onClick={() => setTechnologiesMenuOpen(false)}
                                      >
                                        <tech.icon className="h-4 w-4 text-[hsl(var(--accent))]/70 group-hover/item:text-[hsl(var(--accent))] flex-shrink-0" />
                                        <span className="text-xs leading-tight">{tech.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.href} className="text-sm font-medium text-foreground hover:text-[hsl(var(--accent))] transition-colors">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-white">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="flex flex-col gap-4">
              {navigation.map((item) =>
                item.hasSubmenu ? (
                  <div key={item.name}>
                    <button
                      className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-[hsl(var(--accent))] transition-colors"
                      onClick={() => {
                        if (item.name === "Services") { setServicesMenuOpen(!servicesMenuOpen); setTechnologiesMenuOpen(false); }
                        else if (item.name === "Technologies") { setTechnologiesMenuOpen(!technologiesMenuOpen); setServicesMenuOpen(false); }
                      }}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${
                        (item.name === "Services" && servicesMenuOpen) || (item.name === "Technologies" && technologiesMenuOpen)
                          ? "rotate-180" : ""
                      }`} />
                    </button>
                    {item.name === "Services" && servicesMenuOpen && (
                      <div className="mt-2 pl-4 space-y-4">
                        {Object.values(servicesSubmenu).map((category) => (
                          <div key={category.title}>
                            <h4 className="text-xs font-bold text-[hsl(var(--primary))] mb-2 uppercase">{category.title}</h4>
                            <ul className="space-y-1">
                              {category.items.map((service) => (
                                <li key={service.name}>
                                  <Link to={service.href} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-[hsl(var(--accent))] py-1"
                                    onClick={() => { setMobileMenuOpen(false); setServicesMenuOpen(false); }}>
                                    <service.icon className="h-3 w-3" />
                                    <span>{service.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                    {item.name === "Technologies" && technologiesMenuOpen && (
                      <div className="mt-2 pl-4 space-y-4">
                        {Object.values(technologiesSubmenu).map((category) => (
                          <div key={category.title}>
                            <h4 className="text-xs font-bold text-[hsl(var(--primary))] mb-2 uppercase">{category.title}</h4>
                            <ul className="space-y-1">
                              {category.items.map((tech) => (
                                <li key={tech.name}>
                                  <Link to={tech.href} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-[hsl(var(--accent))] py-1"
                                    onClick={() => { setMobileMenuOpen(false); setTechnologiesMenuOpen(false); }}>
                                    <tech.icon className="h-3 w-3" />
                                    <span>{tech.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.name} to={item.href} className="text-sm font-medium text-foreground hover:text-[hsl(var(--accent))] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                )
              )}
              <Button asChild className="w-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-white">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Get Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
