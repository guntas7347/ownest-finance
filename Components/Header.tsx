"use client";

import React, { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/ownest-t.png"
                alt="Ownest Finance Logo"
                className="w-full h-full object-cover invert-0 dark:invert-0"
              />
            </div>
            Ownest Finance
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-8">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {dropdownOpen && (
                <div className="absolute top-[80px] -left-4 w-56 pt-2 pb-4">
                  <div className="bg-white dark:bg-[#2a1e15] shadow-xl border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden py-2">
                    <Link
                      href="/services/home-loan"
                      className="block px-6 py-3 text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-gray-900 dark:text-gray-200"
                    >
                      Home Loans
                    </Link>
                    <Link
                      href="/services/asset-finance"
                      className="block px-6 py-3 text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-gray-900 dark:text-gray-200"
                    >
                      Asset Finance
                    </Link>
                    <Link
                      href="/services/refinance"
                      className="block px-6 py-3 text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-gray-900 dark:text-gray-200"
                    >
                      Refinance
                    </Link>
                    <Link
                      href="/services/smsf"
                      className="block px-6 py-3 text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-gray-900 dark:text-gray-200"
                    >
                      SMSF Loans
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/calculators"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Calculators
            </Link>
            <Link
              href="/rates"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Rates
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Link href="/contact" className="hidden md:block">
            <button className="bg-[#e27b30] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              Contact Us
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-900 dark:text-white p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="lg:hidden bg-white dark:bg-[#2a1e15] border-t border-gray-200 dark:border-white/10 px-6 py-4 flex flex-col gap-4 shadow-xl">
          <div className="flex flex-col gap-2">
            <div className="font-bold text-gray-900 dark:text-white mb-2 pt-2">
              Services
            </div>
            <Link
              href="/services/home-loan"
              onClick={() => setOpen(false)}
              className="pl-4 text-sm text-gray-600 dark:text-gray-300 py-2"
            >
              Home Loans
            </Link>
            <Link
              href="/services/asset-finance"
              onClick={() => setOpen(false)}
              className="pl-4 text-sm text-gray-600 dark:text-gray-300 py-2"
            >
              Asset Finance
            </Link>
            <Link
              href="/services/refinance"
              onClick={() => setOpen(false)}
              className="pl-4 text-sm text-gray-600 dark:text-gray-300 py-2"
            >
              Refinance
            </Link>
            <Link
              href="/services/smsf"
              onClick={() => setOpen(false)}
              className="pl-4 text-sm text-gray-600 dark:text-gray-300 py-2 pb-4 border-b border-gray-100 dark:border-white/10"
            >
              SMSF Loans
            </Link>
          </div>
          <Link
            href="/calculators"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-gray-900 dark:text-white py-2"
          >
            Calculators
          </Link>
          <Link
            href="/rates"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-gray-900 dark:text-white py-2"
          >
            Rates
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-gray-900 dark:text-white py-2"
          >
            About
          </Link>
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-gray-900 dark:text-white py-2 pb-4 mb-2 border-b border-gray-100 dark:border-white/10"
          >
            Blog
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            <button className="w-full bg-[#e27b30] text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
