import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { FAQSection, FAQItem } from "@/components/FAQSection";
import SEO from "@/components/SEO";

export interface TechnologyPageData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  contentHeading: string;
  content: string;
  subheading: string;
  subcontent: string;
  features: { icon: LucideIcon; title: string; description: string }[];
  services: string[];
  industries: string[];
  ctaTitle: string;
  ctaDescription: string;
  faqs?: FAQItem[];
}

export default function TechnologyPageTemplate({ data }: { data: TechnologyPageData }) {
  const location = useLocation();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.title,
    "description": data.description,
    "provider": {
      "@type": "Organization",
      "name": "Capstone IT Trends",
      "url": "https://www.capstoneittrends.com"
    },
    "url": `https://www.capstoneittrends.com${location.pathname}`
  };
  return (
    <Layout>
      <SEO
        title={data.title}
        description={data.description}
        canonical={location.pathname}
        keywords={`${data.title}, Capstone IT Trends, ${data.services?.slice(0, 3).join(", ")}`}
        jsonLd={jsonLd}
      />
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))]/5 via-background to-[hsl(var(--accent))]/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] rounded-full text-sm font-semibold">Technology</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">{data.title}</h1>
              <p className="text-xl md:text-2xl text-[hsl(var(--accent))] font-semibold text-balance">{data.subtitle}</p>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{data.description}</p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90"><Link to="/contact">Get Started</Link></Button>
                <Button asChild size="lg" variant="outline"><Link to="/portfolio">View Portfolio</Link></Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.contentHeading}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{data.content}</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{data.subheading}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{data.subcontent}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Key Capabilities</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">Why businesses choose this technology for their projects</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {data.features.map((f, i) => (
              <div key={i} className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border group">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Industries */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--primary))]">Our Services</h3>
              <ul className="space-y-3">
                {data.services.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--primary))]">Industries We Serve</h3>
              <ul className="space-y-3">
                {data.industries.map((ind) => (
                  <li key={ind} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {data.faqs && data.faqs.length > 0 && (
        <FAQSection faqs={data.faqs} title={`${data.title} - FAQs`} subtitle={`Common questions about ${data.title.toLowerCase()}`} className="bg-muted/30" />
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{data.ctaTitle}</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">{data.ctaDescription}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[hsl(var(--primary))] hover:bg-white/90">
              <Link to="/contact">Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <a href="tel:9151555290">Call Us: 9151555290</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
