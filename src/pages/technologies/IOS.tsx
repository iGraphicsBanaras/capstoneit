import TechnologyPageTemplate, { TechnologyPageData } from "./TechnologyPage";
import { Smartphone, Zap, Shield, Palette, TrendingUp, Award } from "lucide-react";

const data: TechnologyPageData = {
  title: "iOS Technology",
  subtitle: "Premium Apps for Apple's Ecosystem",
  description: "Create exceptional experiences on iPhone, iPad, and Apple Watch with Swift and SwiftUI. We deliver iOS apps that meet Apple's highest quality standards.",
  image: "https://capstoneittrends.com/assets/img/technologies/ios.jpg",
  contentHeading: "iOS Development Expertise",
  content: "Apple's iOS platform is known for premium user experiences and high-value customers. Our iOS developers use Swift, SwiftUI, and UIKit to build apps that are fast, beautiful, and App Store ready.",
  subheading: "Apple Ecosystem Mastery",
  subcontent: "We develop for the entire Apple ecosystem including iPhone, iPad, Apple Watch, and Apple TV. Our team follows Apple's Human Interface Guidelines and leverages Core ML, ARKit, HealthKit, and other Apple frameworks.",
  features: [
    { icon: Smartphone, title: "Swift & SwiftUI", description: "Modern development with Apple's latest frameworks" },
    { icon: Palette, title: "Beautiful UI", description: "Pixel-perfect interfaces following HIG guidelines" },
    { icon: Shield, title: "Privacy First", description: "App privacy compliance and secure data handling" },
    { icon: Zap, title: "Performance", description: "Optimized for Apple's hardware and software stack" },
    { icon: TrendingUp, title: "App Store Success", description: "Apps designed to pass Apple's strict review process" },
    { icon: Award, title: "Quality Focus", description: "Premium quality that Apple users expect" },
  ],
  services: ["iPhone App Development", "iPad App Development", "Apple Watch Apps", "tvOS Development", "Swift Migration", "iOS App Maintenance"],
  industries: ["Healthcare & Medical", "Finance & FinTech", "E-commerce & Retail", "Education & EdTech", "Entertainment & Media", "Travel & Hospitality"],
  ctaTitle: "Build Your iOS App Today",
  ctaDescription: "Create a premium iOS experience that Apple users will love.",
  faqs: [
    { question: "Do you use SwiftUI or UIKit?", answer: "We use SwiftUI for new projects and support UIKit for legacy apps or when more granular control is needed." },
    { question: "How long does App Store review take?", answer: "Apple's review typically takes 1-3 business days. We ensure compliance before submission." },
  ],
};

export default function IOSTech() { return <TechnologyPageTemplate data={data} />; }
