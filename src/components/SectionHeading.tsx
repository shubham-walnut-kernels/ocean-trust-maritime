interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ label, title, description, align = "center" }: SectionHeadingProps) => (
  <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
    {label && (
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-ocean mb-3 font-sans">
        {label}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-balance">
      {title}
    </h2>
    {description && (
      <p className={`text-muted-foreground leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
