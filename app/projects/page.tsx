import type { Metadata } from "next";
import { ProjectCard } from "@/components/cards/project-card";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Project showcase for Sixram software concepts, business systems, admin dashboards, monitoring tools, AI-assisted operations, and CMS platforms."
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        description="A showcase of business systems, dashboards, internal tools, monitoring concepts, AI-assisted operations, and planned content platforms."
        eyebrow="Project Showcase"
        primaryHref="/contact"
        primaryLabel="Plan a project"
        secondaryHref="/technologies"
        secondaryLabel="View services"
        title="Software projects shaped around operations, teams, and practical workflows."
      />

      <section className="section-y">
        <div className="container">
          <SectionHeading
            description="These projects represent the types of products and internal systems Sixram is building and preparing to deliver."
            eyebrow="Projects"
            title="Current, planned, and concept platforms."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        description="Bring a business system, dashboard, CMS, workflow automation, or AI-assisted operations idea and turn it into a clear build plan."
        primaryLabel="Discuss a project"
        title="Have a project that needs structure and execution?"
      />
    </>
  );
}
