"use client";

import React from "react";
import { MarketRatesProps } from "./MarketRates";
import { TrendingDown, Minus, BarChart2 } from "lucide-react";

export default function Hero({ data }: MarketRatesProps) {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold uppercase tracking-wider mb-6 text-gray-900 dark:text-gray-200">
            <span className="w-2 h-2 rounded-full bg-[#e27b30]"></span>
            The New Standard in Finance
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-gray-900 dark:text-white">
            Smart lending for <br />
            <span className="text-[#e27b30] italic">modern</span> Australians.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-10 leading-relaxed">
            Ownest Finance combines sophisticated technology with human
            expertise to secure the most competitive financial structures in the
            market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-black dark:hover:bg-gray-200 transition-colors">
              Get My Free Quote
            </button>
            <button className="border border-gray-200 dark:border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-gray-900 dark:text-white">
              View Current Rates
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="bg-white dark:bg-[#2a1e15] rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 p-8 relative z-10 backdrop-blur-md">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              <BarChart2 className="w-5 h-5 text-[#e27b30]" />
              Market Snapshot
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-xl">
                <div>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tighter">
                    Home Loans
                  </p>
                  <p className="font-bold text-xl text-gray-900 dark:text-white">
                    5.84%{" "}
                    <span className="text-sm font-normal text-gray-400">
                      p.a.
                    </span>
                  </p>
                </div>
                <TrendingDown className="w-6 h-6 text-green-500" />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-xl">
                <div>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tighter">
                    Asset Finance
                  </p>
                  <p className="font-bold text-xl text-gray-900 dark:text-white">
                    6.25%{" "}
                    <span className="text-sm font-normal text-gray-400">
                      p.a.
                    </span>
                  </p>
                </div>
                <Minus className="w-6 h-6 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-xl">
                <div>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tighter">
                    Business Loans
                  </p>
                  <p className="font-bold text-xl text-gray-900 dark:text-white">
                    7.10%{" "}
                    <span className="text-sm font-normal text-gray-400">
                      p.a.
                    </span>
                  </p>
                </div>
                <TrendingDown className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#e27b30]/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
