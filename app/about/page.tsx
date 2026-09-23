import React from "react";
import Button from "@/Components/Button";
import Card from "@/Components/Card";
import Link from "next/link";
import {
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Handshake,
  ArrowRight,
  Quote,
  Instagram,
  MessageCircle,
  CheckCircle2,
  Scale,
  CalendarCheck,
  Search,
  Headphones,
  FileCheck,
} from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Absolute Integrity",
    desc: "Radical transparency in every comparison and credit recommendation.",
  },
  {
    icon: TrendingUp,
    title: "Precision Strategy",
    desc: "Data-driven insights tailored to your specific financial profile.",
  },
  {
    icon: Sparkles,
    title: "Modern Simplicity",
    desc: "Fast digital processes paired with bespoke, personalized guidance.",
  },
  {
    icon: Handshake,
    title: "Enduring Partnership",
    desc: "Long-term stewards dedicated to your financial health beyond settlement.",
  },
];

const WHY_CHOOSE_US = [
  {
    icon: Scale,
    title: "No brokerage fee",
    desc: "We're paid by the lender, not by you, so there's no fee for our advice, comparison, or support.",
  },
  {
    icon: Handshake,
    title: "One broker for all your finance needs",
    desc: "From home loans to refinancing, asset finance, and SMSF lending, you deal with one trusted broker instead of starting over with someone new every time your needs change.",
  },
  {
    icon: Search,
    title: "Free loan health checks, anytime",
    desc: "Not sure if you're still getting a good deal? We'll review your current loan at no cost, no obligation.",
  },
  {
    icon: CalendarCheck,
    title: "We check in every 6 months, even after settlement",
    desc: "Rates change and so does life. We proactively review your loan twice a year to make sure you're not paying more than you should.",
  },
  {
    icon: Sparkles,
    title: "30+ lenders to find the best that suits your profile",
    desc: "We compare more than 30 lenders and recommend what's genuinely right for you, not what's easiest for us.",
  },
  {
    icon: Headphones,
    title: "Support that doesn't end at settlement",
    desc: "Whether it's a question a year later or a new loan down the track, we're still here.",
  },
  {
    icon: FileCheck,
    title: "Fully licensed and accountable",
    desc: "Ownest Finance operates under Australian Credit Licence 389087 with a Credit Representative 580242, giving you the same protections you'd expect from a bank.",
  },
];

export default function About() {
  return (
    <div className="bg-slate-50/50 dark:bg-neutral-950 min-h-screen text-gray-900 dark:text-white transition-colors">
      {/* Hero Section */}
      <header className="relative pt-24 pb-16 overflow-hidden border-b border-neutral-200/60 dark:border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
            Our Purpose
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-neutral-900 dark:text-white">
            Clarity &amp; Confidence <br />
            <span className="text-primary italic">In Every Loan.</span>
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Ownest Finance strips away the confusion of banking to give you the
            right loan, tailored strategy, and continuous advocacy.
          </p>
          <div className="flex items-center justify-center">
            <Button
              size="lg"
              className="rounded-full px-8 shadow-lg shadow-primary/20"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Speak With a Broker <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Philosophy & Core Values */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-center mb-12">
          <div className="lg:col-span-1">
            <Quote className="text-primary w-8 h-8 mb-4 opacity-60" />
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Our Philosophy
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 italic leading-relaxed text-sm">
              "In a market full of confusing jargon and biased offers, we choose
              radical clarity. We treat your financing strategy with the same care
              and precision as our own."
            </p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-white/5 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base mb-1.5 text-neutral-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-neutral-900/60 border-y border-neutral-200/60 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
              The Ownest Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white mb-6">
              Why Choose Us
            </h2>
            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">
              "Whether you're buying your first home, refinancing, investing in
              property or financing a vehicle or equipment for your business, we
              do the hard work of comparing lenders so you get the right loan, not
              just an available one."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                    idx === 0 || idx === 6
                      ? "bg-slate-50 dark:bg-neutral-900 border-primary/30 shadow-sm"
                      : "bg-white dark:bg-neutral-900/80 border-neutral-200/80 dark:border-white/5 hover:border-primary/30 hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="text-primary font-bold tracking-widest uppercase text-xs block">
              Meet The Broker
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white">
              Dedicated To Your Financial Success.
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-base">
              Ibban Dhillon founded Ownest Finance to eliminate the friction and
              impersonal nature of traditional banking. With deep expertise
              across residential mortgages, commercial asset finance, and debt
              structuring, Ibban acts as your personal advocate from pre-approval
              to settlement and beyond.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="rounded-xl">
                  Book a Consultation <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a
                href="https://wa.me/61414060000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-200 dark:border-white/10 font-bold text-sm text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-500" /> WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Founder Card */}
          <div className="md:col-span-5 bg-neutral-900 dark:bg-[#1a130f] p-8 rounded-3xl text-white shadow-2xl border border-neutral-800 dark:border-white/10 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-2xl font-black text-primary">
                  ID
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">Ibban Dhillon</h4>
                  <span className="text-primary text-xs font-bold uppercase tracking-wider block mt-0.5">
                    Finance &amp; Mortgage Broker
                  </span>
                </div>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                "Our commitment is simple: We find the best loan that genuinely
                fits your lifestyle and goals, while proactively managing your rates
                year after year."
              </p>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <span className="text-xs font-semibold text-neutral-400">
                  Connect:
                </span>
                <a
                  href="https://www.instagram.com/ownestfinance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-primary text-white transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/61414060000"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Business"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-primary text-white transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Subtle glow */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
}
