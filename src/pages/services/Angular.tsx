import ServicePageTemplate, { ServicePageData } from "./ServicePage";
import { Blocks, Shield, Globe, Zap, Settings, TrendingUp } from "lucide-react";

const data: ServicePageData = {
  title: "AngularJS Web Development",
  subtitle: "Enterprise-Grade Web Applications with Angular",
  description: "Build robust, scalable enterprise web applications with Angular. Our Angular developers create feature-rich, maintainable applications using Google's powerful framework.",
  image: "https://capstoneittrends.com/assets/img/services/angular-dev.jpg",
  contentHeading: "Professional Angular Development Company",
  content: "Capstone IT Trends delivers enterprise-grade Angular development services. Angular's comprehensive framework with built-in dependency injection, powerful templating, and TypeScript support makes it ideal for building large-scale, complex web applications that require robust architecture and maintainability.",
  subheading: "Complete Angular Development Solutions",
  subcontent: "We provide end-to-end Angular development services including single-page applications, progressive web apps, enterprise portals, real-time dashboards, and migration from AngularJS to modern Angular. Our team follows Angular best practices and style guide for clean, scalable code.",
  features: [
    { icon: Blocks, title: "Modular Architecture", description: "Well-organized modules for scalable enterprise applications" },
    { icon: Shield, title: "TypeScript First", description: "Strong typing for reliable, maintainable code" },
    { icon: Globe, title: "Progressive Web Apps", description: "PWAs with offline support and native-like experience" },
    { icon: Zap, title: "High Performance", description: "Ahead-of-time compilation and tree shaking for speed" },
    { icon: Settings, title: "Angular CLI", description: "Streamlined development workflow with Angular CLI tools" },
    { icon: TrendingUp, title: "RxJS Integration", description: "Reactive programming for complex data streams" },
  ],
  processSteps: [
    { title: "Requirement Analysis", description: "Understanding your application needs and defining Angular architecture" },
    { title: "Module Design", description: "Designing feature modules, services, and component hierarchy" },
    { title: "Angular Development", description: "Building with Angular components, services, and RxJS observables" },
    { title: "Testing", description: "Unit tests with Jasmine/Karma and e2e tests with Protractor/Cypress" },
    { title: "Deployment", description: "Production build optimization and deployment setup" },
  ],
  expertiseTitle: "Our Angular Expertise",
  col1Title: "Angular Services",
  col1Items: ["Custom Angular Apps", "Enterprise Portals", "Angular PWA Development", "Angular Migration", "Angular E-commerce", "Real-Time Dashboards"],
  col2Title: "Angular Stack",
  col2Items: ["Angular 15/16/17", "TypeScript", "RxJS", "NgRx State Management", "Angular Material", "Angular Universal (SSR)"],
  ctaTitle: "Ready to Build with Angular?",
  ctaDescription: "Let's create a powerful enterprise application with Angular.",
  ctaButtonText: "Get Started",
  faqs: [
    { question: "Is Angular suitable for enterprise applications?", answer: "Yes! Angular is designed for enterprise use with built-in dependency injection, modular architecture, strong typing, and comprehensive testing tools." },
    { question: "What's the difference between AngularJS and Angular?", answer: "AngularJS (1.x) is the older version using JavaScript. Modern Angular (2+) is a complete rewrite using TypeScript with better performance and architecture." },
    { question: "Can you migrate our AngularJS app to modern Angular?", answer: "Yes, we specialize in migrating AngularJS applications to modern Angular, ensuring smooth transition with minimal downtime." },
    { question: "Do you use Angular Material?", answer: "Yes, we use Angular Material for consistent, accessible UI components following Google's Material Design guidelines." },
  ],
};

export default function Angular() { return <ServicePageTemplate data={data} />; }
