'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const sections = [
  { id: 'about', label: 'ABOUT' },
  { id: 'work', label: 'WORK' },
  { id: 'build', label: 'BUILD' },
  { id: 'contact', label: 'CONTACT' }
];

const mainProjects = [
  {
    id: 'tunegrock',
    name: 'TuneGrock',
    category: 'Music Technology Platform',
    description: 'A music technology platform built to help independent artists manage, distribute, and grow their careers with intelligent performance insights.',
    role: 'Founder & Full-Stack Developer',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'AI', 'APIs', 'Payments'],
    liveUrl: 'https://tunegrock.com'
  },
  {
    id: 'dropkudi',
    name: 'DropKudi',
    category: 'Modern Gifting Platform',
    description: 'A modern gifting platform that gives people a dedicated, secure page to receive gifts, congratulations, and support for birthdays, weddings, celebrations, and special life events.',
    role: 'Founder & Full-Stack Developer',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'APIs', 'Payments'],
    liveUrl: 'https://dropkudi.com'
  },
  {
    id: 'proofen',
    name: 'Proofen',
    category: 'Product Verification Tool',
    description: 'An advanced cryptographic digital ledger solution for certifying asset authenticity and tracing item lifecycles seamlessly.',
    role: 'Full-Stack Developer',
    technologies: ['Next.js', 'TypeScript', 'Cryptography', 'Node.js'],
    liveUrl: 'https://useprofeen.com'
  },
  {
    id: 'ironlockbox',
    name: 'IronLockBox',
    category: 'Secure Storage Vault',
    description: 'A high-security encrypted cloud storage repository built for safeguarding operational config secrets and server credential protocols.',
    role: 'Backend Architect',
    technologies: ['Node.js', 'Security Layers', 'Databases', 'TypeScript'],
    liveUrl: 'https://app.ironlockbox.com'
  },
  {
    id: 'starblackmedia',
    name: 'Starblack Media',
    category: 'Enterprise Production Suite',
    description: 'High-throughput automated asset distribution network for heavy broadcast pipelines and asynchronous rendering pipelines.',
    role: 'Lead Full-Stack Architect',
    technologies: ['Next.js', 'Cloud Compute', 'APIs'],
    liveUrl: 'https://starblackmedia.com'
  },
  {
    id: 'pureprestige',
    name: 'Pure Prestige',
    category: 'Premium Experience Ecosystem',
    description: 'Bespoke client management solution crafted for ultra-high-end luxury brands featuring atomic presentation components.',
    role: 'Lead Product Developer',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://purprestige.com'
  }
];

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
  'Next.js', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'APIs', 'Databases', 'AI Integration', 'Payments Pipeline'
];

export default function PremiumOnePagePortfolio() {
  const [activeSection, setActiveSection] = useState('about');
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-25% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    
    sections.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        
        {/* LEFT COLUMN - FIXED PANEL */}
        <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[38%] lg:flex-col lg:justify-between lg:py-24">
          <div className="flex flex-col">
            <h1 className="font-headline text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              SUNDAY J.
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-primary">
              Full-Stack Product Developer
            </h2>
            <p className="mt-6 text-3xl font-light tracking-tight text-foreground/90 max-w-xs leading-tight font-headline">
              I build <span className="text-foreground font-medium underline decoration-primary/40 underline-offset-4">digital products</span>.
            </p>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              I build SaaS, web applications, AI-powered products, and digital experiences from idea to production.
            </p>

            {/* Desktop Navigation Link Indicators */}
            <nav className="mt-16 hidden lg:block" aria-label="In-page jump links">
              <ul className="flex flex-col gap-4 w-fit">
                {sections.map(sec => {
                  const isActive = activeSection === sec.id;
                  return (
                    <li key={sec.id}>
                      <button
                        onClick={() => scrollToSection(sec.id)}
                        className="group flex items-center py-1.5 text-xs font-bold tracking-widest text-left"
                        aria-label={`Scroll to ${sec.label}`}
                      >
                        <span className={`mr-4 h-px transition-all duration-300 ${
                          isActive ? 'w-16 bg-primary' : 'w-8 bg-border group-hover:w-16 group-hover:bg-foreground'
                        }`} />
                        <span className={`transition-colors duration-300 ${
                          isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                        }`}>
                          {sec.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Socials & Location Footer */}
          <div className="mt-12 lg:mt-0 flex flex-col gap-4">
            <div className="text-xs tracking-wide text-muted-foreground">
              Based in Nigeria <span className="mx-1.5 text-border">·</span> Working globally
            </div>
            
            <div className="flex items-center gap-5 text-muted-foreground" aria-label="Social media channels">
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-primary transition-colors py-1"
                title="GitHub Portfolio"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-primary transition-colors py-1"
                title="LinkedIn Profile"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="hover:text-primary transition-colors py-1"
                title="Direct Email Address"
              >
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </header>

        {/* RIGHT COLUMN - SCROLLABLE MAIN CONTENT CANVAS */}
        <main className="pt-24 lg:w-[56%] lg:py-24 flex flex-col gap-24 md:gap-36">
          
          {/* 01 — ABOUT */}
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

          {/* 02 — WORK */}
          <section id="work" className="scroll-mt-24" aria-label="Selected products built by Sunday">
            <div className="sticky top-0 z-20 -mx-6 bg-background/80 px-6 py-5 backdrop-blur-sm lg:relative lg:top-auto lg:mx-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
              <h2 className="text-xs font-bold tracking-widest text-primary uppercase">
                02 — Selected Work
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">A few products I've designed and built from scratch. Click any item to explore its engineering architecture case study.</p>
            </div>

            {/* Case Studies */}
            <div className="mt-12 space-y-16">
              {mainProjects.map((project, idx) => {
                const projectImage = PlaceHolderImages.find(p => p.id === `cs-${project.id}`) || {
                  imageUrl: 'https://picsum.photos/seed/generic/600/400',
                  imageHint: 'product preview'
                };

                return (
                  <Link key={project.id} href={`/work/${project.id}`} className="group relative flex flex-col gap-4 border-t border-border pt-8 transition-all block">
                    <div className="flex flex-col gap-2">
                      <span className="text-[11px] font-mono tracking-widest text-primary uppercase flex items-center gap-2">
                        PROJECT 0{idx + 1} &mdash; {project.category} <span className="text-[10px] text-muted-foreground font-normal tracking-normal lowercase">(view architecture →)</span>
                      </span>
                      <div className="flex items-center justify-between group-hover:text-primary transition-colors">
                        <h3 className="font-headline text-2xl font-medium tracking-tight text-foreground">
                          {project.name}
                        </h3>
                        <ArrowUpRight className="h-4 w-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                      <p className="text-xs text-muted-foreground/80 italic">
                        Role: {project.role}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Premium Product Screenshot Image Frame */}
                    <div className="relative mt-2 aspect-video w-full overflow-hidden rounded bg-card border border-border/80 group-hover:border-primary/30 transition-colors">
                      <Image 
                        src={projectImage.imageUrl}
                        alt={`${project.name} Screenshot`}
                        fill
                        className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500"
                        data-ai-hint={projectImage.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.technologies.map(tech => (
                        <span 
                          key={tech} 
                          className="rounded bg-secondary/80 border border-border/60 px-2 py-0.5 text-[11px] font-mono tracking-tight text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* 03 — BUILD */}
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

            {/* Core horizontal typography lists for skills */}
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

          {/* 04 — CONTACT */}
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
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Let's turn it into something real. Send a note if you are looking for dedicated architectural execution, technical partnership, or application expansion.
              </p>

              <div className="mt-8">
                <a
                  href="mailto:contact@example.com"
                  className="inline-flex items-center gap-2 rounded bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors"
                  aria-label="Send email to start a conversation"
                >
                  Start a conversation <ArrowRight className="h-3 w-3" />
                </a>
              </div>

              {/* Placeholder Directory Links */}
              <div className="mt-8 pt-6 border-t border-border/60 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="block text-muted-foreground/60 font-mono uppercase text-[10px] mb-1">Direct Outreach</span>
                  <a href="mailto:contact@example.com" className="text-foreground hover:text-primary transition-colors block font-mono">Email Placeholder</a>
                  <a href="#" className="text-foreground hover:text-primary transition-colors block font-mono">WhatsApp Placeholder</a>
                </div>
                <div>
                  <span className="block text-muted-foreground/60 font-mono uppercase text-[10px] mb-1">Professional Logs</span>
                  <a href="#" className="text-foreground hover:text-primary transition-colors block font-mono">LinkedIn Connect</a>
                  <a href="#" className="text-foreground hover:text-primary transition-colors block font-mono">GitHub Repositories</a>
                </div>
              </div>
            </div>

            {/* Premium Sophisticated Footer */}
            <footer className="mt-24 pt-8 border-t border-border/40 text-xs text-muted-foreground/60 flex flex-col sm:flex-row sm:justify-between gap-4 font-mono">
              <div>
                <span className="block text-foreground font-bold tracking-tight">SUNDAY J.</span>
                <span>Full-Stack Product Developer</span>
              </div>
              <div className="sm:text-right">
                <span>Nigeria · Working globally</span>
                <span className="block mt-0.5 text-[10px] text-muted-foreground/40">&copy; 2026 Sunday J. All rights reserved.</span>
              </div>
            </footer>
          </section>

        </main>

      </div>
    </div>
  );
}
