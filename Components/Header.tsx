"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Home,
  Car,
  RefreshCw,
  Building2,
  ArrowRight,
  Calculator,
  TrendingUp,
} from "lucide-react";

const SERVICES = [
  {
    href: "/services/home-loan",
    icon: Home,
    label: "Home Loans",
    desc: "Residential mortgages",
  },
  {
    href: "/services/asset-finance",
    icon: Car,
    label: "Asset Finance",
    desc: "Vehicles & equipment",
  },
  {
    href: "/services/refinance",
    icon: RefreshCw,
    label: "Refinance",
    desc: "Switch & save",
  },
  {
    href: "/services/smsf",
    icon: Building2,
    label: "SMSF Loans",
    desc: "Self-managed super loans",
  },
];

const NAV_LINKS = [
  { href: "/calculators", label: "Calculators", icon: Calculator },
  { href: "/rates", label: "Rates", icon: TrendingUp },
  { href: "/about", label: "About", icon: null },
  { href: "/blog", label: "Blog", icon: null },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Tighten glass on scroll
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navLinkClass = (href: string) =>
    `text-sm font-medium transition-colors ${
      pathname === href
        ? "text-primary"
        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
    }`;

  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 z-50 px-4 sm:px-6 py-2.5 transition-all duration-300`}
      >
        {/* ── Pill navbar ─────────────────────────────────────────────────── */}
        <div
          className={`max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-5 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "py-2 bg-white/70 dark:bg-[#1a130f]/80 backdrop-blur-3xl border border-white/60 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
              : "py-2.5 bg-white/50 dark:bg-[#1a130f]/60 backdrop-blur-2xl border border-white/50 dark:border-white/8 shadow-[0_2px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
          }`}
          style={{
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0 group"
          >
            <div className="w-7 h-7 rounded-full overflow-hidden ring-1 ring-black/10 dark:ring-white/10 group-hover:ring-primary/40 transition-all">
              <img
                src="/ownest-t.png"
                alt="Ownest Finance"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-bold text-gray-900 dark:text-white tracking-tight hidden sm:block">
              Ownest <span className="text-primary">Finance</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-xl transition-all ${
                  dropdownOpen
                    ? "bg-gray-100 dark:bg-white/8 text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100/70 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Glass dropdown */}
              <div
                className={`absolute top-[calc(100%+6px)] -left-2 w-64 transition-all duration-200 origin-top ${
                  dropdownOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="bg-white/80 dark:bg-[#2a1e15]/90 backdrop-blur-2xl border border-white/60 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden p-1.5">
                  {SERVICES.map(({ href, icon: Icon, label, desc }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/8 dark:hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white leading-none mb-0.5">
                          {label}
                        </p>
                        <p className="text-[10px] text-gray-400 dark:text-gray-500">
                          {desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                  <div className="mt-1 mx-1 p-2.5 rounded-xl bg-primary/5 border border-primary/10">
                    <Link
                      href="/contact"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center justify-between text-xs font-bold text-primary"
                    >
                      Speak to a broker
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-xl transition-all hover:bg-gray-100/70 dark:hover:bg-white/5 ${navLinkClass(href)}`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Call button — always visible on mobile */}
            <Link
              href="tel:+611234567890"
              className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-200 shadow-sm"
              title="Call us"
            >
              <Phone className="w-3.5 h-3.5" />
            </Link>

            {/* Contact CTA — desktop only */}
            <Link href="/contact" className="hidden lg:block">
              <button className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-primary-dark transition-colors shadow-sm shadow-primary/20">
                Contact Us
              </button>
            </Link>

            {/* Hamburger — tablet/mobile */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-xl bg-gray-100/70 dark:bg-white/8 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-white/15 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* ── Mobile panel ────────────────────────────────────────────────── */}
        <div
          className={`lg:hidden max-w-5xl mx-auto mt-2 overflow-hidden rounded-2xl transition-all duration-300 ease-in-out ${
            open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/85 dark:bg-[#1a130f]/90 backdrop-blur-2xl border border-white/60 dark:border-white/10 shadow-2xl rounded-2xl p-4 space-y-1">
            {/* Services group */}
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-3 pt-1 pb-1">
              Services
            </p>
            {SERVICES.map(({ href, icon: Icon, label, desc }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/6 dark:hover:bg-white/5 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white leading-none mb-0.5">
                    {label}
                  </p>
                  <p className="text-[10px] text-gray-400">{desc}</p>
                </div>
              </Link>
            ))}

            <div className="border-t border-gray-100 dark:border-white/8 pt-2 mt-2 space-y-0.5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-3 pb-1">
                More
              </p>
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-white/5 ${navLinkClass(href)}`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA row */}
            <div className="pt-2 flex gap-2">
              <Link href="tel:+611234567890" className="flex-1">
                <button className="w-full flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 py-2.5 rounded-xl text-sm font-semibold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  Call Us
                </button>
              </Link>
              <Link
                href="/contact"
                className="flex-1"
                onClick={() => setOpen(false)}
              >
                <button className="w-full flex items-center justify-center gap-2 bg-primary text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm">
                  Contact Us
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
