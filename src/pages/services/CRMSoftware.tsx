import ServicePage, { ServiceData } from "./ServicePage";
import { Users, BarChart3, Settings, Zap, Globe, ShieldCheck } from "lucide-react";

const data: ServiceData = {
  badge: "Premium Service",
  title: "CRM Software Development",
  subtitle: "Custom CRM solutions designed to streamline your customer relationships and boost sales performance.",
  heroImage: "https://www.capstoneittrends.com/_next/image?url=%2Fservices%2Fcrm.jpg&w=640&q=75",
  description: [
    "At Capstone IT Trends, we develop custom CRM solutions tailored to your specific business needs. Our CRM software helps you manage customer interactions, streamline sales processes, and improve customer satisfaction with powerful features and intuitive interfaces.",
    "Unlike off-the-shelf CRM solutions, our custom-built systems are designed to align perfectly with your business processes, providing you with the flexibility and functionality you need to drive growth and build lasting customer relationships.",
  ],
  features: [
    { icon: Users, title: "Contact Management", desc: "Centralized customer data and interaction tracking" },
    { icon: BarChart3, title: "Sales Analytics", desc: "Real-time dashboards and sales performance insights" },
    { icon: Settings, title: "Workflow Automation", desc: "Automated processes to save time and reduce errors" },
    { icon: Zap, title: "Lead Management", desc: "Capture, track, and nurture leads efficiently" },
    { icon: Globe, title: "Multi-Channel", desc: "Manage interactions across email, phone, and social" },
    { icon: ShieldCheck, title: "Data Security", desc: "Enterprise-grade security for sensitive customer data" },
  ],
  process: [
    { step: "01", title: "Requirements", desc: "Business process analysis" },
    { step: "02", title: "Design", desc: "UI/UX & architecture" },
    { step: "03", title: "Development", desc: "Agile development sprints" },
    { step: "04", title: "Testing", desc: "QA & user acceptance" },
    { step: "05", title: "Launch", desc: "Deployment & training" },
  ],
  services: [
    "Custom CRM Development", "CRM Integration",
    "Sales Pipeline Management", "Customer Analytics",
    "Marketing Automation", "Support Ticketing System",
    "Mobile CRM Development", "CRM Migration",
  ],
  industries: [
    "Real Estate", "Healthcare", "Financial Services", "Retail",
    "Manufacturing", "Education", "Hospitality", "Insurance",
  ],
};

const CRMSoftware = () => <ServicePage data={data} />;
export default CRMSoftware;
