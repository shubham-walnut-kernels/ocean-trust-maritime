import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Anchor, Shield, Globe, BarChart3, Ship, Droplets, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-ship.jpg";
import aboutImg from "@/assets/about-ship.jpg";

const metrics = [
  { value: "Since 2016", label: "Serving Global Markets" },
  { value: "6+", label: "Regional Markets" },
  { value: "15+", label: "Major Clients Worldwide" },
];

const services = [
  {
    icon: Ship,
    title: "Marine Transportation",
    desc: "International maritime transport including freight solutions, delivering cargo to any point of the globe efficiently and reliably.",
  },
  {
    icon: Droplets,
    title: "Logistics Management",
    desc: "End-to-end logistics planning and management from origin to destination, meeting customer requirements with precision.",
  },
  {
    icon: BarChart3,
    title: "Harbour Services",
    desc: "Full range of port services at load and discharge points, with trusted port agency partnerships ensuring seamless operations.",
  },
];

const values = [
  { icon: Shield, title: "Safety & Compliance", desc: "Rigorous safety standards and full regulatory compliance across all maritime operations worldwide." },
  { icon: Globe, title: "Global Coverage", desc: "Operations spanning the Middle East, Africa, Indian Ocean, South-East Asia, and Far East trade corridors." },
  { icon: Anchor, title: "Integrity & Excellence", desc: "Delivering on our promise with ethical business practices and a commitment to superior service." },
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
        <img src={heroImg} alt="Maritime vessel at sea" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-ocean-light mb-6 font-sans">
              Global Maritime Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6">
              Worldwide Marine Transportation Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 leading-relaxed">
              APC Marine Services and Trading DMCC is a global provider of oil, chemical and dry bulk shipping services, offering competitive rates and reliable transportation solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-ocean hover:bg-ocean-light text-accent-foreground font-semibold px-8">
                  Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/shipowners">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Our Services
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
                label="About APC Marine"
                title="We Go the Distance With You"
                align="left"
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Since 2016, APC Marine Services and Trading DMCC has been making international transportation of cargoes hassle-free. As a fully integrated provider of shipping management services, we offer access to information from across the globe as owner, operator, and active charterer.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We provide logistic solutions for vegetable oil, bulk liquid chemicals, petroleum products and other commodities worldwide, delivering maximum results with minimal effort so you can focus on your core business priorities.
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
                alt="Maritime vessel at port"
                className="rounded-xl shadow-card-hover w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-ocean rounded-xl p-6 shadow-card-hover">
                <div className="text-3xl font-display font-bold text-accent-foreground">2016</div>
                <div className="text-sm text-accent-foreground/80">Established</div>
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
            description="From marine transportation to harbour services, we deliver end-to-end shipping management that ensures reliable and cost-effective cargo delivery worldwide."
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
            label="Why APC Marine"
            title="Built on Trust & Transparency"
            description="Our commitment to safety, integrity, and operational excellence sets us apart in the global maritime industry."
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
              Whether you need reliable cargo transport or expert commercial management for your vessels, APC Marine Services and Trading DMCC is your trusted maritime partner.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/shipowners">
                <Button size="lg" className="bg-ocean hover:bg-ocean-light text-accent-foreground font-semibold px-8">
                  Our Services
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
