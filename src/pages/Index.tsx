import Layout from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import SEO from "@/components/SEO";

const homeFaqs = [
  { question: "What services does Capstone IT Trends offer?", answer: "We offer Web Development, Mobile App Development, UI/UX Design, Digital Marketing, AI & ML, Blockchain, AR/VR, IoT, E-commerce, Cloud Solutions, CRM Development, Oracle DBA, and Quality Assurance services." },
  { question: "How experienced is your team?", answer: "Our team has 5+ years of experience with 100+ projects delivered for 110+ satisfied clients worldwide. We have 10+ expert developers specializing in various technologies." },
  { question: "Do you offer free consultations?", answer: "Yes! We offer free initial consultations to understand your project requirements and provide a detailed proposal with timeline and cost estimates." },
  { question: "What industries do you serve?", answer: "We serve diverse industries including Healthcare, E-commerce, Real Estate, Education, Finance, Travel, Manufacturing, and more." },
  { question: "How can I get started with a project?", answer: "Simply fill out our contact form, call us at +91 9151555290, or email sales@capstoneittrends.com. We'll schedule a free consultation to discuss your needs." },
];

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Capstone IT Trends",
  "url": "https://www.capstoneittrends.com",
  "logo": "https://www.capstoneittrends.com/about-og-image.png",
  "contactPoint": { "@type": "ContactPoint", "telephone": "+91-9151555290", "contactType": "sales", "email": "sales@capstoneittrends.com" },
  "address": { "@type": "PostalAddress", "streetAddress": "Near First Floor, Aarogya Niketan Trust, Main Road, Chhajarsi Colony", "addressLocality": "Noida", "addressRegion": "Uttar Pradesh", "postalCode": "201309", "addressCountry": "IN" },
  "sameAs": ["https://www.facebook.com/capstoneittrends", "https://www.linkedin.com/company/capstoneittrends", "https://www.instagram.com/capstoneittrends"]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homeFaqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
};

const Index = () => (
  <Layout>
    <SEO
      title="Capstone IT Trends - Premier IT Company | Web & App Development, Digital Marketing & AI Solutions"
      description="Leading IT solutions provider with 5+ years of experience. Web development, mobile apps, AI, digital marketing & more. 100+ projects, 110+ clients worldwide."
      canonical="/"
      keywords="IT company Noida, web development, app development, digital marketing, AI solutions, software development company India"
      jsonLd={{ ...orgJsonLd, ...faqJsonLd }}
    />
    <HeroSection />
    <ServicesSection />
    <WhyChooseUs />
    <TechnologiesSection />
    <PortfolioSection />
    <TestimonialsSection />
    <FAQSection faqs={homeFaqs} title="Frequently Asked Questions" subtitle="Got questions? We've got answers" className="bg-muted/30" />
    <ContactSection />
  </Layout>
);

export default Index;
