import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Search, TrendingUp, Mail, Share2, Code, ShoppingCart, Cloud, Brain, Gamepad2, Blocks, Eye, Wifi, Palette, Database, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Globe, title: "Web Development", description: "We design and develop responsive, feature-rich websites that enhance your online presence, boost engagement, and drive business growth with scalable and innovative web solutions.", features: ["SAAS Websites", "CMS Development", "Custom Websites", "Web Portals"], href: "/services/website-design" },
  { icon: Smartphone, title: "Mobile App Development", description: "Creating custom mobile applications for Android, iOS, and cross-platform use. Our apps are designed to offer seamless user experiences and are tailored to meet your business goals.", features: ["Native Apps", "Hybrid Apps", "TV Apps", "Wearable Apps"], href: "/services/android-app" },
  { icon: Search, title: "SEO Services", description: "Our professional SEO service helps you connect with your audience. Our customizable SEO strategies help you drive traffic, generate leads, and maximize sales with proven results.", features: ["Technical SEO", "Local SEO", "SEO Audit", "Link Building"], href: "/services/digital-marketing" },
  { icon: TrendingUp, title: "Pay Per Click (PPC)", description: "With our PPC management service, you can connect with your target audience and increase brand awareness. We have expertise in optimized PPC and remarketing campaigns.", features: ["Google Ads", "Social Ads", "Remarketing", "Campaign Management"], href: "/services/digital-marketing" },
  { icon: Share2, title: "Social Media Marketing", description: "We assist you in increasing your brand acquaintance with focused social media marketing. Our SMM experts produce relevant and catchy content that accurately reflects your brand.", features: ["Facebook Marketing", "Instagram Ads", "LinkedIn Campaigns", "Content Strategy"], href: "/services/digital-marketing" },
  { icon: Mail, title: "Email Marketing", description: "Maximize leads and enhance your customer base with personalized email marketing campaigns. Our experts help you plan, develop, launch, and maintain effective email strategies.", features: ["Campaign Design", "Automation", "A/B Testing", "Analytics"], href: "/services/digital-marketing" },
  { icon: Brain, title: "AI Development", description: "Delivering cutting-edge Artificial Intelligence services to drive innovation and optimize business processes with smart solutions, chatbots, and machine learning.", features: ["Cognitive Automation", "Predictive Insights", "Natural Language AI", "Computer Vision"], href: "/contact" },
  { icon: Blocks, title: "Blockchain Development", description: "We build secure and transparent blockchain solutions, enabling decentralized apps, smart contracts, and efficient data management for your business.", features: ["Smart Contracts", "DApps", "Cryptocurrency", "NFT Solutions"], href: "/contact" },
  { icon: Eye, title: "AR/VR Development", description: "Mingle technology and real-world with supreme Augmented Reality and Virtual Reality solutions to increase emotional interaction and appeal of your brand.", features: ["3D Product Design", "Virtual Spaces", "Unity Solutions", "Immersive Experiences"], href: "/contact" },
  { icon: Wifi, title: "IoT Applications", description: "We develop advanced IoT applications that seamlessly connect devices, enabling smart automation, real-time data insights, and enhanced operational efficiency.", features: ["Smart Devices", "Sensor Integration", "Real-time Monitoring", "Data Analytics"], href: "/contact" },
  { icon: Gamepad2, title: "Game Development", description: "We develop immersive and engaging games with top-notch graphics and interactive gameplay, delivering exceptional experiences across all platforms.", features: ["Mobile Games", "Unity Development", "3D Graphics", "Multiplayer"], href: "/contact" },
  { icon: ShoppingCart, title: "E-commerce Solutions", description: "We create scalable e-commerce solutions tailored for your business growth and customer satisfaction with secure payment integration and inventory management.", features: ["Online Stores", "Payment Gateway", "Inventory System", "Multi-vendor"], href: "/contact" },
  { icon: Palette, title: "UI/UX Design", description: "Make proof-based, cooperation plans between human clients and items or sites with stunning visual design and intuitive user experiences.", features: ["Product Design", "Web Design", "Mobile Design", "Brand Design"], href: "/services/graphic-design" },
  { icon: Database, title: "Custom CRM", description: "Develop customized CRM solutions to manage customer relationships, streamline sales processes, and improve customer satisfaction effectively.", features: ["Sales Pipeline", "Customer Data", "Automation", "Reporting"], href: "/services/crm-software" },
  { icon: Cloud, title: "Cloud Solutions", description: "Leverage cloud computing for scalable, secure, and cost-effective infrastructure. We help migrate and optimize your applications for the cloud.", features: ["Cloud Migration", "AWS/Azure", "Cloud Storage", "DevOps"], href: "/contact" },
  { icon: CheckCircle, title: "Quality Assurance", description: "Lead your company with comprehensive testing services including manual testing, automation testing, and user experience testing for flawless products.", features: ["Manual Testing", "Automation", "Performance Testing", "Security Testing"], href: "/contact" },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
      <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/5 via-[hsl(var(--accent))]/5 to-[hsl(var(--tertiary))]/5 animate-gradient" />
      <div className="hidden md:block absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--accent))]/10 rounded-full blur-3xl animate-pulse" />
      <div className="hidden md:block absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-[hsl(var(--primary))]/20 via-[hsl(var(--accent))]/20 to-[hsl(var(--tertiary))]/20 border border-[hsl(var(--primary))]/30 text-[hsl(var(--primary))] text-xs md:text-sm font-medium shadow-lg">
              <Code className="h-3 w-3 md:h-4 md:w-4" />
              <span>Our Services</span>
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-balance animate-slide-up">
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--tertiary))] bg-clip-text text-transparent">
              Comprehensive IT Solutions
            </span>{" "}
            For Your Business
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-100">
            From concept to deployment, we offer end-to-end technology services that transform ideas into powerful digital solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const gradientClass = index % 3 === 0 ? "from-[hsl(var(--primary))]/10 to-[hsl(var(--primary))]/5" : index % 3 === 1 ? "from-[hsl(var(--accent))]/10 to-[hsl(var(--accent))]/5" : "from-[hsl(var(--tertiary))]/10 to-[hsl(var(--tertiary))]/5";
            const hoverGradient = index % 3 === 0 ? "hover:from-[hsl(var(--primary))]/20 hover:to-[hsl(var(--primary))]/10" : index % 3 === 1 ? "hover:from-[hsl(var(--accent))]/20 hover:to-[hsl(var(--accent))]/10" : "hover:from-[hsl(var(--tertiary))]/20 hover:to-[hsl(var(--tertiary))]/10";

            return (
              <Link to={service.href} key={service.title}>
              <Card className={`group hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-2 bg-gradient-to-br ${gradientClass} ${hoverGradient} border-2 hover:border-opacity-100 animate-fade-in backdrop-blur-sm h-full cursor-pointer`}
                style={{ animationDelay: `${index * 50}ms` }}>
                <CardHeader>
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${
                    index % 3 === 0 ? "from-[hsl(var(--primary))] to-[hsl(var(--primary))]/50" : index % 3 === 1 ? "from-[hsl(var(--accent))] to-[hsl(var(--accent))]/50" : "from-[hsl(var(--tertiary))] to-[hsl(var(--tertiary))]/50"
                  } flex items-center justify-center mb-3 md:mb-4 md:group-hover:scale-110 md:group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 md:space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        <div className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full ${
                          index % 3 === 0 ? "bg-[hsl(var(--primary))]" : index % 3 === 1 ? "bg-[hsl(var(--accent))]" : "bg-[hsl(var(--tertiary))]"
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8 md:mt-12 animate-fade-in">
          <Button size="lg" asChild className="w-full sm:w-auto bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--tertiary))] hover:opacity-90 text-white border-0 shadow-2xl transition-all duration-300">
            <Link to="/contact">Request Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
