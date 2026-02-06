'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Project } from '@/lib/projects-data';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        layoutId={`card-container-${project.name}`}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-3xl"
      >
        <Card className="max-h-[90vh] overflow-y-auto">
          <CardHeader className="p-0">
            <div className="relative aspect-video w-full">
              <Image
                src={project.image.imageUrl}
                alt={project.name}
                fill
                className="object-cover"
                data-ai-hint={project.image.imageHint}
              />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4">
              <motion.div layoutId={`title-${project.name}`}>
                <CardTitle className="font-headline text-3xl">
                  {project.name}
                </CardTitle>
              </motion.div>
              <div className="flex flex-shrink-0 items-center gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-accent/20 text-accent-foreground border-accent/40"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <motion.div layoutId={`description-${project.name}`}>
              <CardDescription className="mt-2 text-lg">
                {project.description}
              </CardDescription>
            </motion.div>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-headline text-xl font-semibold">
                  Problem Statement
                </h3>
                <p className="mt-2 text-muted-foreground">{project.problem}</p>
              </div>

              <div>
                <h3 className="font-headline text-xl font-semibold">
                  Design Approach
                </h3>
                <p className="mt-2 text-muted-foreground">{project.design}</p>
                <div
                  className="mt-4 rounded-lg border bg-card p-4"
                  dangerouslySetInnerHTML={{ __html: project.architectureSVG }}
                />
              </div>

              <div>
                <h3 className="font-headline text-xl font-semibold">
                  Tradeoffs & Failures
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {project.tradeoffs}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 text-white"
      >
        <X className="h-6 w-6" />
      </button>
    </div>
  );
}
