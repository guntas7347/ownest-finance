import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white/90 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img src="/ownest-t.png" alt="Ownest Finance Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                OWNEST FINANCE PTY LTD
              </span>
            </Link>
            <p className="max-w-md text-white/60 leading-relaxed">
              Redefining the architecture of modern wealth. We provide the
              capital and the clarity needed to navigate complex financial
              landscapes.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">
              Solutions
            </h4>
            <ul className="space-y-4 text-white/50 font-medium">
              <li>
                <Link className="hover:text-primary transition-colors" href="/loans/asset-loans">
                  Asset Loans
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Home Financing
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Bridge Loans
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Wealth Management
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">
              Company
            </h4>
            <ul className="space-y-4 text-white/50 font-medium">
              <li>
                <Link className="hover:text-primary transition-colors" href="/about">
                  Our Story
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Expert Team
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>© {new Date().getFullYear()} OWNEST FINANCE PTY LTD. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Credit License: 690 727 247</span>
            <span>ABN: 74 690 727 247</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
