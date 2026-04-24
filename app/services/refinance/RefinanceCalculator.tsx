"use client";

import React, { useState, useEffect } from "react";
import {
  Calculator,
  TrendingDown,
  DollarSign,
  Percent,
  ArrowRight,
} from "lucide-react";
import Button from "@/Components/Button";

export default function RefinanceCalculator() {
  // State for inputs
  const [loanAmount, setLoanAmount] = useState(600000);
  const [currentRate, setCurrentRate] = useState(7.2);
  const [newRate, setNewRate] = useState(5.94);
  const loanTerm = 30; // Fixed term for standard calculation

  // Calculation Logic
  const calculateMonthly = (principal: number, annualRate: number) => {
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    if (monthlyRate === 0) return principal / numberOfPayments;
    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    );
  };

  const currentMonthly = calculateMonthly(loanAmount, currentRate);
  const newMonthly = calculateMonthly(loanAmount, newRate);
  const monthlySavings = Math.max(0, currentMonthly - newMonthly);
  const annualSavings = monthlySavings * 12;

  return (
    <section className="py-16 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-brown dark:text-white mb-2">
            Savings Estimator
          </h2>
          <p className="text-brown/60 dark:text-white/60">
            See how much you could save by switching to Ownest rates.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: Inputs */}
          <div className="lg:col-span-2 space-y-6 bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-brown/10 dark:border-white/10">
            <div className="flex items-center gap-2 mb-2 text-primary">
              <Calculator className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider text-xs">
                Loan Parameters
              </span>
            </div>

            {/* Loan Amount */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold dark:text-white/80">
                  Loan Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                    $
                  </span>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-32 pl-7 pr-3 py-1 bg-white dark:bg-neutral-800 border border-brown/10 dark:border-white/20 rounded-lg text-sm font-bold focus:ring-2 ring-primary outline-none"
                  />
                </div>
              </div>
              <input
                type="range"
                min="100000"
                max="2000000"
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            {/* Current Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold dark:text-white/80">
                  Current Interest Rate
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.01"
                    value={currentRate}
                    onChange={(e) => setCurrentRate(Number(e.target.value))}
                    className="w-20 px-3 py-1 bg-white dark:bg-neutral-800 border border-brown/10 dark:border-white/20 rounded-lg text-sm font-bold focus:ring-2 ring-primary outline-none"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                    %
                  </span>
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                step="0.01"
                value={currentRate}
                onChange={(e) => setCurrentRate(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-gray-400"
              />
            </div>

            {/* New Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-primary">
                  Ownest New Rate
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.01"
                    value={newRate}
                    onChange={(e) => setNewRate(Number(e.target.value))}
                    className="w-20 px-3 py-1 bg-primary/10 border border-primary/30 rounded-lg text-sm font-bold text-primary focus:ring-2 ring-primary outline-none"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/60 text-xs">
                    %
                  </span>
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                step="0.01"
                value={newRate}
                onChange={(e) => setNewRate(Number(e.target.value))}
                className="w-full h-1.5 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
          </div>

          {/* Right: Results */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Current Payment */}
              <div className="p-6 bg-white dark:bg-white/5 rounded-2xl border border-brown/10 dark:border-white/10">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block mb-2">
                  Current Monthly
                </span>
                <div className="text-3xl font-bold text-brown dark:text-white">
                  $
                  {currentMonthly.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                  <span className="text-sm font-normal text-gray-400 ml-1">
                    /mo
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                  <Percent className="w-3 h-3" /> Based on {currentRate}% p.a.
                </div>
              </div>

              {/* New Payment */}
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-110 transition-transform">
                  <TrendingDown className="w-12 h-12 text-primary" />
                </div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] block mb-2">
                  New Monthly
                </span>
                <div className="text-3xl font-bold text-primary">
                  $
                  {newMonthly.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                  <span className="text-sm font-normal text-brown/60 dark:text-white/60 ml-1">
                    /mo
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-primary/70">
                  <Percent className="w-3 h-3" /> Based on {newRate}% p.a.
                </div>
              </div>
            </div>

            {/* Total Savings Card */}
            <div className="flex-1 bg-brown dark:bg-white/10 rounded-2xl p-8 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="relative z-10 grid sm:grid-cols-2 items-center gap-8">
                <div>
                  <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] block mb-1">
                    Potential Savings
                  </span>
                  <h3 className="text-5xl font-extrabold text-white">
                    $
                    {monthlySavings.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                    <span className="text-lg font-medium text-white/50 ml-2 italic">
                      /mo
                    </span>
                  </h3>
                </div>
                <div className="sm:border-l border-white/10 sm:pl-8">
                  <div className="text-sm text-white/60 mb-1">
                    Annual Reduction
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    $
                    {annualSavings.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                  </div>
                </div>
              </div>
              {/* Subtle background decoration */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <Button className="w-full py-6 rounded-xl shadow-xl shadow-primary/20 group">
              <span className="flex items-center gap-2 justify-center">
                Lock In This Rate{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
