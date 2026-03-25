import ServicePageTemplate, { ServicePageData } from "./ServicePage";
import { Database, Zap, Lock, Layers, TrendingUp, Server } from "lucide-react";

const data: ServicePageData = {
  title: "MongoDB Development Services",
  subtitle: "Build Scalable Applications with NoSQL",
  description: "Harness the power of MongoDB for flexible, scalable, and high-performance database solutions. Our expert developers create custom MongoDB applications tailored to your business needs.",
  image: "/mongodb-database-development.jpg",
  contentHeading: "Expert MongoDB Development Company",
  content: "Capstone IT Trends specializes in MongoDB development, helping businesses leverage the power of NoSQL databases for modern, scalable applications. Our experienced MongoDB developers work with you to design flexible data models, implement efficient queries, and build high-performance applications that can handle massive amounts of data.",
  subheading: "Comprehensive MongoDB Solutions",
  subcontent: "Whether you're building a new application or migrating from a relational database, we have the expertise to help. Our services include MongoDB database design, application development, performance optimization, migration services, replication and sharding setup, cloud deployment on MongoDB Atlas, and 24/7 support.",
  features: [
    { icon: Database, title: "Flexible Schema Design", description: "Dynamic schemas that evolve with your application requirements" },
    { icon: Zap, title: "High Performance", description: "Fast queries and operations with optimized indexing strategies" },
    { icon: Lock, title: "Secure & Reliable", description: "Enterprise-grade security with authentication and encryption" },
    { icon: Layers, title: "Horizontal Scaling", description: "Seamlessly scale across multiple servers with sharding" },
    { icon: TrendingUp, title: "Real-Time Analytics", description: "Powerful aggregation framework for complex data analysis" },
    { icon: Server, title: "Cloud Integration", description: "Deploy on MongoDB Atlas or any cloud platform" },
  ],
  processSteps: [
    { title: "Requirements Analysis", description: "Understanding your data model, queries, and scalability requirements" },
    { title: "Schema Design", description: "Designing optimal document structure and relationships" },
    { title: "Development & Integration", description: "Implementing MongoDB with your application using best practices" },
    { title: "Optimization", description: "Fine-tuning indexes, queries, and aggregation pipelines" },
    { title: "Deployment & Monitoring", description: "Cloud deployment with continuous monitoring and support" },
  ],
  expertiseTitle: "Our MongoDB Expertise",
  col1Title: "Services",
  col1Items: ["Custom MongoDB Development", "Schema Design & Optimization", "Migration from SQL to MongoDB", "Performance Tuning & Indexing", "Replication & Sharding Setup", "MongoDB Atlas Cloud Deployment"],
  col2Title: "Technologies",
  col2Items: ["MongoDB 5.x, 6.x, 7.x", "MongoDB Atlas Cloud", "Mongoose ODM", "Node.js, Python, Java Drivers", "Aggregation Framework", "MongoDB Compass & Tools"],
  ctaTitle: "Ready to Build with MongoDB?",
  ctaDescription: "Let our experts help you leverage MongoDB for your next project.",
  ctaButtonText: "Get Free Consultation",
  faqs: [
    { question: "When should I use MongoDB over SQL databases?", answer: "MongoDB is ideal for applications with flexible data models, high scalability needs, real-time analytics, content management, IoT, and rapid development cycles." },
    { question: "Can you migrate our existing SQL database to MongoDB?", answer: "Yes, we provide complete migration services from SQL databases to MongoDB including data modeling, migration scripts, and application updates." },
    { question: "Do you support MongoDB Atlas cloud deployment?", answer: "Absolutely! We deploy and manage MongoDB on Atlas with features like auto-scaling, automated backups, and global distribution." },
    { question: "What programming languages do you use with MongoDB?", answer: "We work with Node.js, Python, Java, and other popular languages using official MongoDB drivers and ODMs like Mongoose." },
  ],
};

export default function MongoDBDevelopment() { return <ServicePageTemplate data={data} />; }
