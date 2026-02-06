'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projectsData, Project } from '@/lib/projects-data';
import { ProjectCard } from '@/components/projects/project-card';
import { ProjectModal } from '@/components/projects/project-modal';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categories = ['All', 'Web', 'Mobile', 'Backend', 'AI / Experiments'];

export default function ExplorePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Explore My Work
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          A selection of projects that showcase my skills in building robust
          and innovative solutions.
        </p>
      </div>

      <Tabs
        defaultValue="All"
        className="mt-12"
        onValueChange={setActiveCategory}
      >
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <motion.div
        layout
        className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
