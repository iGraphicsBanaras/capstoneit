import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Building2, Users, Lightbulb, TrendingUp, Target, Eye, Award, Code, Palette, Shield, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FAQSection } from "@/components/FAQSection";
import SEO from "@/components/SEO";

function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-yellow-500 py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center text-white">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl md:text-7xl font-bold mb-6 text-balance">About Capstone IT Trends</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl md:text-3xl text-white/90 text-balance font-semibold">We Don't Just Build, We Enhance Your Business Value</motion.p>
          <motion.div initial={{ width: 0 }} animate={{ width: 96 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-8 h-1 bg-white mx-auto rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

function OurStory() {
  const milestones = [
    { icon: Building2, title: "Established", value: "Since 2015", color: "from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.7)]" },
    { icon: Users, title: "Team Size", value: "50+ Experts", color: "from-[hsl(var(--accent))] to-[hsl(var(--accent)/0.7)]" },
    { icon: Lightbulb, title: "Projects", value: "500+ Delivered", color: "from-yellow-500 to-yellow-600" },
    { icon: TrendingUp, title: "Growth", value: "150% Annually", color: "from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.7)]" },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-[hsl(var(--accent)/0.05)] rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-yellow-500 bg-clip-text text-transparent">Our Story</motion.h2>
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-lg leading-relaxed">
              Founded with a vision to transform businesses through innovative technology solutions, Capstone IT Trends has emerged as a leading IT services provider in India. Our journey began with a simple yet powerful mission: to bridge the gap between cutting-edge technology and sustainable business growth, making enterprise-grade solutions accessible to businesses of all sizes.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg leading-relaxed">
              Over the years, we have evolved from a small startup to a comprehensive technology partner, serving clients across diverse industries. Our team of expert developers, designers, digital strategists, and business analysts work in synergy to deliver solutions that not only meet but consistently exceed client expectations.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-lg leading-relaxed">
              Today, we proudly serve clients across India and globally, spanning continents from North America to Europe and Asia-Pacific. From ambitious startups to established Fortune 500 enterprises, we've been instrumental in transforming digital visions into profitable realities.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {milestones.map((milestone, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -8 }} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${milestone.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <milestone.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{milestone.title}</h3>
                <p className="text-muted-foreground font-semibold">{milestone.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyStats() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "100+", label: "Projects Delivered" },
    { value: "110+", label: "Global Clients" },
    { value: "10+", label: "Expert Developers" },
  ];
  return (
    <section className="py-16 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurMission() {
  const values = [
    { icon: Target, title: "Our Mission", description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation while maintaining the highest standards of quality and customer satisfaction.", gradient: "from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.7)]" },
    { icon: Eye, title: "Our Vision", description: "To become the most trusted technology partner globally, recognized for delivering exceptional IT solutions that transform businesses and create lasting value in the digital economy.", gradient: "from-[hsl(var(--accent))] to-[hsl(var(--accent)/0.7)]" },
    { icon: Award, title: "Our Values", description: "Innovation, Integrity, Excellence, Customer-First Approach, Continuous Learning, Collaborative Growth, Transparency, and Accountability define who we are and guide every project we undertake.", gradient: "from-yellow-500 to-yellow-600" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-[hsl(var(--accent)/0.05)] to-yellow-500/5">
      <div className="container mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-yellow-500 bg-clip-text text-transparent">Mission, Vision & Values</motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} whileHover={{ y: -8 }}>
              <Card className="border-2 hover:border-[hsl(var(--accent))] transition-all duration-300 h-full hover:shadow-2xl group">
                <CardContent className="pt-8">
                  <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-center">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurTeam() {
  const teams = [
    { icon: Code, title: "Development Team", description: "Expert developers skilled in React, Angular, Node.js, Python, Java, and mobile platforms", count: "25+", gradient: "from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.7)]" },
    { icon: Palette, title: "Design Team", description: "Creative UI/UX designers and graphic artists crafting beautiful, intuitive experiences", count: "10+", gradient: "from-[hsl(var(--accent))] to-[hsl(var(--accent)/0.7)]" },
    { icon: TrendingUp, title: "Marketing Team", description: "Digital marketing experts, SEO specialists, and content strategists driving growth", count: "8+", gradient: "from-yellow-500 to-yellow-600" },
    { icon: Shield, title: "QA Team", description: "Quality assurance engineers ensuring bug-free, secure, and high-performance applications", count: "6+", gradient: "from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.7)]" },
    { icon: Headphones, title: "Support Team", description: "Dedicated support staff ensuring client satisfaction and providing 24/7 technical assistance", count: "7+", gradient: "from-[hsl(var(--accent))] to-[hsl(var(--accent)/0.7)]" },
    { icon: Users, title: "Management Team", description: "Experienced project managers, business analysts, and leadership guiding successful delivery", count: "4+", gradient: "from-yellow-500 to-yellow-600" },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-yellow-500 bg-clip-text text-transparent">Meet Our Expert Team</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground">Our diverse team of 50+ talented professionals brings together expertise from various domains to deliver exceptional results.</motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -8 }}>
              <Card className="border-2 hover:border-[hsl(var(--accent))] transition-all duration-300 hover:shadow-2xl h-full group">
                <CardContent className="pt-8 text-center">
                  <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className={`w-24 h-24 bg-gradient-to-br ${team.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl`}>
                    <team.icon className="w-12 h-12 text-white" />
                  </motion.div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent mb-2">{team.count}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{team.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{team.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientLogos() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[hsl(var(--primary))]">Trusted By Leading Brands</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground font-semibold">Client {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const aboutFaqs = [
  { question: "When was Capstone IT Trends founded?", answer: "Capstone IT Trends was founded with a vision to transform businesses through innovative technology solutions and has grown into a leading IT services provider in India." },
  { question: "How large is the team at Capstone IT Trends?", answer: "Our team consists of 50+ talented professionals including developers, designers, digital marketing experts, QA engineers, and project managers." },
  { question: "What is the company's mission?", answer: "Our mission is to empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation while maintaining the highest standards of quality." },
  { question: "Do you serve international clients?", answer: "Yes, we proudly serve clients across India and globally, spanning continents from North America to Europe and Asia-Pacific." },
];

const About = () => (
  <Layout>
    <SEO
      title="About Capstone IT Trends - Leading IT Solutions Company in Noida"
      description="Learn about Capstone IT Trends, a premier IT company with 5+ years of experience, 50+ experts, and 500+ projects delivered. Web development, app development & digital marketing."
      canonical="/about"
      keywords="about Capstone IT Trends, IT company Noida, software development company, web development agency India"
      jsonLd={{ "@context": "https://schema.org", "@type": "AboutPage", "name": "About Capstone IT Trends", "url": "https://www.capstoneittrends.com/about" }}
    />
    <AboutHero />
    <OurStory />
    <CompanyStats />
    <OurMission />
    <OurTeam />
    <ClientLogos />
    <FAQSection faqs={aboutFaqs} title="About Us - FAQs" subtitle="Learn more about Capstone IT Trends" className="bg-background" />
  </Layout>
);

export default About;
