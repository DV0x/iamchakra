import BlurFade from "@/components/magicui/blur-fade";
import { Target, Zap, Rocket } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const valueProps = [
  {
    icon: Target,
    title: "AI Agents & Automation",
    description:
      "I build autonomous agents that handle real work — ad creative generation, document processing, lead qualification, internal ops. Not demos, production systems.",
  },
  {
    icon: Zap,
    title: "Web Apps & Platforms",
    description:
      "Full-stack web applications powered by AI. Lead-gen sites, dashboards, CRMs, customer-facing tools — scoped, built, and deployed.",
  },
  {
    icon: Rocket,
    title: "End-to-End Delivery",
    description:
      "I handle the full loop: scoping, building, deploying, and running growth campaigns. One person, no handoffs, no coordination overhead.",
  },
];

export default function ValuePropsSection() {
  return (
    <section id="what-i-do">
      <div className="flex flex-col gap-y-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            What I do
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((prop, index) => (
            <BlurFade
              key={prop.title}
              delay={BLUR_FADE_DELAY * 12 + index * 0.08}
            >
              <div className="flex flex-col gap-5 rounded-xl border border-border bg-card p-7 h-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <prop.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2.5">
                  <h3 className="text-lg font-semibold text-foreground">
                    {prop.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {prop.description}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
