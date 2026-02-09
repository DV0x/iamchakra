import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  const featured = DATA.projects.filter((p) => p.featured);
  const remaining = DATA.projects.filter((p) => !p.featured);

  return (
    <div className="flex flex-col gap-y-10">
      {/* Header */}
      <div className="flex flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            What I&apos;ve been building
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <p className="text-muted-foreground text-lg">
            A mix of AI agents, SaaS products, and tools — all live in
            production.
          </p>
        </BlurFade>
      </div>

      {/* Featured projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featured.map((project, idx) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 11 + idx * 0.05}
            className="h-full"
          >
            <ProjectCard
              title={project.title}
              href={project.href}
              description={project.description}
              oneLiner={project.oneLiner}
              status={project.status}
              tags={project.tags}
              repo={
                "repo" in project
                  ? (project as { repo: string }).repo
                  : undefined
              }
            />
          </BlurFade>
        ))}
      </div>

      {/* Divider */}
      <BlurFade delay={BLUR_FADE_DELAY * 14}>
        <div className="section-divider" />
      </BlurFade>

      {/* Remaining projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {remaining.map((project, idx) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 15 + idx * 0.05}
            className="h-full"
          >
            <ProjectCard
              title={project.title}
              href={project.href}
              description={project.description}
              oneLiner={project.oneLiner}
              status={project.status}
              tags={project.tags}
              repo={
                "repo" in project
                  ? (project as { repo: string }).repo
                  : undefined
              }
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
