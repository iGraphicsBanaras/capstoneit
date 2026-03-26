import TechnologyPageTemplate, { TechnologyPageData } from "./TechnologyPage";
import { Layers, Zap, Smartphone, Globe, Palette, Settings } from "lucide-react";

const data: TechnologyPageData = {
  title: "Flutter Technology",
  subtitle: "Beautiful Apps from a Single Codebase",
  description: "Google's Flutter framework lets you build natively compiled apps for mobile, web, and desktop from one codebase with beautiful, customizable widgets.",
  image: "https://capstoneittrends.com/assets/img/technologies/flutter.jpg",
  contentHeading: "Flutter Development Expertise",
  content: "Flutter uses Dart language and a unique rendering engine to create pixel-perfect UIs at 60fps. Unlike other cross-platform solutions, Flutter doesn't rely on web views or native UI components — it draws every pixel, giving you complete control over the look and feel.",
  subheading: "Flutter's Advantages",
  subcontent: "Flutter's hot reload enables rapid development, its widget-based architecture allows extensive customization, and its single codebase approach dramatically reduces development and maintenance costs across iOS, Android, web, and desktop.",
  features: [
    { icon: Layers, title: "Single Codebase", description: "One codebase for iOS, Android, Web, Windows, macOS, Linux" },
    { icon: Zap, title: "60fps Performance", description: "Smooth animations compiled to native ARM machine code" },
    { icon: Smartphone, title: "Custom Widgets", description: "Rich library of customizable, composable widgets" },
    { icon: Globe, title: "Multi-Platform", description: "Deploy to 6 platforms from a single project" },
    { icon: Palette, title: "Pixel Perfect", description: "Complete control over every pixel on screen" },
    { icon: Settings, title: "Dart Language", description: "Modern, type-safe language with great tooling" },
  ],
  services: ["Flutter App Development", "Flutter Web Development", "Flutter Desktop Apps", "Flutter Migration", "Custom Widget Development", "Flutter App Maintenance"],
  industries: ["E-commerce", "Healthcare", "Finance", "Education", "Travel", "Entertainment"],
  ctaTitle: "Start Building with Flutter",
  ctaDescription: "Create beautiful multi-platform apps with Google's Flutter.",
  faqs: [
    { question: "How is Flutter different from React Native?", answer: "Flutter draws its own UI (pixel-perfect control) while React Native uses native components. Flutter uses Dart; React Native uses JavaScript." },
    { question: "Is Flutter production-ready?", answer: "Absolutely! Google, BMW, Toyota, eBay, and thousands of companies use Flutter in production." },
  ],
};

export default function FlutterTech() { return <TechnologyPageTemplate data={data} />; }
