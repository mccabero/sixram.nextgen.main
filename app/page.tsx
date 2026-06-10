import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ProjectCard } from "@/components/cards/project-card";
import { ServiceCard } from "@/components/cards/service-card";
import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/projects";
import { studioServices, technologyServices, whyWorkWithSixram } from "@/data/services";

export const metadata: Metadata = {
  title: "Sixram Technologies & Studio",
  description:
    "Sixram is the official brand hub for Marxis Cabero, Sixram Technologies, software development services, automation, and studio services."
};

const aboutSignals = [
  ["Main focus", "Sixram Technologies"],
  ["Creative side", "Sixram Band Studio"],
  ["Build style", "Business-first systems"]
];

const processHighlights = [
  {
    title: "Clarify the business problem",
    description:
      "Start with users, daily workflows, constraints, and the outcome the system needs to support."
  },
  {
    title: "Shape the practical solution",
    description:
      "Turn the goal into pages, data, integrations, automation points, and release-ready milestones."
  },
  {
    title: "Build, validate, and improve",
    description:
      "Ship focused increments, test the important paths, and refine the product with real use."
  }
];

const homeMetrics = [
  ["8", "Technology service areas"],
  ["7", "Delivery phases"],
  ["6", "Studio support options"],
  ["1", "Unified Sixram brand hub"]
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section-y" id="about-sixram">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <Reveal>
              <SectionHeading
                description="Sixram is a growing technology and studio brand led by Marxis Cabero, connecting software development, automation, and creative studio services under one clear identity."
                eyebrow="About Sixram"
                title="A practical brand for digital systems and real business operations."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {aboutSignals.map(([label, value]) => (
                  <div className="glass-panel rounded-xl p-5" key={label}>
                    <p className="text-sm font-semibold text-cyan-800">{label}</p>
                    <p className="mt-3 text-xl font-bold text-slate-950">{value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal className="glass-panel rounded-2xl p-6 sm:p-8" delay={0.08}>
              <p className="text-sm font-semibold uppercase text-amber-700">
                How the work moves
              </p>
              <div className="mt-6 grid gap-5">
                {processHighlights.map((item, index) => (
                  <div
                    className="grid gap-4 rounded-xl border border-slate-200 bg-white/70 p-5 sm:grid-cols-[auto_1fr]"
                    key={item.title}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-slate-200/80 bg-slate-50/80">
        <div className="container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              description="Sixram Technologies is the core service offering, focused on custom applications, dashboards, APIs, data design, automation, and deployment-ready systems."
              eyebrow="Sixram Technologies"
              title="Software development for businesses that need useful systems."
            />
            <ButtonLink className="w-fit" href="/technologies" variant="secondary">
              View technology services
              <ArrowRight aria-hidden="true" size={17} />
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologyServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <SectionHeading
              description="Sixram connects planning, implementation, automation, and studio work into a clear path for practical digital projects."
              eyebrow="Sixram Snapshot"
              title="A focused path from discovery to launch."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {homeMetrics.map(([value, label]) => (
                <div className="glass-panel rounded-xl p-6" key={label}>
                  <p className="text-4xl font-black text-slate-950">{value}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-slate-200/80 bg-slate-50/80">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <SectionHeading
                description="Sixram Band Studio keeps the creative side focused: rehearsal, recording support, session planning, and local music collaboration."
                eyebrow="Sixram Band Studio"
                title="A focused studio space alongside the technology work."
              />
              <ButtonLink className="mt-6 w-fit" href="/studio" variant="secondary">
                Explore the studio
                <ArrowRight aria-hidden="true" size={17} />
              </ButtonLink>
            </div>
            <div className="premium-panel overflow-hidden rounded-2xl p-3">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  alt="Premium Sixram studio workspace with recording equipment and digital planning screens"
                  className="h-[24rem] w-full object-cover lg:h-[26rem]"
                  height={900}
                  sizes="(min-width: 1024px) 660px, 100vw"
                  src="/images/sixram-premium-studio.png"
                  unoptimized
                  width={1680}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 grid gap-3 sm:grid-cols-2">
                  {studioServices.slice(0, 4).map((service) => (
                    <div
                      className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/10 p-4 text-white shadow-2xl shadow-slate-950/30 backdrop-blur-xl"
                      key={service}
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-cyan-200"
                        size={19}
                      />
                      <p className="text-sm font-medium leading-6 text-slate-100">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              description="A rotating view of systems, dashboards, internal tools, and AI-assisted concepts that show the kind of practical work Sixram is built around."
              eyebrow="Featured Work"
              title="Recent and active project directions."
            />
            <ButtonLink className="w-fit" href="/projects" variant="secondary">
              View all projects
              <ArrowRight aria-hidden="true" size={17} />
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-y border-slate-200/80 bg-slate-50/80">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              description="Sixram is built with a maker's mindset and a practical understanding of how businesses actually operate day to day."
              eyebrow="Why Work With Sixram"
              title="Technology work guided by real business context."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {whyWorkWithSixram.map((item) => (
                <div className="glass-panel flex items-start gap-3 rounded-xl p-4" key={item}>
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-cyan-700"
                    size={19}
                  />
                  <p className="text-sm font-medium leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        description="Reach out for software development, business systems, automation, or studio-related inquiries."
        primaryLabel="Start a conversation"
        secondaryHref="/projects"
        secondaryLabel="View project work"
        title="Have a system, workflow, or studio session in mind?"
      />
    </>
  );
}
