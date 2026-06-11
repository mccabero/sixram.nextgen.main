import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-slate-300">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link className="inline-flex items-center gap-4" href="/">
              <span className="text-xl font-black uppercase tracking-[0.16em] text-white">
                Sixram
              </span>
              <span>
                <span className="block text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
                  {siteConfig.title}
                </span>
                <span className="block text-sm text-slate-500">Software and studio.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
              Sixram is the personal and business brand of Marxis Cabero, focused on
              practical software systems, automation, and creative studio services.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.12em] text-slate-100">
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
            <h2 className="text-xs font-black uppercase tracking-[0.12em] text-slate-100">
              Contact
            </h2>
            <Link
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition hover:text-white"
              href="/contact"
            >
              Start an inquiry
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              Built for Vercel now, ready for database and CMS integrations later.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Sixram. All rights reserved.</p>
          <p>Technology, automation, studio.</p>
        </div>
      </div>
    </footer>
  );
}
