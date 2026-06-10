"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ButtonLink } from "@/components/ui/button";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/72 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link className="group flex items-center gap-3" href="/" aria-label="Sixram home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-200/20 bg-cyan-200/10 text-sm font-black text-cyan-100 shadow-glow">
            SX
          </span>
          <span className="leading-none">
            <span className="block text-sm font-bold text-white">Sixram</span>
            <span className="block text-[11px] font-medium uppercase text-slate-400">
              NextGen
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/8 hover:text-white",
                  active && "bg-cyan-300/10 text-cyan-100"
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
          <ButtonLink href="/contact" size="sm">
            Contact
            <ArrowUpRight aria-hidden="true" size={16} />
          </ButtonLink>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
