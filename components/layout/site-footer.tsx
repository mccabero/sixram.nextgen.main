import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/90">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link className="inline-flex items-center gap-3" href="/">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-700/15 bg-cyan-50 text-sm font-black text-cyan-800">
                SX
              </span>
              <span>
                <span className="block font-bold text-slate-950">{siteConfig.title}</span>
                <span className="block text-sm text-slate-500">Software and studio.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
              Sixram is the personal and business brand of Marxis Cabero, focused on
              practical software systems, automation, and creative studio services.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase text-slate-800">
              Navigate
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {navigationItems.map((item) => (
                <Link
                  className="text-sm text-slate-600 transition hover:text-cyan-800"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase text-slate-800">
              Contact
            </h2>
            <Link
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-800 transition hover:text-slate-950"
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

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200/80 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Sixram. All rights reserved.</p>
          <p>Technology, automation, studio.</p>
        </div>
      </div>
    </footer>
  );
}
