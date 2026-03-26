import ServicePageTemplate, { ServicePageData } from "./ServicePage";
import { TrendingUp, Target, Globe, BarChart3, MessageSquare, Zap } from "lucide-react";

const data: ServicePageData = {
  title: "Digital Marketing Services",
  subtitle: "Data-Driven Marketing That Delivers Results",
  description: "Grow your business online with our comprehensive digital marketing services. From SEO and PPC to social media and content marketing, we drive traffic, leads, and conversions.",
  image: "https://capstoneittrends.com/assets/img/services/digital-marketing.jpg",
  contentHeading: "Full-Service Digital Marketing Agency",
  content: "Capstone IT Trends provides result-oriented digital marketing services that help businesses grow their online presence and revenue. Our data-driven approach combines SEO, PPC advertising, social media marketing, content marketing, and email campaigns to create a comprehensive digital strategy that delivers measurable results.",
  subheading: "360° Digital Marketing Solutions",
  subcontent: "We don't just drive traffic — we drive qualified leads and conversions. Our marketing team analyzes your market, competitors, and target audience to create customized strategies that maximize your ROI. From brand awareness to customer retention, we cover every stage of the marketing funnel.",
  features: [
    { icon: TrendingUp, title: "SEO Services", description: "Rank higher on Google with on-page, off-page, and technical SEO" },
    { icon: Target, title: "PPC Advertising", description: "Google Ads and social media campaigns with maximum ROI" },
    { icon: Globe, title: "Social Media Marketing", description: "Engage your audience on Facebook, Instagram, LinkedIn, and more" },
    { icon: BarChart3, title: "Analytics & Reporting", description: "Data-driven insights with comprehensive monthly reports" },
    { icon: MessageSquare, title: "Content Marketing", description: "Compelling content that educates, engages, and converts" },
    { icon: Zap, title: "Email Marketing", description: "Automated email campaigns that nurture leads and drive sales" },
  ],
  processSteps: [
    { title: "Market Research", description: "Analyzing your industry, competitors, and target audience" },
    { title: "Strategy Development", description: "Creating a customized digital marketing strategy and plan" },
    { title: "Campaign Execution", description: "Launching and managing campaigns across all channels" },
    { title: "Monitoring & Optimization", description: "Continuous monitoring and optimization for better performance" },
    { title: "Reporting & Analysis", description: "Detailed monthly reports with insights and recommendations" },
  ],
  expertiseTitle: "Our Digital Marketing Services",
  col1Title: "Marketing Channels",
  col1Items: ["Search Engine Optimization (SEO)", "Pay-Per-Click (PPC)", "Social Media Marketing", "Content Marketing", "Email Marketing", "Influencer Marketing"],
  col2Title: "Specializations",
  col2Items: ["Local SEO", "E-commerce Marketing", "B2B Marketing", "Lead Generation", "Brand Building", "Conversion Rate Optimization"],
  ctaTitle: "Ready to Grow Your Business Online?",
  ctaDescription: "Let's create a digital marketing strategy that drives real results.",
  ctaButtonText: "Get Free Marketing Audit",
  faqs: [
    { question: "How long does it take to see SEO results?", answer: "SEO typically takes 3-6 months to show significant results. However, some improvements like local SEO can show faster results within 1-2 months." },
    { question: "What is your PPC management fee?", answer: "Our PPC management fee depends on your ad spend and campaign complexity. We offer competitive rates with transparent pricing." },
    { question: "Do you provide monthly reports?", answer: "Yes, we provide detailed monthly reports covering all metrics, campaign performance, ROI, and recommendations for improvement." },
    { question: "Which social media platforms do you manage?", answer: "We manage Facebook, Instagram, LinkedIn, Twitter, YouTube, and Pinterest — choosing the best platforms for your target audience." },
  ],
};

export default function DigitalMarketing() { return <ServicePageTemplate data={data} />; }
