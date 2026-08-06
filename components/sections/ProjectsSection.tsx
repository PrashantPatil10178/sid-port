import Link from "next/link";
import { projects } from "@/lib/data";

export async function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">Some of my best work</p>
        </div>

        <div className="@container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.slug}
                className="@container/card group flex h-full flex-col bg-card border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image Placeholder */}
                {project.image && (
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                      <span className="text-4xl font-bold text-primary/30">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                )}

                {/* Project Content */}
                <div className="flex flex-1 flex-col p-4 @md/card:p-6 space-y-3 @md/card:space-y-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {project.category && (
                        <span className="text-xs px-2 py-0.5 @md/card:py-1 rounded-full bg-primary/10 text-primary">
                          {project.category}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg @md/card:text-xl font-semibold mb-2 line-clamp-2">
                      {project.title || "Untitled Project"}
                    </h3>
                    <p className="text-muted-foreground text-xs @md/card:text-sm leading-6">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 @md/card:gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={`${project.slug}-tech-${idx}`}
                          className="text-xs px-2 py-0.5 @md/card:py-1 rounded-md bg-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-col @xs/card:flex-row gap-2 @xs/card:gap-3 pt-2">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-3 py-2 @md/card:px-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-xs @md/card:text-sm"
                      >
                        Live Demo
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 @md/card:px-4 rounded-lg border hover:bg-accent transition-colors text-xs @md/card:text-sm text-center"
                      >
                        GitHub
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
