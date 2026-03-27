import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Lightbulb, Calendar, Clock as ClockIcon, ArrowRight, User, Code2, Smartphone, Brain, Cloud, Lock, Layers, Database, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FAQSection } from "@/components/FAQSection";
import SEO from "@/components/SEO";

function BlogsHero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[hsl(var(--primary)/0.1)] via-[hsl(var(--accent)/0.05)] to-yellow-500/10">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }} className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] mb-6">
            <BookOpen className="h-10 w-10 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-yellow-500 bg-clip-text text-transparent">Tech Insights & Blogs</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">Stay ahead with the latest technology trends, development tips, and industry insights from our expert team.</p>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary)/0.1)] flex items-center justify-center"><TrendingUp className="h-6 w-6 text-[hsl(var(--primary))]" /></div>
              <div className="text-left"><p className="text-2xl font-bold text-[hsl(var(--primary))]">50+</p><p className="text-sm text-muted-foreground">Articles</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent)/0.1)] flex items-center justify-center"><Lightbulb className="h-6 w-6 text-[hsl(var(--accent))]" /></div>
              <div className="text-left"><p className="text-2xl font-bold text-[hsl(var(--accent))]">10+</p><p className="text-sm text-muted-foreground">Categories</p></div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-[hsl(var(--primary)/0.2)] rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[hsl(var(--accent)/0.2)] rounded-full blur-3xl animate-pulse" />
    </section>
  );
}

function BlogCategories() {
  const categories = [
    { name: "Web Development", icon: Code2, count: 12, color: "from-blue-500 to-blue-600" },
    { name: "Mobile Apps", icon: Smartphone, count: 8, color: "from-orange-500 to-orange-600" },
    { name: "Artificial Intelligence", icon: Brain, count: 10, color: "from-purple-500 to-purple-600" },
    { name: "Cloud Computing", icon: Cloud, count: 6, color: "from-cyan-500 to-cyan-600" },
    { name: "Digital Marketing", icon: TrendingUp, count: 7, color: "from-green-500 to-green-600" },
    { name: "Cybersecurity", icon: Lock, count: 5, color: "from-red-500 to-red-600" },
    { name: "UI/UX Design", icon: Layers, count: 9, color: "from-pink-500 to-pink-600" },
    { name: "Databases", icon: Database, count: 4, color: "from-yellow-500 to-yellow-600" },
    { name: "Blockchain", icon: Globe, count: 6, color: "from-indigo-500 to-indigo-600" },
    { name: "DevOps", icon: Zap, count: 5, color: "from-teal-500 to-teal-600" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Explore articles organized by technology and industry topics</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.div key={category.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <Button variant="outline" className="w-full h-auto flex flex-col items-center gap-3 p-4 hover:border-[hsl(var(--primary))] transition-all group bg-transparent">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-sm">{category.name}</p>
                  <p className="text-xs text-muted-foreground">{category.count} articles</p>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogGrid() {
  const blogs = [
    { id: 1, title: "10 Best Practices for Modern Web Development in 2024", excerpt: "Discover the latest best practices and trends in web development.", category: "Web Development", author: "Capstone IT Trends", date: "January 15, 2024", readTime: "8 min read", image: "/modern-web-development-code.jpg", featured: true },
    { id: 2, title: "The Future of Mobile App Development: Cross-Platform vs Native", excerpt: "Explore the pros and cons of cross-platform frameworks like Flutter and React Native.", category: "Mobile Apps", author: "Capstone IT Trends", date: "January 12, 2024", readTime: "6 min read", image: "/mobile-app-development.png" },
    { id: 3, title: "AI and Machine Learning: Transforming Business Operations", excerpt: "Learn how AI and machine learning are revolutionizing business processes.", category: "Artificial Intelligence", author: "Capstone IT Trends", date: "January 10, 2024", readTime: "10 min read", image: "/ai-neural-network.png" },
    { id: 4, title: "Cloud Computing Security: Best Practices and Strategies", excerpt: "Understanding essential security measures for protecting your cloud data.", category: "Cloud Computing", author: "Capstone IT Trends", date: "January 8, 2024", readTime: "7 min read", image: "/cloud-security-concept.png" },
    { id: 5, title: "SEO Strategies That Actually Work in 2024", excerpt: "Discover proven SEO techniques to improve your search engine rankings.", category: "Digital Marketing", author: "Capstone IT Trends", date: "January 5, 2024", readTime: "9 min read", image: "/seo-digital-marketing-analytics.jpg" },
    { id: 6, title: "Blockchain Technology: Beyond Cryptocurrency", excerpt: "Explore real-world applications of blockchain in supply chain, healthcare, and finance.", category: "Blockchain", author: "Capstone IT Trends", date: "January 3, 2024", readTime: "8 min read", image: "/blockchain-network.png" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Stay informed with our latest insights and expert analysis</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div key={blog.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[hsl(var(--primary))] text-white px-3 py-1 rounded-full text-xs font-medium">{blog.category}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1"><User className="h-3 w-3" /><span>{blog.author}</span></div>
                    <div className="flex items-center gap-1"><Calendar className="h-3 w-3" /><span>{blog.date}</span></div>
                    <div className="flex items-center gap-1"><ClockIcon className="h-3 w-3" /><span>{blog.readTime}</span></div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[hsl(var(--primary))] transition-colors line-clamp-2">{blog.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">{blog.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto font-semibold group/btn">
                    Read More <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const blogFaqs = [
  { question: "How often do you publish new articles?", answer: "We publish new articles weekly covering the latest technology trends, development tips, and industry insights." },
  { question: "Can I contribute a guest post?", answer: "Yes, we welcome guest posts from industry experts! Contact us at sales@capstoneittrends.com with your article idea." },
  { question: "Do you cover specific technology topics on request?", answer: "Absolutely! If there's a specific topic you'd like us to cover, let us know and our expert team will create in-depth content on it." },
];

const Blogs = () => (
  <Layout>
    <SEO
      title="Tech Insights & Blogs | Capstone IT Trends"
      description="Stay updated with latest technology trends, development tips, and industry insights. Expert articles on web development, mobile apps, AI, cloud computing & more."
      canonical="/blogs"
      keywords="tech blog, web development blog, IT trends, software development insights, Capstone IT Trends blog"
    />
    <BlogsHero />
    <BlogCategories />
    <BlogGrid />
    <FAQSection faqs={blogFaqs} title="Blog FAQs" subtitle="Questions about our content" className="bg-background" />
  </Layout>
);

export default Blogs;
