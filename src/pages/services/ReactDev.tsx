import ServicePageTemplate, { ServicePageData } from "./ServicePage";
import { Code2, Zap, Globe, Layers, TrendingUp, Settings } from "lucide-react";

const data: ServicePageData = {
  title: "React Web Development",
  subtitle: "Modern, Fast & Interactive Web Applications",
  description: "Build blazing-fast, interactive web applications with React.js. Our expert React developers create component-based, scalable frontends that deliver exceptional user experiences.",
  image: "https://capstoneittrends.com/assets/img/services/react-dev.jpg",
  contentHeading: "Expert React.js Development Company",
  content: "Capstone IT Trends is a leading React.js development company specializing in building modern, high-performance web applications. React's component-based architecture, virtual DOM, and vast ecosystem make it the ideal choice for building dynamic, responsive, and scalable frontends that users love.",
  subheading: "Full-Service React Development",
  subcontent: "From single-page applications (SPAs) to complex enterprise dashboards, we leverage React's powerful features including hooks, context API, server-side rendering, and state management to build web applications that are fast, maintainable, and future-proof.",
  features: [
    { icon: Code2, title: "Component Architecture", description: "Reusable, modular components for maintainable code" },
    { icon: Zap, title: "Virtual DOM", description: "Lightning-fast rendering with React's virtual DOM" },
    { icon: Globe, title: "SPA Development", description: "Seamless single-page applications with React Router" },
    { icon: Layers, title: "State Management", description: "Redux, Context API, or Zustand for complex state" },
    { icon: TrendingUp, title: "SEO Optimized", description: "Server-side rendering with Next.js for better SEO" },
    { icon: Settings, title: "Rich Ecosystem", description: "Vast library of packages and community support" },
  ],
  processSteps: [
    { title: "Architecture Planning", description: "Designing component hierarchy, state management, and routing" },
    { title: "UI Component Development", description: "Building reusable React components with proper typing" },
    { title: "API Integration", description: "Connecting frontend with backend APIs and data sources" },
    { title: "Testing & Optimization", description: "Unit testing with Jest, performance profiling, and optimization" },
    { title: "Deployment & CI/CD", description: "Setting up deployment pipeline and continuous integration" },
  ],
  expertiseTitle: "Our React Development Skills",
  col1Title: "React Services",
  col1Items: ["Custom React Applications", "React SPA Development", "React Dashboard Development", "React E-commerce", "React Migration", "React Native (Mobile)"],
  col2Title: "React Stack",
  col2Items: ["React 18+ with Hooks", "TypeScript", "Next.js (SSR/SSG)", "Redux / Zustand", "React Query", "Tailwind CSS / Styled Components"],
  ctaTitle: "Ready to Build with React?",
  ctaDescription: "Let's create a modern, interactive web application with React.",
  ctaButtonText: "Start Your React Project",
  faqs: [
    { question: "Why choose React for web development?", answer: "React offers component reusability, virtual DOM for performance, massive ecosystem, strong community, and is backed by Meta (Facebook)." },
    { question: "Do you use TypeScript with React?", answer: "Yes, we strongly recommend and use TypeScript with React for type safety, better developer experience, and fewer runtime errors." },
    { question: "Can you build mobile apps with React?", answer: "Yes! Using React Native, we can build native mobile apps for iOS and Android sharing code with your React web application." },
    { question: "How do you handle React app performance?", answer: "We use code splitting, lazy loading, memoization, virtualization, and React Profiler to ensure optimal performance." },
  ],
};

export default function ReactDev() { return <ServicePageTemplate data={data} />; }
