import ServicePageTemplate, { ServicePageData } from "./ServicePage";
import { Database, Shield, Zap, Clock, TrendingUp, Wrench } from "lucide-react";

const data: ServicePageData = {
  title: "Oracle DBA Services",
  subtitle: "Expert Database Administration for Maximum Performance",
  description: "Ensure your Oracle databases run at peak performance with our certified DBA experts. From installation to optimization, we provide comprehensive database administration services.",
  image: "/oracle-database-administration-dashboard.jpg",
  contentHeading: "Professional Oracle Database Administration",
  content: "At Capstone IT Trends, our certified Oracle DBAs bring years of experience managing mission-critical databases for businesses across industries. We provide comprehensive Oracle database administration services including installation, configuration, performance tuning, security management, backup and recovery, and 24/7 monitoring.",
  subheading: "Complete Oracle DBA Solutions",
  subcontent: "Whether you need full-time database management, project-based support, or emergency assistance, our team has you covered. We work with all Oracle database versions and handle everything from small business databases to large enterprise implementations.",
  features: [
    { icon: Database, title: "Database Management", description: "Complete Oracle database administration, installation, and configuration" },
    { icon: Shield, title: "Security & Compliance", description: "Advanced security implementation and compliance management" },
    { icon: Zap, title: "Performance Tuning", description: "Optimize database performance with expert tuning and optimization" },
    { icon: Clock, title: "24/7 Monitoring", description: "Round-the-clock database monitoring and proactive maintenance" },
    { icon: TrendingUp, title: "Disaster Recovery", description: "Comprehensive backup, recovery, and disaster recovery solutions" },
    { icon: Wrench, title: "Database Migration", description: "Seamless database migration and upgrade services" },
  ],
  processSteps: [
    { title: "Assessment & Planning", description: "Analyzing current database infrastructure and planning optimization strategy" },
    { title: "Implementation", description: "Setting up monitoring, security, and performance optimization tools" },
    { title: "Optimization", description: "Fine-tuning database performance and resolving bottlenecks" },
    { title: "Monitoring & Support", description: "Continuous monitoring and proactive support for optimal performance" },
    { title: "Maintenance & Updates", description: "Regular maintenance, patches, and version upgrades" },
  ],
  expertiseTitle: "Our Oracle DBA Expertise",
  col1Title: "DBA Services",
  col1Items: ["Database Installation & Configuration", "Performance Tuning & Optimization", "Backup & Recovery Management", "Database Security & Auditing", "High Availability Setup (RAC, Data Guard)", "Database Migration & Upgrades"],
  col2Title: "Technologies",
  col2Items: ["Oracle 12c, 18c, 19c, 21c", "Oracle RAC (Real Application Clusters)", "Oracle Data Guard", "Oracle GoldenGate", "Oracle Cloud Infrastructure", "RMAN, ASM, Exadata"],
  ctaTitle: "Need Expert Oracle DBA Support?",
  ctaDescription: "Let our certified DBAs optimize and manage your Oracle databases.",
  ctaButtonText: "Get Free Database Assessment",
  faqs: [
    { question: "What Oracle database versions do you support?", answer: "We support all Oracle versions including 12c, 18c, 19c, 21c, and Oracle Cloud. Our certified DBAs are experienced with both on-premise and cloud deployments." },
    { question: "Do you offer 24/7 database monitoring?", answer: "Yes, we provide round-the-clock database monitoring with proactive alerting and immediate response to any issues." },
    { question: "Can you help with Oracle database migration?", answer: "Absolutely! We handle seamless database migrations between versions, from on-premise to cloud, and cross-platform migrations." },
    { question: "Do you offer emergency DBA support?", answer: "Yes, we provide emergency DBA support for critical database issues including crash recovery, performance emergencies, and security incidents." },
  ],
};

export default function OracleDBA() { return <ServicePageTemplate data={data} />; }
