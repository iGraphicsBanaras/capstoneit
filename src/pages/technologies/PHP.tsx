import TechnologyPageTemplate, { TechnologyPageData } from "./TechnologyPage";
import { FileCode, Globe, Database, Shield, Zap, Settings } from "lucide-react";

const data: TechnologyPageData = {
  title: "PHP Technology",
  subtitle: "Powering 75% of the Web",
  description: "PHP is the backbone of the web, powering WordPress, Laravel, and millions of websites. We build fast, secure, and scalable web applications with modern PHP.",
  image: "https://capstoneittrends.com/assets/img/technologies/php.jpg",
  contentHeading: "PHP Development Expertise",
  content: "PHP has evolved significantly with version 8.x bringing features like JIT compilation, named arguments, attributes, and union types. Our team uses modern PHP with Laravel, Symfony, and CodeIgniter to build performant web applications.",
  subheading: "Modern PHP Stack",
  subcontent: "We follow PSR standards, use Composer for dependency management, implement design patterns, and write testable code. Our PHP development includes RESTful APIs, CMS development, e-commerce platforms, and custom web applications.",
  features: [
    { icon: FileCode, title: "PHP 8.x", description: "Modern PHP with JIT compilation and new features" },
    { icon: Globe, title: "Laravel Framework", description: "Elegant web applications with Laravel" },
    { icon: Database, title: "Database Expert", description: "MySQL, PostgreSQL, and MongoDB integration" },
    { icon: Shield, title: "Secure Coding", description: "OWASP-compliant secure development practices" },
    { icon: Zap, title: "Performance", description: "OpCache, Redis, and query optimization" },
    { icon: Settings, title: "API Development", description: "RESTful and GraphQL API development" },
  ],
  services: ["Custom PHP Applications", "Laravel Development", "WordPress Development", "PHP API Development", "PHP Migration & Upgrade", "PHP Maintenance"],
  industries: ["E-commerce", "Healthcare", "Education", "Media", "SaaS", "Enterprise"],
  ctaTitle: "Build with PHP",
  ctaDescription: "Create powerful web applications with modern PHP.",
  faqs: [
    { question: "Is PHP still a good choice?", answer: "Yes! PHP 8.x is faster than ever with JIT compilation. It powers WordPress (43% of web), Facebook, Wikipedia, and millions of applications." },
    { question: "Which PHP framework is best?", answer: "Laravel is the most popular for its elegance and features. Symfony is great for enterprise. CodeIgniter is lightweight and fast." },
  ],
};

export default function PHPTech() { return <TechnologyPageTemplate data={data} />; }
