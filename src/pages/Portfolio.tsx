import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, Clock, Star } from "lucide-react";
import { FAQSection } from "@/components/FAQSection";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";

function PortfolioHero() {
  return (
    <section className="relative bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary)/0.9)] to-[hsl(var(--accent))] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-white/90 text-balance">Real Projects, Real Results</p>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">Explore our diverse portfolio of successfully delivered projects across various industries and technologies.</p>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "MMCTS - Multimedia Manual of Cardio-Thoracic Surgery",
    category: "Healthcare",
    description: "Premier online video manual for cardiovascular and thoracic surgery tutorials and case reports. Published by the European Association for Cardio-Thoracic Surgery.",
    technologies: ["Web Development", "Video Platform", "CMS", "Responsive Design"],
    image: "/portfolio/mmcts.png",
    url: "https://mmcts.org/",
  },
  {
    title: "Cupid Casa - Real Estate Platform",
    category: "Real Estate",
    description: "Innovative real estate platform allowing homeowners to present their homes for sale without commitments, contracts, or timelines. A 'Make Me Move' alternative connecting buyers and sellers.",
    technologies: ["Web Development", "UI/UX Design", "SEO", "Responsive Design"],
    image: "/portfolio/cupidcasa.png",
    url: "https://www.cupidcasa.com/",
  },
  {
    title: "Vanna Belt - E-Commerce Store",
    category: "E-Commerce",
    description: "Premium body aesthetics brand e-commerce store built on Shopify. Features product catalogs, shopping cart, payment integration, wishlist, and shipping protection.",
    technologies: ["Shopify", "E-Commerce", "Payment Integration", "UI/UX Design"],
    image: "/portfolio/vannabelt.png",
    url: "https://vannabelt.com/",
  },
  {
    title: "AIT Home Delivery - Logistics Platform",
    category: "Logistics",
    description: "UK's leading 2-person home delivery specialists. Features delivery tracking, service upgrades, customer hub, and multi-sector logistics management platform.",
    technologies: ["WordPress", "Custom Development", "Tracking System", "Responsive Design"],
    image: "/portfolio/aithomedelivery.png",
    url: "https://aithomedelivery.co.uk/",
  },
  {
    title: "EC4P - Compliance Management Platform",
    category: "SaaS",
    description: "Global WEEE, Batteries & Packaging recycling compliance platform. Cloud-based solution for managing Extended Producer Responsibility obligations across countries.",
    technologies: ["SaaS Platform", "Cloud", "Dashboard", "API Integration"],
    image: "/portfolio/ec4p.png",
    url: "https://ec4p.com/",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat
                ? "bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white border-0"
                : "bg-transparent hover:bg-[hsl(var(--primary))]/10 hover:text-[hsl(var(--primary))] border-border"
              }
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 h-full flex flex-col border-2 hover:border-[hsl(var(--accent))]">
                  <div className="relative h-52 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-4 right-4 px-3 py-1 bg-[hsl(var(--accent))] text-white text-xs font-semibold rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg leading-tight group-hover:text-[hsl(var(--primary))] transition-colors">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-3 text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] text-[10px] font-medium rounded-full">{tech}</span>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full group-hover:bg-[hsl(var(--primary))] group-hover:text-white transition-colors bg-transparent">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Visit Live Website <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function CaseStudies() {
  const caseStudies = [
    {
      title: "MMCTS - Healthcare Video Platform", client: "European Association for Cardio-Thoracic Surgery",
      challenge: "Need for a premier online surgical training platform with video tutorials and case reports",
      solution: "Built a comprehensive video manual with categorized tutorials, search functionality, and responsive design for surgeons worldwide",
      results: [
        { icon: Users, label: "Global Surgeons", value: "10K+" },
        { icon: TrendingUp, label: "Video Tutorials", value: "500+" },
        { icon: Clock, label: "Load Time", value: "<2s" },
        { icon: Star, label: "User Rating", value: "4.9/5" },
      ],
    },
    {
      title: "Vanna Belt - E-Commerce Growth", client: "Vanna Belt Body Aesthetics Brand",
      challenge: "Needed a high-converting Shopify store with premium brand experience and advanced product features",
      solution: "Developed custom Shopify store with product bundles, wishlist, shipping protection, and optimized checkout flow",
      results: [
        { icon: TrendingUp, label: "Sales Increase", value: "200%" },
        { icon: Users, label: "Monthly Visitors", value: "50K+" },
        { icon: Clock, label: "Checkout Time", value: "30s" },
        { icon: Star, label: "Customer Rating", value: "4.8/5" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--primary))]">Case Studies</h2>
          <p className="text-lg text-muted-foreground">Real results from real clients - see how we've transformed businesses through technology</p>
        </div>
        <div className="space-y-12 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-2">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[hsl(var(--primary))] mb-2">{study.title}</h3>
                  <p className="text-[hsl(var(--accent))] font-semibold">{study.client}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-destructive">Challenge</h4>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-[hsl(var(--primary))]">Solution</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-[hsl(var(--accent))]">Results</h4>
                    <div className="space-y-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <result.icon className="w-5 h-5 text-[hsl(var(--accent))]" />
                          <span className="text-sm"><strong>{result.value}</strong> {result.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const portfolioFaqs = [
  { question: "How many projects has Capstone IT Trends completed?", answer: "We have successfully completed 100+ projects across web development, mobile apps, e-commerce, AI, digital marketing, and more." },
  { question: "Can I see a demo of your past projects?", answer: "Yes! Contact us and we'll be happy to provide live demos and detailed case studies of our relevant past projects." },
  { question: "What industries have you worked with?", answer: "We've worked across Healthcare, E-commerce, Real Estate, Logistics, SaaS, Education, Finance, Travel, and many more industries." },
  { question: "Do you provide references from past clients?", answer: "Absolutely! We can connect you with our past clients for references and testimonials upon request." },
];

const Portfolio = () => (
  <Layout>
    <SEO
      title="Portfolio - Our Work & Projects | Capstone IT Trends"
      description="Explore our portfolio of 100+ successfully delivered projects across healthcare, e-commerce, real estate, logistics & SaaS. See real results from real clients."
      canonical="/portfolio"
      keywords="IT portfolio, web development projects, app development portfolio, Capstone IT Trends work"
    />
    <PortfolioHero />
    <PortfolioGrid />
    <CaseStudies />
    <FAQSection faqs={portfolioFaqs} title="Portfolio FAQs" subtitle="Questions about our work and projects" className="bg-background" />
  </Layout>
);

export default Portfolio;
