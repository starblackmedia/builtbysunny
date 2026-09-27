import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ExternalLink, ShieldCheck, Layers, Cpu } from 'lucide-react';
import { caseStudiesData } from '@/lib/case-studies-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Object.keys(caseStudiesData).map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const study = caseStudiesData[id];
  if (!study) {
    return { title: 'Case Study Not Found' };
  }
  return {
    title: `${study.name} — Technical Case Study by Sunday J.`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { id } = await params;
  const study = caseStudiesData[id];

  if (!study) {
    notFound();
  }

  // Look up relevant placeholder image metrics
  const activeImage = PlaceHolderImages.find((p) => p.id === study.placeholderImageId) || {
    imageUrl: 'https://picsum.photos/seed/genericcs/1200/675',
    imageHint: 'system schema architecture layout'
  };

  // Setup predictable previous/next lookup arrays
  const keys = Object.keys(caseStudiesData);
  const currentIndex = keys.indexOf(id);
  const prevId = keys[(currentIndex - 1 + keys.length) % keys.length];
  const nextId = keys[(currentIndex + 1) % keys.length];

  const prevStudy = caseStudiesData[prevId];
  const nextStudy = caseStudiesData[nextId];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary selection:font-bold">
      {/* Content Outer Wrapper */}
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-24">
        
        {/* Navigation Headcrumbs */}
        <div className="mb-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
            Back to Overview
          </Link>
        </div>

        {/* HERO TITLE BLOCK */}
        <header className="border-b border-border/60 pb-12">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono tracking-widest text-primary uppercase">
              // Product Case Study Output SPEC_0{currentIndex + 1}
            </span>
            <h1 className="font-headline text-4xl font-medium tracking-tight sm:text-6xl text-foreground">
              {study.name}
            </h1>
            <p className="mt-4 text-xl font-light text-muted-foreground max-w-2xl leading-relaxed">
              {study.description}
            </p>
          </div>

          {/* Quick Specifications Metadata Grid */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 border-t border-border/40 pt-8 text-xs font-mono">
            <div>
              <span className="block text-muted-foreground/60 uppercase tracking-wider text-[10px] mb-1">My Contribution</span>
              <span className="text-foreground/90 font-medium">{study.role}</span>
            </div>
            <div>
              <span className="block text-muted-foreground/60 uppercase tracking-wider text-[10px] mb-1">Target Classification</span>
              <span className="text-foreground/90 font-medium">{study.category}</span>
            </div>
            <div>
              <span className="block text-muted-foreground/60 uppercase tracking-wider text-[10px] mb-1">Live Endpoint</span>
              <a
                href={study.liveUrl}
                className="text-primary hover:underline inline-flex items-center gap-1 group"
              >
                Production Hub <ExternalLink className="h-2.5 w-2.5 opacity-60 group-hover:opacity-100" />
              </a>
            </div>
            <div>
              <span className="block text-muted-foreground/60 uppercase tracking-wider text-[10px] mb-1">System Status</span>
              <span className="inline-flex items-center gap-1.5 text-foreground/90 font-medium">
                <span className={`h-1.5 w-1.5 rounded-full ${study.hasFullContent ? 'bg-primary' : 'bg-orange-500'}`} />
                {study.hasFullContent ? 'Active Node' : 'Compiling Log'}
              </span>
            </div>
          </div>
        </header>

        {/* COMPREHENSIVE INTERFACE/ARCHITECTURE VISUAL BLOCK */}
        <section className="my-16">
          <div className="relative aspect-video w-full overflow-hidden rounded border border-border bg-card">
            <Image
              src={activeImage.imageUrl}
              alt={study.name}
              width={1200}
              height={675}
              priority
              className="object-cover transition-transform duration-500 hover:scale-[1.01]"
              data-ai-hint={activeImage.imageHint}
            />
            <div className="absolute bottom-4 right-4 rounded bg-background/90 border border-border/80 px-2 py-1 text-[10px] font-mono text-muted-foreground tracking-tight backdrop-blur-sm">
              Figure 1.0 Architecture Context Matrix
            </div>
          </div>
        </section>

        {/* EDITORIAL REUNIFICATION CANVAS */}
        <div className="space-y-16 py-8 border-b border-border/40 pb-16">
          
          {/* THE CHALLENGE STATEMENT */}
          <div className="grid md:grid-cols-3 md:gap-8 items-start">
            <div className="md:col-span-1">
              <h2 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2 mb-4 md:mb-0">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" /> The Problem Space
              </h2>
            </div>
            <div className="md:col-span-2 text-sm text-muted-foreground leading-relaxed">
              <p>{study.problemStatement}</p>
            </div>
          </div>

          {/* DESIGN APPROACH / ARCHITECTURE SOLUTION */}
          <div className="grid md:grid-cols-3 md:gap-8 items-start">
            <div className="md:col-span-1">
              <h2 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2 mb-4 md:mb-0">
                <Layers className="h-3.5 w-3.5 text-primary" /> Design Approach
              </h2>
            </div>
            <div className="md:col-span-2 text-sm text-muted-foreground leading-relaxed">
              <p>{study.designApproach}</p>
            </div>
          </div>

          {/* ENGINEERING TRADEOFFS & FAILURE ADMISSIONS */}
          <div className="grid md:grid-cols-3 md:gap-8 items-start">
            <div className="md:col-span-1">
              <h2 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2 mb-4 md:mb-0">
                <Cpu className="h-3.5 w-3.5 text-primary" /> System Tradeoffs
              </h2>
            </div>
            <div className="md:col-span-2 text-sm text-muted-foreground leading-relaxed">
              <p>{study.tradeoffs}</p>
            </div>
          </div>

          {/* CONSTRAINED TECHNOLOGY CHIPS SECTION */}
          <div className="grid md:grid-cols-3 md:gap-8 items-start">
            <div className="md:col-span-1">
              <h2 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4 md:mb-0">
                Validated Tech Stack
              </h2>
            </div>
            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-1.5">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-secondary/80 border border-border/60 px-2.5 py-1 text-xs font-mono text-foreground/90 tracking-tight"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM STEPPED CAROUSEL NAVIGATION */}
        <footer className="mt-16 flex items-center justify-between font-mono text-xs text-muted-foreground">
          <Link
            href={`/work/${prevStudy.id}`}
            className="group flex items-center gap-2 max-w-[45%] text-left hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform shrink-0" />
            <div className="truncate">
              <span className="block text-[10px] text-muted-foreground/40 uppercase tracking-widest">Previous Spec</span>
              <span className="text-foreground/80 font-medium truncate block">{prevStudy.name}</span>
            </div>
          </Link>

          <div className="h-8 w-px bg-border/40 mx-4 hidden sm:block" />

          <Link
            href={`/work/${nextStudy.id}`}
            className="group flex items-center gap-2 max-w-[45%] text-right hover:text-foreground transition-colors justify-end"
          >
            <div className="truncate text-right">
              <span className="block text-[10px] text-muted-foreground/40 uppercase tracking-widest">Next Spec</span>
              <span className="text-foreground/80 font-medium truncate block">{nextStudy.name}</span>
            </div>
            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        </footer>

      </div>
    </div>
  );
}
