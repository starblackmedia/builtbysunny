'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { modules } from '@/lib/data';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function ModulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="container mx-auto grid min-h-[calc(100vh-8rem)] md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <aside className="hidden border-r pr-6 pt-6 md:block">
        <ScrollArea className="h-full">
          <nav className="flex flex-col gap-2">
            <h2 className="font-headline text-lg font-semibold tracking-tight">
              System Modules
            </h2>
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Link
                  key={module.slug}
                  href={`/modules/${module.slug}`}
                  className={cn(
                    'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
                    pathname === `/modules/${module.slug}`
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{module.title}</span>
                </Link>
              );
            })}
          </nav>
        </ScrollArea>
      </aside>
      <main className="py-6">{children}</main>
    </div>
  );
}
