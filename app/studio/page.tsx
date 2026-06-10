import type { Metadata } from "next";
import { CalendarDays, Music2, Radio, Settings2 } from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { studioEquipment, studioServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Sixram Band Studio",
  description:
    "Sixram Band Studio is a local creative space for band rehearsal, live recording support, and music sessions."
};

export default function StudioPage() {
  return (
    <>
      <PageHero
        description="A creative local music space for band rehearsal, live recording support, and practical session assistance while staying connected to the wider Sixram brand."
        eyebrow="Sixram Band Studio"
        primaryHref="/contact"
        primaryLabel="Book or inquire"
        secondaryHref="/ventures"
        secondaryLabel="View ventures"
        title="A focused rehearsal and recording space for local musicians."
      />

      <section className="section-y">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              description="The studio supports bands, performers, and creative teams who need a dependable room for rehearsal, practice, recording support, and local collaboration."
              eyebrow="About the Studio"
              title="Creative energy with the same premium Sixram foundation."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Rehearsal", icon: Music2 },
                { label: "Live recording", icon: Radio },
                { label: "Session support", icon: Settings2 }
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div className="glass-panel rounded-xl p-5" key={item.label}>
                    <Icon aria-hidden="true" className="text-violet-100" size={24} />
                    <h3 className="mt-4 text-lg font-bold text-white">{item.label}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-white/10 bg-slate-950/45">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                description="Support for the most common needs of local musicians and bands."
                eyebrow="Services"
                title="Rehearsal, recording, and creative session support."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {studioServices.map((service) => (
                  <div className="glass-panel rounded-xl p-4" key={service}>
                    <p className="text-sm font-semibold text-slate-100">{service}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading
                description="The first version keeps equipment details flexible while the studio setup is documented."
                eyebrow="Equipment"
                title="Practical essentials for rehearsal-ready sessions."
              />
              <div className="mt-8 grid gap-3">
                {studioEquipment.map((item) => (
                  <div className="glass-panel rounded-xl p-4" key={item}>
                    <p className="text-sm font-semibold text-slate-100">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="glass-panel rounded-xl p-6">
              <CalendarDays aria-hidden="true" className="text-amber-100" size={26} />
              <h2 className="mt-5 text-2xl font-bold text-white">Promo and rates</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Rates, schedules, and promo details can be added once booking rules are
                finalized.
              </p>
            </div>
            <div className="glass-panel rounded-xl p-6 lg:col-span-2">
              <h2 className="text-2xl font-bold text-white">Gallery placeholder</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {["Studio room", "Live session", "Creative space"].map((item) => (
                  <div
                    className="flex aspect-[4/3] items-end rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-violet-950/40 p-4"
                    key={item}
                  >
                    <span className="text-sm font-semibold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        description="Send a studio booking inquiry for rehearsal, recording support, availability, or collaboration."
        primaryLabel="Send studio inquiry"
        title="Planning a rehearsal or recording session?"
      />
    </>
  );
}
