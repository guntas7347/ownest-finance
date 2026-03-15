import React from "react";
import {
  BadgeCheck,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  FileText,
  History,
  Lock,
  Percent,
  RefreshCw,
  Split,
  TrendingUp,
  Wallet,
} from "lucide-react";

export default function HomeLoanPage() {
  return (
    <>
      <section className="py-20 bg-gray-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Unmatched Flexibility
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl">
              Features designed for real life, not just for banks.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-6 border border-gray-200 dark:border-white/10 rounded-xl hover:shadow-md transition-shadow">
              <Wallet className="text-[#e27b30] mb-4" />
              <h3 className="font-bold text-sm mb-2">Offset Accounts</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-500 leading-normal">
                Reduce interest by using your savings against loan balance.
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-white/10 rounded-xl hover:shadow-md transition-shadow">
              <History className="text-[#e27b30] mb-4" />
              <h3 className="font-bold text-sm mb-2">Redraw Facility</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-500 leading-normal">
                Access extra repayments whenever you need liquidity.
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-white/10 rounded-xl hover:shadow-md transition-shadow">
              <CircleDollarSign className="text-[#e27b30] mb-4" />
              <h3 className="font-bold text-sm mb-2">Extra Repayments</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-500 leading-normal">
                Pay off your loan faster without penalty fees.
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-white/10 rounded-xl hover:shadow-md transition-shadow">
              <TrendingUp className="text-[#e27b30] mb-4" />
              <h3 className="font-bold text-sm mb-2">Fixed &amp; Variable</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-500 leading-normal">
                Stability of fixed or the flexibility of market rates.
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-white/10 rounded-xl hover:shadow-md transition-shadow">
              <RefreshCw className="text-[#e27b30] mb-4" />
              <h3 className="font-bold text-sm mb-2">Easy Portability</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-500 leading-normal">
                Take your loan with you when you move homes.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Segments & Structures */}
      <section className="py-20 bg-white dark:bg-[#2a1e15] border-y border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Segments */}
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-headline font-bold mb-8">
                Who are you buying for?
              </h2>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-lg group hover:bg-[#e27b30] hover:text-white transition-all">
                  <span className="font-medium">First Home Buyer</span>
                  <ChevronRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-lg group hover:bg-[#e27b30] hover:text-white transition-all">
                  <span className="font-medium">Property Investor</span>
                  <ChevronRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-lg group hover:bg-[#e27b30] hover:text-white transition-all">
                  <span className="font-medium">Refinancing My Loan</span>
                  <ChevronRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-lg group hover:bg-[#e27b30] hover:text-white transition-all">
                  <span className="font-medium">New Construction</span>
                  <ChevronRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            {/* Loan Structures */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-headline font-bold mb-8">
                Loan Structures
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 border border-gray-200 dark:border-white/10 rounded-xl">
                  <div className="flex justify-between mb-3">
                    <h4 className="font-bold">Fixed Rate</h4>
                    <Lock className="text-[#e27b30]" />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-500 mb-4">
                    Lock in your interest rate for 1–5 years for absolute budget
                    certainty.
                  </p>
                  <span className="text-[#e27b30] text-xs font-bold">
                    Best for Stability
                  </span>
                </div>
                <div className="p-5 border border-gray-200 dark:border-white/10 rounded-xl">
                  <div className="flex justify-between mb-3">
                    <h4 className="font-bold">Variable Rate</h4>
                    <TrendingUp className="text-[#e27b30]" />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-500 mb-4">
                    Take advantage of market dips with no limit on extra
                    repayments.
                  </p>
                  <span className="text-[#e27b30] text-xs font-bold">
                    Best for Flexibility
                  </span>
                </div>
                <div className="p-5 border border-gray-200 dark:border-white/10 rounded-xl">
                  <div className="flex justify-between mb-3">
                    <h4 className="font-bold">Split Loan</h4>
                    <Split className="text-[#e27b30]" />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-500 mb-4">
                    Combine both fixed and variable features into one single
                    loan account.
                  </p>
                  <span className="text-[#e27b30] text-xs font-bold">
                    Best of Both Worlds
                  </span>
                </div>
                <div className="p-5 border border-gray-200 dark:border-white/10 rounded-xl">
                  <div className="flex justify-between mb-3">
                    <h4 className="font-bold">Interest Only</h4>
                    <Percent className="text-[#e27b30]" />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-500 mb-4">
                    Minimize monthly outgoings for a set period. Ideal for
                    investors.
                  </p>
                  <span className="text-[#e27b30] text-xs font-bold">
                    Best for Cashflow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Repayment Preview & Practical Details */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Repayment Preview */}
          <div className="bg-gray-900 dark:bg-[#1a130f] text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-6">Repayment Preview</h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-wider">
                  Loan Amount
                </p>
                <p className="text-2xl font-bold">$600,000</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-wider">
                  Estimated Monthly Repayment
                </p>
                <p className="text-4xl font-bold text-[#e27b30]">$3,534</p>
              </div>
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">
                    Interest Rate
                  </p>
                  <p className="text-sm font-bold">5.84% p.a.</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">
                    Loan Term
                  </p>
                  <p className="text-sm font-bold">30 Years</p>
                </div>
              </div>
              <button className="w-full bg-[#e27b30] py-3 rounded font-bold text-sm mt-4">
                Adjust Calculation
              </button>
            </div>
          </div>
          {/* Eligibility & Docs */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <BadgeCheck className="text-[#e27b30]" /> Eligibility
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="text-green-500 text-sm mt-1" />
                  Australian Citizen or PR holder
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="text-green-500 text-sm mt-1" />
                  Steady employment (min 6 months)
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="text-green-500 text-sm mt-1" />
                  Good credit history
                </li>
              </ul>
              <h3 className="font-bold text-lg mt-8 mb-4 flex items-center gap-2">
                <CircleDollarSign className="text-[#e27b30]" /> Major Fees
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm py-2 border-b border-gray-200 dark:border-white/10">
                  <span className="text-gray-600 dark:text-gray-300">
                    Application Fee
                  </span>
                  <span className="font-bold">$0</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b border-gray-200 dark:border-white/10">
                  <span className="text-gray-600 dark:text-gray-300">
                    Valuation Fee
                  </span>
                  <span className="font-bold">$250</span>
                </div>
                <div className="flex justify-between text-sm py-2">
                  <span className="text-gray-600 dark:text-gray-300">
                    Monthly Admin
                  </span>
                  <span className="font-bold">$10</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <FileText className="text-[#e27b30]" /> Required Docs
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-8 h-8 rounded bg-white dark:bg-[#2a1e15] flex items-center justify-center border border-gray-200 dark:border-white/10 shrink-0">
                    <span className="text-xs font-bold">01</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Proof of Identity</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 dark:text-gray-500">
                      Passport, Driver License, or Medicare
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-8 h-8 rounded bg-white dark:bg-[#2a1e15] flex items-center justify-center border border-gray-200 dark:border-white/10 shrink-0">
                    <span className="text-xs font-bold">02</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Proof of Income</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 dark:text-gray-500">
                      Last 2 payslips &amp; Group Certificate
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-8 h-8 rounded bg-white dark:bg-[#2a1e15] flex items-center justify-center border border-gray-200 dark:border-white/10 shrink-0">
                    <span className="text-xs font-bold">03</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">
                      Assets &amp; Liabilities
                    </p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 dark:text-gray-500">
                      Bank statements &amp; Credit card limits
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Timeline */}
      <section className="py-20 bg-gray-900 dark:bg-[#1a130f] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-headline font-bold mb-16 text-center">
            Your Path to Settlement
          </h2>
          <div className="relative">
            {/* Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#e27b30]/20 hidden lg:block -translate-y-1/2"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              <div className="bg-gray-900 dark:bg-[#1a130f] border border-white/10 p-8 rounded-xl lg:text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-[#e27b30] rounded-full flex items-center justify-center font-bold mb-6 text-xl">
                  1
                </div>
                <h4 className="font-bold mb-2">Prequalification</h4>
                <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
                  Know your borrowing limit in minutes with a soft credit check.
                </p>
              </div>
              <div className="bg-gray-900 dark:bg-[#1a130f] border border-white/10 p-8 rounded-xl lg:text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-[#e27b30] rounded-full flex items-center justify-center font-bold mb-6 text-xl">
                  2
                </div>
                <h4 className="font-bold mb-2">Formal Approval</h4>
                <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
                  Submit documents and get a formal offer from our credit team.
                </p>
              </div>
              <div className="bg-gray-900 dark:bg-[#1a130f] border border-white/10 p-8 rounded-xl lg:text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-[#e27b30] rounded-full flex items-center justify-center font-bold mb-6 text-xl">
                  3
                </div>
                <h4 className="font-bold mb-2">Valuation</h4>
                <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
                  We assess the property value to finalize the loan-to-value
                  ratio.
                </p>
              </div>
              <div className="bg-gray-900 dark:bg-[#1a130f] border border-white/10 p-8 rounded-xl lg:text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-[#e27b30] rounded-full flex items-center justify-center font-bold mb-6 text-xl">
                  4
                </div>
                <h4 className="font-bold mb-2">Settlement</h4>
                <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
                  Legal exchange of funds and you receive the keys to your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-headline font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details
            className="group border border-gray-200 dark:border-white/10 rounded-lg"
            open
          >
            <summary className="flex justify-between items-center p-4 cursor-pointer list-none font-bold text-sm">
              How much deposit do I really need?
              <ChevronDown className="transition-transform group-open:rotate-180" />
            </summary>
            <div className="p-4 pt-0 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              While 20% is the gold standard to avoid LMI, we have options
              starting from as low as 5% for first-time buyers through various
              government schemes.
            </div>
          </details>
          <details className="group border border-gray-200 dark:border-white/10 rounded-lg">
            <summary className="flex justify-between items-center p-4 cursor-pointer list-none font-bold text-sm">
              Can I switch from fixed to variable later?
              <ChevronDown className="transition-transform group-open:rotate-180" />
            </summary>
            <div className="p-4 pt-0 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Yes, however, break costs may apply if you switch during a
              fixed-rate term. We recommend speaking to an advisor before making
              the change.
            </div>
          </details>
          <details className="group border border-gray-200 dark:border-white/10 rounded-lg">
            <summary className="flex justify-between items-center p-4 cursor-pointer list-none font-bold text-sm">
              What is a comparison rate?
              <ChevronDown className="transition-transform group-open:rotate-180" />
            </summary>
            <div className="p-4 pt-0 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              The comparison rate includes both the interest rate and most
              upfront/ongoing fees, giving you a more accurate picture of the
              true cost of the loan.
            </div>
          </details>
        </div>
      </section>
      {/* Footer */}
    </>
  );
}
