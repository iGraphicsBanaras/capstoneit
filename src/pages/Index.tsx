import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Globe, Smartphone, BarChart3, Megaphone, Share2, Mail,
  Brain, Link2, Glasses, Wifi, Gamepad2, ShoppingCart,
  Palette, Users, Cloud, ShieldCheck, Star, ArrowRight,
  CheckCircle, Award, Heart, Lightbulb, Target, DollarSign,
  Phone, MapPin, Clock
} from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const heroCards = [
  { icon: Globe, title: "Web Development", desc: "Custom websites & web applications" },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, PPC & social media marketing" },
  { icon: Smartphone, title: "Mobile Apps", desc: "iOS & Android app development" },
  { icon: Brain, title: "AI Solutions", desc: "Machine learning & AI integration" },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "110+", label: "Happy Clients" },
  { value: "10+", label: "Expert Developers" },
];

const services = [
  { icon: Globe, title: "Web Development", desc: "Custom websites and web applications tailored to your business needs" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile applications" },
  { icon: BarChart3, title: "SEO Services", desc: "Search engine optimization to boost your online visibility" },
  { icon: Target, title: "PPC Advertising", desc: "Pay-per-click campaigns for maximum ROI" },
  { icon: Share2, title: "Social Media Marketing", desc: "Strategic social media management and marketing" },
  { icon: Mail, title: "Email Marketing", desc: "Targeted email campaigns that convert" },
  { icon: Brain, title: "AI Solutions", desc: "Artificial intelligence and machine learning solutions" },
  { icon: Link2, title: "Blockchain", desc: "Decentralized applications and blockchain solutions" },
  { icon: Glasses, title: "AR/VR Development", desc: "Immersive augmented and virtual reality experiences" },
  { icon: Wifi, title: "IoT Solutions", desc: "Internet of Things development and integration" },
  { icon: Gamepad2, title: "Game Development", desc: "Engaging game development for all platforms" },
  { icon: ShoppingCart, title: "E-commerce", desc: "Online store development and optimization" },
  { icon: Palette, title: "UI/UX Design", desc: "User-centered design for optimal experience" },
  { icon: Users, title: "Custom CRM", desc: "Customer relationship management solutions" },
  { icon: Cloud, title: "Cloud Solutions", desc: "Cloud infrastructure and migration services" },
  { icon: ShieldCheck, title: "QA & Testing", desc: "Comprehensive quality assurance and testing" },
];

const whyChoose = [
  { icon: Award, title: "Proven Results", desc: "We deliver measurable results that drive business growth" },
  { icon: Heart, title: "Customers First", desc: "Your satisfaction is our top priority in everything we do" },
  { icon: Lightbulb, title: "Your Ideas Matter", desc: "We bring your vision to life with innovative solutions" },
  { icon: ShieldCheck, title: "We Know Technology", desc: "Our team stays ahead of the latest tech trends" },
  { icon: Target, title: "Focus On ROI", desc: "Every project is designed to maximize your return on investment" },
  { icon: DollarSign, title: "Affordable Services", desc: "Premium quality services at competitive prices" },
];

const techStack: Record<string, string[]> = {
  Mobile: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
  Frontend: ["React", "Angular", "Vue.js", "Next.js", "TypeScript"],
  Backend: ["Node.js", "Python", "Java", "PHP", ".NET"],
  Database: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins"],
};

const portfolioProjects = [
  { title: "E-commerce Platform", tags: ["Web Dev", "E-commerce"], tech: ["React", "Node.js", "MongoDB"], image: "https://www.capstoneittrends.com/_next/image?url=%2Fportfolio%2Fproject1.jpg&w=640&q=75" },
  { title: "Healthcare App", tags: ["Mobile App", "Healthcare"], tech: ["Flutter", "Firebase", "AI"], image: "https://www.capstoneittrends.com/_next/image?url=%2Fportfolio%2Fproject2.jpg&w=640&q=75" },
  { title: "Finance Dashboard", tags: ["Web App", "FinTech"], tech: ["React", "Python", "PostgreSQL"], image: "https://www.capstoneittrends.com/_next/image?url=%2Fportfolio%2Fproject3.jpg&w=640&q=75" },
  { title: "Food Delivery App", tags: ["Mobile", "Food Tech"], tech: ["React Native", "Node.js", "Redis"], image: "https://www.capstoneittrends.com/_next/image?url=%2Fportfolio%2Fproject4.jpg&w=640&q=75" },
  { title: "Real Estate Platform", tags: ["Web Dev", "PropTech"], tech: ["Next.js", "MongoDB", "AWS"], image: "https://www.capstoneittrends.com/_next/image?url=%2Fportfolio%2Fproject5.jpg&w=640&q=75" },
  { title: "Education Portal", tags: ["Web App", "EdTech"], tech: ["Angular", "Java", "MySQL"], image: "https://www.capstoneittrends.com/_next/image?url=%2Fportfolio%2Fproject6.jpg&w=640&q=75" },
];

const testimonials = [
  { name: "Rahul Sharma", role: "CEO, TechStart", quote: "Capstone IT Trends transformed our business with their exceptional web development services. The team was professional, responsive, and delivered beyond our expectations.", rating: 5 },
  { name: "Priya Gupta", role: "Founder, HealthPlus", quote: "Their mobile app development team created a fantastic healthcare app for us. The user experience is outstanding and our customers love it.", rating: 5 },
  { name: "Amit Patel", role: "CTO, FinanceHub", quote: "The dashboard they built for us has streamlined our financial operations significantly. Great attention to detail and excellent technical expertise.", rating: 5 },
];

const Index = () => {
  const [activeTech, setActiveTech] = useState("Frontend");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.capstoneittrends.com/_next/image?url=%2Fhero-bg.jpg&w=1920&q=75')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card text-[hsl(var(--primary))] mb-6">
                We Don't Just Build, We Enhance Your Business Value
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                Inspiring Innovation through{" "}
                <span className="text-gradient-orange">Seamless IT Solutions</span>
              </h1>
              <p className="text-white/70 text-lg mb-8 max-w-lg">
                We provide cutting-edge technology solutions that help businesses grow, innovate, and stay ahead of the competition in the digital landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="gradient-orange text-white font-semibold px-8 py-6 text-base border-0 hover:opacity-90">
                  Get Started <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base bg-transparent">
                  Explore Services
                </Button>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {heroCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass-card rounded-xl p-5 hover:border-[hsl(var(--primary))]/50 transition-all group cursor-pointer"
                >
                  <card.icon className="w-8 h-8 text-[hsl(var(--primary))] mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold text-sm mb-1">{card.title}</h3>
                  <p className="text-white/50 text-xs">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="gradient-orange py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl lg:text-4xl font-bold text-white">{s.value}</div>
              <div className="text-white/80 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="gradient-navy py-20" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
              Comprehensive IT Solutions <span className="text-gradient-orange">For Your Business</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="glass-card rounded-xl p-6 hover:border-[hsl(var(--primary))]/40 transition-all group cursor-pointer">
                <s.icon className="w-10 h-10 text-[hsl(var(--primary))] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="gradient-navy py-20 relative" id="about">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
              Reasons To <span className="text-gradient-orange">Choose Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <div key={item.title} className="glass-card rounded-xl p-6 text-center hover:border-[hsl(var(--primary))]/40 transition-all">
                <div className="w-14 h-14 rounded-full gradient-orange flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="gradient-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-wider">Technologies</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
              Our <span className="text-gradient-orange">Tech Stack</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {Object.keys(techStack).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTech(tab)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTech === tab
                    ? "gradient-orange text-white"
                    : "glass-card text-white/70 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack[activeTech]?.map((tech) => (
              <div key={tech} className="glass-card rounded-xl px-8 py-5 text-center min-w-[140px]">
                <p className="text-white font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="gradient-navy py-20" id="portfolio">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-wider">Our Work</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
              Featured <span className="text-gradient-orange">Projects</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map((p) => (
              <div key={p.title} className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:border-[hsl(var(--primary))]/40 transition-all">
                <div className="h-48 bg-[hsl(var(--capstone-navy-light))] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex gap-2 mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))]">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-white font-semibold mb-3">{p.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs rounded glass-card-light text-white/60">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="gradient-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
              What Our <span className="text-gradient-orange">Clients Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]" />
                  ))}
                </div>
                <p className="text-white/70 text-sm mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="gradient-navy py-20" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
              Let's <span className="text-gradient-orange">Work Together</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 glass-card rounded-xl p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input placeholder="Your Name" className="bg-white/5 border-white/10 text-white placeholder:text-white/40" />
                <Input placeholder="Email Address" type="email" className="bg-white/5 border-white/10 text-white placeholder:text-white/40" />
                <Input placeholder="Phone Number" className="bg-white/5 border-white/10 text-white placeholder:text-white/40" />
                <select className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70">
                  <option value="">Select Service</option>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>Digital Marketing</option>
                  <option>UI/UX Design</option>
                  <option>Other</option>
                </select>
                <select className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70">
                  <option value="">Budget Range</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000+</option>
                </select>
                <select className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70">
                  <option value="">Timeline</option>
                  <option>1-2 Weeks</option>
                  <option>1 Month</option>
                  <option>2-3 Months</option>
                  <option>3+ Months</option>
                </select>
                <div className="md:col-span-2">
                  <Textarea placeholder="Project Details" rows={4} className="bg-white/5 border-white/10 text-white placeholder:text-white/40" />
                </div>
                <div className="md:col-span-2">
                  <Button className="w-full gradient-orange text-white font-semibold py-6 text-base border-0 hover:opacity-90">
                    Send Message <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: "Call Us", detail: "+91 8448668060" },
                { icon: Mail, title: "Email Us", detail: "info@capstoneittrends.com" },
                { icon: MapPin, title: "Visit Us", detail: "Noida, Uttar Pradesh, India" },
                { icon: Clock, title: "Working Hours", detail: "Mon - Sat: 9:00 AM - 7:00 PM" },
              ].map((c) => (
                <div key={c.title} className="glass-card rounded-xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-orange flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{c.title}</p>
                    <p className="text-white/60 text-sm">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
