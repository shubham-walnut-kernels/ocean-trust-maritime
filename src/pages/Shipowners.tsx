import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, Eye, BarChart3, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import fleetImg from "@/assets/fleet-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const benefits = [
  { icon: TrendingUp, title: "Maximised Earnings", desc: "Our pool structure provides competitive earnings through optimised vessel deployment and cargo matching across the global fleet." },
  { icon: Eye, title: "Full Transparency", desc: "Complete visibility into commercial performance with detailed reporting and regular voyage updates for every vessel in the pool." },
  { icon: BarChart3, title: "Professional Management", desc: "Expert commercial asset management that reduces your operational burden while increasing fleet utilisation and returns." },
  { icon: Shield, title: "Risk Mitigation", desc: "Pool participation spreads market risk across multiple vessels and trades, providing more stable and predictable returns." },
];

const features = [
  "Competitive pool earnings based on vessel performance",
  "Transparent pool accounting and distribution",
  "Regular performance reporting and market updates",
  "Global trading coverage across major cargo corridors",
  "Experienced chartering team with deep market knowledge",
  "Compliance with international safety and environmental standards",
];

const Shipowners = () => (
  <>
    <PageHero title="For Shipowners" subtitle="Maximise your vessel earnings through our professionally managed tanker pools" image={fleetImg} />

    <section className="py-24 bg-background">
      <div className="container">
        <SectionHeading label="Pool Benefits" title="Why Join SRTT Marine Pools" description="Our tanker pools offer shipowners a proven platform to maximise vessel earnings while maintaining full commercial transparency." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((b, i) => (
            <motion.div key={b.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="flex gap-6 p-6 bg-card rounded-xl shadow-card">
              <div className="w-12 h-12 rounded-lg gradient-ocean flex items-center justify-center shrink-0">
                <b.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-muted">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading label="What We Offer" title="Commercial Asset Management" align="left" />
            <p className="text-muted-foreground leading-relaxed mb-8">
              We provide comprehensive commercial management services, handling all aspects of chartering, voyage planning, and cargo operations. Our experienced team ensures your vessels are optimally deployed to achieve the best possible earnings in all market conditions.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-ocean shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button className="bg-ocean hover:bg-ocean-light text-accent-foreground font-semibold">
                Join Our Fleet <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <img src={fleetImg} alt="Fleet at sea" className="rounded-xl shadow-card-hover w-full h-[400px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Shipowners;
