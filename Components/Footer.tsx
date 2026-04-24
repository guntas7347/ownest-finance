import React from "react";
import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Shield,
  MessageCircle,
} from "lucide-react";

const SOLUTIONS = [
  { label: "Home Loans", href: "/services/home-loan" },
  { label: "Asset Finance", href: "/services/asset-finance" },
  { label: "Refinance", href: "/services/refinance" },
  { label: "SMSF Loans", href: "/services/smsf" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Calculators", href: "/calculators" },
  { label: "Rates", href: "/rates" },
  { label: "Contact", href: "/contact" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Credit Guide", href: "#" },
];

const SOCIALS = [
  { icon: MessageCircle, label: "Whatsapp", href: "https://wa.me/61414060000" },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/ownestfinance/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#1a100a] text-white relative overflow-hidden">
      {/* Subtle ambient glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Top CTA band */}
      <div className="relative z-10 border-b border-white/8">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
              Free Consultation
            </p>
            <h3 className="text-lg font-extrabold text-white">
              Ready to talk? We'd love to help.
            </h3>
          </div>
          <Link href="/contact" className="flex-shrink-0">
            <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
              Book a Free Call
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 pb-10 border-b border-white/8">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-5 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/20 group-hover:ring-primary/40 transition-all flex-shrink-0">
                <img
                  src="/ownest-t.png"
                  alt="Ownest Finance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-extrabold text-sm text-white leading-none tracking-tight">
                  Ownest Finance
                </p>
                <p className="text-[9px] text-white/40 font-semibold uppercase tracking-widest mt-0.5">
                  Pty Ltd
                </p>
              </div>
            </Link>

            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Redefining modern wealth. We provide the capital and clarity
              needed to navigate complex financial landscapes — transparently.
            </p>

            {/* Contact pills */}
            <div className="space-y-2">
              {[
                {
                  icon: Phone,
                  text: "+61 414 060 000",
                  href: "tel:+61414060000",
                },
                {
                  icon: Mail,
                  text: "ownestfinance@gmail.com",
                  href: "mailto:ownestfinance@gmail.com",
                },
                { icon: MapPin, text: "Sydney, NSW, Australia", href: "#" },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-2.5 text-xs text-white/50 hover:text-white transition-colors group"
                >
                  <div className="w-6 h-6 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-3 h-3 text-primary" />
                  </div>
                  {text}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-xl bg-white/8 flex items-center justify-center hover:bg-primary transition-colors group"
                >
                  <Icon className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Solutions */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              {SOLUTIONS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/55 hover:text-primary transition-colors font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/55 hover:text-primary transition-colors font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {LEGAL.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/55 hover:text-primary transition-colors font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Ownest Finance Pty Ltd. All rights
            reserved.
          </p>

          {/* Licence / ABN + ASIC badge */}
          <div className="flex flex-wrap items-center gap-3">
            {["Credit Licence: 690 727 247", "ABN: 74 690 727 247"].map((t) => (
              <span
                key={t}
                className="flex items-center gap-1.5 text-[10px] text-white/30 font-semibold"
              >
                <Shield className="w-3 h-3 text-primary/50" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-[10px] text-white/20 leading-relaxed max-w-2xl">
          Ownest Finance Pty Ltd is a credit representative authorised under the
          National Consumer Credit Protection Act 2009. This website does not
          constitute financial advice. Please read our Credit Guide before
          proceeding.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
