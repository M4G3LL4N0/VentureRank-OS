"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BarChart3, BriefcaseBusiness, Layers3, Menu, Sparkles, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/ideas", label: "Ideas" },
  { href: "/rankings", label: "Rankings" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/admin/intake", label: "Admin" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 shadow-[0_1px_0_rgba(255,255,255,0.05)_inset] backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <div className="rounded-2xl border border-cyan-400/35 bg-cyan-400/10 p-2 shadow-[0_0_24px_rgba(34,211,238,0.18)]">
            <Layers3 className="h-5 w-5 text-cyan-200" />
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold tracking-wide text-white">
              VentureRank OS
            </div>
            <div className="truncate text-xs text-neutral-400">
              The Venture Operating System
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-md"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs text-neutral-200 backdrop-blur-md sm:flex">
            <BriefcaseBusiness className="h-4 w-4 text-cyan-300" />
            <span className="hidden lg:inline">Portfolio (demo)</span>
            <BarChart3 className="h-4 w-4 text-cyan-300" />
            <Sparkles className="h-4 w-4 text-cyan-300" />
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs text-neutral-200 backdrop-blur-md md:flex">
            <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
            <span>Demo workspace</span>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition hover:border-cyan-400/35 hover:bg-white/[0.1] md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/80 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2.5 text-sm text-neutral-200 transition hover:bg-white/[0.06] hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <p className="px-3 pt-1 text-[11px] leading-relaxed text-neutral-500">
              Venture scores are prioritization aids for planning — not investment advice or performance guarantees.
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
