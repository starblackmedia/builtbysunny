import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const experiments = [
  {
    title: 'AI-Assisted Code Refactoring Tool',
    description:
      'An exploration into using large language models to analyze codebases and suggest intelligent refactoring paths. Currently in early prototype stage.',
    tags: ['AI', 'Tooling', 'WIP'],
    image: PlaceHolderImages.find((p) => p.id === 'experiment1') || {
      imageUrl: 'https://picsum.photos/seed/exp1/600/400',
      imageHint: 'abstract code',
    },
  },
  {
    title: 'Real-time Data Visualization App',
    description:
      'A mobile-first application for visualizing live data streams using WebSockets and D3.js. Testing performance with high-frequency updates.',
    tags: ['Mobile', 'Data Viz', 'Real-time'],
    image: PlaceHolderImages.find((p) => p.id === 'experiment2') || {
      imageUrl: 'https://picsum.photos/seed/exp2/600/400',
      imageHint: 'data visualization',
    },
  },
  {
    title: 'Serverless Function Orchestrator',
    description:
      'Designing a lightweight orchestrator for complex serverless workflows, focusing on resilience and observability.',
    tags: ['Serverless', 'Architecture', 'Cloud'],
    image: PlaceHolderImages.find((p) => p.id === 'experiment3') || {
      imageUrl: 'https://picsum.photos/seed/exp3/600/400',
      imageHint: 'cloud architecture',
    },
  },
];

export default function ExperimentsPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Experiments Hub
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          A laboratory for new ideas, work-in-progress projects, and
          explorations into emerging technologies. This is where learning and
          iteration happen.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {experiments.map((exp) => (
          <Card
            key={exp.title}
            className="overflow-hidden transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
          >
            <CardHeader className="p-0">
              <div className="relative aspect-video w-full">
                <Image
                  src={exp.image.imageUrl}
                  alt={exp.title}
                  fill
                  className="object-cover"
                  data-ai-hint={exp.image.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="font-headline mb-2 text-xl">
                {exp.title}
              </CardTitle>
              <div className="mb-4 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    style={{
                      backgroundColor: 'hsl(var(--accent))',
                      color: 'hsl(var(--accent-foreground))',
                    }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardDescription>{exp.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
