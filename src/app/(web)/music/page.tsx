import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Music, SlidersHorizontal } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const musicProjects = [
  {
    title: 'Generative MIDI Sequencer',
    description:
      'A web-based tool that uses algorithmic composition techniques to generate novel MIDI patterns. Built with Tone.js and React.',
    tags: ['Web Audio', 'Generative Art', 'Music Tech'],
    image: PlaceHolderImages.find((p) => p.id === 'music1') || {
      imageUrl: 'https://picsum.photos/seed/mus1/600/400',
      imageHint: 'music production',
    },
  },
  {
    title: 'DIY Digital Synthesizer',
    description:
      'A hardware project building a polyphonic synthesizer from scratch using a Raspberry Pi and custom C++ audio engine.',
    tags: ['Hardware', 'C++', 'DSP'],
    image: PlaceHolderImages.find((p) => p.id === 'music2') || {
      imageUrl: 'https://picsum.photos/seed/mus2/600/400',
      imageHint: 'synthesizer',
    },
  },
];

export default function MusicPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <div className="flex items-center justify-center gap-4">
          <Music className="h-10 w-10 text-primary" />
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Music &amp; Tech
          </h1>
          <SlidersHorizontal className="h-10 w-10 text-primary" />
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          My passion for music deeply influences my approach to technology,
          blending creativity with technical precision. Here are some projects
          where these two worlds collide.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {musicProjects.map((project) => (
          <Card
            key={project.title}
            className="overflow-hidden transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
          >
            <CardHeader className="p-0">
              <div className="relative aspect-video w-full">
                <Image
                  src={project.image.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint={project.image.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="font-headline mb-2 text-xl">
                {project.title}
              </CardTitle>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
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
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
