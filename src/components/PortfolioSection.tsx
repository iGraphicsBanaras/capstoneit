import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  { title: "MMCTS - Cardio-Thoracic Surgery Manual", category: "Healthcare", description: "Premier online video manual for cardiovascular and thoracic surgery tutorials, published by the European Association for Cardio-Thoracic Surgery.", image: "/portfolio/mmcts.png", tags: ["Web Dev", "CMS", "Video"], url: "https://mmcts.org/" },
  { title: "Cupid Casa - Real Estate Platform", category: "Real Estate", description: "Innovative platform connecting homeowners with buyers. Self-advertise your home with no contracts or commitments.", image: "/portfolio/cupidcasa.png", tags: ["Web Dev", "UI/UX", "SEO"], url: "https://www.cupidcasa.com/" },
  { title: "Vanna Belt - E-Commerce Store", category: "E-Commerce", description: "Premium body aesthetics brand Shopify store with product bundles, wishlist, and optimized checkout.", image: "/portfolio/vannabelt.png", tags: ["Shopify", "E-Commerce", "UI/UX"], url: "https://vannabelt.com/" },
  { title: "AIT Home Delivery - Logistics", category: "Logistics", description: "UK's leading 2-person home delivery specialists with tracking, service upgrades, and multi-sector logistics.", image: "/portfolio/aithomedelivery.png", tags: ["WordPress", "Tracking", "Custom Dev"], url: "https://aithomedelivery.co.uk/" },
  { title: "EC4P - Compliance Platform", category: "SaaS", description: "Global WEEE, Batteries & Packaging recycling compliance cloud platform for managing EPR obligations.", image: "/portfolio/ec4p.png", tags: ["SaaS", "Cloud", "Dashboard"], url: "https://ec4p.com/" },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[hsl(var(--primary))]/20 via-[hsl(var(--accent))]/20 to-[hsl(var(--tertiary))]/20 border border-[hsl(var(--primary))]/30 text-[hsl(var(--primary))] text-sm font-medium shadow-lg">
              <Sparkles className="h-4 w-4" />
              <span>Our Work</span>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance animate-slide-up">
            Portfolio Showcasing{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--accent))] via-[hsl(var(--tertiary))] to-[hsl(var(--primary))] bg-clip-text text-transparent">
              Breakthrough Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-100">
            Explore our diverse range of successful projects across industries and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer" key={project.title}>
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-transparent relative animate-fade-in h-full"
              style={{ animationDelay: `${index * 100}ms` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--tertiary))] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative h-52 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--tertiary))] text-white text-xs font-medium rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="pt-6 relative z-10">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm group-hover:text-foreground transition-colors line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tag} className={`px-2 py-1 text-xs rounded transition-all duration-300 ${
                      tagIndex % 3 === 0 ? "bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]" :
                      tagIndex % 3 === 1 ? "bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]" :
                      "bg-[hsl(var(--tertiary))]/10 text-[hsl(var(--tertiary))]"
                    }`}>{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button size="lg" variant="outline" asChild className="border-2 border-[hsl(var(--primary))] hover:bg-gradient-to-r hover:from-[hsl(var(--primary))] hover:via-[hsl(var(--accent))] hover:to-[hsl(var(--tertiary))] hover:text-white hover:border-transparent transition-all duration-300 group bg-transparent">
            <Link to="/portfolio">
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
