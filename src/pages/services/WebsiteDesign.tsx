import ServicePage, { ServiceData } from "./ServicePage";
import { Globe, Palette, Smartphone, Zap, ShieldCheck, BarChart3 } from "lucide-react";

const data: ServiceData = {
  badge: "Premium Service",
  title: "Website Design Services",
  subtitle: "We create stunning, responsive websites that drive engagement and convert visitors into customers.",
  heroImage: "https://www.capstoneittrends.com/_next/image?url=%2Fservices%2Fweb-design.jpg&w=640&q=75",
  description: [
    "At Capstone IT Trends, we specialize in creating visually stunning and highly functional websites that help businesses establish a strong online presence. Our team of experienced designers and developers work together to deliver websites that not only look great but also perform exceptionally well.",
    "Whether you need a simple business website, a complex e-commerce platform, or a custom web application, we have the expertise and creativity to bring your vision to life. We use the latest technologies and design trends to ensure your website stands out from the competition.",
  ],
  features: [
    { icon: Globe, title: "Responsive Design", desc: "Websites that look perfect on all devices and screen sizes" },
    { icon: Palette, title: "Custom UI/UX", desc: "Unique designs tailored to your brand identity" },
    { icon: Zap, title: "Fast Performance", desc: "Optimized for speed and seamless user experience" },
    { icon: ShieldCheck, title: "SEO Optimized", desc: "Built with search engine best practices in mind" },
    { icon: Smartphone, title: "Mobile First", desc: "Designed with mobile users as the primary focus" },
    { icon: BarChart3, title: "Analytics Integration", desc: "Track and measure your website performance" },
  ],
  process: [
    { step: "01", title: "Discovery", desc: "Understanding your goals" },
    { step: "02", title: "Design", desc: "Creating the visual concept" },
    { step: "03", title: "Development", desc: "Building the website" },
    { step: "04", title: "Testing", desc: "Quality assurance checks" },
    { step: "05", title: "Launch", desc: "Going live & support" },
  ],
  services: [
    "Custom Website Design", "E-commerce Development", "Landing Page Design",
    "WordPress Development", "Website Redesign", "Web Application Development",
    "CMS Development", "Website Maintenance",
  ],
  industries: [
    "Healthcare", "E-commerce", "Education", "Finance",
    "Real Estate", "Travel & Hospitality", "Food & Restaurant", "Technology",
  ],
};

const WebsiteDesign = () => <ServicePage data={data} />;
export default WebsiteDesign;
