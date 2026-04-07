import Link from "next/link";
import { BarChart3, BriefcaseBusiness, Layers3, Sparkles } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/ideas", label: "Ideas" },
  { href: "/rankings", label: "Rankings" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/admin/intake", label: "Admin" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-2">
            <Layers3 className="h-5 w-5 text-cyan-300" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-wide text-white">
              VentureRank OS
            </div>
            <div className="text-xs text-neutral-400">
              The Venture Operating System
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200">
            <BriefcaseBusiness className="h-4 w-4 text-cyan-300" />
            Portfolio live
            <BarChart3 className="h-4 w-4 text-cyan-300" />
            <Sparkles className="h-4 w-4 text-cyan-300" />
          </div>
          <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Operational</span>
          </div>
        </div>
      </div>
    </header>
  );
}
