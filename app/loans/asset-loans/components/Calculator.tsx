"use client";

import React, { useState, useEffect } from "react";
import Card from "@/Components/Card";
import Button from "@/Components/Button";

type Frequency = "Weekly" | "Fortnightly" | "Monthly";

export default function Calculator() {
    const [assetValue, setAssetValue] = useState(50000);
    const [deposit, setDeposit] = useState(10000); // Default deposit
    const [balloonValue, setBalloonValue] = useState(0); // Default balloon
    const [term, setTerm] = useState(5);
    const [interestRate, setInterestRate] = useState(7.5);
    const [frequency, setFrequency] = useState<Frequency>("Monthly");
    const [repayment, setRepayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    // Ensure deposit and balloon don't exceed logical limits
    useEffect(() => {
        if (deposit > assetValue) setDeposit(assetValue);
        // Max balloon is usually a percentage of asset value, checking logical constraint
        if (balloonValue > assetValue) setBalloonValue(assetValue);
    }, [assetValue, deposit, balloonValue]);


    useEffect(() => {
        calculateLoan();
    }, [assetValue, deposit, balloonValue, term, interestRate, frequency]);

    const calculateLoan = () => {
        const principal = assetValue - deposit;
        const ratePerYear = interestRate / 100;
        let periodsPerYear = 12;

        if (frequency === "Weekly") periodsPerYear = 52;
        if (frequency === "Fortnightly") periodsPerYear = 26;

        const ratePerPeriod = ratePerYear / periodsPerYear;
        const totalPeriods = term * periodsPerYear;

        // PMT Formula with Balloon:
        // P = Principal
        // r = ratePerPeriod
        // n = totalPeriods
        // B = Balloon
        // Payment = (P - (B / (1 + r)^n)) * (r / (1 - (1 + r)^-n))

        if (principal <= 0) {
            setRepayment(0);
            setTotalInterest(0);
            return;
        }

        const numerator = principal - (balloonValue / Math.pow(1 + ratePerPeriod, totalPeriods));
        const denominator = (1 - Math.pow(1 + ratePerPeriod, -totalPeriods)) / ratePerPeriod;

        const pmt = numerator / denominator;

        setRepayment(pmt);

        const totalPaid = (pmt * totalPeriods) + balloonValue + deposit;
        const totalInterestPaid = (pmt * totalPeriods) + balloonValue - principal;
        setTotalInterest(totalInterestPaid > 0 ? totalInterestPaid : 0);
    };

    return (
        <section id='calculator' className="py-24 bg-primary/5">
            <div className="container max-w-7xl mx-auto px-6">
                <Card
                    variant="glass"
                    className="max-w-6xl mx-auto overflow-hidden shadow-2xl flex flex-col lg:flex-row p-0"
                >
                    {/* Calculator Inputs */}
                    <div className="flex-1 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-brown/5 dark:border-white/10 space-y-8">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-3xl font-bold text-brown">
                                Asset Loan <span className="text-primary">Calculator</span>
                            </h2>
                        </div>

                        {/* Asset Value */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-brown/50 dark:text-white/50">
                                    Asset Value
                                </label>
                                <span className="text-xl font-bold text-primary">
                                    ${assetValue.toLocaleString()}
                                </span>
                            </div>
                            <input
                                className="w-full h-2 bg-brown/10 dark:bg-white/10 rounded-full appearance-none slider-thumb cursor-pointer"
                                max={200000}
                                min={5000}
                                step={1000}
                                type="range"
                                value={assetValue}
                                onChange={(e) => setAssetValue(Number(e.target.value))}
                            />
                        </div>

                        {/* Deposit */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-brown/50 dark:text-white/50">
                                    Deposit
                                </label>
                                <span className="text-xl font-bold text-primary">
                                    ${deposit.toLocaleString()}
                                </span>
                            </div>
                            <input
                                className="w-full h-2 bg-brown/10 dark:bg-white/10 rounded-full appearance-none slider-thumb cursor-pointer"
                                max={assetValue} // Deposit cannot exceed asset value
                                min={0}
                                step={1000}
                                type="range"
                                value={deposit}
                                onChange={(e) => setDeposit(Number(e.target.value))}
                            />
                        </div>

                        {/* Balloon Payment */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-brown/50 dark:text-white/50">
                                    Balloon Payment (Residual)
                                </label>
                                <span className="text-xl font-bold text-primary">
                                    ${balloonValue.toLocaleString()}
                                </span>
                            </div>
                            <input
                                className="w-full h-2 bg-brown/10 dark:bg-white/10 rounded-full appearance-none slider-thumb cursor-pointer"
                                max={assetValue * 0.5} // Typically capped around 50% depending on lender
                                min={0}
                                step={1000}
                                type="range"
                                value={balloonValue}
                                onChange={(e) => setBalloonValue(Number(e.target.value))}
                            />
                            <p className="text-xs text-brown/40 dark:text-white/40 mt-1">
                                Lump sum payment at the end of the loan term.
                            </p>
                        </div>

                        {/* Term & Interest Rate */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm font-bold uppercase tracking-widest text-brown/50 dark:text-white/50 mb-2 block">
                                    Loan Term
                                </label>
                                <div className="grid grid-cols-5 gap-2">
                                    {[1, 2, 3, 4, 5, 7].map((y) => (
                                        <button
                                            key={y}
                                            onClick={() => setTerm(y)}
                                            className={`py-2 rounded px-2 text-sm font-bold transition-all border ${term === y
                                                ? "bg-primary text-white border-primary"
                                                : "bg-white dark:bg-black/20 text-brown/60 dark:text-white/60 border-brown/10 dark:border-white/10 hover:border-primary"
                                                }`}
                                        >
                                            {y} Yr
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-bold uppercase tracking-widest text-brown/50 dark:text-white/50 mb-2 block">
                                    Interest Rate (%)
                                </label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(Number(e.target.value))}
                                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-black/20 border border-brown/10 dark:border-white/10 focus:outline-none focus:border-primary text-brown dark:text-white font-bold"
                                />
                            </div>
                        </div>

                        {/* Payment Frequency */}
                        <div>
                            <label className="text-sm font-bold uppercase tracking-widest text-brown/50 dark:text-white/50 mb-2 block">
                                Payment Frequency
                            </label>
                            <div className="flex bg-white dark:bg-black/20 rounded-lg p-1 border border-brown/10 dark:border-white/10 w-fit">
                                {(["Weekly", "Fortnightly", "Monthly"] as Frequency[]).map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setFrequency(f)}
                                        className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${frequency === f
                                            ? "bg-primary text-white shadow-md"
                                            : "text-brown/60 dark:text-white/60 hover:text-primary"
                                            }`}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>


                    </div>

                    {/* Calculator Results */}
                    <div className="lg:w-[400px] p-10 bg-gray-900 text-white flex flex-col justify-center relative overflow-hidden">
                        <div className="relative z-10">
                            <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-2">
                                Estimated Repayment
                            </p>
                            <h3 className="text-5xl font-extrabold text-primary mb-2">
                                ${repayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                <span className="text-lg font-normal text-white/50">
                                    {" "}
                                    / {frequency}
                                </span>
                            </h3>

                            <div className="space-y-4 my-8 p-6 bg-white/5 rounded-2xl border border-white/5">
                                <div className="flex justify-between text-sm py-2 border-b border-white/10">
                                    <span className="text-white/60">Loan Amount</span>
                                    <span className="font-bold">${(assetValue - deposit).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm py-2 border-b border-white/10">
                                    <span className="text-white/60">Total Interest</span>
                                    <span className="font-bold">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                                </div>
                                <div className="flex justify-between text-sm py-2">
                                    <span className="text-white/60">Balloon Payment</span>
                                    <span className="font-bold text-primary">${balloonValue.toLocaleString()}</span>
                                </div>
                            </div>

                            <Button className="w-full py-4 text-xl shadow-xl shadow-primary/20">
                                Apply Now
                            </Button>
                            <p className="text-[10px] text-white/30 mt-6 text-center leading-relaxed italic">
                                *This calculator provides an estimate only. Actual rates and repayments may vary based on your credit profile and lender criteria.
                            </p>
                        </div>
                        {/* Background texture */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
                    </div>
                </Card>
            </div>
        </section>
    );
}
