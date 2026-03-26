import TechnologyPageTemplate, { TechnologyPageData } from "./TechnologyPage";
import { Code2, Shield, Globe, Zap, Database, Settings } from "lucide-react";

const data: TechnologyPageData = {
  title: "Java Technology",
  subtitle: "Enterprise-Grade Solutions with Java",
  description: "Build robust, scalable enterprise applications with Java. From web applications to microservices, we deliver production-grade Java solutions using Spring Boot, Hibernate, and modern frameworks.",
  image: "https://capstoneittrends.com/assets/img/technologies/java.jpg",
  contentHeading: "Java Development Expertise",
  content: "Java remains one of the most trusted programming languages for enterprise development. Its platform independence, strong typing, massive ecosystem, and proven scalability make it the go-to choice for banks, healthcare systems, and large-scale applications.",
  subheading: "Modern Java Development",
  subcontent: "We use modern Java (17+) with Spring Boot, Spring Cloud, Hibernate, and microservices architecture. Our team builds RESTful APIs, event-driven systems, and cloud-native applications that are scalable and maintainable.",
  features: [
    { icon: Code2, title: "Spring Boot", description: "Rapid application development with Spring ecosystem" },
    { icon: Shield, title: "Enterprise Security", description: "Spring Security for authentication and authorization" },
    { icon: Globe, title: "Microservices", description: "Scalable microservices with Spring Cloud" },
    { icon: Zap, title: "High Performance", description: "JVM optimization for maximum throughput" },
    { icon: Database, title: "Data Layer", description: "Hibernate ORM and Spring Data for efficient data access" },
    { icon: Settings, title: "Cloud Native", description: "Docker, Kubernetes, and cloud deployment ready" },
  ],
  services: ["Custom Java Applications", "Spring Boot Development", "Microservices Architecture", "Java API Development", "Legacy Java Modernization", "Java Consulting"],
  industries: ["Banking & Finance", "Healthcare", "Insurance", "Government", "Telecom", "Enterprise"],
  ctaTitle: "Build with Java",
  ctaDescription: "Create robust enterprise applications with Java.",
  faqs: [
    { question: "Is Java still relevant?", answer: "Absolutely! Java is used by 35 billion+ devices, powers Android, and is the backbone of most enterprise systems worldwide." },
    { question: "Which Java framework do you use?", answer: "We primarily use Spring Boot for its comprehensive ecosystem, auto-configuration, and production-ready features." },
  ],
};

export default function JavaTech() { return <TechnologyPageTemplate data={data} />; }
