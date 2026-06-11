"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ButtonLink } from "@/components/ui/button";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const isStudioPage = pathname.startsWith("/studio");
  const desktopNavigationItems = navigationItems.filter((item) => item.href !== "/contact");
  const isContactPage = pathname.startsWith("/contact");

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50">
      <div className="container pointer-events-auto flex h-[4.6rem] items-center justify-between gap-3 rounded-2xl border border-white/[0.16] bg-slate-950/[0.9] px-3 shadow-[0_22px_80px_rgba(2,6,23,0.42)] ring-1 ring-black/[0.08] backdrop-blur-2xl sm:px-4">
        <Link
          aria-label={isStudioPage ? "Sixram Band Studio home" : "Sixram home"}
          className="group flex min-w-0 items-center gap-3 rounded-xl px-1.5 py-1.5 transition hover:bg-white/[0.06]"
          href="/"
        >
          {isStudioPage ? (
            <>
              <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/15 bg-white/10 shadow-lg shadow-black/25">
                <Image
                  alt="Sixram Band Studio logo"
                  className="h-full w-full object-cover"
                  height={88}
                  priority
                  src="/images/studio/sixram-band-studio-logo.jpg"
                  width={88}
                />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-black uppercase tracking-[0.08em] text-white sm:text-base">
                  Sixram Band Studio
                </span>
                <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100 sm:block">
                  Rehearsal & Live Recording
                </span>
              </span>
            </>
          ) : (
            <>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-200/20 bg-cyan-300/10 text-sm font-black text-cyan-100 shadow-lg shadow-black/20">
                6R
              </span>
              <span className="min-w-0">
                <span className="block text-xl font-black uppercase tracking-[0.14em] text-white">
                  Sixram
                </span>
                <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100 sm:block">
                  Technologies & Studio
                </span>
              </span>
            </>
          )}
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 rounded-full border border-white/[0.14] bg-white/[0.08] p-1 shadow-inner shadow-white/5 md:flex"
        >
          {desktopNavigationItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2.5 text-[11px] font-black uppercase tracking-[0.08em] text-slate-100 transition duration-200 hover:bg-white/[0.14] hover:text-white lg:px-4",
                  active &&
                    "bg-cyan-300 text-slate-950 shadow-[0_8px_24px_rgba(34,211,238,0.24)] hover:bg-cyan-200 hover:text-slate-950"
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            className={cn(
              "h-10 rounded-full border-white/[0.18] bg-white/[0.12] px-4 text-xs text-white shadow-none backdrop-blur hover:border-cyan-200 hover:bg-cyan-300 hover:text-slate-950",
              isContactPage && "border-cyan-300 bg-cyan-300 text-slate-950"
            )}
            href="/contact"
            size="sm"
          >
            {isStudioPage ? "Book Studio" : "Contact"}
            <ArrowUpRight aria-hidden="true" size={16} />
          </ButtonLink>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
