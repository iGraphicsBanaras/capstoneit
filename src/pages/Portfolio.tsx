import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, Clock, Star } from "lucide-react";
import { FAQSection } from "@/components/FAQSection";

function PortfolioHero() {
  return (
    <section className="relative bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary)/0.9)] to-[hsl(var(--accent))] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-white/90 text-balance">Showcasing Our Best Work & Success Stories</p>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">Explore our diverse portfolio of successful projects across web development, mobile apps, e-commerce, AI, and digital transformation initiatives.</p>
        </div>
      </div>
    </section>
  );
}

function PortfolioGrid() {
  const projects = [
    { title: "E-Commerce Platform", category: "Web Development", description: "Full-featured online marketplace with advanced filtering and payment integration", technologies: ["React", "Node.js", "MongoDB"], image: "/modern-ecommerce-website.png" },
    { title: "Healthcare Mobile App", category: "Mobile Development", description: "Patient management and telemedicine application for healthcare providers", technologies: ["Flutter", "Firebase", "REST API"], image: "/healthcare-mobile-app.jpg" },
    { title: "Real Estate Portal", category: "Web Development", description: "Property listing and management system with virtual tours", technologies: ["Laravel", "Vue.js", "MySQL"], image: "/real-estate-website-hero.png" },
    { title: "Fitness Tracking App", category: "Mobile Development", description: "iOS and Android app for workout tracking and nutrition planning", technologies: ["React Native", "Redux", "Node.js"], image: "/fitness-app-interface.png" },
    { title: "Restaurant Management System", category: "Software Development", description: "Complete POS and inventory management solution for restaurants", technologies: ["PHP", "MySQL", "jQuery"], image: "/restaurant-pos-system.png" },
    { title: "AI Chatbot Platform", category: "AI & ML", description: "Intelligent customer service chatbot with natural language processing", technologies: ["Python", "TensorFlow", "React"], image: "/ai-chatbot-interface.png" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 bg-[hsl(var(--accent))] text-white text-sm rounded-full">{project.category}</span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] text-xs rounded">{tech}</span>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-[hsl(var(--primary))] group-hover:text-white transition-colors bg-transparent">
                  View Details <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const caseStudies = [
    {
      title: "E-Commerce Success Story", client: "Fashion Retail Brand",
      challenge: "Outdated website with poor mobile experience and low conversion rates",
      solution: "Built a modern, responsive e-commerce platform with advanced product filtering, one-click checkout, and personalized recommendations",
      results: [
        { icon: TrendingUp, label: "Sales Increase", value: "250%" },
        { icon: Users, label: "User Growth", value: "180%" },
        { icon: Clock, label: "Page Load", value: "2s" },
        { icon: Star, label: "Rating", value: "4.8/5" },
      ],
    },
    {
      title: "Healthcare Digital Transformation", client: "Multi-Specialty Hospital Chain",
      challenge: "Manual patient management, inefficient appointment scheduling, and lack of telemedicine",
      solution: "Developed integrated hospital management system with patient portal, online booking, telemedicine, and EHR integration",
      results: [
        { icon: Users, label: "Patients Served", value: "50K+" },
        { icon: TrendingUp, label: "Efficiency Gain", value: "400%" },
        { icon: Clock, label: "Wait Time Reduced", value: "60%" },
        { icon: Star, label: "Satisfaction", value: "4.9/5" },
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
  { question: "What industries have you worked with?", answer: "We've worked across Healthcare, E-commerce, Real Estate, Education, Finance, Travel, Hospitality, Manufacturing, and many more industries." },
  { question: "Do you provide references from past clients?", answer: "Absolutely! We can connect you with our past clients for references and testimonials upon request." },
];

const Portfolio = () => (
  <Layout>
    <PortfolioHero />
    <PortfolioGrid />
    <CaseStudies />
    <FAQSection faqs={portfolioFaqs} title="Portfolio FAQs" subtitle="Questions about our work and projects" className="bg-background" />
  </Layout>
);

export default Portfolio;
