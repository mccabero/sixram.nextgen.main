import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import { CtaSection } from "@/components/sections/cta-section";
import { NumberedTitle } from "@/components/sections/numbered-title";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { StudioGalleryCarousel } from "@/components/studio/studio-gallery-carousel";
import { studioEquipment, studioServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Sixram Band Studio",
  description:
    "Sixram Band Studio is a local creative space for band rehearsal, live recording support, and music sessions."
};

export default function StudioPage() {
  return (
    <main className="editorial-shell">
      <PageHero
        description="A no-fuss band room for rehearsals, live recording support, and session prep with real stage energy."
        primaryHref="/contact"
        primaryLabel="Book the room"
        secondaryHref="/technologies"
        secondaryLabel="Explore Sixram Tech"
        title="Rehearse loud. Record live. Play tighter."
        variant="studio"
      />

      <NumberedTitle label="Gallery" number="01" />
      <StudioGalleryCarousel />

      <NumberedTitle label="Services" number="02" />
      <section className="section-y surface-band">
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
                  <div className="glass-panel interactive-card p-4" key={service}>
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
                  <div className="glass-panel interactive-card p-4" key={item}>
                    <p className="text-sm font-semibold text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <NumberedTitle label="Environment" number="03" />
      <section className="section-y">
        <div className="container">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="glass-panel interactive-card p-6">
              <CalendarDays aria-hidden="true" className="text-amber-600" size={26} />
              <h2 className="mt-5 text-2xl font-bold text-slate-950">Promo and rates</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Rates, schedules, and promo details can be added once booking rules are
                finalized.
              </p>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-slate-950">Studio environment</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {["Studio room", "Live session", "Creative space"].map((item, index) => (
                  <figure
                    className="relative aspect-[4/3] overflow-hidden border border-slate-200 shadow-sm shadow-slate-950/10"
                    key={item}
                  >
                    <Image
                      alt={`${item} at Sixram Band Studio`}
                      className="h-full w-full object-cover"
                      height={420}
                      sizes="(min-width: 1024px) 260px, (min-width: 640px) 33vw, 100vw"
                      src="/images/sixram-premium-studio.png"
                      style={{ objectPosition: `${34 + index * 18}% center` }}
                      unoptimized
                      width={560}
                    />
                    <figcaption className="absolute inset-x-3 bottom-3 border border-white/15 bg-slate-950/72 px-3 py-2 text-sm font-semibold text-white backdrop-blur">
                      {item}
                    </figcaption>
                  </figure>
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
    </main>
  );
}
