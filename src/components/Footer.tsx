import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const services = ["Web Development", "Mobile App Development", "SEO Services", "Digital Marketing", "AI Development", "Blockchain", "AR/VR Solutions", "E-commerce"];
const technologies = ["React", "Angular", "Node.js", "Python", "Flutter", "React Native", "Laravel", "MongoDB", "AWS", "Azure"];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary))]/95 to-[hsl(var(--accent))]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[hsl(var(--accent))]/20 via-transparent to-[hsl(var(--tertiary))]/10" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src="/images/png.png" alt="Capstone IT Trends" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-sm text-white/90 leading-relaxed mb-6">
              Leading IT solutions provider with 5+ years of experience delivering innovative technology services to businesses worldwide. 100+ projects completed for 110+ satisfied clients.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/capstoneittrends/", label: "Facebook" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/93196952", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/capstoneittrends/", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[hsl(var(--accent))] hover:border-[hsl(var(--accent))] transition-all">
                  <Icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg text-white border-b border-white/20 pb-2">Our Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-white/90 hover:text-[hsl(var(--tertiary))] hover:translate-x-1 inline-block transition-all">
                    → {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg text-white border-b border-white/20 pb-2">Technologies</h3>
            <ul className="space-y-2">
              {technologies.map((t) => (
                <li key={t}>
                  <Link to="/technologies" className="text-sm text-white/90 hover:text-[hsl(var(--tertiary))] hover:translate-x-1 inline-block transition-all">
                    → {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg text-white border-b border-white/20 pb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 flex-shrink-0 text-[hsl(var(--tertiary))] mt-0.5" />
                <div className="text-sm text-white/90">
                  <p className="font-semibold mb-1">USA Office:</p>
                  <p>615 F Bell Road #4 545</p>
                  <p>Arizona - 85032</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-[hsl(var(--tertiary))] mt-0.5" />
                <div className="text-sm text-white/90">
                  <p className="font-semibold mb-1">India Office:</p>
                  <p>Near First Floor, Aarogya Niketan Trust</p>
                  <p>Sector 63, Noida, UP 201309</p>
                </div>
              </div>
              <div className="mt-4 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.3820050!3d28.6295310!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce553e2ef4a5b%3A0xb9c8e0a5e7b8c8d0!2sCapstone%20IT%20Trends!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="rounded-lg"
                />
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-[hsl(var(--tertiary))] mt-0.5" />
                <a href="tel:9151555290" className="text-sm text-white/90 hover:text-[hsl(var(--tertiary))] transition-all">+91 9151555290</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-[hsl(var(--tertiary))] mt-0.5" />
                <a href="mailto:sales@capstoneittrends.com" className="text-sm text-white/90 hover:text-[hsl(var(--tertiary))] transition-all break-all">sales@capstoneittrends.com</a>
              </div>
              <div className="mt-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-1 text-white text-sm">Business Hours</h4>
                <p className="text-xs text-white/90">Monday - Friday: 10:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {[["About Us", "/about"], ["Portfolio", "/portfolio"], ["Contact", "/contact"]].map(([n, p]) => (
                  <li key={n}><Link to={p} className="text-sm text-white/90 hover:text-[hsl(var(--tertiary))] transition-all">→ {n}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/90 text-center md:text-left">
              © {new Date().getFullYear()} Capstone IT Trends Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-sm text-white/90 hover:text-[hsl(var(--tertiary))] transition-all">Privacy Policy</Link>
              <Link to="#" className="text-sm text-white/90 hover:text-[hsl(var(--tertiary))] transition-all">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[hsl(var(--tertiary))]/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--accent))]/10 rounded-full blur-3xl" />
    </footer>
  );
}

export default Footer;
