import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";

const inquiryTypes = [
  "Software Development Inquiry",
  "Band Studio Booking",
  "Automation or Business Systems",
  "General Inquiry"
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sixram for software development inquiries, band studio bookings, automation, business systems, and general messages."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        description="Send an inquiry for software development, automation, business systems, studio bookings, or general Sixram conversations."
        eyebrow="Contact Sixram"
        title="Start the conversation with the right context."
      />

      <section className="section-y">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionHeading
                description="Choose the closest inquiry type so the message can be routed clearly when email or CRM integration is added later."
                eyebrow="Inquiry Types"
                title="What can Sixram help with?"
              />
              <div className="mt-8 grid gap-3">
                {inquiryTypes.map((type) => (
                  <div className="glass-panel rounded-xl p-4" key={type}>
                    <p className="text-sm font-semibold text-slate-700">{type}</p>
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <CtaSection
        description="The initial contact form uses client-side validation. Email, CRM, or CMS-backed submission can be connected in a future release."
        primaryHref="/technologies"
        primaryLabel="Review technology services"
        secondaryHref="/studio"
        secondaryLabel="Explore the studio"
        title="Sixram is ready for software and studio inquiries."
      />
    </>
  );
}
