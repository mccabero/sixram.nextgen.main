import type { Metadata } from "next";
import { VentureCard } from "@/components/cards/venture-card";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { ventures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "Explore Sixram ventures including Sixram Technologies, Sixram Band Studio, Gold's Jin, and Jinmarx Wellness & Beauty Center."
};

export default function VenturesPage() {
  return (
    <>
      <PageHero
        description="Sixram brings together software development, creative studio services, future retail plans, and featured local business activity under one growing brand."
        eyebrow="Sixram Ventures"
        primaryHref="/contact"
        primaryLabel="Discuss a venture"
        secondaryHref="/technologies"
        secondaryLabel="Explore technologies"
        title="A focused ecosystem of technology, creative, and local business ventures."
      />

      <section className="section-y">
        <div className="container">
          <SectionHeading
            align="center"
            description="Each venture has its own purpose, status, and audience while sharing the Sixram emphasis on practical execution and long-term brand building."
            eyebrow="Portfolio"
            title="Current and planned ventures."
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
          <div className="grid gap-4 md:grid-cols-4">
            {ventures.map((venture) => (
              <div className="glass-panel rounded-xl p-5" key={venture.name}>
                <p className="text-sm font-semibold text-cyan-100">{venture.status}</p>
                <h2 className="mt-3 text-xl font-bold text-white">{venture.name}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {venture.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        description="Contact Sixram for software services, studio-related inquiries, business partnerships, or future venture discussions."
        primaryLabel="Send an inquiry"
        title="Want to connect with one of the Sixram ventures?"
      />
    </>
  );
}
