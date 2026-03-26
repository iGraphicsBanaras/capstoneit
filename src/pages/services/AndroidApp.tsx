import ServicePageTemplate, { ServicePageData } from "./ServicePage";
import { Smartphone, Zap, Shield, Users, TrendingUp, Settings } from "lucide-react";

const data: ServicePageData = {
  title: "Android App Development",
  subtitle: "Build Powerful Android Applications That Users Love",
  description: "Transform your business with custom Android app development services. We build high-performance, scalable, and feature-rich Android applications that deliver exceptional user experiences across all devices.",
  image: "https://capstoneittrends.com/assets/img/services/android-app.jpg",
  contentHeading: "Expert Android App Development Company",
  content: "At Capstone IT Trends, we specialize in building robust Android applications using the latest technologies and frameworks. Our experienced Android developers create apps that are fast, secure, and user-friendly. Whether you need a consumer-facing app, enterprise solution, or an innovative startup product, we deliver Android applications that stand out in the Google Play Store.",
  subheading: "Full-Cycle Android Development Services",
  subcontent: "From concept to deployment and beyond, we provide end-to-end Android app development services. Our team handles everything including UI/UX design, native development, API integration, testing, Play Store deployment, and ongoing maintenance to ensure your app stays competitive.",
  features: [
    { icon: Smartphone, title: "Native Development", description: "High-performance native Android apps using Kotlin and Java" },
    { icon: Zap, title: "Fast Performance", description: "Optimized apps that run smoothly on all Android devices" },
    { icon: Shield, title: "Secure Architecture", description: "Enterprise-grade security with data encryption and secure APIs" },
    { icon: Users, title: "User-Centric Design", description: "Intuitive UI/UX following Material Design guidelines" },
    { icon: TrendingUp, title: "Scalable Solutions", description: "Apps built to grow with your business needs" },
    { icon: Settings, title: "Custom Features", description: "Tailored functionality specific to your business requirements" },
  ],
  processSteps: [
    { title: "Requirement Analysis", description: "Understanding your app idea, target audience, and business objectives" },
    { title: "UI/UX Design", description: "Creating intuitive wireframes and stunning visual designs" },
    { title: "Development & Coding", description: "Building your app using Kotlin/Java with clean architecture" },
    { title: "Testing & QA", description: "Rigorous testing across devices for bugs, performance, and security" },
    { title: "Launch & Support", description: "Play Store deployment and ongoing maintenance and updates" },
  ],
  expertiseTitle: "Our Android Development Capabilities",
  col1Title: "App Types",
  col1Items: ["E-commerce Apps", "Social Networking Apps", "On-Demand Apps", "Healthcare Apps", "FinTech Apps", "Education Apps"],
  col2Title: "Technologies",
  col2Items: ["Kotlin", "Java", "Android SDK", "Jetpack Compose", "Firebase", "REST APIs & GraphQL"],
  ctaTitle: "Ready to Build Your Android App?",
  ctaDescription: "Let's turn your app idea into a powerful Android application.",
  ctaButtonText: "Start Your Project",
  faqs: [
    { question: "How long does Android app development take?", answer: "A simple app takes 6-10 weeks, while complex apps with advanced features can take 12-24 weeks depending on requirements." },
    { question: "Do you use Kotlin or Java for development?", answer: "We primarily use Kotlin as it's the recommended language by Google, but we also work with Java for legacy projects." },
    { question: "Do you handle Play Store submission?", answer: "Yes, we handle the complete Play Store submission process including app listing optimization and compliance." },
    { question: "Do you provide post-launch support?", answer: "Absolutely! We offer ongoing maintenance, bug fixes, feature updates, and performance optimization." },
  ],
};

export default function AndroidApp() { return <ServicePageTemplate data={data} />; }
