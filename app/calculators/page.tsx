"use client";

import React, { useState } from "react";
import { Calculator as CalcIcon, Home, Download } from "lucide-react";

export default function CalculatorsPage() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(6.25);
  const [loanTenure, setLoanTenure] = useState(30);

  // Simple EMI Calculation
  const r = interestRate / 12 / 100;
  const n = loanTenure * 12;
  const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - loanAmount;

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 pt-28 bg-background-light dark:bg-background-dark min-h-screen">
      {/* Hero Section */}
      <header className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Financial Tools & <span className="text-[#e27b30]">Calculators</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Plan your future with precision. Our suite of professional-grade
          calculators helps you visualize loan repayments, determine
          eligibility, and discover savings opportunities.
        </p>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* EMI Calculator (Large Block) */}
        <section className="lg:col-span-8 bg-white dark:bg-[#2a1e15] rounded-xl shadow-sm border border-gray-100 dark:border-white/10 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                EMI Calculator
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Calculate your monthly loan repayments
              </p>
            </div>
            <div className="p-3 bg-orange-50 dark:bg-white/5 rounded-full text-[#e27b30]">
              <CalcIcon className="w-6 h-6" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-10">
              {/* Loan Amount Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Loan Amount
                  </label>
                  <span className="text-lg font-bold text-[#e27b30]">
                    ${loanAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  className="accent-[#e27b30] w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  type="range"
                  min="10000"
                  max="2000000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs text-gray-400 font-medium">
                  <span>$10k</span>
                  <span>$2M</span>
                </div>
              </div>

              {/* Interest Rate Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Interest Rate (p.a)
                  </label>
                  <span className="text-lg font-bold text-[#e27b30]">
                    {interestRate}%
                  </span>
                </div>
                <input
                  className="accent-[#e27b30] w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  type="range"
                  min="1"
                  max="15"
                  step="0.05"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs text-gray-400 font-medium">
                  <span>1%</span>
                  <span>15%</span>
                </div>
              </div>

              {/* Tenure Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Loan Tenure
                  </label>
                  <span className="text-lg font-bold text-[#e27b30]">
                    {loanTenure} Years
                  </span>
                </div>
                <input
                  className="accent-[#e27b30] w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs text-gray-400 font-medium">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>

            {/* EMI Results Visualization */}
            <div className="bg-gray-50 dark:bg-black/20 rounded-xl p-8 flex flex-col items-center justify-center text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                Monthly Repayment
              </p>
              <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-8">
                ${emi.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </h3>

              <div className="w-full space-y-4">
                <div className="relative h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-[#e27b30]"
                    style={{ width: `${(loanAmount / totalPayment) * 100}%` }}
                  ></div>
                  <div
                    className="h-full bg-gray-800 dark:bg-gray-500"
                    style={{
                      width: `${(totalInterest / totalPayment) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#e27b30] rounded-sm"></div>
                    <span className="text-gray-600 dark:text-gray-300">
                      Principal: ${loanAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-800 dark:bg-gray-500 rounded-sm"></div>
                    <span className="text-gray-600 dark:text-gray-300">
                      Interest: $
                      {totalInterest.toLocaleString(undefined, {
                        maximumFractionDigits: 0,
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10 w-full grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Total Repayment</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    $
                    {totalPayment.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Repayment Type</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    Monthly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Eligibility (Side Block) */}
        <section className="lg:col-span-4 bg-gray-900 dark:bg-[#1a130f] text-white rounded-xl p-8 shadow-xl flex flex-col">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-[#e27b30]/20 text-[#e27b30] text-xs font-bold rounded-full mb-4">
              ELIGIBILITY CHECK
            </span>
            <h2 className="text-2xl font-bold">How much can I borrow?</h2>
          </div>
          <div className="space-y-6 flex-grow">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Gross Monthly Income
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-[#e27b30] focus:border-[#e27b30] outline-none transition-all"
                  type="text"
                  defaultValue="8,500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Monthly Expenses
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-[#e27b30] focus:border-[#e27b30] outline-none transition-all"
                  type="text"
                  defaultValue="3,200"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Other Commitments
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-[#e27b30] focus:border-[#e27b30] outline-none transition-all"
                  type="text"
                  defaultValue="450"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-xl text-center">
            <p className="text-sm text-gray-400 mb-2">
              Estimated Borrowing Power
            </p>
            <p className="text-3xl font-bold text-[#e27b30]">$745,000</p>
          </div>
          <button className="mt-6 w-full bg-[#e27b30] py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all text-white">
            Get Prequalified
          </button>
        </section>

        {/* Affordability Calculator (Medium Block) */}
        <section className="lg:col-span-6 bg-white dark:bg-[#2a1e15] rounded-xl shadow-sm border border-gray-100 dark:border-white/10 p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300">
              <Home className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Affordability Calculator
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-lg">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
                  Property Value
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  $850,000
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-lg">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
                  Your Deposit (20%)
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  $170,000
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Based on your deposit and the current market rates, your LVR
                (Loan-to-Value Ratio) is{" "}
                <span className="font-bold text-gray-900 dark:text-white">
                  80%
                </span>
                .
              </p>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                <div
                  className="h-full bg-[#e27b30] rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <p className="mt-4 text-xs text-gray-400">
                Lower LVRs often qualify for better interest rates.
              </p>
            </div>
          </div>
        </section>

        {/* Savings Calculator (Medium Block) */}
        <section className="lg:col-span-6 bg-white dark:bg-[#2a1e15] rounded-xl shadow-sm border border-gray-100 dark:border-white/10 p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-orange-50 dark:bg-white/5 rounded-xl flex items-center justify-center text-[#e27b30]">
              <CalcIcon className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Early Repayment Savings
            </h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Additional Monthly Payment
              </span>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">$</span>
                <input
                  className="w-24 text-right border border-gray-200 dark:border-white/10 bg-transparent rounded p-1 font-bold text-gray-900 dark:text-white outline-none focus:border-[#e27b30]"
                  type="text"
                  defaultValue="500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-emerald-100 dark:border-emerald-900/50 bg-emerald-50/30 dark:bg-emerald-900/10 rounded-xl">
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                  Interest Saved
                </p>
                <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                  $142,300
                </p>
              </div>
              <div className="p-4 border border-blue-100 dark:border-blue-900/50 bg-blue-50/30 dark:bg-blue-900/10 rounded-xl">
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  Time Saved
                </p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  7y 4m
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Amortization Table (Full Width) */}
        <section className="lg:col-span-12 bg-white dark:bg-[#2a1e15] rounded-xl shadow-sm border border-gray-100 dark:border-white/10 overflow-hidden">
          <div className="p-8 border-b border-gray-100 dark:border-white/10 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Amortization Schedule (Yearly)
            </h2>
            <button className="flex items-center gap-2 text-sm font-semibold text-[#e27b30] hover:underline">
              <Download className="w-4 h-4" />
              Export PDF
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 dark:bg-black/20">
                <tr>
                  <th className="px-8 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Year
                  </th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Opening Balance
                  </th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Principal Paid
                  </th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Interest Paid
                  </th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Closing Balance
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-8 py-4 text-sm font-bold text-gray-700 dark:text-gray-300">
                    1
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-600 dark:text-gray-400">
                    $500,000
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-600 dark:text-gray-400">
                    $5,892
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-600 dark:text-gray-400">
                    $31,051
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-600 dark:text-gray-400">
                    $494,108
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-8 py-4 text-sm font-bold text-gray-700 dark:text-gray-300">
                    2
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-600 dark:text-gray-400">
                    $494,108
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-600 dark:text-gray-400">
                    $6,271
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-600 dark:text-gray-400">
                    $30,672
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-600 dark:text-gray-400">
                    $487,837
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-8 py-4 text-sm font-bold text-gray-700 dark:text-gray-300">
                    3
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-600 dark:text-gray-400">
                    $487,837
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-600 dark:text-gray-400">
                    $6,675
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-600 dark:text-gray-400">
                    $30,268
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-600 dark:text-gray-400">
                    $481,162
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-8 py-4 text-sm font-bold text-gray-700 dark:text-gray-300">
                    4
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-600 dark:text-gray-400">
                    $481,162
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-600 dark:text-gray-400">
                    $7,105
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-600 dark:text-gray-400">
                    $29,838
                  </td>
                  <td className="px-8 py-4 text-sm text-gray-600 dark:text-gray-400">
                    $474,057
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-black/20 border-t border-gray-100 dark:border-white/10 text-center">
            <button className="text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              View Full 30 Year Table
            </button>
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <div className="mt-16 rounded-3xl bg-[#e27b30]/10 dark:bg-[#e27b30]/5 p-12 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img
            className="w-full h-full object-cover"
            data-alt="Abstract financial geometric shapes and patterns"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-9NpHtPaVI6CPVlimh3KPIsMLgywgCHmXs3s6zDSLXFpSoOJAGb2nLESfo2z2wIvvCepPlhARYT0Z2V9IKzy5EAosup9eyyaXgUU6GLfS6B8ph1gqIgBc1LJ-UjyVWk6zQgThUC4MZEfbc4HGoBQ88lgiYIx8ZY7-xjarYhwud3HjJWqu1baTy8ezQohZz79K5IDLyvYbKRnE1exFJawGM7-FseMUHbFawikfhNlcJMmk8jIH8oUmOPNU3oPe-XxOAZqUOQF_dLFA"
          />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to take the next step?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            These calculations are estimates. Talk to our expert mortgage
            brokers to get a personalized strategy for your financial goals.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#e27b30] text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-[#e27b30]/20 hover:scale-[1.02] transition-all">
              Book Free Consultation
            </button>
            <button className="bg-white dark:bg-transparent text-gray-900 dark:text-white font-bold px-8 py-4 rounded-xl border border-gray-200 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
              Download Rates Guide
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
