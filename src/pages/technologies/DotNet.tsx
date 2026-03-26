import TechnologyPageTemplate, { TechnologyPageData } from "./TechnologyPage";
import { Box, Shield, Globe, Zap, Database, Settings } from "lucide-react";

const data: TechnologyPageData = {
  title: ".NET Technology",
  subtitle: "Enterprise Solutions with Microsoft .NET",
  description: "Build robust, secure enterprise applications with .NET. From web apps to microservices and cloud solutions, we deliver production-grade .NET solutions using C# and ASP.NET Core.",
  image: "https://capstoneittrends.com/assets/img/technologies/dotnet.jpg",
  contentHeading: ".NET Development Expertise",
  content: "Microsoft's .NET platform is a powerful, cross-platform framework for building enterprise applications. With C#, ASP.NET Core, and Azure integration, .NET provides everything needed for building scalable web applications, APIs, and microservices.",
  subheading: "Modern .NET Stack",
  subcontent: "We use .NET 8, ASP.NET Core, Entity Framework Core, Blazor, and Azure services to build high-performance applications. Our team delivers RESTful APIs, real-time SignalR applications, and enterprise solutions with clean architecture.",
  features: [
    { icon: Box, title: "ASP.NET Core", description: "Cross-platform web framework for modern applications" },
    { icon: Shield, title: "Enterprise Security", description: "Identity Server, JWT authentication, and Azure AD" },
    { icon: Globe, title: "Azure Integration", description: "Seamless deployment on Microsoft Azure cloud" },
    { icon: Zap, title: "High Performance", description: "One of the fastest web frameworks in benchmarks" },
    { icon: Database, title: "Entity Framework", description: "Powerful ORM for efficient database operations" },
    { icon: Settings, title: "Blazor", description: "Interactive web UIs with C# instead of JavaScript" },
  ],
  services: ["ASP.NET Core Development", "Blazor Applications", ".NET API Development", "Azure Cloud Solutions", ".NET Migration", ".NET Consulting"],
  industries: ["Banking & Finance", "Healthcare", "Government", "Insurance", "Manufacturing", "Enterprise"],
  ctaTitle: "Build with .NET",
  ctaDescription: "Create powerful enterprise applications with Microsoft .NET.",
  faqs: [
    { question: "Is .NET cross-platform?", answer: "Yes! .NET (formerly .NET Core) runs on Windows, Linux, and macOS. It's fully open-source and supported by Microsoft." },
    { question: "Which .NET version do you use?", answer: "We use .NET 8 (latest LTS) with ASP.NET Core for new projects and support .NET Framework for legacy applications." },
  ],
};

export default function DotNetTech() { return <TechnologyPageTemplate data={data} />; }
