import { ArrowRight, Layers3, RadioTower, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";

const capabilitySignals = [
  { label: "Software systems", icon: Layers3 },
  { label: "Automation", icon: Sparkles },
  { label: "Band studio", icon: RadioTower }
];

export function HeroSection() {
  return (
    <section className="hero-bg relative isolate min-h-[92svh] overflow-hidden border-b border-white/10 pt-28">
      <div className="absolute inset-0 -z-10 bg-grid-lines bg-[length:58px_58px] opacity-15" />
      <div className="container flex min-h-[calc(92svh-7rem)] flex-col justify-center pb-14">
        <Reveal className="w-full min-w-0 max-w-4xl">
          <Badge className="border-cyan-300/25 bg-slate-950/45 text-cyan-100 shadow-none backdrop-blur">
            Technology &bull; Automation &bull; Studio
          </Badge>
          <h1 className="mt-7 max-w-[12ch] text-balance text-4xl font-black leading-[0.98] tracking-normal text-white sm:max-w-none sm:text-6xl lg:text-7xl">
            Sixram Technologies & Studio
          </h1>
          <p className="mt-5 max-w-[22rem] text-balance text-xl font-semibold leading-snug text-cyan-100 sm:max-w-3xl sm:text-3xl">
            Building practical software systems and a focused creative studio.
          </p>
          <p className="mt-5 max-w-[22rem] break-words text-base leading-7 text-slate-200 sm:max-w-3xl sm:text-lg sm:leading-8">
            Sixram is the personal and business brand of Marxis Cabero, focused on
            custom software development, automation, digital platforms, music studio
            services, and practical business systems.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/technologies" size="lg" variant="gold">
              Explore Services
              <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
            <ButtonLink
              className="border-white/20 bg-white/10 text-white shadow-none backdrop-blur hover:border-cyan-200/40 hover:bg-white/15"
              href="/studio"
              size="lg"
              variant="secondary"
            >
              Explore Studio
            </ButtonLink>
            <ButtonLink
              className="text-slate-200 hover:bg-white/10 hover:text-white"
              href="/contact"
              size="lg"
              variant="ghost"
            >
              Contact
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal
          className="mt-12 grid w-full min-w-0 gap-3 sm:grid-cols-3 lg:max-w-3xl"
          delay={0.12}
        >
          {capabilitySignals.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
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
