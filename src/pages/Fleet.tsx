import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import fleetImg from "@/assets/fleet-hero.jpg";

const voyageChartered = [
"STOLT SUISEN", "DOLPHIN 6", "STOLT MOMIJI", "STOLT AJISAI",
"STOLT SUISEN", "VICTORY LIGHT", "YUN DING 19", "XIN AO TAI 1",
"STOLT RENGE", "STOLT HAGI", "SKY BLUE", "MT LIAN HAI 101",
"MT POLAR STAR", "MT PVT SATURN", "MT PVT NEPTUNE", "MT STOLT KIKYO",
];

const Fleet = () => (
  <>
    <PageHero title="Voyage Charter Fleet" subtitle="Our managed fleet of vessels serving global maritime trade routes" image={fleetImg} />

    <section className="py-24 bg-background">
      <div className="container">
        <SectionHeading label="Voyage Chartered Vessels" title="Vessels Used on Regular Basis" description="We regularly charter the following vessels for voyage operations across our global trade routes." />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {voyageChartered.map((name) => (
            <div key={name} className="bg-card rounded-lg p-4 shadow-card flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-ocean shrink-0" />
              <span className="font-medium text-foreground text-sm">{name}</span>
            </div>
          ))}
        </motion.div>
        <p className="text-sm text-muted-foreground text-center mt-8">
          Contact us for current fleet availability and specifications.
        </p>
      </div>
    </section>
  </>
);

export default Fleet;
