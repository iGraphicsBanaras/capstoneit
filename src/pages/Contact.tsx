import Layout from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary)/0.9)] to-[hsl(var(--accent))] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-white/90 text-balance">Let's Discuss Your Next Big Project</p>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">Whether you need a website, mobile app, or complete digital transformation - we're here to help. Reach out to us today!</p>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); };

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-2xl">Send Us a Message</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div><Label htmlFor="name">Full Name *</Label><Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" /></div>
          <div><Label htmlFor="email">Email Address *</Label><Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" /></div>
          <div><Label htmlFor="phone">Phone Number</Label><Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="9151555290" /></div>
          <div><Label htmlFor="subject">Subject *</Label><Input id="subject" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="Project Inquiry" /></div>
          <div><Label htmlFor="message">Message *</Label><Textarea id="message" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project..." rows={5} /></div>
          <Button type="submit" className="w-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.9)] text-white">Send Message</Button>
        </form>
      </CardContent>
    </Card>
  );
}

function ContactInfo() {
  const contactDetails = [
    { icon: Phone, title: "Phone", info: "+91 9151555290", link: "tel:+919151555290" },
    { icon: Mail, title: "Email", info: "sales@capstoneittrends.com", link: "mailto:sales@capstoneittrends.com" },
    { icon: Clock, title: "Working Hours", info: "Mon - Fri: 10:00 AM - 7:00 PM", link: "#" },
  ];
  const addresses = [
    { country: "USA Office", address: "615 F Bell Road #4 545, Arizona - 85032" },
    { country: "India Office", address: "D248/4B Business Park, Noida Sector - 63" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-[hsl(var(--primary))]">Contact Information</h2>
        <p className="text-muted-foreground mb-8">Get in touch with us through any of these channels.</p>
      </div>
      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <Card key={index} className="border-2 hover:border-[hsl(var(--primary))] transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-lg flex items-center justify-center flex-shrink-0">
                  <detail.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{detail.title}</h3>
                  <a href={detail.link} className="text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors">{detail.info}</a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {addresses.map((addr, index) => (
          <Card key={`addr-${index}`} className="border-2 hover:border-[hsl(var(--primary))] transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{addr.country}</h3>
                  <p className="text-muted-foreground">{addr.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="border-2 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white">
        <CardContent className="p-6">
          <h3 className="font-bold text-xl mb-2">Ready to Start Your Project?</h3>
          <p className="mb-4">Let's turn your ideas into reality. Contact us today for a free consultation!</p>
          <a href="tel:+919151555290" className="text-white underline font-semibold">Call Now: +91 9151555290</a>
        </CardContent>
      </Card>
    </div>
  );
}

const Contact = () => (
  <Layout>
    <ContactHero />
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  </Layout>
);

export default Contact;
