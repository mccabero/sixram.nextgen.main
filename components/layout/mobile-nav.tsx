"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const mobileNavigationItems = navigationItems.filter((item) => item.href !== "/contact");
  const isContactPage = pathname.startsWith("/contact");

  return (
    <div className="relative z-[60] md:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.18] bg-white/[0.12] text-cyan-50 shadow-sm shadow-cyan-950/30 backdrop-blur transition hover:border-cyan-200 hover:bg-cyan-300 hover:text-slate-950",
          open && "border-cyan-300 bg-cyan-300 text-slate-950"
        )}
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        {open ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="fixed inset-x-4 top-24 overflow-hidden rounded-2xl border border-white/[0.16] bg-slate-950/[0.94] p-3 shadow-[0_24px_70px_rgba(2,6,23,0.46)] ring-1 ring-black/[0.08] backdrop-blur-2xl"
            exit={reduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <nav
              aria-label="Mobile navigation"
              className="grid gap-1 rounded-xl border border-white/[0.14] bg-white/[0.08] p-1 shadow-inner shadow-white/5"
            >
              {mobileNavigationItems.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-3 text-xs font-black uppercase tracking-[0.08em] text-slate-100 transition hover:bg-white/[0.14] hover:text-white",
                      active &&
                        "bg-cyan-300 text-slate-950 shadow-[0_8px_24px_rgba(34,211,238,0.18)] hover:bg-cyan-200 hover:text-slate-950"
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
              className={cn(
                "mt-3 h-11 w-full rounded-xl border-white/[0.18] bg-white/[0.12] text-xs text-white shadow-none hover:border-cyan-200 hover:bg-cyan-300 hover:text-slate-950",
                isContactPage && "border-cyan-300 bg-cyan-300 text-slate-950"
              )}
              href="/contact"
              onClick={() => setOpen(false)}
              size="sm"
            >
              Contact
              <ArrowUpRight aria-hidden="true" size={16} />
            </ButtonLink>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
