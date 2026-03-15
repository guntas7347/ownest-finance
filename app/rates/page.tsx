"use client";

import React from "react";
import {
  Home,
  Truck,
  Car,
  Tractor,
  Banknote,
  CalendarOff,
  FileText,
  CheckCircle2,
} from "lucide-react";

export default function RatesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 pt-28 bg-background-light dark:bg-background-dark min-h-screen">
      {/* Hero Header */}
      <header className="mb-16">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-[#e27b30]/10 text-[#e27b30] text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Market Leading Rates
          </span>
          <h1 className="text-5xl font-bold font-headline mb-6 leading-[1.1] text-gray-900 dark:text-white">
            Transparent pricing for your next milestone.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            View our current interest rates for home loans and asset finance. We
            update our data daily to ensure you have the most accurate
            comparison tools at your fingertips.
          </p>
        </div>
      </header>

      {/* Bento Rates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
        {/* Home Loans Primary */}
        <div className="lg:col-span-8 bg-gray-50 dark:bg-[#2a1e15] rounded-xl p-8 border border-gray-200 dark:border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                <Home className="text-[#e27b30] w-6 h-6" />
                Home Loan Packages
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                Updated recently
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 text-[10px] font-bold uppercase tracking-tight rounded text-gray-700 dark:text-gray-300">
                Variable
              </span>
              <span className="px-3 py-1 bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 text-[10px] font-bold uppercase tracking-tight rounded text-gray-700 dark:text-gray-300">
                Fixed
              </span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  <th className="pb-4 min-w-[150px]">Loan Type</th>
                  <th className="pb-4 min-w-[150px]">Starting Rate (p.a.)</th>
                  <th className="pb-4 min-w-[150px]">Comparison Rate</th>
                  <th className="pb-4 min-w-[100px]">Max LVR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                <tr>
                  <td className="py-6 pr-4">
                    <div className="font-bold text-gray-900 dark:text-white">
                      Standard Variable
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Owner Occupied, P&I
                    </div>
                  </td>
                  <td className="py-6 pr-4">
                    <div className="text-2xl font-bold text-[#e27b30]">
                      5.84%
                    </div>
                  </td>
                  <td className="py-6 pr-4 text-gray-600 dark:text-gray-400">
                    5.89% p.a.
                  </td>
                  <td className="py-6 font-medium text-gray-900 dark:text-white">
                    80% - 95%
                  </td>
                </tr>
                <tr>
                  <td className="py-6 pr-4">
                    <div className="font-bold text-gray-900 dark:text-white">
                      2 Year Fixed
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Owner Occupied, P&I
                    </div>
                  </td>
                  <td className="py-6 pr-4">
                    <div className="text-2xl font-bold text-[#e27b30]">
                      6.12%
                    </div>
                  </td>
                  <td className="py-6 pr-4 text-gray-600 dark:text-gray-400">
                    6.45% p.a.
                  </td>
                  <td className="py-6 font-medium text-gray-900 dark:text-white">
                    80%
                  </td>
                </tr>
                <tr>
                  <td className="py-6 pr-4">
                    <div className="font-bold text-gray-900 dark:text-white">
                      Investment Variable
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Investor, P&I
                    </div>
                  </td>
                  <td className="py-6 pr-4">
                    <div className="text-2xl font-bold text-[#e27b30]">
                      6.24%
                    </div>
                  </td>
                  <td className="py-6 pr-4 text-gray-600 dark:text-gray-400">
                    6.29% p.a.
                  </td>
                  <td className="py-6 font-medium text-gray-900 dark:text-white">
                    80% - 90%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* EMI Calculator Preview */}
        <div className="lg:col-span-4 bg-gray-900 dark:bg-[#1a130f] text-white rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-4">Sample EMI</h3>
            <p className="text-white/60 text-sm mb-8">
              Estimated monthly repayment for a $500,000 loan at 5.84% p.a. over
              30 years.
            </p>
            <div className="mb-8">
              <div className="text-4xl font-bold text-[#e27b30]">$2,945</div>
              <div className="text-xs text-white/40 mt-1 uppercase tracking-widest font-bold">
                Estimated Monthly Payment
              </div>
            </div>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex justify-between">
                <span>Principal</span>
                <span className="font-medium">$500,000</span>
              </li>
              <li className="flex justify-between">
                <span>Interest (Total)</span>
                <span className="font-medium">$560,200</span>
              </li>
              <li className="flex justify-between">
                <span>Loan Term</span>
                <span className="font-medium">30 Years</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 z-10 w-full relative">
            <button className="w-full py-4 bg-[#e27b30] text-white font-bold rounded hover:brightness-110 transition-all z-20 relative block">
              Calculate Your Rate
            </button>
          </div>

          {/* Abstract Design Element */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#e27b30]/20 rounded-full blur-3xl z-0 pointer-events-none"></div>
        </div>
      </div>

      {/* Asset Finance Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
          <Truck className="text-[#e27b30] w-8 h-8" />
          Asset & Commercial Loans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Car Finance */}
          <div className="border border-gray-200 dark:border-white/10 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-white/5 transition-shadow bg-white dark:bg-[#2a1e15]">
            <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 flex items-center justify-center rounded mb-4 text-[#e27b30]">
              <Car className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Consumer Car Loan
            </h4>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-[#e27b30]">6.99%</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-tighter">
                Starting p.a.
              </span>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex justify-between border-b border-gray-100 dark:border-white/5 pb-1">
                <span>Credit Tier</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  750+
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-100 dark:border-white/5 pb-1">
                <span>Max Term</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  7 Years
                </span>
              </div>
            </div>
          </div>

          {/* Commercial Truck */}
          <div className="border border-gray-200 dark:border-white/10 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-white/5 transition-shadow bg-white dark:bg-[#2a1e15]">
            <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 flex items-center justify-center rounded mb-4 text-[#e27b30]">
              <Truck className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Truck & Heavy Vehicle
            </h4>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-[#e27b30]">7.25%</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-tighter">
                Starting p.a.
              </span>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex justify-between border-b border-gray-100 dark:border-white/5 pb-1">
                <span>Max LVR</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  100%
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-100 dark:border-white/5 pb-1">
                <span>Averaged APR</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  7.88%
                </span>
              </div>
            </div>
          </div>

          {/* Equipment */}
          <div className="border border-gray-200 dark:border-white/10 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-white/5 transition-shadow bg-white dark:bg-[#2a1e15]">
            <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 flex items-center justify-center rounded mb-4 text-[#e27b30]">
              <Tractor className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Business Equipment
            </h4>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-[#e27b30]">7.50%</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-tighter">
                Starting p.a.
              </span>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex justify-between border-b border-gray-100 dark:border-white/5 pb-1">
                <span>Processing</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  24-48hrs
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-100 dark:border-white/5 pb-1">
                <span>Repayment</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  Flex Monthly
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Fees & Eligibility */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16 border-t border-gray-200 dark:border-white/10">
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Fees & Charges
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-[#e27b30] mt-1 shrink-0">
                <Banknote className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  Processing Fees
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Typically $500 - $995 depending on loan complexity. This is
                  capitalized into the loan amount unless requested otherwise.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-[#e27b30] mt-1 shrink-0">
                <CalendarOff className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  Prepayment Charges
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Variable loans carry no prepayment penalties. Fixed-rate loans
                  may incur "Break Costs" if paid out early.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-[#e27b30] mt-1 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  Valuation Fees
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Property valuations are often complimentary for primary
                  residence loans under 80% LVR.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Eligibility Criteria
          </h3>
          <div className="bg-gray-50 dark:bg-[#2a1e15] p-8 rounded-xl border border-gray-100 dark:border-white/5">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600 dark:text-green-500 w-5 h-5 shrink-0" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Australian Citizen or Permanent Resident
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600 dark:text-green-500 w-5 h-5 shrink-0" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Minimum age of 18 years
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600 dark:text-green-500 w-5 h-5 shrink-0" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Consistent employment (min. 6 months)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600 dark:text-green-500 w-5 h-5 shrink-0" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Credit Score of 600+ for Tier 1 Rates
                </span>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-white dark:bg-black/20 rounded border border-gray-200 dark:border-white/10">
              <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                "Rates are subject to credit assessment and individual financial
                circumstances. Rates displayed are 'from' rates for high-quality
                applicants."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final Disclaimer Section */}
      <section className="mt-8 py-12 px-8 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
          Regulatory Disclaimer
        </h4>
        <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed space-y-4">
          <p>
            The rates and information provided are for illustrative purposes and
            do not constitute an offer of credit. All applications are subject
            to the lender's credit criteria and approval process. Comparison
            rates are calculated on a loan amount of $150,000 for a term of 25
            years. WARNING: This comparison rate is true only for the examples
            given and may not include all fees and charges. Different terms,
            fees or other loan amounts might result in a different comparison
            rate.
          </p>
          <p>
            Ownest Finance Pty Ltd (ABN 12 345 678 910) operates under
            Australian Credit License 123456. Interest rates are current as of
            the date specified and are subject to change without notice.
          </p>
        </div>
      </section>
    </main>
  );
}
