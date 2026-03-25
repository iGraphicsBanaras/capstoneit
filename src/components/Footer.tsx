import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-navy text-white/80">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <img
              src="https://www.capstoneittrends.com/_next/image?url=%2Flogo.png&w=256&q=75"
              alt="Capstone IT Trends"
              className="h-10 mb-4"
              onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
            />
            <p className="text-sm leading-relaxed">
              Capstone IT Trends is a leading IT solutions company providing cutting-edge technology services to businesses worldwide. We specialize in web development, mobile apps, digital marketing, and enterprise solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[["Home", "/"], ["About Us", "/#about"], ["Portfolio", "/#portfolio"], ["Contact", "/#contact"], ["Blog", "/#blogs"]].map(([n, p]) => (
                <li key={n}><Link to={p} className="hover:text-white transition-colors">{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["Website Design", "/services/website-design"],
                ["Graphic Design", "/services/graphic-design"],
                ["Oracle DBA", "/services/oracle-dba"],
                ["MongoDB Development", "/services/mongodb-development"],
                ["CRM Software", "/services/crm-software"],
              ].map(([n, p]) => (
                <li key={n}><Link to={p} className="hover:text-white transition-colors">{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-[hsl(var(--primary))]" />
                Noida, Uttar Pradesh, India
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-[hsl(var(--primary))]" />
                <a href="tel:+918448668060" className="hover:text-white">+91 8448668060</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-[hsl(var(--primary))]" />
                <a href="mailto:info@capstoneittrends.com" className="hover:text-white">info@capstoneittrends.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm">
          © {new Date().getFullYear()} Capstone IT Trends. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
