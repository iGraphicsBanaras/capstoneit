import ServicePageTemplate, { ServicePageData } from "./ServicePage";
import { Palette, Sparkles, Target, Layers, Eye, Award } from "lucide-react";

const data: ServicePageData = {
  title: "Graphic Design Services",
  subtitle: "Visual Stories That Captivate and Convert",
  description: "Elevate your brand with our professional graphic design services. From logos to marketing materials, we create stunning visuals that communicate your message and resonate with your audience.",
  image: "/creative-graphic-design-workspace.jpg",
  contentHeading: "Professional Graphic Design Solutions",
  content: "At Capstone IT Trends, we believe great design is more than just aesthetics—it's about creating visual communication that drives business results. Our talented team of graphic designers combines creativity with strategic thinking to deliver designs that not only look beautiful but also effectively communicate your brand message and engage your target audience.",
  subheading: "Comprehensive Design Services",
  subcontent: "Whether you need a new logo, complete brand identity, marketing collateral, social media graphics, or packaging design, we have the expertise to bring your vision to life. We work closely with you throughout the design process, ensuring every element aligns with your brand strategy and business objectives.",
  features: [
    { icon: Palette, title: "Brand Identity", description: "Complete branding solutions including logos, color schemes, and style guides" },
    { icon: Sparkles, title: "Creative Excellence", description: "Unique and memorable designs that capture your brand essence" },
    { icon: Target, title: "Marketing Materials", description: "Eye-catching designs for all your marketing and promotional needs" },
    { icon: Layers, title: "Multi-Format Design", description: "Designs optimized for both digital and print media" },
    { icon: Eye, title: "Visual Impact", description: "Designs that grab attention and leave lasting impressions" },
    { icon: Award, title: "Award-Winning Team", description: "Experienced designers with proven track record of success" },
  ],
  processSteps: [
    { title: "Brand Discovery", description: "Understanding your brand values, target audience, and design preferences" },
    { title: "Concept Development", description: "Creating multiple design concepts and exploring different directions" },
    { title: "Design Refinement", description: "Refining chosen concepts based on your feedback and requirements" },
    { title: "Final Delivery", description: "Delivering final designs in all required formats with source files" },
    { title: "Brand Guidelines", description: "Providing comprehensive brand guidelines for consistent usage" },
  ],
  expertiseTitle: "Our Design Services",
  col1Title: "Brand Design",
  col1Items: ["Logo Design", "Brand Identity", "Style Guides", "Business Cards"],
  col2Title: "Digital Design",
  col2Items: ["Social Media Graphics", "Email Templates", "Web Graphics", "Infographics"],
  ctaTitle: "Ready to Elevate Your Brand?",
  ctaDescription: "Let's create stunning visuals that make your brand unforgettable.",
  ctaButtonText: "Start Your Project",
  faqs: [
    { question: "What types of graphic design services do you offer?", answer: "We offer logo design, brand identity, marketing collateral, social media graphics, packaging design, infographics, web graphics, and more." },
    { question: "How many design revisions are included?", answer: "We typically include 3-5 rounds of revisions in our design packages. We work closely with you until you're 100% satisfied." },
    { question: "Do I get the source files?", answer: "Yes, upon project completion you receive all source files (AI, PSD, etc.) along with final exports in all required formats." },
    { question: "How long does a logo design project take?", answer: "A logo design project typically takes 1-2 weeks, including concept development, presentations, and revisions." },
  ],
};

export default function GraphicDesign() { return <ServicePageTemplate data={data} />; }
