import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Anchor, Shield, Globe, BarChart3, Ship, Droplets, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-ship.jpg";
import aboutImg from "@/assets/about-ship.jpg";

const metrics = [
  { value: "20,000+", label: "Vessel Days Yearly" },
  { value: "2,000+", label: "Ports Called Annually" },
  { value: "8 MMT+", label: "Tonnes of Cargo" },
];

const services = [
  {
    icon: Ship,
    title: "Chemical Tanker Pools",
    desc: "Specialised commercial management of chemical tankers trading worldwide in chemicals and vegetable oils.",
  },
  {
    icon: Droplets,
    title: "Oil Tanker Pools",
    desc: "Expert management of oil tankers carrying petroleum products and crude oil across global routes.",
  },
  {
    icon: BarChart3,
    title: "Commercial Management",
    desc: "Full-service asset management delivering optimal utilisation and competitive earnings for shipowners.",
  },
];

const values = [
  { icon: Shield, title: "Safety & Compliance", desc: "Rigorous safety standards and full regulatory compliance across all operations." },
  { icon: Globe, title: "Global Coverage", desc: "Worldwide trading routes spanning major chemical, oil, and bulk cargo corridors." },
  { icon: Anchor, title: "ESG Commitment", desc: "Adherence to UN Global Compact principles and responsible business practices." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <img src={heroImg} alt="Chemical tanker at sea" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-ocean-light mb-6 font-sans">
              Global Tanker Pool Operator
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6">
              Leadership Through Service
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 leading-relaxed">
              Delivering quality shipping anchored on reliability, safety, and transparency. Specialising in chemical and oil tanker pools trading worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-ocean hover:bg-ocean-light text-accent-foreground font-semibold px-8">
                  Ship With Us <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/shipowners">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Join Our Fleet
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-md border-t border-primary-foreground/10"
        >
          <div className="container py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-ocean-light">
                    {m.value}
                  </div>
                  <div className="text-sm text-primary-foreground/60 mt-1 uppercase tracking-wider font-sans">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Intro */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <SectionHeading
                label="About SRTT Marine"
                title="We Go the Distance With You"
                align="left"
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                At SRTT Marine, we are dedicated to delivering quality shipping anchored on reliability, safety, efficiency, while ensuring the utmost transparency. As a leading tanker pool operator, we specialise in the commercial asset management of chemical and oil tankers, trading worldwide in chemicals, vegetable oils, petroleum products, and crude oil.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                SRTT Marine is committed to conducting business ethically and responsibly, in adherence to internationally recognised Environmental, Social and Governance standards, as set forth in the Ten Principles of the UN Global Compact.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-accent-foreground">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="relative"
            >
              <img
                src={aboutImg}
                alt="Tanker at port"
                className="rounded-xl shadow-card-hover w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-ocean rounded-xl p-6 shadow-card-hover">
                <div className="text-3xl font-display font-bold text-accent-foreground">25+</div>
                <div className="text-sm text-accent-foreground/80">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-muted">
        <div className="container">
          <SectionHeading
            label="Our Services"
            title="Comprehensive Maritime Solutions"
            description="From chemical tankers to oil carriers, we deliver end-to-end commercial management that maximises vessel performance and earnings."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg gradient-ocean flex items-center justify-center mb-6">
                  <s.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container">
          <SectionHeading
            label="Why SRTT Marine"
            title="Built on Trust & Transparency"
            description="Our commitment to safety, sustainability, and operational excellence sets us apart in the global maritime industry."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center p-8"
              >
                <div className="w-16 h-16 rounded-full bg-ocean-pale flex items-center justify-center mx-auto mb-6">
                  <v.icon className="w-7 h-7 text-ocean" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Together We Go Further
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10">
              Whether you're a shipowner looking to maximise earnings or a charterer seeking reliable cargo transport, SRTT Marine is your trusted partner.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/shipowners">
                <Button size="lg" className="bg-ocean hover:bg-ocean-light text-accent-foreground font-semibold px-8">
                  Join Our Fleet
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
