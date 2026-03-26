import TechnologyPageTemplate, { TechnologyPageData } from "./TechnologyPage";
import { Globe, Zap, Shield, Settings, TrendingUp, Layers } from "lucide-react";

const data: TechnologyPageData = {
  title: "Magento Technology",
  subtitle: "Enterprise E-Commerce Platform",
  description: "Build powerful, scalable e-commerce stores with Magento (Adobe Commerce). Ideal for large catalogs, multi-store setups, and complex B2B commerce.",
  image: "https://capstoneittrends.com/assets/img/technologies/magento.jpg",
  contentHeading: "Magento Development Expertise",
  content: "Magento is the enterprise-grade e-commerce platform of choice for large businesses. Its extensive customization capabilities, multi-store support, and powerful B2B features make it ideal for complex e-commerce operations. Our certified Magento developers build stores that scale.",
  subheading: "Enterprise E-Commerce Solutions",
  subcontent: "We provide comprehensive Magento services including custom module development, theme design, performance optimization, multi-store configuration, ERP integrations, and migration from other platforms to Magento.",
  features: [
    { icon: Globe, title: "Multi-Store", description: "Manage multiple stores from a single admin panel" },
    { icon: Layers, title: "B2B Commerce", description: "Advanced B2B features with custom pricing and catalogs" },
    { icon: Shield, title: "Enterprise Security", description: "PCI compliant with advanced security features" },
    { icon: Zap, title: "Performance", description: "Optimized for high-traffic, large-catalog stores" },
    { icon: Settings, title: "Custom Modules", description: "Extend functionality with custom Magento modules" },
    { icon: TrendingUp, title: "SEO Built-in", description: "Advanced SEO features for e-commerce visibility" },
  ],
  services: ["Magento Store Development", "Custom Module Development", "Theme Development", "Magento Migration", "Performance Optimization", "Magento Support & Maintenance"],
  industries: ["Retail & Fashion", "Manufacturing", "Wholesale & Distribution", "Automotive", "Electronics", "Health & Pharma"],
  ctaTitle: "Build Your Magento Store",
  ctaDescription: "Create an enterprise e-commerce experience with Magento.",
  faqs: [
    { question: "Is Magento suitable for small businesses?", answer: "Magento Open Source is free, but it's best for medium to large businesses with complex needs. For smaller stores, we may recommend Shopify." },
    { question: "What's the difference between Magento and Adobe Commerce?", answer: "Adobe Commerce is the paid version with additional features like B2B, staging, and cloud hosting. Magento Open Source is the free community edition." },
  ],
};

export default function MagentoTech() { return <TechnologyPageTemplate data={data} />; }
