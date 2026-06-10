import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProjectCard } from "@/components/cards/project-card";
import { ServiceCard } from "@/components/cards/service-card";
import { VentureCard } from "@/components/cards/venture-card";
import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/projects";
import { technologyServices, whyWorkWithSixram } from "@/data/services";
import { ventures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "Sixram Technologies & Ventures",
  description:
    "Sixram is the official brand hub for Marxis Cabero, Sixram Technologies, software development services, automation, studio services, projects, and ventures."
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section-y" id="about-sixram">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <SectionHeading
                description="Sixram is a growing technology and business brand led by Marxis Cabero, connecting software development, automation, creative spaces, and selected local ventures under one clear identity."
                eyebrow="About Sixram"
                title="A practical brand for digital systems and real business operations."
              />
            </Reveal>
            <Reveal className="grid gap-4 sm:grid-cols-3" delay={0.08}>
              {[
                ["Main focus", "Sixram Technologies"],
                ["Build style", "Business-first systems"],
                ["Venture mix", "Software, studio, local brands"]
              ].map(([label, value]) => (
                <div className="glass-panel rounded-xl p-5" key={label}>
                  <p className="text-sm font-semibold text-cyan-100">{label}</p>
                  <p className="mt-3 text-2xl font-bold text-white">{value}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-white/10 bg-slate-950/45">
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
          <SectionHeading
            align="center"
            description="A connected ecosystem of technology, creative studio services, future retail plans, and local business partnerships."
            eyebrow="Ventures"
            title="The Sixram brand is built around multiple focused ventures."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {ventures.map((venture) => (
              <VentureCard key={venture.name} {...venture} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-y border-white/10 bg-slate-950/45">
        <div className="container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              description="A showcase of business systems, internal tools, operations dashboards, monitoring concepts, CMS plans, and AI-assisted productivity ideas."
              eyebrow="Featured Projects"
              title="Projects shaped around practical operations and scalable platforms."
            />
            <ButtonLink className="w-fit" href="/projects" variant="secondary">
              View all projects
              <ArrowRight aria-hidden="true" size={17} />
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
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
                    className="mt-0.5 shrink-0 text-cyan-100"
                    size={19}
                  />
                  <p className="text-sm font-medium leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        description="Reach out for software development, business systems, automation, partnerships, or studio-related inquiries."
        primaryLabel="Start a conversation"
        secondaryHref="/studio"
        secondaryLabel="Explore the studio"
        title="Have a system, venture, or creative project in mind?"
      />
    </>
  );
}
