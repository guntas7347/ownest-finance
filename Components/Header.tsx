"use client";

import React, { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Asset Loan", href: "/loans/asset-loans" },
  { label: "Home Loan", href: "/loans/home-loans" },
  { label: "Debt Restructuring", href: "/debt-restructuring" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "#" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass-card px-6 py-3 rounded-xl md:rounded-full shadow-sm transition-all">

        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/ownest-t.png"
                alt="Ownest Finance Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-brown dark:text-white">
              Ownest Finance
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-brown dark:text-white/80 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <Link href="/book-appointment" className="hidden md:block">
              <Button size="sm" className="rounded-full">
                Get Free Consultation
              </Button>
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-brown dark:text-white"
              onClick={() => setOpen(!open)}
            >
              <Menu />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-brown dark:text-white/80 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <Link href="/book-appointment">
              <Button size="sm" className="rounded-full w-full">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;