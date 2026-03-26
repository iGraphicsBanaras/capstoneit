import ServicePageTemplate, { ServicePageData } from "./ServicePage";
import { MonitorSmartphone, Zap, Globe, Shield, TrendingUp, Layers } from "lucide-react";

const data: ServicePageData = {
  title: "Hybrid App Development",
  subtitle: "Best of Both Worlds — Native Feel, Web Efficiency",
  description: "Get the perfect balance of performance and cost-efficiency with our hybrid app development services. Build once, deploy everywhere with apps that work seamlessly across all platforms.",
  image: "https://capstoneittrends.com/assets/img/services/hybrid-app.jpg",
  contentHeading: "Expert Hybrid App Development Services",
  content: "Capstone IT Trends delivers hybrid app development solutions using frameworks like React Native, Ionic, and Cordova. Hybrid apps combine the best of web and native technologies, allowing you to reach users on iOS, Android, and web with a single codebase while maintaining near-native performance and user experience.",
  subheading: "Cost-Effective Multi-Platform Solutions",
  subcontent: "Our hybrid development approach significantly reduces time-to-market and development costs while ensuring your app delivers a consistent, high-quality experience across all devices. We help startups and enterprises alike build scalable hybrid applications.",
  features: [
    { icon: MonitorSmartphone, title: "Multi-Platform", description: "Single codebase that runs on iOS, Android, and web browsers" },
    { icon: Zap, title: "Faster Development", description: "Reduced development time compared to building separate native apps" },
    { icon: Globe, title: "Web Technologies", description: "Built with familiar HTML5, CSS3, and JavaScript technologies" },
    { icon: Shield, title: "Offline Support", description: "Apps that work offline with local data synchronization" },
    { icon: TrendingUp, title: "Cost Savings", description: "Up to 50% cost reduction compared to native development" },
    { icon: Layers, title: "Easy Updates", description: "Push updates without app store approval for web content" },
  ],
  processSteps: [
    { title: "Platform Analysis", description: "Evaluating the best hybrid framework for your specific needs" },
    { title: "Cross-Platform Design", description: "Designing responsive UI that adapts to each platform" },
    { title: "Hybrid Development", description: "Building with React Native, Ionic, or Cordova framework" },
    { title: "Device Testing", description: "Testing across multiple devices, OS versions, and screen sizes" },
    { title: "Deployment", description: "Publishing to app stores and web with ongoing support" },
  ],
  expertiseTitle: "Our Hybrid Development Expertise",
  col1Title: "Frameworks",
  col1Items: ["React Native", "Ionic Framework", "Apache Cordova", "Xamarin", "PhoneGap", "Progressive Web Apps"],
  col2Title: "Capabilities",
  col2Items: ["Push Notifications", "Camera & GPS Integration", "Offline Data Sync", "Payment Integration", "Social Media Login", "Analytics & Tracking"],
  ctaTitle: "Ready to Build Your Hybrid App?",
  ctaDescription: "Let's create a cost-effective app that works on every platform.",
  ctaButtonText: "Get Free Quote",
  faqs: [
    { question: "What is the difference between hybrid and native apps?", answer: "Native apps are built specifically for one platform (iOS or Android), while hybrid apps use a single codebase to run on multiple platforms, saving time and cost." },
    { question: "Are hybrid apps slower than native apps?", answer: "Modern hybrid frameworks like React Native deliver near-native performance. For most use cases, users won't notice a difference." },
    { question: "Which hybrid framework do you recommend?", answer: "It depends on your needs. React Native is great for complex apps, Flutter for beautiful UIs, and Ionic for web-first approaches." },
    { question: "Can hybrid apps access device features?", answer: "Yes, hybrid apps can access camera, GPS, push notifications, contacts, and most native device features through plugins." },
  ],
};

export default function HybridApp() { return <ServicePageTemplate data={data} />; }
