import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";

const Header = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-6 py-3 rounded-full shadow-sm transition-all">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img src="/ownest-t.png" alt="Ownest Finance Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-brown dark:text-white">
            Ownest Finance
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link
            className="text-brown dark:text-white/80 hover:text-primary dark:hover:text-primary transition-colors"
            href="/loans/asset-loans"
          >
            Asset Loan
          </Link>
          <Link
            className="text-brown dark:text-white/80 hover:text-primary dark:hover:text-primary transition-colors"
            href="#"
          >
            Other Loans
          </Link>
          <Link
            className="text-brown dark:text-white/80 hover:text-primary dark:hover:text-primary transition-colors"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-brown dark:text-white/80 hover:text-primary dark:hover:text-primary transition-colors"
            href="#"
          >
            Resources
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/book-appointment">
            <Button size="sm" className="rounded-full">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
