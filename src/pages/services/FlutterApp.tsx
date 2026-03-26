import ServicePageTemplate, { ServicePageData } from "./ServicePage";
import { Layers, Zap, Smartphone, Globe, TrendingUp, Settings } from "lucide-react";

const data: ServicePageData = {
  title: "Flutter App Development",
  subtitle: "Cross-Platform Apps with a Single Codebase",
  description: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using Flutter. Save time and cost while delivering premium user experiences.",
  image: "https://capstoneittrends.com/assets/img/services/flutter-app.jpg",
  contentHeading: "Leading Flutter App Development Company",
  content: "Capstone IT Trends offers expert Flutter app development services to build cross-platform applications that look and feel native. Flutter's hot reload, expressive UI, and single codebase approach significantly reduce development time and cost while maintaining high quality across iOS, Android, web, and desktop platforms.",
  subheading: "Why Choose Flutter for Your Next App?",
  subcontent: "Flutter by Google enables us to build visually stunning, high-performance apps with a single codebase. This means faster development, consistent UI across platforms, and reduced maintenance costs. Our Flutter developers create pixel-perfect designs with smooth animations that delight users on every platform.",
  features: [
    { icon: Layers, title: "Single Codebase", description: "One codebase for iOS, Android, Web, and Desktop apps" },
    { icon: Zap, title: "Hot Reload", description: "Faster development with instant UI changes and testing" },
    { icon: Smartphone, title: "Native Performance", description: "Compiled to native ARM code for optimal performance" },
    { icon: Globe, title: "Cross-Platform", description: "Deploy on multiple platforms from one project" },
    { icon: TrendingUp, title: "Cost Effective", description: "Reduce development and maintenance costs significantly" },
    { icon: Settings, title: "Custom Widgets", description: "Rich set of customizable widgets for any design need" },
  ],
  processSteps: [
    { title: "Project Planning", description: "Defining requirements and selecting the right Flutter architecture" },
    { title: "UI/UX Design", description: "Creating beautiful cross-platform designs with Flutter widgets" },
    { title: "Flutter Development", description: "Building your app with Dart and Flutter's widget framework" },
    { title: "Cross-Platform Testing", description: "Testing on iOS, Android, and web for consistent behavior" },
    { title: "Multi-Platform Launch", description: "Deploying to App Store, Play Store, and web simultaneously" },
  ],
  expertiseTitle: "Our Flutter Development Skills",
  col1Title: "Flutter Services",
  col1Items: ["Custom Flutter App Development", "Flutter App Migration", "Flutter UI/UX Design", "Flutter Plugin Development", "Flutter App Maintenance", "MVP Development with Flutter"],
  col2Title: "Tech Stack",
  col2Items: ["Dart Programming", "Flutter SDK", "Firebase Integration", "REST API & GraphQL", "State Management (BLoC, Provider)", "CI/CD Pipeline Setup"],
  ctaTitle: "Ready to Build with Flutter?",
  ctaDescription: "Let's build a beautiful cross-platform app that works everywhere.",
  ctaButtonText: "Start Your Flutter Project",
  faqs: [
    { question: "Is Flutter good for production apps?", answer: "Absolutely! Flutter is used by Google, BMW, Alibaba, and thousands of companies for production apps with millions of users." },
    { question: "Can Flutter achieve native-like performance?", answer: "Yes, Flutter compiles to native ARM code and achieves 60fps rendering, providing performance comparable to native apps." },
    { question: "How much can I save with Flutter vs native development?", answer: "Flutter can save 30-50% on development costs since you maintain a single codebase instead of separate iOS and Android projects." },
    { question: "Can you migrate my existing app to Flutter?", answer: "Yes, we can migrate your existing native app to Flutter, preserving all features while gaining cross-platform benefits." },
  ],
};

export default function FlutterApp() { return <ServicePageTemplate data={data} />; }
