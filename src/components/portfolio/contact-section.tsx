export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 pb-16 lg:pb-24" aria-label="Start a conversation with Sunday">
      <div className="sticky top-0 z-20 -mx-6 bg-background/80 px-6 py-5 backdrop-blur-sm lg:relative lg:top-auto lg:mx-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <h2 className="text-xs font-bold tracking-widest text-primary uppercase">
          04 — Contact
        </h2>
      </div>

      <div className="mt-8 rounded-lg bg-card border border-border p-6 md:p-8">
        <h3 className="font-headline text-3xl font-medium tracking-tight text-foreground">
          Have an idea worth building?
        </h3>
        <p className="mt-2 text-sm text-muted-foreground/90 leading-relaxed md:text-[15px]">
          Let's turn it into something real. Send a note if you are looking for dedicated architectural execution, technical partnership, or application expansion.
        </p>

        <div className="mt-8">
          <a 
            href="mailto:builtbysunny@starblackmedia.com"
            className="inline-flex items-center gap-2 rounded bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Start a conversation &rarr;
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-border/60 grid grid-cols-2 gap-4 text-xs">
          <div>
            <span className="block text-muted-foreground/60 font-mono uppercase text-[10px] mb-1">Direct Outreach</span>
            <a href="mailto:builtbysunny@starblackmedia.com" className="text-foreground hover:text-primary transition-colors block font-mono">Email Direct</a>
          </div>
          <div>
            <span className="block text-muted-foreground/60 font-mono uppercase text-[10px] mb-1">Professional Logs</span>
            <a href="https://www.linkedin.com/in/builtbysunny/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors block font-mono">LinkedIn Profile</a>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border/40 text-xs text-muted-foreground/60 flex flex-col sm:flex-row sm:justify-between gap-4 font-mono">
        <div>
          <span className="block text-foreground font-bold tracking-tight">SUNDAY J.</span>
          <span>Full-Stack Product Developer</span>
        </div>
        <div className="sm:text-right">
          <span>Lagos, Nigeria · Working globally</span>
          <span className="block mt-0.5 text-[10px] text-muted-foreground/40">&copy; 2026 Sunday J. All rights reserved.</span>
        </div>
      </footer>
    </section>
  );
}
