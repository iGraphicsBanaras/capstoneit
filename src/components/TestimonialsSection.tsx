import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Ricky Bollerman", role: "CEO, Tech Solutions Inc", content: "Very happy with the management services offered by Capstone IT Trends. We've seen huge results in traffic and our position on Google. Exactly what I was promised in the first meeting was delivered.", rating: 5, image: "/professional-headshot.png" },
  { name: "Sarah Hill", role: "Director, Digital Marketing Agency", content: "Capstone IT Trends has excellent customer service and very good execution in the various levels of services they offer. This represents the full suite of available options in the current tech climate.", rating: 5, image: "/professional-woman-diverse.png" },
  { name: "Richard Kearsey", role: "Founder, E-Commerce Startup", content: "Fantastic results at competitive prices. Pleasure to work with Capstone IT Trends. Getting good results, so money well spent. Their team is professional and responsive.", rating: 5, image: "/diverse-business-professionals.png" },
  { name: "Luis Fenton", role: "Marketing Manager", content: "I appreciate your hard work. I have seen increased traffic on our site and in sales. Services of Capstone IT Trends helped us to increase our web performance significantly.", rating: 5, image: "/corporate-headshot.jpg" },
  { name: "Minnie Torres", role: "Business Owner", content: "Capstone IT Trends has helped us dramatically grow our online presence. Your communication has been amazing. I like such firm who can attend call at any time.", rating: 5, image: "/confident-businesswoman.png" },
  { name: "Garry Richard", role: "CTO, Software Company", content: "It has been a pleasure to work with Capstone IT Trends. They are professional and truly know what they are doing. Totally worth every penny spent on them!", rating: 5, image: "/tech-executive.png" },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[hsl(var(--accent))]/20 via-[hsl(var(--tertiary))]/20 to-[hsl(var(--primary))]/20 border border-[hsl(var(--accent))]/30 text-[hsl(var(--accent))] text-sm font-medium shadow-lg">
              <Quote className="h-4 w-4" />
              <span>Testimonials</span>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance animate-slide-up">
            What{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--tertiary))] bg-clip-text text-transparent">Our Clients</span>{" "}
            Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-100">
            Hear from our 200+ satisfied clients about their experiences and success stories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name}
              className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card to-muted/30 hover:from-[hsl(var(--primary))]/5 hover:via-[hsl(var(--accent))]/5 hover:to-[hsl(var(--tertiary))]/5 border-2 hover:border-[hsl(var(--accent))]/30 animate-fade-in backdrop-blur-sm group"
              style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="pt-6 relative">
                <Quote className="absolute top-4 right-4 h-12 w-12 text-[hsl(var(--accent))]/10 group-hover:text-[hsl(var(--accent))]/20 transition-colors" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-[hsl(var(--accent))]/20 group-hover:ring-4 group-hover:ring-[hsl(var(--accent))]/40 transition-all">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[hsl(var(--tertiary))] text-[hsl(var(--tertiary))] group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic relative z-10 group-hover:text-foreground transition-colors">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
