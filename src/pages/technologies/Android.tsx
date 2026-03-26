import TechnologyPageTemplate, { TechnologyPageData } from "./TechnologyPage";
import { Smartphone, Zap, Shield, Globe, TrendingUp, Settings } from "lucide-react";

const data: TechnologyPageData = {
  title: "Android Technology",
  subtitle: "Build Powerful Apps with the Android Platform",
  description: "Leverage the world's most popular mobile operating system to reach billions of users. We build native Android applications using Kotlin, Java, and Jetpack libraries.",
  image: "https://capstoneittrends.com/assets/img/technologies/android.jpg",
  contentHeading: "Android Development Expertise",
  content: "Android powers over 70% of smartphones worldwide. Our team builds high-quality Android applications using modern tools and best practices including Kotlin, Jetpack Compose, MVVM architecture, and Material Design 3.",
  subheading: "Modern Android Tech Stack",
  subcontent: "We use the latest Android technologies including Jetpack Compose for UI, Kotlin Coroutines for async programming, Room for local databases, Retrofit for networking, and Hilt for dependency injection.",
  features: [
    { icon: Smartphone, title: "Kotlin First", description: "Modern Kotlin development with coroutines and flow" },
    { icon: Zap, title: "Jetpack Compose", description: "Declarative UI toolkit for modern Android apps" },
    { icon: Shield, title: "Secure Apps", description: "Android security best practices and encryption" },
    { icon: Globe, title: "Play Store Ready", description: "Apps optimized for Google Play Store guidelines" },
    { icon: TrendingUp, title: "Performance", description: "Optimized for battery, memory, and speed" },
    { icon: Settings, title: "Device Support", description: "Compatible across thousands of Android devices" },
  ],
  services: ["Native Android App Development", "Kotlin Migration", "Android UI/UX Design", "Play Store Optimization", "App Maintenance & Support", "Android TV & Auto Apps"],
  industries: ["E-commerce & Retail", "Healthcare & Fitness", "Finance & Banking", "Education & E-learning", "Travel & Transportation", "Entertainment & Media"],
  ctaTitle: "Build Your Android App Today",
  ctaDescription: "Reach billions of Android users with a custom-built application.",
  faqs: [
    { question: "Do you use Kotlin or Java?", answer: "We primarily use Kotlin as Google's recommended language, but support Java for legacy projects." },
    { question: "How do you handle device fragmentation?", answer: "We test on multiple devices and screen sizes, use responsive layouts, and follow Android's adaptive design guidelines." },
  ],
};

export default function AndroidTech() { return <TechnologyPageTemplate data={data} />; }
