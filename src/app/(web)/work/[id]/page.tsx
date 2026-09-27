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

  const activeImage = PlaceHolderImages.find((p) => p.id === study.placeholderImageId) || {
    imageUrl: '/images/placeholder.JPG',
    imageHint: 'system schema architecture layout'
  };

  const keys = Object.keys(caseStudiesData);
  const currentIndex = keys.indexOf(id);
  const prevId = keys[(currentIndex - 1 + keys.length) % keys.length];
  const nextId = keys[(currentIndex + 1) % keys.length];

  const prevStudy = caseStudiesData[prevId];
  const nextStudy = caseStudiesData[nextId];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-24">
        
        <div className="mb-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
            Back to Overview
          </Link>
        </div>

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
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1 group"
              >
                Production Hub <ExternalLink className="h-2.5 w-2.5 opacity-60 group-hover:opacity-100" />
              </a>
            </div>
            <div>
              <span className="block text-muted-foreground/60 uppercase tracking-wider text-[10px] mb-1">System Status</span>
              <span className="inline-flex items-center gap-1.5 text-foreground/90 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Active Node
              </span>
            </div>
          </div>
        </header>

        <section className="my-16">
          <div className="relative aspect-video w-full overflow-hidden rounded border border-border bg-card">
            <Image
              src={activeImage.imageUrl}
              alt={study.name}
              width={1200}
              height={675}
              priority
              className="object-cover"
              data-ai-hint={activeImage.imageHint}
            />
            <div className="absolute bottom-4 right-4 rounded bg-background/90 border border-border/80 px-2 py-1 text-[10px] font-mono text-muted-foreground tracking-tight backdrop-blur-sm">
              Figure 1.0 Architecture Context Matrix
            </div>
          </div>
        </section>

        <div className="space-y-24 py-8 pb-16">
          {/* PROBLEM SPACE */}
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

          {/* DROPKUDI ASYMMETRIC INSERTION 1 */}
          {id === 'dropkudi' && (
            <section className="grid grid-cols-1 md:grid-cols-12 gap-8 my-16 items-end">
              <div className="md:col-span-8 relative aspect-[16/10] overflow-hidden rounded border border-border bg-card">
                <Image
                  src="/images/dropkudi/desktop-profile.JPG"
                  alt="DropKudi Live User Profile Hub Screen"
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="md:col-span-4 relative aspect-[9/16] overflow-hidden rounded border border-border bg-card max-w-[260px] mx-auto md:mx-0 w-full md:-translate-y-12">
                <Image
                  src="/images/dropkudi/mobile-userprofile.jpg"
                  alt="DropKudi Personalized Recipient Layout View"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </section>
          )}

          {/* TUNEGROCK ASYMMETRIC INSERTION 1 */}
          {id === 'tunegrock' && (
            <section className="grid grid-cols-1 md:grid-cols-12 gap-8 my-16 items-start">
              <div className="md:col-span-7 relative aspect-[16/10] overflow-hidden rounded border border-border bg-card">
                <Image
                  src="/images/tunegrock/desktop-tune-home.JPG"
                  alt="TuneGrock Administrative Engineering Dashboard Portal Layout"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
              <div className="md:col-span-5 relative aspect-[9/16] overflow-hidden rounded border border-border bg-card max-w-[240px] mx-auto w-full md:translate-y-16">
                <Image
                  src="/images/tunegrock/tunereal-mobile-home.jpg"
                  alt="TuneGrock Mobile Audio Client Portal View"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </section>
          )}

          {/* DESIGN APPROACH */}
          <div className="grid md:grid-cols-3 md:gap-8 items-start border-t border-border/40 pt-16">
            <div className="md:col-span-1">
              <h2 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2 mb-4 md:mb-0">
                <Layers className="h-3.5 w-3.5 text-primary" /> Design Approach
              </h2>
            </div>
            <div className="md:col-span-2 text-sm text-muted-foreground leading-relaxed">
              <p>{study.designApproach}</p>
            </div>
          </div>

          {/* DROPKUDI ASYMMETRIC INSERTION 2 */}
          {id === 'dropkudi' && (
            <section className="grid grid-cols-1 md:grid-cols-12 gap-8 my-16 items-center">
              <div className="md:col-span-4 relative aspect-[9/16] overflow-hidden rounded border border-border bg-card max-w-[260px] mx-auto w-full">
                <Image
                  src="/images/dropkudi/dropkudi-widraw-mobile.jpg"
                  alt="DropKudi High-Speed Escrow Payout Settlement Layout"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
              <div className="md:col-span-8 relative aspect-[16/10] overflow-hidden rounded border border-border bg-card md:translate-x-4">
                <Image
                  src="/images/dropkudi/desktop-wallet.JPG"
                  alt="DropKudi Financial Ledger Transaction History"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </section>
          )}

          {/* TUNEGROCK ASYMMETRIC INSERTION 2 */}
          {id === 'tunegrock' && (
            <section className="space-y-12 my-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative aspect-[16/10] overflow-hidden rounded border border-border bg-card">
                  <Image
                    src="/images/tunegrock/desk-artistprofile.JPG"
                    alt="TuneGrock Advanced Analytical Metrics Stream Matrix"
                    fill
                    className="object-cover opacity-90"
                  />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden rounded border border-border bg-card">
                  <Image
                    src="/images/tunegrock/desktupload.JPG"
                    alt="TuneGrock Decentralized High-Throughput Track Ingestion Workspace"
                    fill
                    className="object-cover opacity-90"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="relative aspect-[9/16] overflow-hidden rounded border border-border bg-card">
                  <Image
                    src="/images/tunegrock/tunereal-mobile-artistprofile.jpg"
                    alt="TuneGrock Mobile Insights Interface"
                    fill
                    className="object-cover opacity-90"
                  />
                </div>
                <div className="relative aspect-[9/16] overflow-hidden rounded border border-border bg-card">
                  <Image
                    src="/images/tunegrock/tunereal-mobile-dash.jpg"
                    alt="TuneGrock Mobile Ledger View"
                    fill
                    className="object-cover opacity-90"
                  />
                </div>
              </div>
            </section>
          )}

          {/* SYSTEM TRADEOFFS */}
          <div className="grid md:grid-cols-3 md:gap-8 items-start border-t border-border/40 pt-16">
            <div className="md:col-span-1">
              <h2 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2 mb-4 md:mb-0">
                <Cpu className="h-3.5 w-3.5 text-primary" /> System Tradeoffs
              </h2>
            </div>
            <div className="md:col-span-2 text-sm text-muted-foreground leading-relaxed">
              <p>{study.tradeoffs}</p>
            </div>
          </div>

          {/* FINAL AD-HOC ASYMMETRIC OUTRO PICKS */}
          {id === 'dropkudi' && (
            <section className="flex justify-center my-12">
              <div className="w-full max-w-md relative aspect-[9/16] overflow-hidden rounded border border-border bg-card">
                <Image
                  src="/images/dropkudi/mobile1-dash.jpg"
                  alt="DropKudi Native Mobile Dashboard View"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </section>
          )}

          {id === 'tunegrock' && (
            <section className="grid grid-cols-1 md:grid-cols-12 gap-8 my-12 items-center">
              <div className="md:col-span-8 relative aspect-[16/10] overflow-hidden rounded border border-border bg-card">
                <Image
                  src="/images/tunegrock/desktop-nowplaying.JPG"
                  alt="TuneGrock Immersive Realtime Streaming Player Frame"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
              <div className="md:col-span-4 relative aspect-[9/16] overflow-hidden rounded border border-border bg-card max-w-[220px] mx-auto w-full">
                <Image
                  src="/images/tunegrock/tunereal-mobile-nowplaying.jpg"
                  alt="TuneGrock Mobile Embedded Audio Core Controller UI"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </section>
          )}

          {/* VALIDATED TECH STACK */}
          <div className="grid md:grid-cols-3 md:gap-8 items-start border-t border-border/40 pt-16">
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

        <footer className="mt-16 flex items-center justify-between font-mono text-xs text-muted-foreground border-t border-border/40 pt-12">
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