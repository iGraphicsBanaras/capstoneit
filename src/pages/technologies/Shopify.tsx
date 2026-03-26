import TechnologyPageTemplate, { TechnologyPageData } from "./TechnologyPage";
import { Globe, Zap, Palette, Shield, TrendingUp, Settings } from "lucide-react";

const data: TechnologyPageData = {
  title: "Shopify Technology",
  subtitle: "E-Commerce Made Simple & Powerful",
  description: "Build and scale your online store with Shopify. We create custom Shopify stores with stunning themes, seamless checkout, and powerful integrations.",
  image: "https://capstoneittrends.com/assets/img/technologies/shopify.jpg",
  contentHeading: "Shopify Development Expertise",
  content: "Shopify is the leading e-commerce platform powering millions of stores worldwide. Our team builds custom Shopify stores using Liquid templating, Shopify APIs, and custom app development to create unique shopping experiences that convert.",
  subheading: "Complete Shopify Solutions",
  subcontent: "From store setup and custom theme development to Shopify Plus enterprise solutions, we handle everything. We also integrate payment gateways, shipping providers, inventory management, and marketing tools.",
  features: [
    { icon: Globe, title: "Custom Stores", description: "Unique Shopify store designs that stand out" },
    { icon: Zap, title: "Fast & Reliable", description: "Shopify's cloud hosting ensures 99.99% uptime" },
    { icon: Palette, title: "Custom Themes", description: "Bespoke Liquid themes matching your brand" },
    { icon: Shield, title: "PCI Compliant", description: "Built-in security and PCI DSS compliance" },
    { icon: TrendingUp, title: "Shopify Plus", description: "Enterprise solutions for high-volume merchants" },
    { icon: Settings, title: "App Development", description: "Custom Shopify apps and integrations" },
  ],
  services: ["Shopify Store Setup", "Custom Theme Development", "Shopify App Development", "Shopify Plus Solutions", "Store Migration to Shopify", "Shopify SEO & Marketing"],
  industries: ["Fashion & Apparel", "Beauty & Cosmetics", "Food & Beverage", "Electronics", "Home & Furniture", "Health & Wellness"],
  ctaTitle: "Launch Your Shopify Store",
  ctaDescription: "Start selling online with a beautiful, conversion-optimized Shopify store.",
  faqs: [
    { question: "Why choose Shopify over WooCommerce?", answer: "Shopify is a fully hosted solution — no server management needed. It's easier to set up and includes hosting, security, and payment processing." },
    { question: "Can you migrate my store to Shopify?", answer: "Yes, we migrate from WooCommerce, Magento, BigCommerce, and other platforms to Shopify with zero data loss." },
  ],
};

export default function ShopifyTech() { return <TechnologyPageTemplate data={data} />; }
