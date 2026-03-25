import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cpu } from "lucide-react";

const technologies: Record<string, { name: string; logo: string }[]> = {
  Mobile: [
    { name: "Android", logo: "/android-logo.png" },
    { name: "iOS", logo: "/apple-logo-minimalist.png" },
    { name: "Flutter", logo: "/flutter-logo.png" },
    { name: "React Native", logo: "/react-logo.png" },
    { name: "Kotlin", logo: "/kotlin-logo.png" },
    { name: "Swift", logo: "/swift-logo.png" },
  ],
  Frontend: [
    { name: "React", logo: "/react-logo.png" },
    { name: "Angular", logo: "/angular-logo.png" },
    { name: "Vue.js", logo: "/vue-logo.png" },
    { name: "Next.js", logo: "/nextjs-logo.png" },
    { name: "HTML5", logo: "/html5-logo.png" },
    { name: "CSS3", logo: "/css3-logo.png" },
    { name: "JavaScript", logo: "/javascript-logo.png" },
    { name: "TypeScript", logo: "/typescript-logo.png" },
  ],
  Backend: [
    { name: "Node.js", logo: "/nodejs-logo.png" },
    { name: "Python", logo: "/python-logo.png" },
    { name: "PHP", logo: "/php-logo.png" },
    { name: "Java", logo: "/java-logo.png" },
    { name: ".NET", logo: "/dotnet-logo.png" },
    { name: "Laravel", logo: "/laravel-logo.png" },
  ],
  Database: [
    { name: "MongoDB", logo: "/mongodb-logo.png" },
    { name: "MySQL", logo: "/mysql-logo.png" },
    { name: "PostgreSQL", logo: "/postgresql-logo.png" },
    { name: "Firebase", logo: "/firebase-logo.png" },
    { name: "Redis", logo: "/redis-logo.png" },
    { name: "SQLite", logo: "/sqlite-logo.png" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", logo: "/aws-logo.png" },
    { name: "Azure", logo: "/azure-logo.jpg" },
    { name: "Google Cloud", logo: "/partners/google-cloud.png" },
    { name: "Docker", logo: "/docker-logo.png" },
    { name: "Kubernetes", logo: "/kubernetes-logo.jpg" },
    { name: "CI/CD", logo: "/cicd-logo.jpg" },
  ],
};

export function TechnologiesSection() {
  return (
    <section id="technologies" className="py-20 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent))]/5 via-[hsl(var(--primary))]/5 to-[hsl(var(--tertiary))]/5 animate-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[hsl(var(--primary))]/20 via-[hsl(var(--tertiary))]/20 to-[hsl(var(--accent))]/20 border border-[hsl(var(--primary))]/30 text-[hsl(var(--primary))] text-sm font-medium shadow-lg">
              <Cpu className="h-4 w-4 animate-pulse" />
              <span>Tech Stack</span>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance animate-slide-up">
            <span className="bg-gradient-to-r from-[hsl(var(--accent))] via-[hsl(var(--tertiary))] to-[hsl(var(--primary))] bg-clip-text text-transparent">Technologies</span>{" "}
            We Master
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-100">
            We leverage the latest and most trusted tech stacks and platforms to build powerful solutions
          </p>
        </div>

        <Tabs defaultValue="Mobile" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-12 h-auto bg-card/50 backdrop-blur-sm border-2 p-2">
            {Object.keys(technologies).map((category) => (
              <TabsTrigger key={category} value={category}
                className="text-sm md:text-base py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[hsl(var(--primary))] data-[state=active]:via-[hsl(var(--accent))] data-[state=active]:to-[hsl(var(--tertiary))] data-[state=active]:text-white transition-all duration-300">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(technologies).map(([category, techs]) => (
            <TabsContent key={category} value={category} className="animate-fade-in">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {techs.map((tech, index) => (
                  <div key={tech.name}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-gradient-to-br hover:from-[hsl(var(--primary))]/10 hover:via-[hsl(var(--accent))]/10 hover:to-[hsl(var(--tertiary))]/10 hover:shadow-xl transition-all duration-500 group border-2 border-transparent hover:border-[hsl(var(--accent))]/30 animate-scale-in backdrop-blur-sm"
                    style={{ animationDelay: `${index * 50}ms` }}>
                    <div className="w-16 h-16 relative group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                      <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain drop-shadow-lg" />
                    </div>
                    <span className="text-sm font-medium text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
