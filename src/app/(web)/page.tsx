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

    const handleScroll = () => {
      let currentSection = 'about';
      let maxVisibleHeight = 0;

      sections.forEach(sec => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(window.innerHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);

          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            currentSection = sec.id;
          }
        }
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        currentSection = 'contact';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
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
  );
}
