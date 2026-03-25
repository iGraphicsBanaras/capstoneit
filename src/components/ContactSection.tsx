import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", budget: "", timeline: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] text-sm font-medium">
              <Send className="h-4 w-4" />
              <span>Get In Touch</span>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Ready To Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Let's discuss your project and create something amazing together</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="Your phone number" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required *</Label>
                      <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                        <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web">Web Development</SelectItem>
                          <SelectItem value="mobile">Mobile App Development</SelectItem>
                          <SelectItem value="seo">SEO Services</SelectItem>
                          <SelectItem value="digital">Digital Marketing</SelectItem>
                          <SelectItem value="ai">AI Solutions</SelectItem>
                          <SelectItem value="blockchain">Blockchain</SelectItem>
                          <SelectItem value="arvr">AR/VR Development</SelectItem>
                          <SelectItem value="other">Other Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Project Budget</Label>
                      <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                        <SelectTrigger><SelectValue placeholder="Select budget range" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under5">Under $5,000</SelectItem>
                          <SelectItem value="5-10">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10-25">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25-50">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50plus">$50,000+</SelectItem>
                          <SelectItem value="notsure">Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">When to Start</Label>
                      <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                        <SelectTrigger><SelectValue placeholder="Select timeline" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediately">Immediately</SelectItem>
                          <SelectItem value="week">Within a Week</SelectItem>
                          <SelectItem value="month">Within a Month</SelectItem>
                          <SelectItem value="exploring">Just Exploring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea id="message" placeholder="Tell us about your project..." rows={6} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="mr-2 h-5 w-5" />
                    <span>Send Message</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <a href="tel:9151555290" className="text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors">9151555290</a>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[hsl(var(--accent))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <a href="mailto:sales@capstoneittrends.com" className="text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors break-all">sales@capstoneittrends.com</a>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">Near First Floor, Aarogya Niketan Trust, Main Road, Chhajarsi Colony, Sector 63, Noida, UP 201309</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-sm opacity-90">Monday - Friday: 10:00 AM - 7:00 PM<br />Saturday & Sunday: Closed</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Map */}
        <div className="max-w-6xl mx-auto mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.3820050!3d28.6295310!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce553e2ef4a5b%3A0xb9c8e0a5e7b8c8d0!2sCapstone%20IT%20Trends%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Capstone IT Trends Office"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
