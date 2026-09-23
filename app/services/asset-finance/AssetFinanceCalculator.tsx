"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Car,
  DollarSign,
  Clock,
  Percent,
  ArrowRight,
} from "lucide-react";

export default function AssetFinanceCalculator() {
  const [amount, setAmount] = useState<number>(50000);
  const [rate, setRate] = useState<number>(6.99);
  const [term, setTerm] = useState<number>(5);

  const { monthly, totalInterest, totalPayment, principalPct } = useMemo(() => {
    const r = rate / 100 / 12;
    const n = term * 12;
    const monthlyPayment =
      r === 0
        ? amount / n
        : (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPay = monthlyPayment * n;
    const princPct = Math.round((amount / Math.max(totalPay, 1)) * 100);
    return {
      monthly: monthlyPayment,
      totalInterest: Math.max(0, totalPay - amount),
      totalPayment: totalPay,
      principalPct: Math.min(100, Math.max(0, princPct)),
    };
  }, [amount, rate, term]);

  const fmt = (n: number) =>
    n.toLocaleString(undefined, { maximumFractionDigits: 0 });

  return (
    <div className="bg-white dark:bg-[#1a130f] rounded-3xl p-6 md:p-8 border border-neutral-200/80 dark:border-white/10 shadow-xl flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#e27b30]/10 flex items-center justify-center text-[#e27b30]">
              <Car className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Asset Finance Calculator
            </h3>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-[#e27b30]/15 text-[#e27b30] font-bold">
            Asset Loans
          </span>
        </div>

        {/* Inputs */}
        <div className="space-y-6">
          {/* Amount */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Financing Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs font-bold">
                  $
                </span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-32 pl-6 pr-2 py-1.5 bg-slate-50 dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-xl text-sm font-bold text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-[#e27b30]/30"
                />
              </div>
            </div>
            <input
              type="range"
              min={10000}
              max={500000}
              step={5000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer"
              style={{ accentColor: "#e27b30" }}
            />
            <div className="flex justify-between text-[10px] text-neutral-400 font-semibold">
              <span>$10,000</span>
              <span>$500,000</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Rate */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Rate (p.a)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.05"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-20 pr-6 pl-2 py-1.5 bg-slate-50 dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-xl text-sm font-bold text-neutral-900 dark:text-white outline-none text-right focus:ring-2 focus:ring-[#e27b30]/30"
                  />
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 text-xs font-bold">
                    %
                  </span>
                </div>
              </div>
              <input
                type="range"
                min={4}
                max={15}
                step={0.05}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                style={{ accentColor: "#e27b30" }}
              />
            </div>

            {/* Term */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Term
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={term}
                    onChange={(e) => setTerm(Number(e.target.value))}
                    className="w-20 pr-8 pl-2 py-1.5 bg-slate-50 dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-xl text-sm font-bold text-neutral-900 dark:text-white outline-none text-right focus:ring-2 focus:ring-[#e27b30]/30"
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 text-xs font-bold">
                    Yrs
                  </span>
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={7}
                step={1}
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                style={{ accentColor: "#e27b30" }}
              />
            </div>
          </div>
        </div>

        {/* Results Banner */}
        <div className="mt-8 p-5 rounded-2xl bg-[#e27b30]/10 border border-[#e27b30]/20 flex flex-col justify-between">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
              Estimated Monthly
            </span>
            <span className="text-3xl font-extrabold text-[#e27b30] tabular-nums">
              ${fmt(monthly)}
              <span className="text-sm font-medium text-neutral-500 ml-1">/mo</span>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#e27b30]/15 text-xs">
            <div>
              <span className="text-neutral-400 block">Total Interest</span>
              <span className="font-bold text-gray-900 dark:text-white">${fmt(totalInterest)}</span>
            </div>
            <div className="text-right">
              <span className="text-neutral-400 block">Total Repayment</span>
              <span className="font-bold text-gray-900 dark:text-white">${fmt(totalPayment)}</span>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/calculators?tab=asset"
        className="w-full bg-[#e27b30] hover:brightness-110 text-white py-3.5 px-6 rounded-xl font-bold text-sm mt-6 text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#e27b30]/20 group"
      >
        Adjust Calculation
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
