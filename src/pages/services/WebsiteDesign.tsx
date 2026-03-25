import ServicePageTemplate, { ServicePageData } from "./ServicePage";
import { Globe, Palette, Zap, Users, TrendingUp, Shield } from "lucide-react";

const data: ServicePageData = {
  title: "Website Design Services",
  subtitle: "Create Stunning Digital Experiences That Convert",
  description: "Transform your online presence with our professional website design services. We craft beautiful, responsive, and user-friendly websites that not only look amazing but also drive real business results.",
  image: "/modern-website-mockup.png",
  contentHeading: "Why Choose Our Website Design Services?",
  content: "At Capstone IT Trends, we understand that your website is often the first impression potential customers have of your business. Our expert team of designers and developers work together to create websites that are not only visually stunning but also strategically designed to achieve your business goals. We specialize in custom website design, responsive layouts, e-commerce solutions, and corporate web design that sets you apart from the competition.",
  subheading: "Comprehensive Website Design Solutions",
  subcontent: "Whether you need a simple brochure website, a complex e-commerce platform, or a custom web application, we have the expertise to deliver. Our design process is collaborative, transparent, and focused on creating a website that perfectly represents your brand and engages your target audience. We use the latest design trends, technologies, and best practices to ensure your website is future-proof and scalable.",
  features: [
    { icon: Globe, title: "Responsive Design", description: "Mobile-first designs that look perfect on all devices and screen sizes" },
    { icon: Palette, title: "Custom UI/UX", description: "Unique designs tailored to your brand identity and target audience" },
    { icon: Zap, title: "Fast Loading", description: "Optimized for speed and performance to enhance user experience" },
    { icon: Users, title: "User-Centric", description: "Intuitive navigation and layouts that convert visitors into customers" },
    { icon: TrendingUp, title: "SEO Friendly", description: "Built with SEO best practices to rank higher in search engines" },
    { icon: Shield, title: "Secure & Reliable", description: "Industry-standard security measures to protect your website" },
  ],
  processSteps: [
    { title: "Discovery & Research", description: "Understanding your business, goals, target audience, and competitors" },
    { title: "Wireframing & Planning", description: "Creating site structure, user flows, and initial wireframes" },
    { title: "Design & Prototyping", description: "Crafting visual designs and interactive prototypes for approval" },
    { title: "Development & Testing", description: "Building the website with clean code and rigorous testing" },
    { title: "Launch & Support", description: "Deploying your website and providing ongoing maintenance support" },
  ],
  expertiseTitle: "Our Website Design Expertise",
  col1Title: "Design Services",
  col1Items: ["Custom Website Design", "Responsive Web Design", "E-commerce Website Design", "Landing Page Design", "UI/UX Design", "Website Redesign"],
  col2Title: "Industry Expertise",
  col2Items: ["E-commerce & Retail", "Healthcare & Medical", "Real Estate & Property", "Education & E-learning", "Finance & Banking", "Travel & Hospitality"],
  ctaTitle: "Ready to Transform Your Online Presence?",
  ctaDescription: "Let's create a website that your customers will love and that drives real business results.",
  ctaButtonText: "Get Free Consultation",
};

export default function WebsiteDesign() { return <ServicePageTemplate data={data} />; }
