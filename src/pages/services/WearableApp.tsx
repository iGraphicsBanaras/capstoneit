import ServicePageTemplate, { ServicePageData } from "./ServicePage";
import { Watch, Zap, Shield, Heart, TrendingUp, Settings } from "lucide-react";

const data: ServicePageData = {
  title: "Wearable App Development",
  subtitle: "Smart Apps for Smartwatches & Wearable Devices",
  description: "Build innovative wearable applications for Apple Watch, Wear OS, fitness trackers, and IoT wearable devices. Deliver seamless experiences on the wrist and beyond.",
  image: "https://capstoneittrends.com/assets/img/services/wearable-app.jpg",
  contentHeading: "Wearable App Development Company",
  content: "Capstone IT Trends creates cutting-edge wearable applications for smartwatches, fitness bands, smart glasses, and other wearable devices. We leverage the latest wearable SDKs and sensors to build apps that provide meaningful, glanceable experiences.",
  subheading: "Next-Generation Wearable Solutions",
  subcontent: "Our wearable app developers understand the unique challenges of designing for small screens and limited interactions. We create apps that are lightweight, battery-efficient, and perfectly integrated with companion mobile apps and cloud services.",
  features: [
    { icon: Watch, title: "Smartwatch Apps", description: "Custom apps for Apple Watch, Wear OS, and Samsung watches" },
    { icon: Heart, title: "Health & Fitness", description: "Apps leveraging heart rate, step count, and health sensors" },
    { icon: Zap, title: "Battery Optimized", description: "Lightweight apps designed for minimal battery consumption" },
    { icon: Shield, title: "Secure Data", description: "Encrypted data handling for sensitive health and personal data" },
    { icon: TrendingUp, title: "Real-Time Sync", description: "Seamless sync between wearable and companion mobile app" },
    { icon: Settings, title: "Sensor Integration", description: "Integration with accelerometer, gyroscope, GPS, and more" },
  ],
  processSteps: [
    { title: "Device Research", description: "Analyzing target wearable devices and their capabilities" },
    { title: "Compact UX Design", description: "Designing glanceable, intuitive interfaces for small screens" },
    { title: "Wearable Development", description: "Building with WatchKit, Wear OS SDK, or Tizen framework" },
    { title: "Companion App Integration", description: "Creating seamless connectivity with the mobile companion app" },
    { title: "Testing & Deployment", description: "Testing on actual devices and deploying to app stores" },
  ],
  expertiseTitle: "Our Wearable Development Capabilities",
  col1Title: "Platforms",
  col1Items: ["Apple Watch (watchOS)", "Wear OS (Android)", "Samsung Galaxy Watch", "Fitbit Apps", "Smart Glasses", "IoT Wearables"],
  col2Title: "Use Cases",
  col2Items: ["Health & Fitness Tracking", "Notification Management", "Navigation & Maps", "Payment Solutions", "Remote Control Apps", "Enterprise Field Apps"],
  ctaTitle: "Ready to Build Your Wearable App?",
  ctaDescription: "Let's create a wearable experience that keeps users connected.",
  ctaButtonText: "Start Your Project",
  faqs: [
    { question: "Which wearable platforms do you develop for?", answer: "We develop for Apple Watch (watchOS), Wear OS, Samsung Tizen, Fitbit, and custom IoT wearable platforms." },
    { question: "Can the wearable app sync with a mobile app?", answer: "Yes, we build companion mobile apps that seamlessly sync data with the wearable app in real-time." },
    { question: "How do you handle battery optimization?", answer: "We follow platform-specific best practices for background tasks, sensor usage, and data transfer to minimize battery drain." },
    { question: "Can you integrate health sensors?", answer: "Yes, we integrate heart rate monitors, accelerometers, gyroscopes, GPS, and other sensors available on wearable devices." },
  ],
};

export default function WearableApp() { return <ServicePageTemplate data={data} />; }
