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
    date: "10 Jan 2026",
    title: "APC Marine Expands Voyage Charter Operations in Far East Corridor",
    excerpt: "Strengthening our presence in the China/South Korea range with additional voyage charter partnerships to serve growing cargo demand.",
    category: "Operations",
  },
  {
    date: "15 Nov 2025",
    title: "New Time Charter Agreement for PVT Class Vessels",
    excerpt: "APC Marine Services and Trading DMCC secures long-term time charter agreements, expanding our managed fleet capacity in the Indian Ocean region.",
    category: "Fleet Update",
  },
  {
    date: "20 Sep 2025",
    title: "Expanding Vegetable Oil Transportation Services",
    excerpt: "Growing demand for vegetable oil and palm oil shipments drives fleet expansion across South-East Asia and Indian subcontinent trade routes.",
    category: "Market Insight",
  },
  {
    date: "05 Aug 2025",
    title: "APC Marine Strengthens Middle Eastern Gulf Operations",
    excerpt: "Enhanced operational capacity in the Middle Eastern Gulf and Red Sea regions, supporting petroleum products and chemical cargo movements.",
    category: "Operations",
  },
  {
    date: "18 Jun 2025",
    title: "Partnership with Leading Port Agencies Across Africa",
    excerpt: "New harbour service partnerships established in East & West Africa, providing comprehensive port agency support for cargo loading and discharge.",
    category: "Partnerships",
  },
  {
    date: "02 Apr 2025",
    title: "APC Marine at Singapore Maritime Week 2025",
    excerpt: "Our team participated in Singapore Maritime Week, connecting with industry partners and discussing developments in global maritime trade.",
    category: "Industry",
  },
];

const News = () => (
  <>
    <PageHero title="News & Insights" subtitle="Stay updated with the latest from APC Marine Services and Trading DMCC" image={aboutImg} />

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