import ServicePage, { ServiceData } from "./ServicePage";
import { Database, Zap, Globe, ShieldCheck, Layers, Settings } from "lucide-react";

const data: ServiceData = {
  badge: "Premium Service",
  title: "MongoDB Development Services",
  subtitle: "Scalable and flexible MongoDB solutions for modern applications that need to handle large volumes of data efficiently.",
  heroImage: "https://www.capstoneittrends.com/_next/image?url=%2Fservices%2Fmongodb.jpg&w=640&q=75",
  description: [
    "Capstone IT Trends offers expert MongoDB development services to help businesses leverage the power of NoSQL databases. Our MongoDB specialists design and implement database solutions that provide the flexibility, scalability, and performance your applications need.",
    "Whether you're building a new application from scratch or migrating from a traditional relational database, our team ensures a smooth transition and optimal database architecture that supports your business growth.",
  ],
  features: [
    { icon: Database, title: "Schema Design", desc: "Optimized MongoDB schema design for your use case" },
    { icon: Zap, title: "Performance", desc: "High-performance queries and indexing strategies" },
    { icon: Globe, title: "Scalability", desc: "Horizontal scaling with sharding and replication" },
    { icon: ShieldCheck, title: "Security", desc: "Enterprise-grade security and access control" },
    { icon: Layers, title: "Integration", desc: "Seamless integration with your tech stack" },
    { icon: Settings, title: "Migration", desc: "Database migration from SQL to MongoDB" },
  ],
  process: [
    { step: "01", title: "Analysis", desc: "Data modeling & analysis" },
    { step: "02", title: "Design", desc: "Schema & architecture design" },
    { step: "03", title: "Development", desc: "Building & integration" },
    { step: "04", title: "Testing", desc: "Performance & load testing" },
    { step: "05", title: "Deploy", desc: "Deployment & monitoring" },
  ],
  services: [
    "MongoDB Consulting", "Schema Design & Optimization",
    "Application Development", "Data Migration",
    "Performance Tuning", "MongoDB Atlas Setup",
    "Replica Set Configuration", "Monitoring & Maintenance",
  ],
  industries: [
    "E-commerce", "Social Media", "IoT", "Gaming",
    "Content Management", "Logistics", "FinTech", "Healthcare",
  ],
};

const MongoDBDevelopment = () => <ServicePage data={data} />;
export default MongoDBDevelopment;
