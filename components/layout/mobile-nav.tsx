"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/8 text-slate-100 transition hover:bg-white/12"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        {open ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
      </button>

      {open ? (
        <div
          className="glass-panel absolute inset-x-4 top-16 rounded-xl p-3 shadow-glow"
          id="mobile-navigation"
        >
          <nav aria-label="Mobile navigation" className="grid gap-1">
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
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <ButtonLink
            className="mt-3 w-full"
            href="/contact"
            onClick={() => setOpen(false)}
            size="sm"
          >
            Contact
          </ButtonLink>
        </div>
      ) : null}
    </div>
  );
}
