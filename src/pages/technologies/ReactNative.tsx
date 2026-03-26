import TechnologyPageTemplate, { TechnologyPageData } from "./TechnologyPage";
import { Code2, Smartphone, Layers, Zap, Globe, Settings } from "lucide-react";

const data: TechnologyPageData = {
  title: "React Native Technology",
  subtitle: "Cross-Platform Mobile Apps with React Native",
  description: "Build truly native mobile apps for iOS and Android using React Native. Share code between platforms while delivering native performance and user experience.",
  image: "https://capstoneittrends.com/assets/img/technologies/react-native.jpg",
  contentHeading: "React Native Development Expertise",
  content: "React Native by Meta enables building mobile apps using JavaScript and React. It renders native components, providing the performance of native apps with the productivity of React. Our team builds production-grade React Native apps used by millions.",
  subheading: "Why React Native?",
  subcontent: "React Native offers code sharing between iOS and Android (up to 90%), faster development cycles with hot reloading, access to native APIs, and a massive community. Companies like Instagram, Walmart, and Bloomberg use React Native in production.",
  features: [
    { icon: Code2, title: "React-Based", description: "Leverage React knowledge for mobile development" },
    { icon: Smartphone, title: "Native Components", description: "Renders actual native UI components, not web views" },
    { icon: Layers, title: "Code Sharing", description: "Share up to 90% code between iOS and Android" },
    { icon: Zap, title: "Hot Reloading", description: "See changes instantly during development" },
    { icon: Globe, title: "Web & Mobile", description: "Share code between React web and React Native mobile" },
    { icon: Settings, title: "Native Modules", description: "Access native APIs when needed for advanced features" },
  ],
  services: ["React Native App Development", "App Migration to React Native", "React Native UI/UX Design", "Native Module Development", "App Performance Optimization", "Ongoing Maintenance"],
  industries: ["E-commerce", "Social Networking", "FinTech", "Healthcare", "On-Demand Services", "Enterprise Solutions"],
  ctaTitle: "Build with React Native",
  ctaDescription: "Create a cross-platform mobile app with native performance.",
  faqs: [
    { question: "Is React Native truly native?", answer: "React Native renders native UI components, not web views. It provides near-native performance with platform-specific look and feel." },
    { question: "Can React Native access device features?", answer: "Yes, React Native can access camera, GPS, Bluetooth, biometrics, and all native device features through native modules." },
  ],
};

export default function ReactNativeTech() { return <TechnologyPageTemplate data={data} />; }
