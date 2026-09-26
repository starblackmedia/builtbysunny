import type { ReactNode } from 'react';

export default function WebLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      <main>{children}</main>
    </div>
  );
}
