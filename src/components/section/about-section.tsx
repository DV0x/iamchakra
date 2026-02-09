import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import WorkSection from "@/components/section/work-section";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function AboutSection() {
  const summaryParagraphs = DATA.summary.split("\n\n");
  const skillCategories = Object.entries(
    DATA.skills as Record<string, readonly string[]>
  );

  return (
    <section id="about">
      <div className="flex flex-col gap-16">
        {/* Summary */}
        <div className="flex flex-col gap-6">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              About
            </h2>
          </BlurFade>
          <div className="flex flex-col gap-4 max-w-3xl">
            {summaryParagraphs.map((paragraph, index) => (
              <BlurFade
                key={index}
                delay={BLUR_FADE_DELAY * 15 + index * 0.06}
              >
                <p className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-8">
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              Skills
            </h3>
          </BlurFade>
          <div className="flex flex-col gap-6">
            {skillCategories.map(([category, skills], catIndex) => (
              <BlurFade
                key={category}
                delay={BLUR_FADE_DELAY * 19 + catIndex * 0.06}
              >
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium border border-border rounded-full px-3 py-1 text-foreground/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="flex flex-col gap-6">
          <BlurFade delay={BLUR_FADE_DELAY * 22}>
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              Experience
            </h3>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 23}>
            <WorkSection />
          </BlurFade>
        </div>

        {/* Education */}
        <div className="flex flex-col gap-6">
          <BlurFade delay={BLUR_FADE_DELAY * 24}>
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              Education
            </h3>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 25}>
            <div className="relative pl-6">
              {/* Vertical timeline line */}
              <div className="absolute left-[3px] top-2 bottom-2 w-px bg-border" />

              <div className="flex flex-col gap-8">
                {DATA.education.map((edu, index) => (
                  <Link
                    key={edu.school}
                    href={edu.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group relative"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute -left-6 top-1.5 size-[7px] rounded-full ring-2 ring-background z-10 ${
                        index === 0 ? "bg-primary" : "bg-muted-foreground/50"
                      }`}
                    />
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none">
                        {edu.school}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {edu.degree}
                      </div>
                    </div>
                    <div className="text-xs tabular-nums text-muted-foreground text-right flex-none">
                      {edu.start} – {edu.end}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
