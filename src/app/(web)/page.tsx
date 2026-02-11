import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Code,
  Cpu,
  Database,
  Shield,
  GitBranch,
  Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const skills = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Software Development',
    description:
      'Building robust and scalable applications with clean, maintainable code.',
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: 'System Architecture',
    description:
      'Designing resilient and efficient systems that meet business needs and technical requirements.',
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: 'Data Management',
    description:
      'Implementing data storage, processing, and retrieval solutions for high performance.',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Security',
    description:
      'Integrating security best practices throughout the software development lifecycle.',
  },
  {
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    title: 'Collaboration',
    description:
      'Working effectively in teams, fostering shared ownership and learning through code reviews.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'Innovation',
    description:
      'Experimenting with new technologies and AI-assisted tools to drive continuous improvement.',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <section className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Sunday Joseph
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            I build systems that scale, evolve, and collaborate.
          </p>
          <p className="mx-auto max-w-2xl text-muted-foreground md:mx-0">
            Passionate about Firebase, Web (Next.js), Mobile (Flutter), and the
            frontiers of AI.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/explore">
                Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/collaboration">Collaboration Philosophy</Link>
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center">
          <Image
            src="/images/SundayJoseph-1.JPG"
            alt="Sunday Joseph Headshot"
            width={240}
            height={240}
            className="rounded-full object-cover ring-4 ring-primary/20"
            priority
          />
        </div>
      </section>

      <section className="mt-24 sm:mt-32">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-center sm:text-4xl">
          Core Competencies
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <Card
              key={skill.title}
              className="transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                {skill.icon}
                <CardTitle className="font-headline text-xl">
                  {skill.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
