import { ArrowRight, Layers3, RadioTower, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const capabilitySignals = [
  { label: "Software systems", icon: Layers3 },
  { label: "Automation", icon: Sparkles },
  { label: "Band studio", icon: RadioTower }
];

export function HeroSection() {
  return (
    <section className="hero-bg relative isolate min-h-[920px] overflow-hidden border-b border-white/10 pt-32 text-white">
      <div className="absolute inset-0 -z-10 bg-grid-lines bg-[length:72px_72px] opacity-10" />
      <div className="container flex min-h-[calc(920px-8rem)] flex-col justify-center pb-14">
        <div className="hero-enter editorial-hero-copy w-full min-w-0">
          <Badge className="border-cyan-300/30 bg-black/45 text-cyan-100 shadow-none backdrop-blur">
            Marxis Cabero &bull; Sixram
          </Badge>
          <h1 className="editorial-display mt-8 text-white">
            I Build
            <span className="block editorial-accent">Useful</span>
            Systems.
          </h1>
          <p className="mt-8 max-w-2xl text-base font-semibold leading-7 text-slate-100 sm:text-lg">
            Sixram is the personal home for my software development, automation,
            digital platforms, and focused band studio work.
          </p>
          <p className="mt-5 max-w-2xl text-sm font-bold leading-6 text-cyan-100 sm:text-base">
            Practical systems first. Clean execution. Creative work that still has a
            real operating model behind it.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/technologies" size="lg" variant="gold">
              View the work
              <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
            <ButtonLink
              className="border-white/25 bg-transparent text-white shadow-none backdrop-blur hover:border-white hover:bg-white hover:text-slate-950"
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
        </div>

        <div className="hero-enter hero-enter-delay mt-12 grid w-full min-w-0 gap-3 sm:grid-cols-3 lg:max-w-3xl">
          {capabilitySignals.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="interactive-card flex items-center gap-3 border border-white/15 bg-white/[0.06] px-4 py-3 text-white shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
                key={item.label}
              >
                <Icon aria-hidden="true" className="text-cyan-200" size={18} />
                <span className="text-sm font-semibold text-slate-100">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
