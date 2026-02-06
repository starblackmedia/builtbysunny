'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal, Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Overview' },
  { href: '/modules/auth', label: 'Modules' },
  { href: '/collaboration', label: 'Collaboration' },
  { href: '/experiments', label: 'Experiments' },
  { href: '/decisions', label: 'Decisions' },
  { href: '/music', label: 'Music' },
];

export function Header() {
  const pathname = usePathname();

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)}>
      {navLinks.map(({ href, label }) => {
        const isActive =
          href === '/' ? pathname === href : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              isActive ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold">SysEng</span>
          </Link>
          <div className="hidden md:flex">
            <NavLinks />
          </div>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col p-6">
                <Link href="/" className="mb-8 flex items-center gap-2">
                  <Terminal className="h-6 w-6 text-primary" />
                  <span className="font-headline text-lg font-bold">SysEng</span>
                </Link>
                <NavLinks className="flex-col items-start space-x-0 space-y-4" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
