import ServicePage, { ServiceData } from "./ServicePage";
import { Palette, Image, Layers, PenTool, BookOpen, Package } from "lucide-react";

const data: ServiceData = {
  badge: "Premium Service",
  title: "Graphic Design Services",
  subtitle: "Creative graphic design solutions that communicate your brand message effectively and leave a lasting impression.",
  heroImage: "https://www.capstoneittrends.com/_next/image?url=%2Fservices%2Fgraphic-design.jpg&w=640&q=75",
  description: [
    "Our graphic design team at Capstone IT Trends creates visually compelling designs that capture attention and communicate your brand message effectively. From logos and branding to marketing materials and digital graphics, we deliver designs that make an impact.",
    "We understand that great design is more than just aesthetics – it's about creating visual stories that resonate with your audience. Our designers combine creativity with strategy to produce designs that not only look amazing but also achieve your business objectives.",
  ],
  features: [
    { icon: Palette, title: "Brand Identity", desc: "Complete branding solutions including logos and guidelines" },
    { icon: Image, title: "Marketing Materials", desc: "Brochures, flyers, banners, and promotional designs" },
    { icon: Layers, title: "Social Media Graphics", desc: "Eye-catching graphics for all social platforms" },
    { icon: PenTool, title: "Illustration", desc: "Custom illustrations and infographics" },
    { icon: BookOpen, title: "Print Design", desc: "Business cards, letterheads, and packaging" },
    { icon: Package, title: "Packaging Design", desc: "Product packaging that stands out on shelves" },
  ],
  process: [
    { step: "01", title: "Brief", desc: "Understanding requirements" },
    { step: "02", title: "Research", desc: "Market & brand analysis" },
    { step: "03", title: "Concept", desc: "Creating initial concepts" },
    { step: "04", title: "Refine", desc: "Iterations & feedback" },
    { step: "05", title: "Deliver", desc: "Final files & formats" },
  ],
  services: [
    "Logo Design", "Brand Identity", "Social Media Graphics",
    "Brochure Design", "Packaging Design", "Infographic Design",
    "Banner & Poster Design", "Presentation Design",
  ],
  industries: [
    "Fashion & Lifestyle", "Food & Beverage", "Technology", "Healthcare",
    "Education", "Entertainment", "Retail", "Non-Profit",
  ],
};

const GraphicDesign = () => <ServicePage data={data} />;
export default GraphicDesign;
