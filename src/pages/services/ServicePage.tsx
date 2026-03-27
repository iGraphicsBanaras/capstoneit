import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { FAQSection, FAQItem } from "@/components/FAQSection";
import SEO from "@/components/SEO";

export interface ServicePageData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  contentHeading: string;
  content: string;
  subheading: string;
  subcontent: string;
  features: { icon: LucideIcon; title: string; description: string }[];
  processSteps: { title: string; description: string }[];
  expertiseTitle: string;
  col1Title: string;
  col1Items: string[];
  col2Title: string;
  col2Items: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  faqs?: FAQItem[];
}

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))]/5 via-background to-[hsl(var(--accent))]/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] rounded-full text-sm font-semibold">Premium Service</div>
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">{data.contentHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{data.content}</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">{data.subheading}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{data.subcontent}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features & Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Discover what makes our service exceptional and how we deliver value to your business.</p>
          </div>
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

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-muted-foreground">A proven methodology that ensures project success from concept to completion</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {data.processSteps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center text-white font-bold text-lg">{i + 1}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{data.expertiseTitle}</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[hsl(var(--primary))]">{data.col1Title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {data.col1Items.map((item) => (
                    <li key={item} className="flex items-start gap-2"><span className="text-[hsl(var(--accent))] mt-1">✓</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[hsl(var(--primary))]">{data.col2Title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {data.col2Items.map((item) => (
                    <li key={item} className="flex items-start gap-2"><span className="text-[hsl(var(--accent))] mt-1">✓</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {data.faqs && data.faqs.length > 0 && (
        <FAQSection faqs={data.faqs} title={`${data.title} - FAQs`} subtitle={`Common questions about our ${data.title.toLowerCase()}`} className="bg-muted/30" />
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{data.ctaTitle}</h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">{data.ctaDescription}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[hsl(var(--primary))] hover:bg-white/90">
                <Link to="/contact">{data.ctaButtonText}<ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <a href="tel:9151555290">Call Us: 9151555290</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
