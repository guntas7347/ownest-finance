"use client";

import React from "react";
import { MarketRatesProps } from "./MarketRates";
import { TrendingDown, Minus, BarChart2, ArrowRight, Zap } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { LiveGraph } from "./LiveGraph";
import Link from "next/link";

const RATES = [
  {
    label: "Home Loans",
    rate: "5.84",
    icon: <TrendingDown className="w-4 h-4 text-green-500" />,
    graphColor: "text-green-500",
    change: "-0.15%",
    changeColor: "text-green-500",
    dot: "bg-green-400",
  },
  {
    label: "Asset Finance",
    rate: "6.25",
    icon: <Minus className="w-4 h-4 text-gray-400" />,
    graphColor: "text-gray-400",
    change: "Stable",
    changeColor: "text-gray-400",
    dot: "bg-gray-400",
  },
  {
    label: "Business Loans",
    rate: "7.10",
    icon: <TrendingDown className="w-4 h-4 text-green-500" />,
    graphColor: "text-green-500",
    change: "-0.25%",
    changeColor: "text-green-500",
    dot: "bg-green-400",
  },
];

export default function Hero({ data }: MarketRatesProps) {
  return (
    <section className="relative pt-10 pb-14 overflow-hidden bg-white dark:bg-background-dark">
      {/* Subtle bg glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center">
        {/* ── Left: Text content ── */}
        <div className="lg:col-span-7 space-y-5">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[10px] font-semibold uppercase tracking-widest text-gray-600 dark:text-gray-300"
          >
            <Zap className="w-3 h-3 text-primary fill-primary" />
            The New Standard in Finance
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold leading-[1.2] text-gray-900 dark:text-white min-h-[72px] lg:min-h-[96px]"
          >
            Smart lending for <br />
            <TypeAnimation
              sequence={[
                "modern Australians.",
                2500,
                "smart Australians.",
                2500,
                "savvy Australians.",
                2500,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-primary italic"
            />
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-gray-500 dark:text-gray-400 max-w-md leading-relaxed"
          >
            Technology meets expertise — securing the most competitive financial
            structures in the Australian market.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-5 py-2.5 rounded-full font-semibold hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors text-sm group">
                Get My Free Quote
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>
            <Link href="/rates">
              <button className="inline-flex items-center gap-2 border border-gray-200 dark:border-white/20 px-5 py-2.5 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-gray-700 dark:text-white text-sm">
                View Current Rates
              </button>
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center gap-4 pt-1"
          >
            {["30+ Lenders", "No hidden fees", "Free consultation"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 text-[10px] text-gray-400 font-medium"
                >
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {item}
                </div>
              ),
            )}
          </motion.div>
        </div>

        {/* ── Right: Market Snapshot card ── */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200/80 dark:border-white/10 backdrop-blur-xl shadow-xl overflow-hidden relative z-10"
          >
            {/* Card header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-white/8">
              <div className="flex items-center gap-1.5">
                <BarChart2 className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold text-gray-800 dark:text-gray-100">
                  Market Snapshot
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                  Live
                </span>
              </div>
            </div>

            {/* Rate rows */}
            <div className="divide-y divide-gray-100 dark:divide-white/5">
              {RATES.map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.12 }}
                  className="flex items-center justify-between px-4 py-2.5 hover:bg-gray-50/60 dark:hover:bg-white/5 transition-colors"
                >
                  {/* Label + dot */}
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${r.dot}`} />
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                      {r.label}
                    </span>
                  </div>

                  {/* Rate + graph + change */}
                  <div className="flex items-center gap-2">
                    <LiveGraph colorClass={r.graphColor} />
                    <span className="text-sm font-black text-gray-900 dark:text-white tabular-nums">
                      {r.rate}
                      <span className="text-[10px] font-medium text-gray-400 ml-0.5">
                        %
                      </span>
                    </span>
                    <span
                      className={`text-[10px] font-bold ${r.changeColor} min-w-[36px] text-right`}
                    >
                      {r.change}
                    </span>
                    {r.icon}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Card footer */}
            <div className="px-4 py-2.5 bg-gray-50/60 dark:bg-white/3 flex items-center justify-between">
              <span className="text-[9px] text-gray-400 uppercase tracking-wider font-semibold">
                Indicative rates p.a.
              </span>
              <Link
                href="/rates"
                className="text-[10px] font-bold text-primary hover:underline flex items-center gap-0.5"
              >
                View all <ArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          </motion.div>

          {/* Glow behind card */}
          <div className="absolute -top-8 -right-8 w-56 h-56 bg-primary/20 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
