"use client";

import React from "react";
import { MarketRatesProps } from "./MarketRates";
import { TrendingDown, Minus, BarChart2 } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { LiveGraph } from "./LiveGraph";

export default function Hero({ data }: MarketRatesProps) {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-white dark:bg-background-dark">
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[10px] font-semibold uppercase tracking-wider mb-4 text-gray-900 dark:text-gray-200">
            <span className="w-2 h-2 rounded-full bg-[#e27b30]"></span>
            The New Standard in Finance
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold leading-[1.2] mb-4 text-gray-900 dark:text-white min-h-[80px] lg:min-h-[100px]">
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
              className="text-[#e27b30] italic"
            />
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-lg mb-6 leading-relaxed">
            Ownest Finance combines sophisticated technology with human
            expertise to secure the most competitive financial structures in the
            market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-black dark:hover:bg-gray-200 transition-colors text-sm">
              Get My Free Quote
            </button>
            <button className="border border-gray-200 dark:border-white/20 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-gray-900 dark:text-white text-sm">
              View Current Rates
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-[#2a1e15] rounded-2xl shadow-xl border border-gray-200 dark:border-white/10 p-6 relative z-10 backdrop-blur-md"
          >
            <h3 className="font-bold text-sm mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
              <BarChart2 className="w-4 h-4 text-[#e27b30]" />
              Market Snapshot
            </h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-white/5 rounded-xl"
              >
                <div>
                  <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tighter">
                    Home Loans
                  </p>
                  <p className="font-bold text-base text-gray-900 dark:text-white">
                    5.84%{" "}
                    <span className="text-[10px] font-normal text-gray-400">
                      p.a.
                    </span>
                  </p>
                </div>
                <div className="flex items-center">
                  <LiveGraph colorClass="text-green-500" />
                  <TrendingDown className="w-6 h-6 text-green-500" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-white/5 rounded-xl"
              >
                <div>
                  <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tighter">
                    Asset Finance
                  </p>
                  <p className="font-bold text-base text-gray-900 dark:text-white">
                    6.25%{" "}
                    <span className="text-[10px] font-normal text-gray-400">
                      p.a.
                    </span>
                  </p>
                </div>
                <div className="flex items-center">
                  <LiveGraph colorClass="text-gray-400" />
                  <Minus className="w-6 h-6 text-gray-400" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-white/5 rounded-xl"
              >
                <div>
                  <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tighter">
                    Business Loans
                  </p>
                  <p className="font-bold text-base text-gray-900 dark:text-white">
                    7.10%{" "}
                    <span className="text-[10px] font-normal text-gray-400">
                      p.a.
                    </span>
                  </p>
                </div>
                <div className="flex items-center">
                  <LiveGraph colorClass="text-green-500" />
                  <TrendingDown className="w-6 h-6 text-green-500" />
                </div>
              </motion.div>
            </div>
          </motion.div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#e27b30]/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
