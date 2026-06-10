import { ArrowRight, Layers3, RadioTower, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";

const capabilitySignals = [
  { label: "Software systems", icon: Layers3 },
  { label: "Automation", icon: Sparkles },
  { label: "Creative spaces", icon: RadioTower }
];

export function HeroSection() {
  return (
    <section className="hero-bg relative isolate min-h-[92svh] overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-grid-lines bg-[length:58px_58px] opacity-35" />
      <div className="container flex min-h-[calc(92svh-7rem)] flex-col justify-center pb-14">
        <Reveal className="max-w-4xl">
          <Badge>Technology &bull; Automation &bull; Ventures</Badge>
          <h1 className="mt-7 text-balance text-5xl font-black tracking-normal text-white sm:text-6xl lg:text-7xl">
            Sixram Technologies & Ventures
          </h1>
          <p className="mt-5 max-w-3xl text-balance text-2xl font-semibold text-cyan-100 sm:text-3xl">
            Building digital solutions, creative spaces, and business ventures.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Sixram is the personal and business brand of Marxis Cabero, focused on
            custom software development, automation, digital platforms, music studio
            services, and selected local ventures.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/technologies" size="lg">
              Explore Services
              <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
            <ButtonLink href="/ventures" size="lg" variant="secondary">
              View Ventures
            </ButtonLink>
            <ButtonLink href="/contact" size="lg" variant="ghost">
              Contact
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal
          className="mt-12 grid gap-3 sm:grid-cols-3 lg:max-w-3xl"
          delay={0.12}
        >
          {capabilitySignals.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="glass-panel flex items-center gap-3 rounded-xl px-4 py-3"
                key={item.label}
              >
                <Icon aria-hidden="true" className="text-cyan-200" size={18} />
                <span className="text-sm font-semibold text-slate-100">{item.label}</span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
