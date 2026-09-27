export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24" aria-label="About Sunday">
      <div className="sticky top-0 z-20 -mx-6 bg-background/80 px-6 py-5 backdrop-blur-sm lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <h2 className="text-xs font-bold tracking-widest text-primary lg:sr-only uppercase">
          01 — About
        </h2>
      </div>
      <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
        <p>
          I'm Sunday, a full-stack product developer focused on turning premium ideas into functional digital systems. I operate comfortably across interface development, robust architecture pipelines, AI prompts orchestration, databases, and secure payment setups.
        </p>
        <p>
          My work stands at the intersection of business logic and clean engineering. I build tools that are optimized for actual utility, scalable structure, and clarity, avoiding fragile prototypes or superficial mockups.
        </p>
        <p className="text-foreground/90 font-medium pt-2">
          Let's move your product concept from discovery straight into production.
        </p>
      </div>
    </section>
  );
}
