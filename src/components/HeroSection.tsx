import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Smartphone, TrendingUp, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    badge: "We Don't Just Build, We Enhance Your Business Value",
    title: "Inspiring Innovation through",
    highlight1: "Seamless IT",
    highlight2: "Solutions",
    description: "A Full Stack Development Team delivering innovative Solutions for Mobile, Web & Wearables using cutting-edge technologies like AI, AR/VR, Blockchain, IoT and Cloud Computing.",
    backgroundImage: "/modern-office-workspace-with-developers-coding-on-.jpg",
  },
  {
    badge: "Transform Your Digital Presence",
    title: "Custom Software",
    highlight1: "Development",
    highlight2: "Services",
    description: "From concept to deployment, we build scalable enterprise solutions, cloud applications, and cutting-edge software tailored to your business needs with modern frameworks and architectures.",
    backgroundImage: "/professional-team-collaborating-on-laptops-with-co.jpg",
  },
  {
    badge: "Mobile-First Approach",
    title: "Native & Cross-Platform",
    highlight1: "App",
    highlight2: "Development",
    description: "Create stunning iOS, Android, Flutter and Hybrid mobile applications with seamless user experiences. We specialize in wearable tech, IoT integration, and progressive web apps.",
    backgroundImage: "/mobile-app-development-workspace-with-smartphones-.jpg",
  },
  {
    badge: "Grow Your Online Business",
    title: "Digital Marketing &",
    highlight1: "SEO",
    highlight2: "Excellence",
    description: "Boost your online visibility with data-driven SEO strategies, PPC campaigns, social media marketing, and content marketing that converts visitors into loyal customers.",
    backgroundImage: "/placeholder.svg",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-16 md:pb-32">
      <div className="absolute inset-0 z-0">
        <img src={slides[currentSlide].backgroundImage} alt="Background" className="w-full h-full object-cover transition-opacity duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/95 via-[hsl(var(--primary))]/85 to-[hsl(var(--accent))]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[hsl(var(--accent))]/20 via-transparent to-[hsl(var(--tertiary))]/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs md:text-sm font-medium">
                <Zap className="h-3 w-3 md:h-4 md:w-4 text-[hsl(var(--tertiary))]" />
                <span className="transition-all duration-500 line-clamp-1">{slides[currentSlide].badge}</span>
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              <span className="text-white block transition-all duration-500">{slides[currentSlide].title} </span>
              <span className="text-[hsl(var(--tertiary))] transition-all duration-500">{slides[currentSlide].highlight1} </span>
              <span className="text-[hsl(var(--accent))] transition-all duration-500">{slides[currentSlide].highlight2}</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed transition-all duration-500">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <Button size="lg" asChild className="group bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-white border-2 border-[hsl(var(--accent))] w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                <Link to="/contact">
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--primary))] bg-white/10 backdrop-blur-sm w-full sm:w-auto shadow-lg transition-all">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="flex items-center gap-3 md:gap-4 pt-2 md:pt-4">
              <button onClick={prevSlide} className="p-1.5 md:p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all" aria-label="Previous slide">
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </button>
              <div className="flex gap-1.5 md:gap-2">
                {slides.map((_, index) => (
                  <button key={index} onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 md:h-2 rounded-full transition-all ${index === currentSlide ? "w-6 md:w-8 bg-[hsl(var(--accent))]" : "w-1.5 md:w-2 bg-white/40 hover:bg-white/60"}`}
                    aria-label={`Go to slide ${index + 1}`} />
                ))}
              </div>
              <button onClick={nextSlide} className="p-1.5 md:p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all" aria-label="Next slide">
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-4 md:pt-8">
              {[
                { label: "Years Experience", value: "5+", color: "accent" },
                { label: "Projects Delivered", value: "100+", color: "tertiary" },
                { label: "Global Clients", value: "110+", color: "accent" },
                { label: "Developers", value: "10+", color: "tertiary" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1 bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color === "tertiary" ? "text-[hsl(var(--tertiary))]" : "text-[hsl(var(--accent))]"}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 md:p-6 hover:bg-white/20 hover:shadow-xl transition-all">
                  <Code2 className="h-8 w-8 md:h-10 md:w-10 text-[hsl(var(--tertiary))] mb-3 md:mb-4" />
                  <h3 className="font-semibold mb-2 text-sm md:text-base text-white">Web Development</h3>
                  <p className="text-xs md:text-sm text-white/80">Responsive & scalable web solutions</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 md:p-6 hover:bg-white/20 hover:shadow-xl transition-all">
                  <Smartphone className="h-8 w-8 md:h-10 md:w-10 text-[hsl(var(--accent))] mb-3 md:mb-4" />
                  <h3 className="font-semibold mb-2 text-sm md:text-base text-white">Mobile Apps</h3>
                  <p className="text-xs md:text-sm text-white/80">iOS & Android applications</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 md:p-6 hover:bg-white/20 hover:shadow-xl transition-all">
                  <TrendingUp className="h-8 w-8 md:h-10 md:w-10 text-[hsl(var(--tertiary))] mb-3 md:mb-4" />
                  <h3 className="font-semibold mb-2 text-sm md:text-base text-white">Digital Marketing</h3>
                  <p className="text-xs md:text-sm text-white/80">SEO & PPC campaigns</p>
                </div>
                <div className="bg-gradient-to-br from-[hsl(var(--accent))] via-[hsl(var(--tertiary))] to-[hsl(var(--accent))] rounded-lg p-4 md:p-6 text-white shadow-xl border-2 border-white/30">
                  <Zap className="h-8 w-8 md:h-10 md:w-10 mb-3 md:mb-4" />
                  <h3 className="font-semibold mb-2 text-sm md:text-base">AI Solutions</h3>
                  <p className="text-xs md:text-sm opacity-90">Intelligent automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
