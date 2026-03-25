import ServicePageTemplate, { ServicePageData } from "./ServicePage";
import { Users, BarChart3, Target, Workflow, MessageSquare, Shield } from "lucide-react";

const data: ServicePageData = {
  title: "CRM Software Development",
  subtitle: "Custom CRM Solutions That Drive Growth",
  description: "Transform your customer relationships with custom CRM software built specifically for your business processes. Manage leads, automate sales, and deliver exceptional customer experiences.",
  image: "/crm-software-dashboard-interface.jpg",
  contentHeading: "Custom CRM Software Development Company",
  content: "Capstone IT Trends specializes in developing custom CRM solutions that perfectly align with your business processes and goals. Unlike off-the-shelf CRM systems, our custom-built solutions are designed around your specific workflows, integrations, and requirements.",
  subheading: "End-to-End CRM Development Services",
  subcontent: "We provide comprehensive CRM development services including requirement analysis, custom feature development, third-party integrations, data migration, mobile CRM apps, cloud deployment, and ongoing support.",
  features: [
    { icon: Users, title: "Contact Management", description: "Centralized customer database with complete interaction history" },
    { icon: BarChart3, title: "Sales Analytics", description: "Powerful reporting and dashboards for data-driven decisions" },
    { icon: Target, title: "Lead Management", description: "Track and nurture leads through your entire sales pipeline" },
    { icon: Workflow, title: "Process Automation", description: "Automate repetitive tasks and streamline workflows" },
    { icon: MessageSquare, title: "Customer Support", description: "Integrated ticketing and support management system" },
    { icon: Shield, title: "Secure & Scalable", description: "Enterprise-grade security with role-based access control" },
  ],
  processSteps: [
    { title: "Business Analysis", description: "Understanding your sales process, workflows, and specific requirements" },
    { title: "Custom Design", description: "Designing CRM features and workflows tailored to your business" },
    { title: "Development", description: "Building your custom CRM with modern technologies and integrations" },
    { title: "Integration & Migration", description: "Integrating with existing tools and migrating your data" },
    { title: "Training & Support", description: "User training and ongoing support for your team" },
  ],
  expertiseTitle: "Our CRM Development Capabilities",
  col1Title: "CRM Features",
  col1Items: ["Lead & Opportunity Management", "Sales Pipeline & Forecasting", "Contact & Account Management", "Email Marketing & Campaigns", "Customer Support Ticketing", "Reports & Analytics Dashboard"],
  col2Title: "Integrations",
  col2Items: ["Email Integration (Gmail, Outlook)", "Calendar & Meeting Scheduling", "Payment Gateway Integration", "Social Media Integration", "Accounting Software (QuickBooks, Xero)", "Third-Party API Integration"],
  ctaTitle: "Ready to Build Your Custom CRM?",
  ctaDescription: "Let's create a CRM solution that perfectly fits your business needs.",
  ctaButtonText: "Get Started Today",
};

export default function CRMSoftware() { return <ServicePageTemplate data={data} />; }
