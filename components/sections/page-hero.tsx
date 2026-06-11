import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  variant = "default"
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  variant?: "default" | "studio" | "technologies";
}) {
  const isTechnologies = variant === "technologies";
  const isStudio = variant === "studio";

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-white/10 pt-32 text-white",
        isTechnologies && "technologies-hero-bg lg:min-h-[760px]",
        isStudio && "studio-hero-bg lg:min-h-[720px]",
        !isTechnologies && !isStudio && "page-hero-bg"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 -z-10 bg-grid-lines bg-[length:54px_54px]",
          isTechnologies ? "opacity-10" : "opacity-20"
        )}
      />
      <div
        className={cn(
          "container pb-20 pt-12",
          isTechnologies && "lg:pb-24 lg:pt-14",
          isStudio && "lg:pb-28 lg:pt-24"
        )}
      >
        <div className={cn("hero-enter max-w-4xl", isTechnologies && "max-w-3xl")}>
          {eyebrow ? (
            <Badge className="border-cyan-300/25 bg-black/45 text-cyan-100 shadow-none backdrop-blur">
              {eyebrow}
            </Badge>
          ) : null}
          <h1
            className={cn(
              "mt-7 max-w-5xl text-balance text-5xl font-light leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl",
              isTechnologies && "font-black lg:text-7xl",
              isStudio && "studio-hero-title font-black uppercase sm:text-6xl lg:text-8xl"
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "mt-6 max-w-3xl text-lg font-medium leading-8 text-slate-200 sm:text-xl",
              isStudio &&
                "studio-hero-copy max-w-2xl border-l-2 border-cyan-300 pl-4 text-base font-black leading-7 text-white sm:text-lg"
            )}
          >
            {description}
          </p>
          {primaryHref && primaryLabel ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={primaryHref} size="lg" variant="gold">
                {primaryLabel}
              </ButtonLink>
              {secondaryHref && secondaryLabel ? (
                <ButtonLink
                  className="border-white/15 bg-white/10 text-white shadow-none backdrop-blur hover:border-cyan-200/35 hover:bg-white/15"
                  href={secondaryHref}
                  size="lg"
                  variant="secondary"
                >
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
