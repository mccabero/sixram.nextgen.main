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
        description="A creative local music space for band rehearsal, live recording support, and practical session assistance."
        eyebrow="Sixram Band Studio"
        primaryHref="/contact"
        primaryLabel="Book or inquire"
        secondaryHref="/technologies"
        secondaryLabel="Explore technologies"
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
                    <Icon aria-hidden="true" className="text-indigo-700" size={24} />
                    <h3 className="mt-4 text-lg font-bold text-slate-950">{item.label}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-slate-200/80 bg-slate-50/80">
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
                    <p className="text-sm font-semibold text-slate-700">{service}</p>
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
                    <p className="text-sm font-semibold text-slate-700">{item}</p>
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
              <h2 className="mt-5 text-2xl font-bold text-slate-950">Promo and rates</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Rates, schedules, and promo details can be added once booking rules are
                finalized.
              </p>
            </div>
            <div className="glass-panel rounded-xl p-6 lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-950">Gallery placeholder</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {["Studio room", "Live session", "Creative space"].map((item) => (
                  <div
                    className="flex aspect-[4/3] items-end rounded-xl border border-slate-200 bg-gradient-to-br from-white via-sky-50 to-indigo-100 p-4 shadow-sm"
                    key={item}
                  >
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
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
