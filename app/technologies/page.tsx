import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ProjectCard } from "@/components/cards/project-card";
import { CtaSection } from "@/components/sections/cta-section";
import { NumberedTitle } from "@/components/sections/numbered-title";
import { PageHero } from "@/components/sections/page-hero";
import { projects } from "@/data/projects";
import {
  developmentProcess,
  technologyServices,
  technologySolutions
} from "@/data/services";
import { techStack } from "@/data/tech-stack";

export const metadata: Metadata = {
  title: "Sixram Technologies",
  description:
    "Sixram Technologies provides custom software development, business web applications, APIs, dashboards, database design, automation, AI-assisted tools, and cloud deployment."
};

export default function TechnologiesPage() {
  return (
    <main className="editorial-shell technologies-page">
      <PageHero
        description="Custom software development, business systems, automation, APIs, dashboards, database design, AI-assisted tools, and cloud deployment for practical operations."
        eyebrow="Sixram Technologies"
        primaryHref="/contact"
        primaryLabel="Start a software inquiry"
        secondaryHref="#featured-projects"
        secondaryLabel="View projects"
        title="Business-focused software built for operations, growth, and clarity."
        variant="technologies"
      />

      <NumberedTitle label="Services" number="01" />
      <section className="dark-feature">
        <div className="container relative z-10 grid gap-4 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-24">
          {technologyServices.map((service) => {
            const Icon = service.icon;

            return (
              <article className="dark-card flex min-h-[18rem] flex-col p-5" key={service.title}>
                <Icon aria-hidden="true" className="text-cyan-200" size={24} />
                <h2 className="mt-6 text-xl font-black text-white">{service.title}</h2>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <NumberedTitle label="Solutions" number="02" />
      <section className="section-y surface-band">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="editorial-kicker text-cyan-800">Business patterns</p>
            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
              Practical platforms for records, customers, bookings, reports, and teams.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {technologySolutions.map((solution) => (
              <div
                className="flex items-start gap-3 border border-slate-200 bg-white p-4"
                key={solution}
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-cyan-700"
                  size={18}
                />
                <p className="text-sm font-bold leading-6 text-slate-700">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NumberedTitle label="Stack" number="03" />
      <section className="dark-feature">
        <div className="container relative z-10 grid gap-4 py-16 md:grid-cols-2 xl:grid-cols-5 lg:py-24">
          {techStack.map((group) => (
            <article className="dark-card p-5" key={group.category}>
              <h2 className="text-xl font-black text-white">{group.category}</h2>
              <div className="mt-6 grid gap-2">
                {group.items.map((item) => (
                  <span
                    className="border border-white/12 px-3 py-2 text-sm font-bold text-slate-300"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <NumberedTitle label="Process" number="04" />
      <section className="section-y surface-band">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {developmentProcess.map((step, index) => {
              const Icon = step.icon;

              return (
                <article className="border border-slate-200 bg-white p-4" key={step.title}>
                  <div className="flex items-center justify-between gap-3">
                    <Icon aria-hidden="true" className="text-cyan-700" size={19} />
                    <span className="text-xs font-black text-slate-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-4 text-base font-black text-slate-950">{step.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <NumberedTitle label="Work" number="05" />
      <section className="section-y" id="featured-projects">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        description="Share the system, dashboard, workflow, automation, or platform you want to build and Sixram can help shape the next step."
        primaryLabel="Discuss a software project"
        title="Need a practical digital system for your business?"
      />
    </main>
  );
}
