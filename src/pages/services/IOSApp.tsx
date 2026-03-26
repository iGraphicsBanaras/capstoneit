import ServicePageTemplate, { ServicePageData } from "./ServicePage";
import { Smartphone, Zap, Shield, Palette, TrendingUp, Award } from "lucide-react";

const data: ServicePageData = {
  title: "iOS App Development",
  subtitle: "Premium iOS Applications for iPhone & iPad",
  description: "Create stunning iOS applications that deliver exceptional user experiences. Our expert iOS developers build high-quality, secure, and performant apps for the Apple ecosystem.",
  image: "https://capstoneittrends.com/assets/img/services/ios-app.jpg",
  contentHeading: "Professional iOS App Development Company",
  content: "Capstone IT Trends delivers world-class iOS app development services using Swift and SwiftUI. We create beautiful, intuitive, and high-performance applications that meet Apple's stringent quality standards. Our team has extensive experience building apps across various industries, from startups to enterprise solutions.",
  subheading: "Complete iOS Development Solutions",
  subcontent: "We provide comprehensive iOS development services including iPhone apps, iPad apps, Apple Watch apps, and Apple TV apps. Our development process follows Apple's Human Interface Guidelines to ensure your app provides the best possible user experience and gets approved on the App Store.",
  features: [
    { icon: Smartphone, title: "Native iOS Development", description: "High-quality native apps using Swift and SwiftUI" },
    { icon: Palette, title: "Elegant UI Design", description: "Beautiful interfaces following Apple's Human Interface Guidelines" },
    { icon: Shield, title: "App Store Ready", description: "Apps built to meet Apple's strict review guidelines" },
    { icon: Zap, title: "Optimized Performance", description: "Fast and smooth apps optimized for all Apple devices" },
    { icon: TrendingUp, title: "Scalable Architecture", description: "Clean code architecture that supports future growth" },
    { icon: Award, title: "Quality Assurance", description: "Thorough testing on all supported iOS versions and devices" },
  ],
  processSteps: [
    { title: "Strategy & Planning", description: "Defining app scope, features, and technical architecture" },
    { title: "UI/UX Design", description: "Creating pixel-perfect designs aligned with iOS guidelines" },
    { title: "Swift Development", description: "Building your app with clean Swift code and modern patterns" },
    { title: "Testing & Optimization", description: "Comprehensive testing across iPhones and iPads" },
    { title: "App Store Launch", description: "Submission, approval, and launch on the Apple App Store" },
  ],
  expertiseTitle: "Our iOS Development Expertise",
  col1Title: "Services",
  col1Items: ["iPhone App Development", "iPad App Development", "Apple Watch Apps", "App Store Optimization", "App Migration & Upgrade", "iOS App Maintenance"],
  col2Title: "Industries Served",
  col2Items: ["Healthcare & Fitness", "E-commerce & Retail", "Finance & Banking", "Education & E-learning", "Travel & Hospitality", "Entertainment & Media"],
  ctaTitle: "Ready to Build Your iOS App?",
  ctaDescription: "Let's create an iOS app that your users will love.",
  ctaButtonText: "Get Started Today",
  faqs: [
    { question: "How much does iOS app development cost?", answer: "Costs vary based on complexity. A basic app starts from $10,000, while feature-rich apps can range from $25,000-$100,000+." },
    { question: "Do you develop for both iPhone and iPad?", answer: "Yes, we develop universal apps that work beautifully on both iPhone and iPad with optimized layouts." },
    { question: "How long does App Store approval take?", answer: "Apple's review process typically takes 1-3 days, but we ensure your app meets all guidelines before submission." },
    { question: "Can you convert an Android app to iOS?", answer: "Yes, we can rebuild your Android app for iOS, adapting the design to follow Apple's guidelines while maintaining feature parity." },
  ],
};

export default function IOSApp() { return <ServicePageTemplate data={data} />; }
