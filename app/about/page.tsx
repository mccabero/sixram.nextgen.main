import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";

const capabilities = [
  ".NET and C#",
  "Next.js, React, and Angular",
  "SQL, MSSQL, and PostgreSQL planning",
  "Azure, Vercel, and Cloudflare",
  "Automation and AI-assisted development",
  "Business systems and technical leadership"
];

export const metadata: Metadata = {
  title: "About",
  description:
    "About Marxis Cabero, the full-stack developer and technical lead behind Sixram, focused on practical software solutions, automation, business systems, and studio services."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        description="Marxis Cabero is a full-stack developer and technical lead focused on building practical software solutions, business systems, automation tools, and scalable digital platforms."
        eyebrow="About Marxis Cabero"
        primaryHref="/contact"
        primaryLabel="Connect with Sixram"
        secondaryHref="/technologies#featured-projects"
        secondaryLabel="View technology projects"
        title="The builder behind Sixram's technology and studio direction."
      />

      <section className="section-y">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              description="Through Sixram, Marxis combines technology, business systems, and creative studio work into one focused brand. The work is grounded in software that helps businesses operate better, not technology for its own sake."
              eyebrow="Positioning"
              title="Full-stack development with a business-building mindset."
            />
            <div className="glass-panel rounded-2xl p-6">
              <p className="text-lg leading-8 text-slate-700">
                Marxis Cabero is a full-stack developer and technical lead focused on
                building practical software solutions, business systems, automation tools,
                and scalable digital platforms. Through Sixram, he combines technology,
                business systems, and creative studio work into one focused brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-slate-200/80 bg-slate-50/80">
        <div className="container">
          <SectionHeading
            description="Experience spans modern frontend applications, .NET APIs, relational data systems, cloud deployment, automation, and AI-assisted workflows."
            eyebrow="Experience"
            title="Technical depth connected to practical delivery."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div className="glass-panel flex items-start gap-3 rounded-xl p-4" key={capability}>
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-cyan-700"
                  size={18}
                />
                <p className="text-sm font-medium leading-6 text-slate-700">
                  {capability}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="glass-panel rounded-xl p-6">
              <h2 className="text-2xl font-bold text-slate-950">Mission</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Build useful digital systems and creative spaces that help businesses,
                teams, and local communities operate with more clarity and momentum.
              </p>
            </div>
            <div className="glass-panel rounded-xl p-6">
              <h2 className="text-2xl font-bold text-slate-950">Vision</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Grow Sixram into a trusted technology and studio brand where software,
                automation, and creative services reinforce one another.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        description="Reach out for software development, automation, studio inquiries, or business systems planning."
        primaryLabel="Contact Sixram"
        title="Let's turn practical ideas into working systems."
      />
    </>
  );
}
