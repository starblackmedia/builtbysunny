const capabilities = [
  {
    num: '01',
    title: 'Web Applications',
    text: 'Custom enterprise platforms, real-time analytics dashboards, complex dynamic marketplaces, and automated internal operational systems.'
  },
  {
    num: '02',
    title: 'SaaS & MVPs',
    text: 'Turning high-level startup product concepts into highly testable, fully functional launched items optimized for validation and scaling.'
  },
  {
    num: '03',
    title: 'AI Products',
    text: 'Intelligent AI-powered applications, natural assistant agents, predictive automations, and advanced smart context logic features.'
  },
  {
    num: '04',
    title: 'Backend Systems',
    text: 'Robust RESTful/GraphQL APIs, secure databases schemas, multi-provider auth solutions, clean payment gateway pipelines, and system architectures.'
  }
];

const coreTech = [
  'Next.js', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'APIs', 'Databases', 'AI Integration', 'Payments Pipeline', 'Flutter', 'Dart'
];

export function BuildSection() {
  return (
    <section id="build" className="scroll-mt-24" aria-label="Sunday's production capabilities">
      <div className="sticky top-0 z-20 -mx-6 bg-background/80 px-6 py-5 backdrop-blur-sm lg:relative lg:top-auto lg:mx-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <h2 className="text-xs font-bold tracking-widest text-primary uppercase">
          03 — From idea to product
        </h2>
        <p className="mt-1 text-xs text-muted-foreground">High-fidelity core specializations and product capability matrix.</p>
      </div>

      <div className="mt-12 space-y-8">
        {capabilities.map(cap => (
          <div key={cap.num} className="group relative flex gap-4 border-l border-border hover:border-primary pl-4 transition-colors">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-mono text-primary font-bold">{cap.num}</span>
                <h3 className="font-headline text-lg font-medium text-foreground tracking-tight">
                  {cap.title}
                </h3>
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {cap.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-4">
          Validated Engineering Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {coreTech.map(tech => (
            <span 
              key={tech}
              className="px-2.5 py-1 text-xs font-mono text-foreground bg-card rounded border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
