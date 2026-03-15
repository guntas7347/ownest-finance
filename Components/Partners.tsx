import React from "react";
import Link from "next/link";

const PARTNERS = [
  { name: "ANZ", logo: "/banks/anz.png", link: "https://www.anz.com.au/" },
  {
    name: "Bankwest",
    logo: "/banks/bankwest.png",
    link: "https://www.bankwest.com.au/",
  },
  {
    name: "Commonwealth Bank",
    logo: "/banks/commonwealth.png",
    link: "https://www.commbank.com.au/",
  },
  { name: "ING", logo: "/banks/ing.png", link: "https://www.ing.com.au/" },
  {
    name: "Macquarie",
    logo: "/banks/macquarie.png",
    link: "https://www.macquarie.com.au/",
  },
  {
    name: "ME Bank",
    logo: "/banks/me.png",
    link: "https://www.mebank.com.au/",
  },
  { name: "NAB", logo: "/banks/nab.png", link: "https://www.nab.com.au/" },
  {
    name: "St George",
    logo: "/banks/st_george.png",
    link: "https://www.stgeorge.com.au/",
  },
  {
    name: "Suncorp",
    logo: "/banks/suncorp.png",
    link: "https://www.suncorp.com.au/",
  },
  {
    name: "Westpac",
    logo: "/banks/westpac.png",
    link: "https://www.westpac.com.au/",
  },
];

export default function Partners() {
  return (
    <section className="py-16 border-y border-gray-200/50 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-gray-500 tracking-[0.2em] uppercase dark:text-gray-400">
            Trusted by Australia's Leading Lenders
          </p>
        </div>

        <div
          className="relative w-full h-32 md:h-40 flex items-center overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-6 md:gap-8 w-max animate-scroll hover:[animation-play-state:paused] items-center py-4 px-4">
            {/* Duplicate the array twice for seamless loop */}
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <Link
                key={index}
                className="flex items-center justify-center w-40 h-20 md:w-52 md:h-24 bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1),0_15px_35px_-5px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-[#e27b30]/30 transition-all duration-300 px-6 py-4 shrink-0 group cursor-pointer"
                href={partner.link}
                target="_blank"
              >
                <img
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  src={partner.logo}
                  alt={partner.name}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
