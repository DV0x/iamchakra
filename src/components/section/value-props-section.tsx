import BlurFade from "@/components/magicui/blur-fade";
import { Target, Zap, Rocket } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const valueProps = [
  {
    icon: Target,
    title: "Find the bottleneck",
    description:
      "I sit with the people running the business, find what is actually slowing them down, and scope the smallest thing that fixes it.",
  },
  {
    icon: Zap,
    title: "Build the tool",
    description:
      "Agents, web apps and ad engines, built with Claude Code and the Claude Agent SDK. Bill of Lading drafting, booking and refund ops, on-brand ad creative.",
  },
  {
    icon: Rocket,
    title: "Run the growth",
    description:
      "Meta and Google Ads, funnels, and WhatsApp and SMS follow-ups, so what I build gets used and gets measured.",
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
