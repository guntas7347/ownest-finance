"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Home,
  Car,
  Calculator,
  DollarSign,
  Clock,
  Percent,
} from "lucide-react";

export const TABS = {
  home: {
    label: "Home Loan",
    icon: Home,
    defaultAmount: 600000,
    defaultRate: 6.35,
    defaultTerm: 30,
    maxAmount: 2500000,
    minAmount: 100000,
    stepAmount: 10000,
    maxTerm: 30,
    minTerm: 5,
    accent: "#e27b32", // Ownest Orange
    href: "/calculators?tab=home",
  },
  asset: {
    label: "Asset Finance",
    icon: Car,
    defaultAmount: 50000,
    defaultRate: 7.5,
    defaultTerm: 5,
    maxAmount: 500000,
    minAmount: 10000,
    stepAmount: 5000,
    maxTerm: 7,
    minTerm: 1,
    accent: "#3b82f6", // Banking Blue
    href: "/calculators?tab=asset",
  },
} as const;

export type TabKey = keyof typeof TABS;

interface SimpleCalculatorProps {
  initialTab?: TabKey;
  showTabSwitcher?: boolean;
}

export default function SimpleCalculator({
  initialTab = "home",
  showTabSwitcher = true,
}: SimpleCalculatorProps) {
  const [tab, setTab] = useState<TabKey>(initialTab);
  const cfg = TABS[tab];

  const [amount, setAmount] = useState<number>(cfg.defaultAmount);
  const [term, setTerm] = useState<number>(cfg.defaultTerm);
  const [rate, setRate] = useState<number>(cfg.defaultRate);

  useEffect(() => {
    setAmount(TABS[tab].defaultAmount);
    setTerm(TABS[tab].defaultTerm);
    setRate(TABS[tab].defaultRate);
  }, [tab]);

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
  }, [amount, term, rate]);

  const fmt = (n: number) =>
    n.toLocaleString(undefined, { maximumFractionDigits: 0 });

  return (
    <section className="py-14 bg-slate-50/70 dark:bg-neutral-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        {/* Navigation & Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-[10px] uppercase">
              <div className="w-8 h-[2px] bg-primary" /> Financial Clarity
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white">
              Repayment <span style={{ color: cfg.accent }}>Estimator.</span>
            </h2>
          </div>

          {/* Tab Switcher */}
          {showTabSwitcher && (
            <div className="inline-flex p-1.5 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-neutral-200 dark:border-white/10">
              {(Object.keys(TABS) as TabKey[]).map((t) => {
                const active = t === tab;
                const Icon = TABS[t].icon;
                return (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                      active
                        ? "bg-neutral-900 dark:bg-white/10 text-white shadow-md"
                        : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    }`}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: active ? cfg.accent : "inherit" }}
                    />
                    {TABS[t].label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls - Left Side */}
          <div className="lg:col-span-7 space-y-7 bg-white dark:bg-neutral-900 p-7 md:p-8 rounded-3xl border border-neutral-200/80 dark:border-white/10 shadow-sm flex flex-col justify-between">
            {/* Amount */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Loan Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 text-xs font-bold">
                    $
                  </span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-36 pl-7 pr-3 py-2 bg-slate-50 dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-xl text-sm font-bold text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>
              <input
                type="range"
                min={cfg.minAmount}
                max={cfg.maxAmount}
                step={cfg.stepAmount}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                style={{ accentColor: cfg.accent }}
              />
              <div className="flex justify-between text-[10px] text-neutral-400 font-semibold">
                <span>${fmt(cfg.minAmount)}</span>
                <span>${fmt(cfg.maxAmount)}</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Rate */}
              <div className="space-y-3">
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
                      className="w-24 pr-7 pl-3 py-2 bg-slate-50 dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-xl text-sm font-bold text-neutral-900 dark:text-white outline-none text-right focus:ring-2 focus:ring-primary/30"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs font-bold">
                      %
                    </span>
                  </div>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  step={0.05}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: cfg.accent }}
                />
                <div className="flex justify-between text-[10px] text-neutral-400 font-semibold">
                  <span>1.0%</span>
                  <span>15.0%</span>
                </div>
              </div>

              {/* Term */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Duration
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={term}
                      onChange={(e) => setTerm(Number(e.target.value))}
                      className="w-24 pr-9 pl-3 py-2 bg-slate-50 dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-xl text-sm font-bold text-neutral-900 dark:text-white outline-none text-right focus:ring-2 focus:ring-primary/30"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs font-bold">
                      Yrs
                    </span>
                  </div>
                </div>
                <input
                  type="range"
                  min={cfg.minTerm}
                  max={cfg.maxTerm}
                  step={1}
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: cfg.accent }}
                />
                <div className="flex justify-between text-[10px] text-neutral-400 font-semibold">
                  <span>{cfg.minTerm} Yr</span>
                  <span>{cfg.maxTerm} Yrs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results - Right Side */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div
              className="p-7 md:p-8 rounded-3xl flex-1 flex flex-col justify-center relative overflow-hidden border transition-all"
              style={{
                backgroundColor: `${cfg.accent}08`,
                borderColor: `${cfg.accent}20`,
              }}
            >
              <div className="relative z-10 text-center sm:text-left">
                <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                  Estimated Monthly Repayment
                </span>
                <div
                  className="text-5xl md:text-6xl font-black tabular-nums my-2 flex items-baseline justify-center sm:justify-start"
                  style={{ color: cfg.accent }}
                >
                  <span className="text-3xl font-bold opacity-50 mr-1">$</span>
                  {fmt(monthly)}
                  <span className="text-base font-semibold opacity-60 ml-2">
                    /mo
                  </span>
                </div>

                {/* Visualizer */}
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-[11px] font-bold uppercase text-neutral-500 dark:text-neutral-400">
                    <span>Principal: {principalPct}%</span>
                    <span>Interest: {100 - principalPct}%</span>
                  </div>
                  <div className="flex h-2.5 rounded-full bg-slate-200 dark:bg-neutral-800 overflow-hidden p-0.5 border border-neutral-200 dark:border-white/5">
                    <div
                      className="h-full rounded-full transition-all duration-500 shadow-sm"
                      style={{
                        width: `${principalPct}%`,
                        backgroundColor: cfg.accent,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  label: "Total Pay",
                  val: `$${fmt(totalPayment)}`,
                  icon: DollarSign,
                },
                {
                  label: "Interest",
                  val: `$${fmt(totalInterest)}`,
                  icon: Percent,
                },
                { label: "Payments", val: `${term * 12} mo`, icon: Clock },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-neutral-900 p-3.5 rounded-2xl border border-neutral-200 dark:border-white/10 text-center sm:text-left"
                >
                  <div className="text-[10px] font-bold text-neutral-400 uppercase mb-1.5 flex items-center justify-center sm:justify-start gap-1">
                    <stat.icon
                      className="w-3 h-3"
                      style={{ color: cfg.accent }}
                    />{" "}
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-neutral-900 dark:text-white tabular-nums">
                    {stat.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Link to Full Calculator */}
            <Link
              href={cfg.href || "/calculators"}
              className="w-full py-4 px-6 rounded-2xl text-center text-sm font-bold text-white transition-all hover:brightness-105 active:scale-[0.99] flex items-center justify-center gap-2 group shadow-lg"
              style={{
                backgroundColor: cfg.accent,
                boxShadow: `0 12px 24px -6px ${cfg.accent}40`,
              }}
            >
              Adjust & Get Full {TABS[tab].label} Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
