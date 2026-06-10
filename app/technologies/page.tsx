import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ProjectCard } from "@/components/cards/project-card";
import { ServiceCard } from "@/components/cards/service-card";
import { TechCard } from "@/components/cards/tech-card";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
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
    <>
      <PageHero
        description="Custom software development, business systems, automation, APIs, dashboards, database design, AI-assisted tools, and cloud deployment for practical operations."
        eyebrow="Sixram Technologies"
        primaryHref="/contact"
        primaryLabel="Start a software inquiry"
        secondaryHref="#featured-projects"
        secondaryLabel="View projects"
        title="Business-focused software built for operations, growth, and clarity."
      />

      <section className="section-y">
        <div className="container">
          <SectionHeading
            description="From idea to deployed system, Sixram Technologies focuses on useful software that supports real workflows."
            eyebrow="Services"
            title="Core development services."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologyServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-y border-slate-200/80 bg-slate-50/80">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              description="The work is shaped around the systems businesses need most often: managing records, teams, customers, reporting, bookings, and automated steps."
              eyebrow="Solutions"
              title="Software patterns ready for real business use."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {technologySolutions.map((solution) => (
                <div
                  className="glass-panel flex items-start gap-3 rounded-xl p-4"
                  key={solution}
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-cyan-700"
                    size={18}
                  />
                  <p className="text-sm font-medium leading-6 text-slate-700">
                    {solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container">
          <SectionHeading
            align="center"
            description="A modern stack for frontend experiences, .NET APIs, reliable data layers, cloud deployment, automation, and AI-assisted development."
            eyebrow="Tech Stack"
            title="Built with tools that fit serious business systems."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {techStack.map((group) => (
              <TechCard key={group.category} {...group} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-y border-slate-200/80 bg-slate-50/80">
        <div className="container">
          <SectionHeading
            description="The process keeps scope clear while leaving room to improve the system after real users start using it."
            eyebrow="Development Process"
            title="A clean path from discovery to improvement."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {developmentProcess.map((step, index) => {
              const Icon = step.icon;

              return (
                <article className="glass-panel rounded-xl p-4" key={step.title}>
                  <div className="flex items-center justify-between gap-3">
                    <Icon aria-hidden="true" className="text-cyan-700" size={19} />
                    <span className="text-xs font-bold text-slate-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y" id="featured-projects">
        <div className="container">
          <SectionHeading
            description="Current and planned products show the type of practical business platforms Sixram is built to deliver."
            eyebrow="Featured Projects"
            title="Business systems, dashboards, and AI-assisted tools."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
    </>
  );
}
