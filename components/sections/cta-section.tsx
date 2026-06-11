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
    <section className="statement-band">
      <div className="container">
        <div className="grid gap-8 py-16 lg:grid-cols-[1.4fr_auto] lg:items-center lg:py-20">
          <div>
            <p className="editorial-kicker">Ready when you are</p>
            <h2 className="mt-4 max-w-4xl text-balance text-4xl font-light leading-tight text-slate-950 sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-slate-950/80">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink
              className="border-slate-950 bg-slate-950 text-white hover:border-white hover:bg-white hover:text-slate-950"
              href={primaryHref}
              size="lg"
              variant="primary"
            >
              {primaryLabel}
              <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
            {secondaryHref && secondaryLabel ? (
              <ButtonLink
                className="border-slate-950 bg-transparent text-slate-950 hover:bg-slate-950 hover:text-white"
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
    </section>
  );
}
