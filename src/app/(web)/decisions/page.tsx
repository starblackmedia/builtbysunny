import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const decisions = [
  {
    title: 'Choosing a Message Broker: RabbitMQ vs. Kafka',
    date: '2023-10-15',
    status: 'Implemented',
    context:
      'Needed an asynchronous communication backbone for a microservices architecture. Evaluated options for throughput, latency, and operational complexity.',
    decision:
      'Chose RabbitMQ for its flexible routing capabilities and lower operational overhead for our specific use case, accepting a tradeoff in raw throughput compared to Kafka.',
    image: PlaceHolderImages.find((p) => p.id === 'decision2') || {
      imageUrl: 'https://picsum.photos/seed/dec2/600/400',
      imageHint: 'system architecture',
    },
  },
  {
    title: 'Database Selection: PostgreSQL vs. MongoDB',
    date: '2023-08-01',
    status: 'Implemented',
    context:
      'The core service required storing complex, evolving user-generated data with relational dependencies.',
    decision:
      'Selected PostgreSQL for its strong transactional integrity and rich querying capabilities with JSONB, providing a hybrid approach that offered both structure and flexibility.',
    image: PlaceHolderImages.find((p) => p.id === 'decision1') || {
      imageUrl: 'https://picsum.photos/seed/dec1/600/400',
      imageHint: 'database schema',
    },
  },
];

export default function DecisionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Decision Log
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          A transparent log of key architectural and engineering decisions. Each
          entry documents the context, tradeoffs, and rationale.
        </p>
      </div>
      <div className="mt-16 space-y-12">
        {decisions.map((decision, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="grid md:grid-cols-5 md:gap-8">
              <div className="md:col-span-2">
                <Image
                  src={decision.image.imageUrl}
                  alt={decision.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                  data-ai-hint={decision.image.imageHint}
                />
              </div>
              <div className="p-6 md:col-span-3">
                <CardHeader className="p-0">
                  <div className="flex items-center justify-between gap-4">
                    <CardTitle className="font-headline text-2xl">
                      {decision.title}
                    </CardTitle>
                    <Badge
                      variant={
                        decision.status === 'Implemented' ? 'default' : 'secondary'
                      }
                      className="flex-shrink-0 bg-primary text-primary-foreground"
                    >
                      {decision.status}
                    </Badge>
                  </div>
                  <p className="pt-1 text-sm text-muted-foreground">
                    {decision.date}
                  </p>
                </CardHeader>
                <CardContent className="mt-4 space-y-4 p-0">
                  <div>
                    <h3 className="font-semibold">Context</h3>
                    <p className="text-muted-foreground">{decision.context}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Decision & Rationale</h3>
                    <p className="text-muted-foreground">{decision.decision}</p>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
