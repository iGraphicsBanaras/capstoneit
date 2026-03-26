import ServicePageTemplate, { ServicePageData } from "./ServicePage";
import { FileCode, Database, Globe, Shield, Zap, Settings } from "lucide-react";

const data: ServicePageData = {
  title: "PHP MySQL Development",
  subtitle: "Robust Web Solutions with PHP & MySQL",
  description: "Build powerful, scalable web applications with our expert PHP MySQL development services. From custom websites to complex enterprise applications, we deliver reliable solutions.",
  image: "https://capstoneittrends.com/assets/img/services/php-mysql.jpg",
  contentHeading: "Expert PHP MySQL Development Company",
  content: "Capstone IT Trends provides professional PHP MySQL development services for businesses of all sizes. PHP is one of the most widely-used server-side languages, powering over 75% of websites worldwide. Our experienced developers build secure, scalable, and high-performance web applications using PHP and MySQL.",
  subheading: "Full-Stack PHP Development Services",
  subcontent: "We offer complete PHP MySQL development including custom web applications, CMS development, e-commerce solutions, API development, database design, and legacy system modernization. Our team follows industry best practices and coding standards to deliver maintainable, high-quality code.",
  features: [
    { icon: FileCode, title: "Custom PHP Development", description: "Tailored web applications built to your exact specifications" },
    { icon: Database, title: "MySQL Database Design", description: "Optimized database architecture for performance and scalability" },
    { icon: Globe, title: "Web Application Development", description: "Full-featured web apps with modern PHP frameworks" },
    { icon: Shield, title: "Secure Coding", description: "Protection against SQL injection, XSS, and other vulnerabilities" },
    { icon: Zap, title: "Performance Optimization", description: "Caching, query optimization, and code profiling" },
    { icon: Settings, title: "API Development", description: "RESTful APIs for seamless third-party integration" },
  ],
  processSteps: [
    { title: "Requirements Gathering", description: "Understanding your business logic and technical requirements" },
    { title: "Architecture Design", description: "Designing database schema and application architecture" },
    { title: "PHP Development", description: "Coding with modern PHP (8.x) following PSR standards" },
    { title: "Testing & Security", description: "Unit testing, integration testing, and security auditing" },
    { title: "Deployment & Support", description: "Server deployment and ongoing maintenance support" },
  ],
  expertiseTitle: "Our PHP MySQL Expertise",
  col1Title: "PHP Services",
  col1Items: ["Custom Web Applications", "E-commerce Development", "CMS Development", "API Development", "PHP Migration & Upgrade", "Legacy Code Modernization"],
  col2Title: "Technologies",
  col2Items: ["PHP 8.x", "MySQL / MariaDB", "Laravel & CodeIgniter", "Composer & Packagist", "PHPUnit Testing", "Redis & Memcached"],
  ctaTitle: "Ready to Build with PHP & MySQL?",
  ctaDescription: "Let's create a robust web application for your business.",
  ctaButtonText: "Get Free Consultation",
  faqs: [
    { question: "Is PHP still relevant in 2024?", answer: "Absolutely! PHP powers 75%+ of websites including WordPress, Facebook, and Wikipedia. Modern PHP 8.x is fast, secure, and feature-rich." },
    { question: "Which PHP framework do you use?", answer: "We primarily use Laravel for its elegance and features, but also work with CodeIgniter, Symfony, and custom PHP based on project needs." },
    { question: "How do you ensure database security?", answer: "We use prepared statements, input validation, encryption, and regular security audits to protect against SQL injection and data breaches." },
    { question: "Can you modernize our legacy PHP application?", answer: "Yes, we specialize in migrating legacy PHP apps to modern frameworks, improving code quality, performance, and security." },
  ],
};

export default function PHPMySQL() { return <ServicePageTemplate data={data} />; }
