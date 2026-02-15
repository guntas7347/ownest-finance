"use client";

import React from "react";
import { Wallet, FileText, Repeat, Cog } from "lucide-react";

const LOAN_STRUCTURES = [
    {
        icon: Wallet,
        title: "Chattel Mortgage",
        subtitle: "Ownership from day one",
        rateType: "Fixed or Variable",
        rate: "From 5.25%",
        term: "7 Years",
    },
    {
        icon: FileText,
        title: "Finance Lease",
        subtitle: "Tax effective leasing",
        rateType: "Fixed",
        rate: "From 5.80%",
        term: "5 Years",
    },
    {
        icon: Repeat,
        title: "Novated Leasing",
        subtitle: "Salary sacrificed vehicles",
        rateType: "Fixed",
        rate: "From 6.10%",
        term: "5 Years",
    },
    {
        icon: Cog,
        title: "Operating Lease",
        subtitle: "For industrial equipment",
        rateType: "Variable",
        rate: "From 6.50%",
        term: "10 Years",
    },
];

export default function ComparisonTable() {
    return (
        <section className="py-24 container max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold mb-4 text-brown">
                    Compare Our <span className="text-primary">Asset Programs</span>
                </h2>
                <p className="text-brown/60 dark:text-white/60 max-w-xl mx-auto">
                    Select the financing structure that best aligns with your fiscal strategy
                    and asset lifecycle.
                </p>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-y-4">
                    <thead>
                        <tr className="text-brown/40 dark:text-white/40 uppercase text-xs tracking-[0.2em] font-bold">
                            <th className="px-8 py-4">Loan Structure</th>
                            <th className="px-8 py-4">Rate Type</th>
                            <th className="px-8 py-4 text-center">Standard Rate</th>
                            <th className="px-8 py-4 text-center">Max Term</th>
                            <th className="px-8 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {LOAN_STRUCTURES.map((loan, index) => (
                            <tr
                                key={index}
                                className="glass-card dark:bg-white/5 group cursor-pointer transition-all hover:bg-white/80 dark:hover:bg-white/10"
                            >
                                <td className="px-8 py-6 rounded-l-2xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-primary">
                                            <loan.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-brown">{loan.title}</div>
                                            <div className="text-xs text-brown/50 dark:text-white/50">
                                                {loan.subtitle}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-brown/70 dark:text-white/70">
                                    {loan.rateType}
                                </td>
                                <td className="px-8 py-6 text-center">
                                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 font-bold text-sm border border-green-500/20">
                                        {loan.rate}
                                    </span>
                                </td>
                                <td className="px-8 py-6 text-center font-semibold text-brown">
                                    {loan.term}
                                </td>
                                <td className="px-8 py-6 text-right rounded-r-2xl">
                                    <button className="px-4 py-2 text-primary font-bold hover:underline">
                                        Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
