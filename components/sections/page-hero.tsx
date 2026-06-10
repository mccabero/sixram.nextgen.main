import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200/80 bg-brand-radial pt-32">
      <div className="absolute inset-0 -z-10 bg-grid-lines bg-[length:54px_54px] opacity-45" />
      <div className="container pb-20 pt-8">
        <div className="max-w-4xl">
          <Badge>{eyebrow}</Badge>
          <h1 className="mt-6 text-balance text-4xl font-black tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            {description}
          </p>
          {primaryHref && primaryLabel ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={primaryHref} size="lg">
                {primaryLabel}
              </ButtonLink>
              {secondaryHref && secondaryLabel ? (
                <ButtonLink href={secondaryHref} size="lg" variant="secondary">
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
