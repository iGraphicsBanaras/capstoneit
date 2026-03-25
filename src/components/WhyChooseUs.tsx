import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Lightbulb, Target, TrendingUp, DollarSign } from "lucide-react";

const reasons = [
  { icon: Award, title: "Proven Results", description: "We have partnered with hundreds of companies to improve their digital presence and drive traffic. We have successfully fixed various challenges by implementing result-driven strategies." },
  { icon: Users, title: "Customers First Approach", description: "Our customer-first approach helps us deliver superior experiences. This approach has helped us nurture relationships and provide personalized experiences that increase user engagement." },
  { icon: Lightbulb, title: "Your Ideas Matter", description: "We believe in transparency. We actively seek ideas from our clients to enrich our services. This collaborative approach helps you increase revenue and achieve your business goals." },
  { icon: Target, title: "We Know Technology", description: "With over 15 years of experience and expertise across multiple technologies, we have all the resources and tools to make your digital vision a reality." },
  { icon: TrendingUp, title: "Focus On ROI", description: "Our primary goal is to increase ROI for customers through various campaigns. Our strategies are designed to draw customers attention and turn them into leads in no time." },
  { icon: DollarSign, title: "Affordable Services", description: "All our services are budget-friendly and customizable. We deliver targeted results even with lower budgets, ensuring your brand gets more visibility to enhance revenue." },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/about-og-image.png" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent))]/95 via-[hsl(var(--accent))]/90 to-[hsl(var(--tertiary))]/95" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium shadow-lg">
              <Award className="h-4 w-4 animate-pulse" />
              <span>Why Choose Us</span>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance animate-slide-up text-white">
            Your Trusted IT Partner For Digital Success
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto animate-slide-up delay-100">
            We combine expertise, innovation, and dedication to deliver solutions that drive real business results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const gradientClass = index % 3 === 0 ? "from-[hsl(var(--primary))] to-[hsl(var(--accent))]" : index % 3 === 1 ? "from-[hsl(var(--accent))] to-[hsl(var(--tertiary))]" : "from-[hsl(var(--primary))] to-[hsl(var(--tertiary))]";

            return (
              <Card key={reason.title} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{reason.title}</h3>
                  <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
