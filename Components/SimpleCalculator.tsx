"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, Home, Car } from "lucide-react";
import Button from "./Button";
import Card from "./Card";

export default function SimpleCalculator() {
  const [activeTab, setActiveTab] = useState<"home" | "asset">("home");
  const [amount, setAmount] = useState(500000);
  const [term, setTerm] = useState(30);

  // Defaults based on loan type
  const interestRate = activeTab === "home" ? 6.35 : 7.5;
  const maxTerm = activeTab === "home" ? 30 : 7;
  const maxAmount = activeTab === "home" ? 2000000 : 500000;
  const minAmount = activeTab === "home" ? 100000 : 10000;
  const stepAmount = activeTab === "home" ? 10000 : 5000;

  // Reset term when switching tabs if current term is invalid
  React.useEffect(() => {
    if (activeTab === "asset" && term > 7) setTerm(5);
    if (activeTab === "home" && term < 10) setTerm(30);
    if (activeTab === "asset") setAmount(50000);
    if (activeTab === "home") setAmount(500000);
  }, [activeTab]);

  const monthlyRepayment = useMemo(() => {
    const r = interestRate / 100 / 12;
    const n = term * 12;
    if (r === 0) return amount / n;
    return (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }, [amount, term, interestRate]);

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brown dark:text-white leading-tight">
              Calculate Your <span className="text-primary">Potential.</span>
            </h2>
            <p className="text-lg text-brown/70 dark:text-white/70 leading-relaxed">
              Get a quick estimate on your repayments. Whether you're buying a
              dream home or a luxury asset, we have the right tools for you.
            </p>
            <div className="flex flex-col gap-4">
              <div
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  activeTab === "home"
                    ? "border-primary bg-primary/5"
                    : "border-brown/10 dark:border-white/10 hover:border-primary/50"
                }`}
                onClick={() => setActiveTab("home")}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`nav-icon-box w-12 h-12 rounded-full flex items-center justify-center ${
                      activeTab === "home"
                        ? "bg-primary text-white"
                        : "bg-brown/10 dark:bg-white/10 text-brown dark:text-white"
                    }`}
                  >
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brown dark:text-white">
                      Home Loan
                    </h3>
                    <p className="text-sm text-brown/60 dark:text-white/60">
                      Standard residential mortgage
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  activeTab === "asset"
                    ? "border-primary bg-primary/5"
                    : "border-brown/10 dark:border-white/10 hover:border-primary/50"
                }`}
                onClick={() => setActiveTab("asset")}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`nav-icon-box w-12 h-12 rounded-full flex items-center justify-center ${
                      activeTab === "asset"
                        ? "bg-primary text-white"
                        : "bg-brown/10 dark:bg-white/10 text-brown dark:text-white"
                    }`}
                  >
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brown dark:text-white">
                      Asset Loan
                    </h3>
                    <p className="text-sm text-brown/60 dark:text-white/60">
                      Vehicles, marine, & equipment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Card */}
          <Card className="p-8 md:p-10 shadow-2xl bg-white dark:bg-stone-900 border-none relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0 pointer-events-none"></div>
            <div className="relative z-10 space-y-8">
              <div className="flex justify-between items-center pb-6 border-b border-brown/10 dark:border-white/10">
                <span className="text-sm font-bold uppercase tracking-widest text-primary">
                  {activeTab === "home" ? "Home Loan" : "Asset Finance"}{" "}
                  Estimate
                </span>
                <Calculator className="w-5 h-5 text-primary" />
              </div>

              {/* Inputs */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-end mb-1">
                    <label className="text-xs font-bold uppercase text-brown/60 dark:text-white/60 tracking-wider">
                      Loan Amount
                    </label>
                    <p className="text-2xl font-black text-brown dark:text-white">
                      ${amount.toLocaleString()}
                    </p>
                  </div>
                  <input
                    type="range"
                    min={minAmount}
                    max={maxAmount}
                    step={stepAmount}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-2 bg-brown/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary slider-thumb mt-2"
                  />
                  <div className="flex justify-between text-[10px] text-brown/40 dark:text-white/40 font-bold uppercase mt-1">
                    <span>${minAmount.toLocaleString()}</span>
                    <span>${maxAmount.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex justify-between items-end mb-1">
                    <label className="text-xs font-bold uppercase text-brown/60 dark:text-white/60 tracking-wider">
                      Loan Term
                    </label>
                    <p className="text-2xl font-black text-brown dark:text-white">
                      {term} Years
                    </p>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={maxTerm}
                    step={1}
                    value={term}
                    onChange={(e) => setTerm(Number(e.target.value))}
                    className="w-full h-2 bg-brown/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary slider-thumb mt-2"
                  />
                  <div className="flex justify-between text-[10px] text-brown/40 dark:text-white/40 font-bold uppercase mt-1">
                    <span>1 Year</span>
                    <span>{maxTerm} Years</span>
                  </div>
                </div>

                {/* Interest Rate Indicator */}
                <div className="pt-2">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      <span className="text-xs font-bold uppercase text-brown/70 dark:text-white/70 tracking-wider">
                        Current Interest Rate
                      </span>
                    </div>
                    <span className="text-sm font-black text-primary">
                      {interestRate.toFixed(2)}% p.a.
                    </span>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="bg-brown/5 dark:bg-white/5 p-6 rounded-xl space-y-2 text-center border border-brown/5 dark:border-white/5 shadow-inner">
                <span className="text-xs font-bold uppercase tracking-widest text-brown/50 dark:text-white/50">
                  Estimated Monthly Repayment
                </span>
                <div className="text-5xl font-black text-primary drop-shadow-sm">
                  $
                  {monthlyRepayment.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={
                    activeTab === "home"
                      ? "/loans/home-loans"
                      : "/loans/asset-loans"
                  }
                >
                  <Button className="w-full py-4 text-base font-bold flex items-center justify-center gap-2">
                    Open {activeTab === "home" ? "Home" : "Asset"} Loan
                    Calculator
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
