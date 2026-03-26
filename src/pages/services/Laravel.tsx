import ServicePageTemplate, { ServicePageData } from "./ServicePage";
import { Box, Globe, Shield, Zap, Database, Settings } from "lucide-react";

const data: ServicePageData = {
  title: "Laravel Web Development",
  subtitle: "Elegant Web Applications with Laravel Framework",
  description: "Build sophisticated web applications with Laravel — the most popular PHP framework. We deliver scalable, secure, and maintainable solutions using Laravel's elegant syntax and powerful features.",
  image: "https://capstoneittrends.com/assets/img/services/laravel.jpg",
  contentHeading: "Professional Laravel Development Company",
  content: "Capstone IT Trends is a leading Laravel development company with extensive experience building enterprise-grade web applications. Laravel's expressive syntax, robust ecosystem, and built-in features like authentication, queues, and caching make it the perfect choice for modern web development.",
  subheading: "Comprehensive Laravel Development Services",
  subcontent: "We offer full-spectrum Laravel services including custom web application development, RESTful API development, e-commerce solutions with Laravel, SaaS product development, Laravel package development, and migration from other frameworks to Laravel.",
  features: [
    { icon: Box, title: "MVC Architecture", description: "Clean, maintainable code with Laravel's MVC pattern" },
    { icon: Globe, title: "RESTful APIs", description: "Robust API development with Laravel's API resources" },
    { icon: Shield, title: "Built-in Security", description: "Authentication, authorization, encryption, and CSRF protection" },
    { icon: Zap, title: "Queue Management", description: "Background job processing for improved performance" },
    { icon: Database, title: "Eloquent ORM", description: "Elegant database management with Laravel's ORM" },
    { icon: Settings, title: "Laravel Ecosystem", description: "Forge, Vapor, Nova, Horizon, and other Laravel tools" },
  ],
  processSteps: [
    { title: "Project Scoping", description: "Defining features, database design, and Laravel architecture" },
    { title: "Backend Development", description: "Building with Laravel routes, controllers, models, and middleware" },
    { title: "Frontend Integration", description: "Integrating frontend with Blade templates or SPA frameworks" },
    { title: "Testing & QA", description: "PHPUnit tests, feature tests, and browser testing with Dusk" },
    { title: "Deployment", description: "Deploying with Laravel Forge or custom server configuration" },
  ],
  expertiseTitle: "Our Laravel Expertise",
  col1Title: "Laravel Services",
  col1Items: ["Custom Web Applications", "SaaS Product Development", "E-commerce with Laravel", "API Development", "Laravel Migration", "Package Development"],
  col2Title: "Laravel Stack",
  col2Items: ["Laravel 10/11", "Livewire & Inertia.js", "Laravel Nova Admin", "Laravel Horizon & Queues", "Laravel Sanctum & Passport", "Laravel Vapor (Serverless)"],
  ctaTitle: "Ready to Build with Laravel?",
  ctaDescription: "Let's create a powerful web application using Laravel's elegant framework.",
  ctaButtonText: "Start Your Laravel Project",
  faqs: [
    { question: "Why choose Laravel over other PHP frameworks?", answer: "Laravel offers elegant syntax, robust ecosystem (Forge, Vapor, Nova), built-in auth, queue management, and the largest PHP community support." },
    { question: "Is Laravel suitable for large-scale applications?", answer: "Yes! Laravel is used by companies like Disney, BBC, and Pfizer. With proper architecture, it handles millions of requests efficiently." },
    { question: "Can you build APIs with Laravel?", answer: "Absolutely. Laravel excels at API development with features like API resources, rate limiting, versioning, and authentication via Sanctum/Passport." },
    { question: "Do you offer Laravel maintenance?", answer: "Yes, we provide ongoing maintenance including security patches, Laravel version upgrades, performance optimization, and feature additions." },
  ],
};

export default function Laravel() { return <ServicePageTemplate data={data} />; }
