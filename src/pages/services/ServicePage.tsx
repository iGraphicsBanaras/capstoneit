import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface ServiceData {
  badge: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string[];
  features: { icon: LucideIcon; title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  services: string[];
  industries: string[];
}

const ServicePage = ({ data }: { data: ServiceData }) => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider glass-card text-[hsl(var(--primary))] mb-6">
                {data.badge}
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                {data.title}
              </h1>
              <p className="text-white/70 text-lg mb-8 max-w-lg">{data.subtitle}</p>
              <div className="flex flex-wrap gap-4">
                <Button className="gradient-orange text-white font-semibold px-8 py-6 text-base border-0 hover:opacity-90">
                  Get Started <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base bg-transparent">
                  View Portfolio
                </Button>
              </div>
            </motion.div>
            <div className="hidden lg:block">
              <img src={data.heroImage} alt={data.title} className="rounded-2xl shadow-2xl w-full" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="gradient-navy py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          {data.description.map((p, i) => (
            <p key={i} className="text-white/70 leading-relaxed">{p}</p>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="gradient-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-wider">Features</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
              Key Features & <span className="text-gradient-orange">Benefits</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f) => (
              <div key={f.title} className="glass-card rounded-xl p-6 hover:border-[hsl(var(--primary))]/40 transition-all">
                <div className="w-12 h-12 rounded-lg gradient-orange flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-white/50 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="gradient-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
              Development <span className="text-gradient-orange">Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {data.process.map((p, i) => (
              <div key={p.step} className="glass-card rounded-xl p-5 text-center relative">
                <div className="w-10 h-10 rounded-full gradient-orange flex items-center justify-center mx-auto mb-3 text-white font-bold text-sm">
                  {p.step}
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">{p.title}</h4>
                <p className="text-white/50 text-xs">{p.desc}</p>
                {i < data.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-[hsl(var(--primary))]">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="gradient-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Services Include</h3>
              <div className="space-y-3">
                {data.services.map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--primary))] shrink-0" />
                    <span className="text-white/70 text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Industries We Serve</h3>
              <div className="space-y-3">
                {data.industries.map((ind) => (
                  <div key={ind} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--accent))] shrink-0" />
                    <span className="text-white/70 text-sm">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-orange py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/80 mb-8">Get a free consultation and let us help you achieve your business goals.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-[hsl(var(--primary))] font-semibold px-8 py-6 text-base hover:bg-white/90">
              Get Free Consultation
            </Button>
            <a href="tel:+918448668060" className="inline-flex items-center gap-2 text-white font-semibold text-lg">
              <Phone className="w-5 h-5" /> +91 8448668060
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
