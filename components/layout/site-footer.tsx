import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link className="inline-flex items-center gap-3" href="/">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-200/20 bg-cyan-200/10 text-sm font-black text-cyan-100">
                SX
              </span>
              <span>
                <span className="block font-bold text-white">{siteConfig.title}</span>
                <span className="block text-sm text-slate-400">Software, studio, ventures.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
              Sixram is the personal and business brand of Marxis Cabero, focused on
              practical software systems, automation, creative spaces, and selected
              local ventures.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase text-slate-300">
              Navigate
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {navigationItems.map((item) => (
                <Link
                  className="text-sm text-slate-400 transition hover:text-cyan-100"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase text-slate-300">
              Contact
            </h2>
            <Link
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition hover:text-white"
              href="/contact"
            >
              Start an inquiry
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
            <p className="mt-4 text-sm text-slate-500">
              Built for Vercel now, ready for database and CMS integrations later.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Sixram. All rights reserved.</p>
          <p>Technology, automation, ventures.</p>
        </div>
      </div>
    </footer>
  );
}
