import BlurFade from "@/components/magicui/blur-fade";
import HeroSection from "@/components/section/hero-section";
import ProjectsSection from "@/components/section/projects-section";
import ValuePropsSection from "@/components/section/value-props-section";
import AboutSection from "@/components/section/about-section";
import ContactSection from "@/components/section/contact-section";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col gap-24 sm:gap-32">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <HeroSection />
      </BlurFade>

      <div className="section-divider" />

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <section id="projects">
          <ProjectsSection />
        </section>
      </BlurFade>

      <div className="section-divider" />

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <ValuePropsSection />
      </BlurFade>

      <div className="section-divider" />

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <AboutSection />
      </BlurFade>

      <div className="section-divider" />

      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <section id="contact">
          <ContactSection />
        </section>
      </BlurFade>
    </main>
  );
}
