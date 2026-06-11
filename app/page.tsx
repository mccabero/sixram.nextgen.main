import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { NumberedTitle } from "@/components/sections/numbered-title";
import { ButtonLink } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { developmentProcess, studioServices, technologyServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Sixram Technologies & Studio",
  description:
    "Sixram is the official brand hub for Marxis Cabero, Sixram Technologies, software development services, automation, and studio services."
};

const featuredSections = [
  {
    number: "01",
    label: "Software",
    title: "Business systems that make daily work clearer.",
    description:
      "Custom applications, dashboards, APIs, and data models built around the way a team actually operates.",
    href: "/technologies",
    cta: "Explore technology services"
  },
  {
    number: "02",
    label: "Automation",
    title: "Less repeated work. More useful signal.",
    description:
      "Workflow automation, AI-assisted tools, and operational helpers designed to remove friction from routine decisions.",
    href: "/technologies#featured-projects",
    cta: "View project directions"
  },
  {
    number: "03",
    label: "Studio",
    title: "A focused creative room for local music work.",
    description:
      "Sixram Band Studio supports rehearsal, recording assistance, session planning, and practical collaboration.",
    href: "/studio",
    cta: "Explore the studio"
  }
];

export default function HomePage() {
  return (
    <main className="editorial-shell">
      <HeroSection />

      <section className="statement-band">
        <div className="container py-20 sm:py-24 lg:py-28">
          <p className="mx-auto max-w-5xl text-balance text-center text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
            From business problem to working product, Sixram turns practical ideas into
            <strong> useful systems.</strong>
          </p>
        </div>
      </section>

      {featuredSections.map((section, index) => (
        <div key={section.number}>
          <NumberedTitle label={section.label} number={section.number} />
          <section className="dark-feature">
            <div className="container relative z-10 grid gap-12 py-16 lg:grid-cols-[0.74fr_1.26fr] lg:items-center lg:py-24">
              <div>
                <p className="editorial-kicker text-cyan-200">{section.label}</p>
                <h3 className="mt-5 max-w-xl text-balance text-3xl font-black leading-tight text-white sm:text-4xl">
                  {section.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                  {section.description}
                </p>
                <ButtonLink
                  className="mt-8 border-cyan-300/70 bg-transparent text-cyan-100 hover:bg-cyan-300 hover:text-slate-950"
                  href={section.href}
                  variant="secondary"
                >
                  {section.cta}
                  <ArrowRight aria-hidden="true" size={17} />
                </ButtonLink>
              </div>

              {index === 0 ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {technologyServices.slice(0, 6).map((service) => {
                    const Icon = service.icon;

                    return (
                      <article className="dark-card p-5" key={service.title}>
                        <Icon aria-hidden="true" className="text-cyan-200" size={22} />
                        <h4 className="mt-5 text-lg font-black text-white">{service.title}</h4>
                        <p className="mt-3 text-sm leading-6 text-slate-300">
                          {service.description}
                        </p>
                      </article>
                    );
                  })}
                </div>
              ) : null}

              {index === 1 ? (
                <div className="grid gap-4">
                  {developmentProcess.slice(0, 4).map((step, stepIndex) => {
                    const Icon = step.icon;

                    return (
                      <article
                        className="dark-card grid gap-5 p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center"
                        key={step.title}
                      >
                        <Icon aria-hidden="true" className="text-cyan-200" size={23} />
                        <div>
                          <h4 className="text-xl font-black text-white">{step.title}</h4>
                          <p className="mt-2 text-sm leading-6 text-slate-300">
                            {step.description}
                          </p>
                        </div>
                        <span className="text-4xl font-light text-white/28">
                          {String(stepIndex + 1).padStart(2, "0")}
                        </span>
                      </article>
                    );
                  })}
                </div>
              ) : null}

              {index === 2 ? (
                <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative min-h-[24rem] overflow-hidden border border-white/12">
                    <Image
                      alt="Sixram studio workspace with music and planning equipment"
                      className="h-full w-full object-cover"
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      src="/images/sixram-premium-studio.png"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  </div>
                  <div className="grid gap-3">
                    {studioServices.slice(0, 5).map((service) => (
                      <div className="dark-card flex items-start gap-3 p-4" key={service}>
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-cyan-200"
                          size={18}
                        />
                        <p className="text-sm font-bold leading-6 text-slate-200">
                          {service}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </section>
        </div>
      ))}

      <NumberedTitle label="Selected work" number="04" />
      <section className="dark-feature">
        <div className="container relative z-10 py-16 lg:py-24">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {projects.slice(0, 4).map((project) => (
              <article className="dark-card flex min-h-[20rem] flex-col p-5" key={project.name}>
                <p className="editorial-kicker text-cyan-200">{project.category}</p>
                <h3 className="mt-5 text-2xl font-black text-white">{project.name}</h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-6 blue-rule" />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.08em] text-slate-400">
                  {project.status}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        description="Reach out for software development, automation, business systems, or studio-related inquiries."
        primaryLabel="Start a conversation"
        secondaryHref="/technologies"
        secondaryLabel="View services"
        title="Have a system, workflow, or studio session in mind?"
      />
    </main>
  );
}
