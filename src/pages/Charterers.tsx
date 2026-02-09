import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package, Globe, Shield, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-ship.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const cargoTypes = [
  "Chemicals & Speciality Products",
  "Vegetable Oils & Fats",
  "Petroleum Products",
  "Crude Oil",
  "Clean Petroleum Products",
  "Biofuels & Renewable Products",
];

const advantages = [
  { icon: Package, title: "Diverse Cargo Capability", desc: "Our fleet handles a wide range of chemical, oil, and vegetable oil cargoes with vessels equipped to IMO II and IMO III standards." },
  { icon: Globe, title: "Global Trading Coverage", desc: "Worldwide operational coverage across major chemical and oil trade routes, connecting key loading and discharge ports globally." },
  { icon: Shield, title: "Safety & Compliance", desc: "Rigorous vetting and compliance standards ensuring all vessels meet the highest safety and environmental requirements." },
  { icon: Clock, title: "Operational Reliability", desc: "Consistent, on-time performance backed by experienced operations and chartering teams managing cargo movements 24/7." },
];

const Charterers = () => (
  <>
    <PageHero title="For Charterers" subtitle="Reliable chemical and oil tanker solutions with global coverage and operational excellence" image={heroImg} />

    <section className="py-24 bg-background">
      <div className="container">
        <SectionHeading label="Our Capabilities" title="Reliable Cargo Transport Solutions" description="We provide charterers with access to a modern, well-maintained fleet of chemical and oil tankers, ensuring safe and efficient cargo delivery worldwide." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((a, i) => (
            <motion.div key={a.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="flex gap-6 p-6 bg-card rounded-xl shadow-card">
              <div className="w-12 h-12 rounded-lg gradient-ocean flex items-center justify-center shrink-0">
                <a.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-muted">
      <div className="container max-w-4xl">
        <SectionHeading label="Cargo Types" title="What We Carry" description="Our fleet is equipped to handle a broad range of liquid bulk cargoes with the highest safety and quality standards." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cargoTypes.map((cargo, i) => (
            <motion.div key={cargo} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="flex items-center gap-4 bg-card rounded-lg p-5 shadow-card">
              <div className="w-2 h-2 rounded-full bg-ocean shrink-0" />
              <span className="font-medium text-foreground">{cargo}</span>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button className="bg-ocean hover:bg-ocean-light text-accent-foreground font-semibold">
              Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Charterers;
