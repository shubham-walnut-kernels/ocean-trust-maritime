import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Anchor } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Anchor className="w-6 h-6 text-ocean-light" />
            <span className="text-xl font-display font-bold">APC Marine</span>
          </div>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            A global provider of oil, chemical tanker and dry bulk shipping services, delivering reliable maritime transportation and logistics solutions worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ocean-light mb-4 font-sans">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-2.5">
            {[
              { label: "About Us", path: "/about" },
              { label: "Shipowners", path: "/shipowners" },
              { label: "Charterers", path: "/charterers" },
              { label: "Fleet List", path: "/fleet" },
              { label: "News", path: "/news" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ocean-light mb-4 font-sans">
            Services
          </h4>
          <nav className="flex flex-col gap-2.5">
            {[
              "Marine Transportation",
              "Logistics Management",
              "Harbour Services",
              "Ship Chartering",
              "Cargo Operations",
            ].map((service) => (
              <span
                key={service}
                className="text-sm text-primary-foreground/60"
              >
                {service}
              </span>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ocean-light mb-4 font-sans">
            Contact Us
          </h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3 text-sm text-primary-foreground/60">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-ocean-light" />
              <span>Office 4862 DMCC Business Centre Level No 1, Jewellery & Gemplex 3, P.O. Box 48800</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
              <Phone className="w-4 h-4 shrink-0 text-ocean-light" />
              <span>+65 6266 1749</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
              <Mail className="w-4 h-4 shrink-0 text-ocean-light" />
              <span>operations@apcmarineshipping.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} APC Marine Services and Trading DMCC. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link to="/contact" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
            Privacy Policy
          </Link>
          <Link to="/contact" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;