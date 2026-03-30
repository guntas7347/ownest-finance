"use client";

import React, { useState, useMemo } from "react";
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
    href: "/calculators",
    accent: "#e27b32",
    desc: "Residential mortgage",
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
    href: "/calculators",
    accent: "#3b82f6",
    desc: "Vehicles & equipment",
  },
} as const;

type TabKey = keyof typeof TABS;

function fmt(n: number) {
  return n.toLocaleString("en-AU", { maximumFractionDigits: 0 });
}

export default function SimpleCalculator() {
  const [tab, setTab] = useState<TabKey>("home");
  const cfg = TABS[tab];

  const [amount, setAmount] = useState<any>(cfg.defaultAmount);
  const [term, setTerm] = useState<any>(cfg.defaultTerm);
  const [rate, setRate] = useState<any>(cfg.defaultRate);

  React.useEffect(() => {
    setAmount(TABS[tab].defaultAmount);
    setTerm(TABS[tab].defaultTerm);
    setRate(TABS[tab].defaultRate);
  }, [tab]);

  const { monthly, totalInterest, totalPayment, principalPct } = useMemo(() => {
    const r = rate / 100 / 12;
    const n = term * 12;
    const monthly =
      r === 0
        ? amount / n
        : (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthly * n;
    const totalInterest = totalPayment - amount;
    const principalPct = Math.round((amount / totalPayment) * 100);
    return { monthly, totalInterest, totalPayment, principalPct };
  }, [amount, term, rate]);

  const accent = cfg.accent;

  return (
    <section className="py-14 bg-background-light dark:bg-background-dark relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute -top-32 right-0 w-[480px] h-[480px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: accent }}
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-3">
            <Calculator className="w-3 h-3" />
            Quick Estimator
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            Calculate Your <span style={{ color: accent }}>Potential.</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-md">
            Get a quick repayment estimate. Adjust any input and results update
            instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* ── Left: Type selector + sliders ── */}
          <div className="space-y-6">
            {/* Tab selector */}
            <div className="flex gap-2 p-1 bg-gray-100 dark:bg-white/8 rounded-2xl w-fit">
              {(Object.keys(TABS) as TabKey[]).map((t) => {
                const { label, icon: Icon } = TABS[t];
                const active = t === tab;
                return (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                      active
                        ? "bg-white dark:bg-white/15 text-gray-900 dark:text-white shadow-sm"
                        : "text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    }`}
                  >
                    <Icon
                      className="w-3.5 h-3.5"
                      style={active ? { color: accent } : {}}
                    />
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Sliders card */}
            <div className="bg-white dark:bg-[#2a1e15] rounded-2xl border border-gray-100 dark:border-white/8 shadow-sm p-6 space-y-7">
              {/* Loan Amount */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Loan Amount
                  </label>
                  <span className="text-xl font-black tabular-nums text-gray-900 dark:text-white">
                    ${fmt(amount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={cfg.minAmount}
                  max={cfg.maxAmount}
                  step={cfg.stepAmount}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer slider-thumb"
                  style={{ accentColor: accent }}
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-semibold">
                  <span>${fmt(cfg.minAmount)}</span>
                  <span>${fmt(cfg.maxAmount)}</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Interest Rate
                  </label>
                  <span
                    className="text-xl font-black tabular-nums"
                    style={{ color: accent }}
                  >
                    {rate.toFixed(2)}% p.a.
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  step={0.05}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer slider-thumb"
                  style={{ accentColor: accent }}
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-semibold">
                  <span>1.00%</span>
                  <span>15.00%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Loan Term
                  </label>
                  <span className="text-xl font-black text-gray-900 dark:text-white tabular-nums">
                    {term} yr{term > 1 ? "s" : ""}
                  </span>
                </div>
                <input
                  type="range"
                  min={cfg.minTerm}
                  max={cfg.maxTerm}
                  step={1}
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer slider-thumb"
                  style={{ accentColor: accent }}
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-semibold">
                  <span>{cfg.minTerm} yr</span>
                  <span>{cfg.maxTerm} yrs</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Results ── */}
          <div className="space-y-4">
            {/* Big number card */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: `${accent}12`,
                border: `1px solid ${accent}25`,
              }}
            >
              <div
                className="absolute -right-8 -top-8 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ background: accent }}
              />
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                Estimated Monthly Repayment
              </p>
              <div
                className="text-5xl font-black tabular-nums relative"
                style={{ color: accent }}
              >
                ${fmt(monthly)}
              </div>
              <p className="text-xs text-gray-400 mt-1.5">
                per month · principal + interest
              </p>

              {/* Split bar */}
              <div className="mt-5">
                <div className="flex h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-500"
                    style={{
                      width: `${principalPct}%`,
                      backgroundColor: accent,
                    }}
                  />
                  <div
                    className="h-full bg-gray-300 dark:bg-white/20 transition-all duration-500"
                    style={{ width: `${100 - principalPct}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-semibold mt-1">
                  <span style={{ color: accent }}>
                    Principal {principalPct}%
                  </span>
                  <span className="text-gray-400">
                    Interest {100 - principalPct}%
                  </span>
                </div>
              </div>
            </div>

            {/* Stat pills */}
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  icon: DollarSign,
                  label: "Total Repayment",
                  value: `$${fmt(totalPayment)}`,
                  color: accent,
                },
                {
                  icon: Percent,
                  label: "Total Interest",
                  value: `$${fmt(totalInterest)}`,
                  color: "#f97316",
                },
                {
                  icon: Clock,
                  label: "Payments",
                  value: `${term * 12}`,
                  color: "#6366f1",
                },
              ].map(({ icon: Icon, label, value, color }) => (
                <div
                  key={label}
                  className="bg-white dark:bg-[#2a1e15] rounded-2xl border border-gray-100 dark:border-white/8 shadow-sm p-4 flex flex-col gap-2"
                >
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ background: `${color}18` }}
                  >
                    <Icon className="w-3 h-3" style={{ color }} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 leading-none mb-1">
                      {label}
                    </p>
                    <p className="text-sm font-black text-gray-900 dark:text-white tabular-nums">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/calculators">
              <button
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold text-white transition-all hover:opacity-90 shadow-lg group"
                style={{
                  backgroundColor: accent,
                  boxShadow: `0 8px 24px ${accent}35`,
                }}
              >
                Open Full {tab === "home" ? "Home Loan" : "Asset Finance"}{" "}
                Calculator
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
