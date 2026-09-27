'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/lib/projects-data';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

const statusColors = {
  Shipped: 'bg-primary/20 text-primary border-primary/40',
  'In Progress': 'bg-accent/20 text-accent-foreground border-accent/40',
  Experiment: 'bg-secondary text-secondary-foreground border-border',
};

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const imageUrl = project.image?.imageUrl || 'https://picsum.photos/seed/placeholder/600/400';
  const imageHint = project.image?.imageHint || 'placeholder image';

  return (
    <motion.div
      layoutId={`card-container-${project.name}`}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative aspect-video w-full">
            <Image
              src={imageUrl}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={imageHint}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </CardHeader>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between">
            <motion.div layoutId={`title-${project.name}`}>
              <CardTitle className="font-headline text-lg text-white">
                {project.name}
              </CardTitle>
            </motion.div>
            <Badge
              className={`text-xs ${
                statusColors[project.status] || 'bg-secondary'
              } transition-colors`}
            >
              {project.status}
            </Badge>
          </div>
          <motion.div layoutId={`description-${project.name}`}>
            <CardDescription className="mt-1 text-sm text-gray-300 line-clamp-2">
              {project.description}
            </CardDescription>
          </motion.div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 p-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-sm text-gray-200">{project.insight}</p>
        </div>
      </Card>
    </motion.div>
  );
}
