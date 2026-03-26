import TechnologyPageTemplate, { TechnologyPageData } from "./TechnologyPage";
import { Box, Zap, Globe, Shield, Database, Settings } from "lucide-react";

const data: TechnologyPageData = {
  title: "Node.js Technology",
  subtitle: "Fast, Scalable Server-Side JavaScript",
  description: "Build high-performance, real-time applications with Node.js. Its event-driven, non-blocking I/O makes it perfect for APIs, microservices, and data-intensive applications.",
  image: "https://capstoneittrends.com/assets/img/technologies/nodejs.jpg",
  contentHeading: "Node.js Development Expertise",
  content: "Node.js allows JavaScript to run on the server, enabling full-stack JavaScript development. Its non-blocking I/O and event-driven architecture make it ideal for real-time applications, REST APIs, microservices, and streaming applications.",
  subheading: "Node.js Ecosystem",
  subcontent: "We leverage Express.js, NestJS, Fastify, and the npm ecosystem to build scalable backend applications. Our Node.js solutions include REST APIs, GraphQL servers, WebSocket-based real-time apps, and serverless functions.",
  features: [
    { icon: Box, title: "Express & NestJS", description: "Robust frameworks for API and microservice development" },
    { icon: Zap, title: "Non-Blocking I/O", description: "Handle thousands of concurrent connections efficiently" },
    { icon: Globe, title: "Full-Stack JS", description: "Same language on frontend and backend" },
    { icon: Shield, title: "Enterprise Ready", description: "Used by Netflix, PayPal, LinkedIn, and NASA" },
    { icon: Database, title: "Database Flexible", description: "Works with MongoDB, PostgreSQL, MySQL, and Redis" },
    { icon: Settings, title: "Real-Time", description: "WebSocket and Socket.io for real-time features" },
  ],
  services: ["Node.js API Development", "Real-Time Applications", "Microservices Architecture", "GraphQL Server Development", "Serverless Functions", "Node.js Consulting"],
  industries: ["FinTech", "E-commerce", "Social Media", "IoT", "Streaming & Media", "SaaS"],
  ctaTitle: "Build with Node.js",
  ctaDescription: "Create fast, scalable backend applications with Node.js.",
  faqs: [
    { question: "When should I use Node.js?", answer: "Node.js excels at I/O-intensive tasks: APIs, real-time apps, microservices, streaming. For CPU-heavy computation, consider Java or Go." },
    { question: "Is Node.js good for enterprise?", answer: "Yes! Netflix, PayPal, Uber, and LinkedIn use Node.js. It reduced PayPal's response time by 35% compared to their Java stack." },
  ],
};

export default function NodeJSTech() { return <TechnologyPageTemplate data={data} />; }
