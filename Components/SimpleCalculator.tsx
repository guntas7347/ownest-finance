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

const TABS = {
  home: {
    label: "Home Loan",
    icon: Home,
    defaultAmount: 500000,
    defaultRate: 6.35,
    defaultTerm: 30,
    maxAmount: 2000000,
    minAmount: 100000,
    stepAmount: 10000,
    maxTerm: 30,
    minTerm: 5,
    accent: "#e27b32", // Ownest Orange
    href: "/calculators",
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
    href: "/calculators",
  },
} as const;

type TabKey = keyof typeof TABS;

export default function SimpleCalculator() {
  const [tab, setTab] = useState<TabKey>("home");
  const cfg = TABS[tab];

  // Using separate states to ensure strict number types
  const [amount, setAmount] = useState<number>(cfg.defaultAmount);
  const [term, setTerm] = useState<number>(cfg.defaultTerm);
  const [rate, setRate] = useState<number>(cfg.defaultRate);

  // Sync state when tab changes
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
    const princPct = Math.round((amount / totalPay) * 100);
    return {
      monthly: monthlyPayment,
      totalInterest: totalPay - amount,
      totalPayment: totalPay,
      principalPct: princPct,
    };
  }, [amount, term, rate]);

  const fmt = (n: number) =>
    n.toLocaleString(undefined, { maximumFractionDigits: 0 });

  return (
    <section className="py-12 bg-slate-50/50 dark:bg-neutral-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        {/* Navigation & Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-[10px] uppercase">
              <div className="w-8 h-[1px] bg-primary" /> Financial Clarity
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white">
              Repayment <span style={{ color: cfg.accent }}>Estimator.</span>
            </h2>
          </div>

          {/* Improved Tab Switcher */}
          <div className="inline-flex p-1.5 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-neutral-200 dark:border-white/5">
            {(Object.keys(TABS) as TabKey[]).map((t) => {
              const active = t === tab;
              const Icon = TABS[t].icon;
              return (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex items-center gap-3 px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                    active
                      ? "bg-neutral-900 dark:bg-white/10 text-white shadow-lg"
                      : "text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
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
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls - Left Side */}
          <div className="lg:col-span-7 space-y-8 bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-200 dark:border-white/5 shadow-sm">
            {/* Amount */}
            <div className="group space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-[11px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-primary transition-colors">
                  Loan Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs">
                    $
                  </span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-32 pl-6 pr-3 py-2 bg-slate-50 dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-xl text-sm font-bold outline-none focus:ring-2 ring-primary/20"
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
                className="w-full h-2 bg-slate-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-primary"
                style={{ accentColor: cfg.accent }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Rate */}
              <div className="group space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-[11px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-primary transition-colors">
                    Rate (p.a)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.01"
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value))}
                      className="w-20 pr-7 pl-3 py-2 bg-slate-50 dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-xl text-sm font-bold outline-none text-right"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs">
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
              </div>

              {/* Term */}
              <div className="group space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-[11px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-primary transition-colors">
                    Duration
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={term}
                      onChange={(e) => setTerm(Number(e.target.value))}
                      className="w-20 pr-9 pl-3 py-2 bg-slate-50 dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-xl text-sm font-bold outline-none text-right"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs">
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
              </div>
            </div>
          </div>

          {/* Results - Right Side */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div
              className="p-8 rounded-3xl flex-1 flex flex-col justify-center relative overflow-hidden border"
              style={{
                backgroundColor: `${cfg.accent}05`,
                borderColor: `${cfg.accent}15`,
              }}
            >
              <div className="relative z-10 text-center md:text-left">
                <span className="text-[11px] font-black text-neutral-400 uppercase tracking-[0.2em]">
                  Estimated Monthly
                </span>
                <div
                  className="text-6xl font-black tabular-nums my-2 flex items-baseline justify-center md:justify-start"
                  style={{ color: cfg.accent }}
                >
                  <span className="text-3xl font-bold opacity-40 mr-1">$</span>
                  {fmt(monthly)}
                </div>

                {/* Visualizer */}
                <div className="mt-8 space-y-3">
                  <div className="flex justify-between text-[10px] font-bold uppercase text-neutral-500">
                    <span>Principal: {principalPct}%</span>
                    <span>Interest: {100 - principalPct}%</span>
                  </div>
                  <div className="flex h-3 rounded-full bg-slate-200 dark:bg-neutral-800 overflow-hidden p-0.5 border border-neutral-200 dark:border-white/5">
                    <div
                      className="h-full rounded-full transition-all duration-700 shadow-sm"
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
                { label: "Payments", val: term * 12, icon: Clock },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-neutral-900 p-4 rounded-2xl border border-neutral-200 dark:border-white/5 text-center sm:text-left"
                >
                  <div className="text-[9px] font-black text-neutral-400 uppercase mb-2 flex items-center justify-center sm:justify-start gap-1.5">
                    <stat.icon
                      className="w-3 h-3"
                      style={{ color: cfg.accent }}
                    />{" "}
                    {stat.label}
                  </div>
                  <div className="text-sm font-black text-neutral-800 dark:text-white tabular-nums">
                    {stat.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Fixed Link and CTA */}
            <Link
              href={cfg.href || "/calculators"}
              className="w-full py-5 rounded-2xl text-center text-sm font-black text-white transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
              style={{
                backgroundColor: cfg.accent,
                boxShadow: `0 20px 40px -12px ${cfg.accent}50`,
              }}
            >
              Get Full {TABS[tab].label} Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
