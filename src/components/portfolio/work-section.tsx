import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const mainProjects = [
  {
    id: 'tunegrock',
    name: 'TuneGrock',
    category: 'Music Technology Platform',
    description: 'A music technology platform built to help independent artists manage, distribute, and grow their careers with intelligent performance insights.',
    role: 'Founder & Full-Stack Developer',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'AI', 'APIs', 'Payments'],
    liveUrl: 'https://tunegrock.com',
    imageUrl: '/images/tunegrock.JPG'
  },
  {
    id: 'dropkudi',
    name: 'DropKudi',
    category: 'Modern Gifting Platform',
    description: 'A modern gifting platform that gives people a dedicated, secure page to receive gifts, congratulations, and support for birthdays, weddings, celebrations, and special life events.',
    role: 'Founder & Full-Stack Developer',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'APIs', 'Payments'],
    liveUrl: 'https://dropkudi.com',
    imageUrl: '/images/dropkudi.JPG'
  },
  {
    id: 'proofen',
    name: 'Proofen',
    category: 'Product Verification Tool',
    description: 'An advanced cryptographic digital ledger solution for certifying asset authenticity and tracing item lifecycles seamlessly.',
    role: 'Full-Stack Developer',
    technologies: ['Next.js', 'TypeScript', 'Cryptography', 'Node.js', 'AI'],
    liveUrl: 'https://useprofeen.com',
    imageUrl: '/images/proofen.JPG'
  },
  {
    id: 'ironlockbox',
    name: 'IronLockBox',
    category: 'Secure Storage Vault',
    description: 'A digital security and storage platform designed to give users a secure place to store and manage important information and digital assets.',
    role: 'Full-Stack Developer & Backend Architect',
    technologies: ['Flutter', 'Security Layers', 'Databases', 'Dart', 'TypeScript'],
    liveUrl: 'https://app.ironlockbox.com',
    imageUrl: '/images/ironlockbox.JPG'
  },
  {
    id: 'starblackmedia',
    name: 'Starblack Media',
    category: 'Enterprise Production Suite',
    description: 'A digital product and software development studio focused on building modern websites, web applications, SaaS products, and custom digital systems for businesses and organizations.',
    role: 'Lead Full-Stack Architect',
    technologies: ['Next.js', 'Cloud Compute', 'APIs', 'Databases'],
    liveUrl: 'https://starblackmedia.com',
    imageUrl: '/images/starblackmedia.JPG'
  },
  {
    id: 'pureprestige',
    name: 'Pure Prestige',
    category: 'Premium Experience Ecosystem',
    description: 'A cleaning service web application designed to make it easier for customers to discover cleaning services and book appointments online.',
    role: 'Lead Product Developer & Full-Stack Developer',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Booking Engines'],
    liveUrl: 'https://studio--prestige-clean-landing.us-central1.hosted.app',
    imageUrl: '/images/pureprestige.JPG'
  }
];

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-24" aria-label="Selected products built by Sunday">
      <div className="sticky top-0 z-20 -mx-6 bg-background/80 px-6 py-5 backdrop-blur-sm lg:relative lg:top-auto lg:mx-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <h2 className="text-xs font-bold tracking-widest text-primary uppercase">
          02 — Selected Work
        </h2>
        <p className="mt-1 text-xs text-muted-foreground">A few products I've designed and built from scratch. Click any item to explore its engineering architecture case study.</p>
      </div>

      <div className="mt-12 space-y-16">
        {mainProjects.map((project, idx) => (
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

            <div className="relative mt-2 aspect-video w-full overflow-hidden rounded bg-card border border-border/80 group-hover:border-primary/30 transition-colors">
              <Image 
                src={project.imageUrl}
                alt={`${project.name} Screenshot`}
                fill
                className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500"
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
        ))}
      </div>
    </section>
  );
}
