import ServicePageTemplate, { ServicePageData } from "./ServicePage";
import { FileText, Globe, Palette, Shield, Zap, Settings } from "lucide-react";

const data: ServicePageData = {
  title: "WordPress Web Development",
  subtitle: "Custom WordPress Solutions for Every Business",
  description: "Build powerful, easy-to-manage websites with WordPress. From custom themes to complex plugins, we create WordPress solutions that are beautiful, functional, and optimized for growth.",
  image: "https://capstoneittrends.com/assets/img/services/wordpress-dev.jpg",
  contentHeading: "Expert WordPress Development Company",
  content: "Capstone IT Trends offers comprehensive WordPress development services for businesses of all sizes. WordPress powers over 40% of all websites on the internet, and our team has the expertise to leverage its full potential. We build custom themes, develop plugins, create WooCommerce stores, and optimize existing WordPress sites.",
  subheading: "Complete WordPress Solutions",
  subcontent: "Whether you need a corporate website, blog, e-commerce store, membership site, or learning management system, WordPress is the perfect platform. We customize every aspect of your WordPress site to match your brand and business goals, ensuring a seamless experience for both administrators and visitors.",
  features: [
    { icon: FileText, title: "Custom Themes", description: "Unique, responsive themes designed specifically for your brand" },
    { icon: Globe, title: "WooCommerce", description: "Full-featured e-commerce stores with WooCommerce integration" },
    { icon: Palette, title: "Custom Design", description: "Pixel-perfect designs with custom page builders" },
    { icon: Shield, title: "Security Hardening", description: "WordPress security best practices and malware protection" },
    { icon: Zap, title: "Speed Optimization", description: "Performance tuning for fast loading and better SEO" },
    { icon: Settings, title: "Plugin Development", description: "Custom plugins for unique business functionality" },
  ],
  processSteps: [
    { title: "Discovery", description: "Understanding your content strategy and WordPress requirements" },
    { title: "Theme Design", description: "Creating a custom WordPress theme matching your brand" },
    { title: "Development", description: "Building with WordPress best practices and custom functionality" },
    { title: "Content Setup", description: "Setting up pages, posts, media, and SEO configuration" },
    { title: "Launch & Training", description: "Going live and training your team to manage the site" },
  ],
  expertiseTitle: "Our WordPress Expertise",
  col1Title: "WordPress Services",
  col1Items: ["Custom Theme Development", "Plugin Development", "WooCommerce Development", "WordPress Migration", "Speed Optimization", "Security & Maintenance"],
  col2Title: "WordPress Solutions",
  col2Items: ["Corporate Websites", "E-commerce Stores", "Blog & News Portals", "Membership Sites", "LMS Platforms", "Multisite Networks"],
  ctaTitle: "Ready to Build with WordPress?",
  ctaDescription: "Let's create a powerful WordPress website that you can easily manage.",
  ctaButtonText: "Get Started",
  faqs: [
    { question: "Why choose WordPress for my website?", answer: "WordPress is the most popular CMS, offering flexibility, thousands of plugins, SEO-friendliness, easy content management, and a massive community." },
    { question: "Can you build an e-commerce store with WordPress?", answer: "Yes! We build WooCommerce stores with product management, payment gateways, shipping, and inventory management." },
    { question: "Is WordPress secure?", answer: "Yes, with proper security practices including regular updates, security plugins, SSL, and server hardening, WordPress is very secure." },
    { question: "Can I manage my WordPress site myself?", answer: "Absolutely! WordPress has an intuitive admin panel. We also provide training so you can easily update content, pages, and products." },
  ],
};

export default function WordPress() { return <ServicePageTemplate data={data} />; }
