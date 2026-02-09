import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import aboutImg from "@/assets/about-ship.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const newsItems = [
  {
    date: "15 Jan 2026",
    title: "SRTT Marine Expands Chemical Tanker Pool with New Vessel Additions",
    excerpt: "Two new 19,900 DWT IMO II chemical tankers have joined the SRTT Marine pool, strengthening our global chemical trading coverage.",
    category: "Fleet Update",
  },
  {
    date: "02 Dec 2025",
    title: "ESG Report 2025: Progress on Sustainability Goals",
    excerpt: "SRTT Marine publishes its annual ESG report, highlighting advancements in environmental performance and governance standards.",
    category: "ESG",
  },
  {
    date: "18 Oct 2025",
    title: "Chemical Tanker Market Outlook: Q4 2025 Review",
    excerpt: "An industry analysis of chemical tanker freight trends and market dynamics heading into the new year.",
    category: "Market Insight",
  },
  {
    date: "05 Sep 2025",
    title: "SRTT Marine Achieves ISO 9001:2015 Recertification",
    excerpt: "Successful recertification underscores our commitment to quality management systems and continuous improvement in all operations.",
    category: "Certification",
  },
  {
    date: "22 Jul 2025",
    title: "New Trade Route: Asia-South America Chemical Corridor",
    excerpt: "SRTT Marine expands coverage with a dedicated chemical tanker service connecting major Asian and South American ports.",
    category: "Operations",
  },
  {
    date: "10 Jun 2025",
    title: "Industry Event: Singapore Maritime Week 2025 Recap",
    excerpt: "Key takeaways from Singapore Maritime Week, including developments in decarbonisation and digital shipping.",
    category: "Industry",
  },
];

const News = () => (
  <>
    <PageHero title="News & Insights" subtitle="Stay updated with the latest from SRTT Marine and the global maritime industry" image={aboutImg} />

    <section className="py-24 bg-background">
      <div className="container max-w-5xl">
        <SectionHeading label="Latest Updates" title="Company News & Industry Insights" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-2.5 py-1 text-xs font-medium bg-ocean-pale text-ocean rounded-full">
                  {item.category}
                </span>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-3 leading-snug">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.excerpt}</p>
              <button className="mt-4 text-sm font-semibold text-ocean hover:text-ocean-light transition-colors self-start">
                Read More →
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default News;
