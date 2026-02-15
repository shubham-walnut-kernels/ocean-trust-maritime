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
    <PageHero title="About APC Marine" subtitle="Integrity with Excellence – Delivering specialised chartering and shipping operations worldwide" image={aboutImg} />

    <section className="py-24 bg-background">
      <div className="container max-w-4xl">
        <SectionHeading label="Our Story" title="Who We Are" />
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            APC Marine Services and Trading DMCC is a global provider of oil, chemical and dry bulk shipping services, managing a fleet of sea-going vessels. Since 2016, we have been making international transportation of cargoes hassle-free, allowing our clients to focus on their core business priorities while we handle complex maritime logistics.
          </p>
          <p>
            We provide logistic solutions for vegetable oil, bulk liquid chemicals, petroleum products and other commodities worldwide, at the least possible time and in a cost-effective manner. Our senior and experienced team have a true passion for finding solutions, with the skills and determination to transport any shape or size of cargo to any part of the globe.
          </p>
          <p>
            Ship chartering is the core activity of our commercial operation. We seek and negotiate employment for vessels to secure the best available opportunities, optimise earnings, and position tonnage to the best benefit of owners in constantly changing market conditions.
          </p>
          <p>
            The company has concentrated on the Middle Eastern Gulf, Red Sea, East & West Africa, Indian Ocean, Indian subcontinent, Singapore/Malaysia range and Far Eastern China/South Korea range markets, growing into one of the progressive providers of clean/dirty petroleum, bulk chemical, vegetable/palm oil and dry bulk cargo transportation.
          </p>
        </div>
      </div>
    </section>

    <section className="py-24 bg-muted">
      <div className="container">
        <SectionHeading label="Our Commitment" title="ESG & Responsible Shipping" description="We are dedicated to sustainable and responsible maritime operations across all our global services." />
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
        <SectionHeading label="Global Presence" title="Worldwide Operations" description="Our operational network spans key maritime trade corridors, ensuring we meet client needs wherever they are." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "Since 2016", label: "Established" },
            { value: "6+", label: "Regional Markets" },
            { value: "15+", label: "Major Clients" },
            { value: "24/7", label: "Operations Support" },
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