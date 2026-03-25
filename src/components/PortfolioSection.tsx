import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";

const projects = [
  { title: "E-Commerce Platform", category: "Web Development", description: "A scalable multi-vendor e-commerce solution with advanced inventory management and payment integration.", image: "/ecommerce-dashboard.png", tags: ["React", "Node.js", "MongoDB"] },
  { title: "Healthcare Mobile App", category: "Mobile Development", description: "HIPAA-compliant telemedicine app connecting patients with healthcare providers instantly.", image: "/healthcare-app-interface.png", tags: ["Flutter", "Firebase", "WebRTC"] },
  { title: "AI-Powered Analytics", category: "AI & ML", description: "Business intelligence platform with predictive analytics and automated insights generation.", image: "/analytics-dashboard.png", tags: ["Python", "TensorFlow", "React"] },
  { title: "Real Estate Portal", category: "Web Development", description: "Comprehensive property listing platform with virtual tours and advanced search filters.", image: "/real-estate-website-hero.png", tags: ["Next.js", "PostgreSQL", "Maps API"] },
  { title: "Fitness Tracking App", category: "Mobile Development", description: "Wearable-integrated fitness app with personalized workout plans and nutrition tracking.", image: "/fitness-app-interface.png", tags: ["React Native", "IoT", "AWS"] },
  { title: "Blockchain DApp", category: "Blockchain", description: "Decentralized application for secure peer-to-peer transactions and smart contracts.", image: "/blockchain-app.jpg", tags: ["Solidity", "Web3", "Ethereum"] },
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
            <Card key={project.title} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-transparent relative animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--tertiary))] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--tertiary))] text-white text-xs font-medium rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="pt-6 relative z-10">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tag} className={`px-2 py-1 text-xs rounded transition-all duration-300 ${
                      tagIndex % 3 === 0 ? "bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] group-hover:bg-[hsl(var(--primary))] group-hover:text-white" :
                      tagIndex % 3 === 1 ? "bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] group-hover:bg-[hsl(var(--accent))] group-hover:text-white" :
                      "bg-[hsl(var(--tertiary))]/10 text-[hsl(var(--tertiary))] group-hover:bg-[hsl(var(--tertiary))] group-hover:text-white"
                    }`}>{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button size="lg" variant="outline" className="border-2 border-[hsl(var(--primary))] hover:bg-gradient-to-r hover:from-[hsl(var(--primary))] hover:via-[hsl(var(--accent))] hover:to-[hsl(var(--tertiary))] hover:text-white hover:border-transparent transition-all duration-300 group bg-transparent">
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
