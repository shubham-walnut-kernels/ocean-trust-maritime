import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import fleetImg from "@/assets/fleet-hero.jpg";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ownedVessels = [
  { name: "MT QIAN TAI 1", imo: "9531727", grt: "8,850", dwt: "12,740.8 MT", draft: "7.814 M", category: "Owned" },
];

const timeChartered = [
  { name: "PVT SATURN", imo: "9432385", grt: "8,530", dwt: "13,159.67 MT", draft: "8.71 M", category: "Time Charter" },
  { name: "PVT NEPTUNE", imo: "9404900", grt: "8,590", dwt: "12,978.016 MT", draft: "8.688 M", category: "Time Charter" },
];

const voyageChartered = [
  "MT CALLISTO", "MT SKY RUNNER", "MT STOLT SUISEN", "MT YONG SHENG 39",
  "MT BEGONIA 1", "MT CC INNOVATOR", "MT DOLPHIN 6", "MT STOLT MOMIJI",
  "MT STOLT AJISAI", "MT KUN PENG", "MT JACINDA", "MT XIN AO TAI 1",
  "MT STOLT RENGE", "MT YUN DING 19", "MT SUNNY 7", "MT BANGLAR AGRAJATRA",
];

const Fleet = () => (
  <>
    <PageHero title="Fleet List" subtitle="Our managed fleet of vessels serving global maritime trade routes" image={fleetImg} />

    <section className="py-24 bg-background">
      <div className="container">
        <SectionHeading label="Owned Vessels" title="Vessels Owned by APC Marine Services and Trading DMCC" />
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
                  <TableHead className="text-accent-foreground font-semibold">IMO No.</TableHead>
                  <TableHead className="text-accent-foreground font-semibold">GRT</TableHead>
                  <TableHead className="text-accent-foreground font-semibold">SDWT</TableHead>
                  <TableHead className="text-accent-foreground font-semibold">SDRAFT</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ownedVessels.map((vessel) => (
                  <TableRow key={vessel.name} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-semibold text-foreground">{vessel.name}</TableCell>
                    <TableCell className="text-muted-foreground">{vessel.imo}</TableCell>
                    <TableCell className="text-muted-foreground">{vessel.grt}</TableCell>
                    <TableCell className="text-muted-foreground">{vessel.dwt}</TableCell>
                    <TableCell className="text-muted-foreground">{vessel.draft}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-24 bg-muted">
      <div className="container">
        <SectionHeading label="Time Chartered Vessels" title="Vessels on Time Charter" />
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
                  <TableHead className="text-accent-foreground font-semibold">IMO No.</TableHead>
                  <TableHead className="text-accent-foreground font-semibold">GRT</TableHead>
                  <TableHead className="text-accent-foreground font-semibold">SDWT</TableHead>
                  <TableHead className="text-accent-foreground font-semibold">SDRAFT</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {timeChartered.map((vessel) => (
                  <TableRow key={vessel.name} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-semibold text-foreground">{vessel.name}</TableCell>
                    <TableCell className="text-muted-foreground">{vessel.imo}</TableCell>
                    <TableCell className="text-muted-foreground">{vessel.grt}</TableCell>
                    <TableCell className="text-muted-foreground">{vessel.dwt}</TableCell>
                    <TableCell className="text-muted-foreground">{vessel.draft}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </div>
    </section>

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