import TechnologyPageTemplate, { TechnologyPageData } from "./TechnologyPage";
import { FileText, Globe, Palette, Shield, Zap, Settings } from "lucide-react";

const data: TechnologyPageData = {
  title: "WordPress Technology",
  subtitle: "The World's Most Popular Content Management System",
  description: "WordPress powers over 40% of all websites. We leverage its flexibility, extensive plugin ecosystem, and ease of use to build everything from blogs to enterprise platforms.",
  image: "https://capstoneittrends.com/assets/img/technologies/wordpress.jpg",
  contentHeading: "WordPress Expertise",
  content: "WordPress is the most versatile CMS available, offering thousands of themes and plugins, an intuitive admin panel, and the ability to build virtually any type of website. Our team builds custom themes, develops plugins, and optimizes WordPress for performance and security.",
  subheading: "WordPress Ecosystem",
  subcontent: "From WooCommerce for e-commerce to BuddyPress for communities, WordPress's ecosystem provides solutions for every need. We customize and extend WordPress to create unique, powerful websites.",
  features: [
    { icon: FileText, title: "Custom Themes", description: "Bespoke themes tailored to your brand identity" },
    { icon: Globe, title: "WooCommerce", description: "Full e-commerce capability with WooCommerce" },
    { icon: Palette, title: "Page Builders", description: "Elementor, Gutenberg, and custom block development" },
    { icon: Shield, title: "Security", description: "Hardened WordPress with security best practices" },
    { icon: Zap, title: "Performance", description: "Optimized for speed with caching and CDN" },
    { icon: Settings, title: "Plugin Development", description: "Custom plugins for unique functionality" },
  ],
  services: ["Custom Theme Development", "Plugin Development", "WooCommerce Setup", "WordPress Migration", "Speed Optimization", "Security Hardening"],
  industries: ["Business & Corporate", "E-commerce", "Education", "Healthcare", "Real Estate", "Media & Publishing"],
  ctaTitle: "Build with WordPress",
  ctaDescription: "Create a powerful, easy-to-manage website with WordPress.",
  faqs: [
    { question: "Is WordPress good for large websites?", answer: "Yes! Sites like TechCrunch, BBC America, and The Walt Disney Company use WordPress for high-traffic sites." },
    { question: "Can WordPress handle e-commerce?", answer: "Absolutely! WooCommerce powers over 5 million online stores worldwide." },
  ],
};

export default function WordPressTech() { return <TechnologyPageTemplate data={data} />; }
