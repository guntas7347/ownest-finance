'use client'

import React from "react";
import Button from "@/Components/Button";
import Card from "@/Components/Card";
import { CheckCircle } from "lucide-react";

export default function Calculator() {
    const [loanAmount, setLoanAmount] = React.useState(500000);
    const [loanTerm, setLoanTerm] = React.useState(30);
    const [interestRate, setInterestRate] = React.useState(6.35);

    const monthlyRepayment = React.useMemo(() => {
        const r = interestRate / 100 / 12;
        const n = loanTerm * 12;

        if (r === 0) return loanAmount / n;

        return (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }, [loanAmount, loanTerm, interestRate]);

    return (
        <section className="py-24 relative overflow-hidden bg-background-light dark:bg-background-dark transition-colors">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-6">
                        <h2 className="text-5xl font-extrabold text-brown tracking-tight">
                            Precision Wealth <br />
                            Planning.
                        </h2>
                        <p className="text-lg text-brown/60 dark:text-white/60">
                            Our intelligent calculator provides immediate clarity on your
                            borrowing capacity, tailored to modern asset valuation.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-center gap-3 text-brown font-semibold">
                                <CheckCircle className="text-primary w-6 h-6" />
                                Real-time interest rate sync
                            </li>
                            <li className="flex items-center gap-3 text-brown font-semibold">
                                <CheckCircle className="text-primary w-6 h-6" />
                                No hidden processing fees
                            </li>
                            <li className="flex items-center gap-3 text-brown font-semibold">
                                <CheckCircle className="text-primary w-6 h-6" />
                                Customizable repayment structures
                            </li>
                        </ul>

                        <div className="pt-4">
                            <a href="/loans/asset-loans#calculator">
                                <Button variant="outline" className="py-4 px-8 text-lg border-2">
                                    Calculate Asset Loan
                                </Button>
                            </a>
                        </div>
                    </div>
                    <Card
                        variant="glass"
                        className="p-10 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
                        <div className="space-y-8">
                            {/* Loan Amount */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <label className="text-sm font-bold text-brown/60 dark:text-white/60 uppercase">
                                        Loan Amount
                                    </label>
                                    <span className="text-3xl font-black text-brown">
                                        ${loanAmount.toLocaleString()}
                                    </span>
                                </div>
                                <input
                                    className="w-full h-2 bg-brown/10 dark:bg-white/10 rounded-full appearance-none slider-thumb cursor-pointer accent-primary"
                                    max={2000000}
                                    min={10000}
                                    step={10000}
                                    type="range"
                                    value={loanAmount}
                                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                                />
                            </div>

                            {/* Duration */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <label className="text-sm font-bold text-brown/60 dark:text-white/60 uppercase">
                                        Loan Term
                                    </label>
                                    <span className="text-3xl font-black text-brown">
                                        {loanTerm} Years
                                    </span>
                                </div>
                                <input
                                    className="w-full h-2 bg-brown/10 dark:bg-white/10 rounded-full appearance-none slider-thumb cursor-pointer accent-primary"
                                    max={30}
                                    min={1}
                                    step={1}
                                    type="range"
                                    value={loanTerm}
                                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                                />
                            </div>

                            {/* Interest Rate */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <label className="text-sm font-bold text-brown/60 dark:text-white/60 uppercase">
                                        Interest Rate (p.a.)
                                    </label>
                                    <span className="text-3xl font-black text-brown">
                                        {interestRate.toFixed(2)}%
                                    </span>
                                </div>
                                <input
                                    className="w-full h-2 bg-brown/10 dark:bg-white/10 rounded-full appearance-none slider-thumb cursor-pointer accent-primary"
                                    max={15}
                                    min={1}
                                    step={0.05}
                                    type="range"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(Number(e.target.value))}
                                />
                            </div>

                            {/* Result Display */}
                            <div className="bg-primary-dark/5 dark:bg-white/5 p-8 rounded-2xl border border-brown/5 dark:border-white/5 space-y-2">
                                <p className="text-center text-sm font-bold text-brown/60 dark:text-white/60 uppercase">
                                    Estimated Monthly Payment
                                </p>
                                <p className="text-center text-5xl font-black text-primary">
                                    ${monthlyRepayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                                <p className="text-center text-xs text-brown/40 dark:text-white/40 pt-4 italic">
                                    Based on principal & interest repayments
                                </p>
                            </div>
                            <Button className="w-full py-5 text-lg hover:shadow-2xl hover:shadow-orange-500/40">
                                Check Eligibility Now
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
