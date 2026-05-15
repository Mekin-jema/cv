'use client';

import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import { logEvent, EventCategories, EventActions } from '@/lib/analytics';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Button } from '@/components/ui/button';

export function ProjectsSection() {
  const handleProjectClick = (projectName: string, projectLink: string) => {
    logEvent(EventCategories.PROJECTS, EventActions.CLICK, projectName);
    window.open(projectLink, '_blank', 'noopener noreferrer');
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="hidden md:block md:col-span-3"></div>

          <div className="md:col-span-9">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Selected work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                A focused selection of projects showing real delivery, technical depth, and product ownership.
              </p>
            </div>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:border-primary/25 hover:shadow-md"
                >
                  <div className="grid gap-0 lg:grid-cols-[280px,1fr]">
                    <div className="relative min-h-[220px] bg-muted/30 lg:min-h-full">
                      <OptimizedImage
                        src={project.image}
                        alt={project.title}
                        width={900}
                        height={700}
                        priority={index < 2}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent" />
                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/35 px-3 py-1 text-[11px] font-medium tracking-[0.2em] text-white backdrop-blur-sm">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                      </div>
                    </div>

                    <div className="p-6 md:p-7 flex flex-col justify-between gap-6">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-semibold leading-tight">{project.title}</h3>
                          <span className="rounded-full border border-border/70 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                            Case Study
                          </span>
                        </div>

                        <p className="text-sm md:text-[15px] leading-relaxed text-muted-foreground max-w-3xl">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 7).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground transition-colors group-hover:bg-secondary/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                        <Button
                          className="gap-2"
                          onClick={() => handleProjectClick(project.title, project.link)}
                        >
                          Open Project
                          <ExternalLink className="h-4 w-4" />
                        </Button>

                        <Button
                          variant="outline"
                          className="gap-2"
                          onClick={() => handleProjectClick(project.title, project.link)}
                        >
                          <Github className="h-4 w-4" />
                          Source / Repo
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
