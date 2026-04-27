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
  Linkedin,
  Twitter,
} from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Absolute Integrity",
    desc: "Radical transparency in every transaction and consultation.",
  },
  {
    icon: TrendingUp,
    title: "Precision Strategy",
    desc: "Data-driven insights tailored to your specific financial profile.",
  },
  {
    icon: Sparkles,
    title: "Liquid Innovation",
    desc: "Modern fintech power paired with classic luxury service.",
  },
  {
    icon: Handshake,
    title: "Elite Partnership",
    desc: "Long-term stewards dedicated to your family's future.",
  },
];

const MILESTONES = [
  { year: "2018", event: "Founded to democratise wealth advisory." },
  { year: "2020", event: "Crossed ₹100Cr in assets under advisory." },
  { year: "2022", event: "Expanded into private equity & alternatives." },
  { year: "2024", event: "Launched proprietary portfolio analytics." },
];

export default function About() {
  return (
    <div className="bg-slate-50/50 dark:bg-neutral-950 min-h-screen">
      {/* Hero Section */}
      <header className="relative pt-24 pb-16 overflow-hidden border-b border-brown/5 dark:border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
            Our Legacy
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-brown dark:text-white">
            Redefining <span className="text-primary italic">Wealth</span>
            <br />
            Through Clarity.
          </h1>
          <p className="text-lg text-brown/70 dark:text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Ownest Finance strips away the complexities of traditional asset
            management to reveal the clear path to generational prosperity.
          </p>
          <div className="flex items-center justify-center">
            <Button
              size="lg"
              className="rounded-full px-8 shadow-lg shadow-primary/20"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Philosophy & Values Combined for Compactness */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
          <div className="lg:col-span-1">
            <Quote className="text-primary w-8 h-8 mb-4 opacity-50" />
            <h2 className="text-2xl font-bold text-brown dark:text-white mb-4">
              Our Philosophy
            </h2>
            <p className="text-brown/70 dark:text-white/70 italic leading-relaxed">
              "In a world of opaque financial structures, we choose clarity. We
              treat your capital as if it were our own."
            </p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <Card
                key={title}
                className="p-5 hover:bg-primary group transition-all duration-300 border-brown/10 dark:border-white/10"
              >
                <Icon className="text-primary group-hover:text-white w-7 h-7 mb-3 transition-colors" />
                <h3 className="font-bold text-base mb-1 text-brown dark:text-white group-hover:text-white transition-colors">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-brown/60 dark:text-white/60 group-hover:text-white/90 transition-colors">
                  {desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline & Founder Split Section */}
      <section className="py-16 bg-white dark:bg-neutral-900/50 border-y border-brown/5 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* Milestones
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-6 block">
              Evolution
            </span>
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-primary/20">
              {MILESTONES.map(({ year, event }, i) => (
                <div key={i} className="flex gap-6 relative">
                  <div className="w-[22px] h-[22px] rounded-full bg-white dark:bg-neutral-900 border-2 border-primary flex-shrink-0 z-10" />
                  <div>
                    <span className="text-primary font-bold text-xs uppercase">
                      {year}
                    </span>
                    <p className="text-sm text-brown/70 dark:text-white/70 mt-1">
                      {event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Founder */}
          <div className="bg-brown dark:bg-white/5 p-8 rounded-2xl text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-2xl font-bold text-primary">
                I
              </div>
              <div>
                <h4 className="text-xl font-bold">Ibban Dhilon</h4>
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                  Finance and Mortgage Broker
                </span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Ibban Dhilon founded Ownest Finance to cut through the noise of
              traditional banking. His practice is built on the belief that
              financial clarity should be accessible to every family seeking
              long-term sovereignty.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-lg bg-white/10 hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-4 text-brown dark:text-white">
          Ready to Begin?
        </h3>
        <p className="text-brown/60 dark:text-white/60 mb-8">
          Schedule a confidential consultation to secure your financial future.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto px-10">
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5"
          >
            <Link href="/properties">View Portfolio</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
