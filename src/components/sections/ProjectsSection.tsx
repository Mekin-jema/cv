import { Code, ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { logEvent, EventCategories, EventActions } from '@/lib/analytics';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { CardFooter } from '../ui/card';
import { useState } from 'react';

export function ProjectsSection() {
  const handleProjectClick = (projectName: string, projectLink: string) => {
    logEvent(EventCategories.PROJECTS, EventActions.CLICK, projectName);
    window.location.href = projectLink;
  };

  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <CollapsibleProject key={project.title} project={project} handleClick={handleProjectClick} />
        ))}
      </div>
    </section>
  );
}

// Collapsible Project Component
interface CollapsibleProjectProps {
  project: typeof projects[0];
  handleClick: (title: string, link: string) => void;
}

const CollapsibleProject: React.FC<CollapsibleProjectProps> = ({ project, handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SpotlightCard className="group h-auto w-full">
      <div className="aspect-video relative overflow-hidden rounded-xl mb-4 bg-gradient-to-br from-background/50 to-background/80 shadow-lg ring-1 ring-border/20 hover:ring-primary/30 transition-all duration-300">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        <OptimizedImage
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="object-cover w-full h-full transition-transform duration-300"
          priority={projects.indexOf(project) < 3}
        />
      </div>

      <div className="px-4 text-left mb-4">
        <h3 className="text-xl font-semibold mb-2 flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <span className="flex items-center gap-2">
            {project.title}
            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </h3>

        {isOpen && (
          <p className="text-muted-foreground mb-4 text-sm md:text-base text-left text-wrap transition-all duration-300">
            {project.description}
          </p>
        )}

        <div className="flex gap-2 flex-wrap">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-secondary px-2 py-1 rounded-md text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <CardFooter>
        <Button variant="outline" className="w-full group gap-2" onClick={() => handleClick(project.title, project.link)}>
          <Github className="h-4 w-4" />
          <span>Link to Project</span>
          <Code className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </SpotlightCard>
  );
};
