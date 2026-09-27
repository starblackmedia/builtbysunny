'use client';

import { useEffect, useState } from 'react';
import { IdentityPanel } from '@/components/portfolio/identity-panel';
import { AboutSection } from '@/components/portfolio/about-section';
import { WorkSection } from '@/components/portfolio/work-section';
import { BuildSection } from '@/components/portfolio/build-section';
import { ContactSection } from '@/components/portfolio/contact-section';

const sections = [
  { id: 'about', label: 'ABOUT' },
  { id: 'work', label: 'WORK' },
  { id: 'build', label: 'BUILD' },
  { id: 'contact', label: 'CONTACT' }
];

export default function PremiumOnePagePortfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    if (typeof window === 'undefined') return;

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

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          <IdentityPanel 
            activeSection={activeSection} 
            scrollToSection={scrollToSection} 
            sections={sections} 
          />

          <main className="pt-24 lg:w-[56%] lg:py-24 flex flex-col gap-24 md:gap-36">
            <AboutSection />
            <WorkSection />
            <BuildSection />
            <ContactSection />
          </main>

        </div>
      </div>
    </div>
  );
}
