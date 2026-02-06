import { modules } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ModuleContent } from '@/components/modules/module-content';

export async function generateStaticParams() {
  return modules.map((module) => ({
    slug: module.slug,
  }));
}

export default function ModulePage({ params }: { params: { slug: string } }) {
  const module = modules.find((m) => m.slug === params.slug);

  if (!module) {
    notFound();
  }

  return (
    <div className="pl-4">
      <div className="mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          {module.title}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {module.description}
        </p>
      </div>
      <ModuleContent moduleName={module.title} />
    </div>
  );
}
