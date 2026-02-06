import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GitPullRequest, Users, Code } from 'lucide-react';

const collaborationExamples = [
  {
    icon: <GitPullRequest className="h-8 w-8 text-primary" />,
    title: 'Learning from Code Reviews',
    description:
      "Embracing feedback as a growth opportunity. Here's an example of a complex feature where peer review significantly improved the outcome, focusing on performance and maintainability.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Shared Code Ownership',
    description:
      'I believe in collective responsibility for the codebase. This section highlights a project where our team successfully co-owned a critical service, leading to higher quality and faster incident response.',
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Paired Programming on a Hard Problem',
    description:
      'Two heads are better than one. A deep dive into a challenging debugging session where paired programming helped us uncover a subtle race condition that was impacting production.',
  },
];

export default function CollaborationPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          The Power of Collaboration
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Great systems aren't built in a vacuum. They are the product of
          diverse perspectives, open communication, and shared goals.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {collaborationExamples.map((example) => (
          <Card key={example.title} className="flex flex-col">
            <CardHeader>
              <div className="mb-4">{example.icon}</div>
              <CardTitle className="font-headline text-xl">
                {example.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{example.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
