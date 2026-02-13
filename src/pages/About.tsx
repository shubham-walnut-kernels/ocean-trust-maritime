import { motion } from "framer-motion";
import { Shield, Globe, Leaf, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import aboutImg from "@/assets/about-ship.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const esgPrinciples = [
  { icon: Leaf, title: "Environmental", desc: "Committed to reducing our environmental footprint through efficient operations and adherence to international maritime environmental regulations." },
  { icon: Users, title: "Social", desc: "Promoting fair labour practices, diversity, and the well-being of our crew and shore-based teams across all operations." },
  { icon: Shield, title: "Governance", desc: "Maintaining the highest standards of corporate governance, transparency, and ethical business conduct in all our dealings." },
];

const About = () => (
  <>
    <PageHero title="About APC Marine" subtitle="Leadership Through Service – Delivering excellence in tanker pool operations worldwide" image={aboutImg} />

    <section className="py-24 bg-background">
      <div className="container max-w-4xl">
        <SectionHeading label="Our Story" title="Dedicated to Quality Shipping" />
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            At APC Marine, we go the distance with you. We are dedicated to delivering quality shipping anchored on reliability, safety, efficiency, while ensuring the utmost transparency. As a leading tanker pool operator, we specialise in the commercial asset management of chemical and oil tankers, trading worldwide in chemicals, vegetable oils, petroleum products, and crude oil.
          </p>
          <p>
            Our experienced team combines deep maritime expertise with a commercial approach that maximises value for both shipowners and charterers. With a track record of over 20,000 vessel days yearly and operations spanning more than 2,000 ports globally, we have established ourselves as a trusted name in the tanker pool industry.
          </p>
          <p>
            APC Marine is committed to conducting business ethically and responsibly, in adherence to internationally recognised Environmental, Social and Governance standards, as set forth in the Ten Principles of the UN Global Compact.
          </p>
        </div>
      </div>
    </section>

    <section className="py-24 bg-muted">
      <div className="container">
        <SectionHeading label="Our Commitment" title="ESG & Responsible Shipping" description="Aligned with the UN Global Compact, we are dedicated to sustainable and responsible maritime operations." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {esgPrinciples.map((p, i) => (
            <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="bg-card rounded-xl p-8 shadow-card">
              <div className="w-12 h-12 rounded-lg gradient-ocean flex items-center justify-center mb-6">
                <p.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container">
        <SectionHeading label="Global Presence" title="Worldwide Operations" description="Our operational network spans the globe, ensuring we can meet the needs of shipowners and charterers wherever they are." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "20,000+", label: "Vessel Days Yearly" },
            { value: "2,000+", label: "Ports Called" },
            { value: "8 MMT+", label: "Cargo Tonnes" },
            { value: "25+", label: "Years Experience" },
          ].map((m, i) => (
            <motion.div key={m.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <div className="text-3xl md:text-4xl font-display font-bold text-ocean">{m.value}</div>
              <div className="text-sm text-muted-foreground mt-2 uppercase tracking-wider font-sans">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
