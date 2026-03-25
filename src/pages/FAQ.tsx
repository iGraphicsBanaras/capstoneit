import Layout from "@/components/Layout";
import { FAQSection, FAQItem } from "@/components/FAQSection";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const generalFaqs: FAQItem[] = [
  { question: "What services does Capstone IT Trends offer?", answer: "We offer a wide range of IT services including Web Development, Mobile App Development, UI/UX Design, Digital Marketing (SEO, PPC, Social Media), AI & Machine Learning, Blockchain Development, AR/VR Solutions, IoT Applications, E-commerce Solutions, Cloud Computing, CRM Development, Oracle DBA Services, MongoDB Development, and Quality Assurance." },
  { question: "Where is Capstone IT Trends located?", answer: "Our India office is located at Near First Floor, Aarogya Niketan Trust, Main Road, Chhajarsi Colony, Sector 63, Noida, Uttar Pradesh 201309. We also have a USA office at 615 F Bell Road #4 545, Arizona - 85032." },
  { question: "How many years of experience does Capstone IT Trends have?", answer: "Capstone IT Trends has over 5+ years of experience in delivering innovative technology solutions. We have completed 100+ projects for 110+ satisfied clients worldwide." },
  { question: "Do you work with international clients?", answer: "Yes! We serve clients globally across North America, Europe, Asia-Pacific, and the Middle East. Our team is experienced in working across different time zones and communication channels." },
  { question: "How can I get a quote for my project?", answer: "You can get a free quote by visiting our Contact page, filling out the project inquiry form, or directly calling us at +91 9151555290. You can also email us at sales@capstoneittrends.com." },
];

const webDevFaqs: FAQItem[] = [
  { question: "What technologies do you use for web development?", answer: "We work with a comprehensive tech stack including React, Angular, Vue.js, Next.js for frontend; Node.js, Laravel, PHP, Python, Java, .NET for backend; and MySQL, PostgreSQL, MongoDB for databases. We choose the best technology based on your project requirements." },
  { question: "How long does it take to build a website?", answer: "The timeline depends on the project complexity. A simple brochure website takes 2-4 weeks, an e-commerce website 4-8 weeks, and a custom web application 8-16 weeks. We provide detailed timelines during the project planning phase." },
  { question: "Do you provide website maintenance and support?", answer: "Yes, we offer comprehensive website maintenance and support packages including security updates, performance optimization, content updates, bug fixes, and 24/7 monitoring." },
  { question: "Can you redesign my existing website?", answer: "Absolutely! We specialize in website redesign and modernization. We analyze your current site, identify improvements, and create a modern, responsive, SEO-friendly website while preserving your brand identity." },
];

const mobileAppFaqs: FAQItem[] = [
  { question: "Do you develop apps for both Android and iOS?", answer: "Yes, we develop native apps for both Android and iOS, as well as cross-platform apps using Flutter and React Native. We help you choose the best approach based on your budget, timeline, and feature requirements." },
  { question: "How much does mobile app development cost?", answer: "The cost varies based on complexity, features, platform choice, and design requirements. A simple app starts from $5,000, while complex apps with advanced features can range from $15,000 to $50,000+. Contact us for a detailed estimate." },
  { question: "Do you provide app store submission?", answer: "Yes, we handle the complete app store submission process for both Google Play Store and Apple App Store, including app listing optimization, screenshots, descriptions, and compliance requirements." },
];

const digitalMarketingFaqs: FAQItem[] = [
  { question: "What digital marketing services do you offer?", answer: "We offer SEO (Search Engine Optimization), PPC (Pay-Per-Click) advertising, Social Media Marketing, Email Marketing, Content Marketing, and Online Reputation Management. Each service is customized to your business goals." },
  { question: "How long does SEO take to show results?", answer: "SEO is a long-term strategy. Initial improvements can be seen within 2-3 months, with significant results typically appearing within 4-6 months. We provide monthly reports to track progress and ROI." },
  { question: "Do you offer social media management?", answer: "Yes, we provide complete social media management including content creation, scheduling, community engagement, paid advertising, analytics reporting, and strategy optimization across Facebook, Instagram, LinkedIn, Twitter, and other platforms." },
];

const FAQ = () => (
  <Layout>
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-yellow-500">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
            <HelpCircle className="h-10 w-10" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl text-white/90">Find answers to common questions about our services, process, and company</p>
        </motion.div>
      </div>
    </section>
    <FAQSection title="General Questions" subtitle="Common questions about Capstone IT Trends" faqs={generalFaqs} className="bg-background" />
    <FAQSection title="Web Development" subtitle="Questions about our web development services" faqs={webDevFaqs} className="bg-muted/30" />
    <FAQSection title="Mobile App Development" subtitle="Questions about mobile app development" faqs={mobileAppFaqs} className="bg-background" />
    <FAQSection title="Digital Marketing" subtitle="Questions about our digital marketing services" faqs={digitalMarketingFaqs} className="bg-muted/30" />
  </Layout>
);

export default FAQ;
