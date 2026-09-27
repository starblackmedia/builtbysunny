export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24" aria-label="About Sunday">
      <div className="sticky top-0 z-20 -mx-6 bg-background/80 px-6 py-5 backdrop-blur-sm lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <h2 className="text-xs font-bold tracking-widest text-primary lg:sr-only uppercase">
          01 — About
        </h2>
      </div>
      <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
        <p>
          I'm Sunday, a full-stack product developer focused on turning ambitious ideas into functional digital products.
        </p>
        <p>
          I work across product interfaces, backend architecture, APIs, databases, AI integrations, and payment systems — taking products from an idea on a screen to something people can actually use.
        </p>
        <p>
          My work sits at the intersection of product thinking and engineering. I care about how things look, how they work, and what happens underneath. The goal is simple: build digital products that feel considered, perform reliably, and are built to grow.
        </p>
        <p className="text-foreground/90 font-mono text-xs pt-2 tracking-wide uppercase">
          // Coordinates: Lagos, Nigeria · Working globally
        </p>
      </div>
    </section>
  );
}
