import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-ship.jpg";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "8 Temasek Boulevard, Suntec Tower 3, #22-02A, Singapore 038988" },
  { icon: Phone, label: "Phone", value: "+65 6291 2122" },
  { icon: Mail, label: "Email", value: "info@srttmarine.com" },
  { icon: Clock, label: "Office Hours", value: "Mon – Fri: 09:00 – 18:00 (SGT)" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent", description: "Thank you for contacting us. We will get back to you shortly." });
    setForm({ name: "", email: "", company: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHero title="Contact Us" subtitle="Get in touch with our team for enquiries, quotations, or partnership opportunities" image={heroImg} />

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <SectionHeading label="Get in Touch" title="We'd Love to Hear From You" align="left" />
              <div className="space-y-6 mt-8">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-ocean-pale flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-ocean" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{c.label}</div>
                      <div className="text-sm text-muted-foreground">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-xl shadow-card p-8">
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                    <Input placeholder="Email Address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                    <Input placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
                  </div>
                  <Textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                  <Button type="submit" className="w-full bg-ocean hover:bg-ocean-light text-accent-foreground font-semibold">
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
