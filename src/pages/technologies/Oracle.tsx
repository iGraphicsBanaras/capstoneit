import TechnologyPageTemplate, { TechnologyPageData } from "./TechnologyPage";
import { Database, Shield, Globe, Zap, TrendingUp, Settings } from "lucide-react";

const data: TechnologyPageData = {
  title: "Oracle Technology",
  subtitle: "Enterprise Database & Cloud Solutions",
  description: "Leverage Oracle's enterprise database, cloud infrastructure, and middleware for mission-critical applications. Our Oracle experts deliver robust, scalable solutions.",
  image: "https://capstoneittrends.com/assets/img/technologies/oracle.jpg",
  contentHeading: "Oracle Technology Expertise",
  content: "Oracle Database is the gold standard for enterprise data management. Our certified Oracle professionals handle database administration, performance tuning, RAC clustering, Data Guard, and migration to Oracle Cloud Infrastructure (OCI).",
  subheading: "Complete Oracle Solutions",
  subcontent: "We provide comprehensive Oracle services including DBA administration, PL/SQL development, Oracle APEX applications, Oracle Cloud migration, performance optimization, and 24/7 database support for mission-critical systems.",
  features: [
    { icon: Database, title: "Oracle DBA", description: "Expert database administration and management" },
    { icon: Shield, title: "High Availability", description: "RAC, Data Guard, and disaster recovery solutions" },
    { icon: Globe, title: "Oracle Cloud", description: "Migration and management on Oracle Cloud Infrastructure" },
    { icon: Zap, title: "Performance Tuning", description: "Query optimization and database performance tuning" },
    { icon: TrendingUp, title: "Oracle APEX", description: "Rapid application development with Oracle APEX" },
    { icon: Settings, title: "PL/SQL", description: "Custom PL/SQL procedures, functions, and packages" },
  ],
  services: ["Oracle DBA Services", "Oracle Cloud Migration", "Performance Tuning", "Oracle APEX Development", "PL/SQL Development", "24/7 Database Support"],
  industries: ["Banking & Finance", "Government", "Healthcare", "Telecom", "Manufacturing", "Retail"],
  ctaTitle: "Oracle Solutions for Your Enterprise",
  ctaDescription: "Get expert Oracle database and cloud services for your business.",
  faqs: [
    { question: "Do you provide 24/7 Oracle support?", answer: "Yes, we offer 24/7 Oracle DBA support with guaranteed response times for mission-critical database systems." },
    { question: "Can you migrate our database to Oracle Cloud?", answer: "Yes, we handle complete Oracle Cloud Infrastructure migration with zero downtime strategies." },
  ],
};

export default function OracleTech() { return <TechnologyPageTemplate data={data} />; }
