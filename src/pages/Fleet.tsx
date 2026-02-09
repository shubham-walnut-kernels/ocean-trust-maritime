import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import fleetImg from "@/assets/fleet-hero.jpg";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const fleetData = [
  { name: "SRTT Meridian", type: "Chemical Tanker", dwt: "19,900", imo: "IMO II", trade: "Global", year: 2018 },
  { name: "SRTT Navigator", type: "Chemical Tanker", dwt: "13,900", imo: "IMO II", trade: "Asia-Europe", year: 2016 },
  { name: "SRTT Horizon", type: "Oil/Chemical", dwt: "37,000", imo: "IMO II/III", trade: "Global", year: 2019 },
  { name: "SRTT Voyager", type: "Oil Tanker", dwt: "47,000", imo: "IMO III", trade: "Atlantic-Pacific", year: 2020 },
  { name: "SRTT Pioneer", type: "Chemical Tanker", dwt: "19,900", imo: "IMO II SS", trade: "Asia-Middle East", year: 2017 },
  { name: "SRTT Vanguard", type: "Oil Tanker", dwt: "50,000", imo: "IMO III", trade: "Global", year: 2021 },
  { name: "SRTT Discovery", type: "Chemical Tanker", dwt: "13,900", imo: "IMO II", trade: "Europe-Americas", year: 2015 },
  { name: "SRTT Endeavour", type: "Oil/Chemical", dwt: "37,000", imo: "IMO II/III", trade: "Global", year: 2022 },
];

const Fleet = () => (
  <>
    <PageHero title="Fleet List" subtitle="Our modern, well-maintained fleet of chemical and oil tankers" image={fleetImg} />

    <section className="py-24 bg-background">
      <div className="container">
        <SectionHeading label="Our Fleet" title="Vessels Under Management" description="A snapshot of the vessels currently operating within the SRTT Marine tanker pools." />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-xl shadow-card overflow-hidden"
        >
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="gradient-ocean">
                  <TableHead className="text-accent-foreground font-semibold">Vessel Name</TableHead>
                  <TableHead className="text-accent-foreground font-semibold">Type</TableHead>
                  <TableHead className="text-accent-foreground font-semibold">DWT</TableHead>
                  <TableHead className="text-accent-foreground font-semibold">IMO Class</TableHead>
                  <TableHead className="text-accent-foreground font-semibold">Trade</TableHead>
                  <TableHead className="text-accent-foreground font-semibold">Year Built</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fleetData.map((vessel) => (
                  <TableRow key={vessel.name} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-semibold text-foreground">{vessel.name}</TableCell>
                    <TableCell className="text-muted-foreground">{vessel.type}</TableCell>
                    <TableCell className="text-muted-foreground">{vessel.dwt}</TableCell>
                    <TableCell>
                      <span className="inline-block px-2.5 py-1 text-xs font-medium bg-ocean-pale text-ocean rounded-full">
                        {vessel.imo}
                      </span>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{vessel.trade}</TableCell>
                    <TableCell className="text-muted-foreground">{vessel.year}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
        <p className="text-sm text-muted-foreground text-center mt-6">
          Fleet data is representative. Contact us for current fleet availability and specifications.
        </p>
      </div>
    </section>
  </>
);

export default Fleet;
