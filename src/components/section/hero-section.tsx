import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function HeroSection() {
  return (
    <section id="hero" className="py-20 sm:py-32">
      <div className="max-w-3xl space-y-8">
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          className="font-display text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight leading-[1.1] text-foreground"
          yOffset={8}
          text="I build AI products — from vision to production code."
        />

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Product manager with 8+ years of shipping. Currently building
            autonomous AI agents, RAG pipelines, and agentic workflows with
            Claude Code and Agent SDK.
          </p>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#C2410C] dark:hover:bg-[#FB923C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              View my work
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              About me
            </Link>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="flex items-center gap-2.5 pt-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm text-muted-foreground">
              Open to remote product roles (US time zones)
            </span>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
