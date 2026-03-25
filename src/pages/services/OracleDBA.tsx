import ServicePage, { ServiceData } from "./ServicePage";
import { Database, ShieldCheck, Zap, Settings, BarChart3, Clock } from "lucide-react";

const data: ServiceData = {
  badge: "Premium Service",
  title: "Oracle DBA Services",
  subtitle: "Expert Oracle database administration services ensuring optimal performance, security, and reliability for your enterprise systems.",
  heroImage: "https://www.capstoneittrends.com/_next/image?url=%2Fservices%2Foracle-dba.jpg&w=640&q=75",
  description: [
    "Capstone IT Trends provides comprehensive Oracle DBA services to help organizations manage, optimize, and secure their Oracle database environments. Our certified Oracle DBAs bring years of experience in handling complex database architectures across various industries.",
    "From database installation and configuration to performance tuning and disaster recovery, our Oracle DBA team ensures your databases run at peak performance while maintaining the highest levels of security and availability.",
  ],
  features: [
    { icon: Database, title: "Database Management", desc: "Complete Oracle database administration and management" },
    { icon: Zap, title: "Performance Tuning", desc: "SQL optimization and database performance enhancement" },
    { icon: ShieldCheck, title: "Security & Compliance", desc: "Database security hardening and compliance management" },
    { icon: Settings, title: "Migration Services", desc: "Seamless database migration and upgrade services" },
    { icon: BarChart3, title: "Monitoring", desc: "24/7 database monitoring and alerting" },
    { icon: Clock, title: "Disaster Recovery", desc: "Backup strategies and disaster recovery planning" },
  ],
  process: [
    { step: "01", title: "Assessment", desc: "Database environment audit" },
    { step: "02", title: "Planning", desc: "Strategy & roadmap creation" },
    { step: "03", title: "Implementation", desc: "Executing the plan" },
    { step: "04", title: "Optimization", desc: "Performance tuning" },
    { step: "05", title: "Support", desc: "Ongoing maintenance" },
  ],
  services: [
    "Oracle DB Installation & Configuration", "Performance Tuning & Optimization",
    "Database Migration & Upgrades", "Backup & Recovery Solutions",
    "RAC & Data Guard Setup", "Security Auditing & Hardening",
    "24/7 Monitoring & Support", "Capacity Planning",
  ],
  industries: [
    "Banking & Finance", "Healthcare", "Telecommunications", "Government",
    "Manufacturing", "Retail", "Insurance", "Energy & Utilities",
  ],
};

const OracleDBA = () => <ServicePage data={data} />;
export default OracleDBA;
