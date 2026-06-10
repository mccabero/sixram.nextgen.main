import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export function CtaSection({
  title,
  description,
  primaryLabel = "Contact Sixram",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref
}: {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="section-y">
      <div className="container">
        <div className="premium-panel relative overflow-hidden rounded-2xl p-8 sm:p-10 lg:p-12">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.4fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-amber-200">
                Ready when you are
              </p>
              <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href={primaryHref} size="lg" variant="gold">
                {primaryLabel}
                <ArrowRight aria-hidden="true" size={18} />
              </ButtonLink>
              {secondaryHref && secondaryLabel ? (
                <ButtonLink
                  className="border-white/15 bg-white/10 text-white shadow-none hover:bg-white/15"
                  href={secondaryHref}
                  size="lg"
                  variant="secondary"
                >
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
