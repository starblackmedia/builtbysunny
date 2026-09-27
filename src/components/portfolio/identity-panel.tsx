'use client';

import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IdentityPanelProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
  sections: { id: string; label: string }[];
}

export function IdentityPanel({ activeSection, scrollToSection, sections }: IdentityPanelProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[38%] lg:flex-col lg:justify-between lg:py-24">
      <div className="flex flex-col">
        <div className="flex flex-col gap-6 mb-8">
          <div className="relative w-full aspect-[4/5] max-w-[180px] border border-border/80 bg-muted overflow-hidden group">
            <div className="absolute top-2 left-2 z-10 font-mono text-[9px] tracking-widest text-foreground/40 bg-background/60 backdrop-blur-sm px-1.5 py-0.5">
              SPEC_01
            </div>
            <div className="absolute bottom-2 right-2 z-10 font-mono text-[9px] tracking-widest text-foreground/40 bg-background/60 backdrop-blur-sm px-1.5 py-0.5">
              SUNDAY J.
            </div>
            <Image
              src="/images/builtbysunny.jpg"
              alt="Sunday Joseph"
              fill
              className="object-cover grayscale contrast-115 brightness-95 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              priority
            />
          </div>
          <div>
            <h1 className="font-headline text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              SUNDAY J.
            </h1>
            <h2 className="mt-1.5 text-xs font-bold font-mono tracking-widest text-primary uppercase">
              // Full-Stack Product Developer
            </h2>
          </div>
        </div>

        <p className="text-3xl font-light tracking-tight text-foreground/90 max-w-xs leading-tight font-headline">
          I build <span className="text-foreground font-medium underline decoration-primary/40 underline-offset-4">digital products</span>.
        </p>
        <p className="mt-6 max-w-sm text-base text-muted-foreground leading-relaxed">
          I build SaaS, web applications, AI-powered products, and digital experiences from idea to production.
        </p>

        <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
          <ul className="flex flex-col gap-4 w-fit">
            {sections.map(sec => {
              const isActive = activeSection === sec.id;
              return (
                <li key={sec.id}>
                  <button
                    onClick={() => scrollToSection(sec.id)}
                    className="group flex items-center py-1.5 text-xs font-bold tracking-widest text-left uppercase"
                    aria-label={`Scroll to ${sec.label}`}
                  >
                    <span className={cn(
                      "mr-4 h-px transition-all duration-300",
                      isActive ? 'w-16 bg-primary' : 'w-8 bg-border group-hover:w-16 group-hover:bg-foreground'
                    )} />
                    <span className={cn(
                      "transition-colors duration-300",
                      isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                    )}>
                      {sec.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-12 lg:mt-0 flex flex-col gap-4">
        <div className="text-xs font-mono tracking-wide text-muted-foreground">
          Lagos, Nigeria <span className="mx-1.5 text-border">·</span> Working globally
        </div>
        
        <div className="flex items-center gap-5 text-muted-foreground" aria-label="Social media">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors"
            title="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="mailto:contact@sundayj.com" 
            className="hover:text-primary transition-colors"
            title="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}