import React from "react";
import {
  ArrowRight,
  ArrowRightLeft,
  Award,
  BadgeCheck,
  Check,
  ChevronDown,
  CircleDollarSign,
  FileBadge,
  LineChart,
  PartyPopper,
  Percent,
  Receipt,
  TrendingDown,
  Unlock,
  Wallet,
} from "lucide-react";

export default function RefinancePage() {
  return (
    <>
      <section className="py-20 bg-gray-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Refinance?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl">
              Multiple reasons to switch, one simple goal: making your money
              work harder for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white dark:bg-[#2a1e15] p-8 rounded-2xl border border-gray-200 dark:border-white/10 flex flex-col justify-between group hover:border-[#e27b30] transition-colors">
              <div>
                <CircleDollarSign className="text-[#e27b30] mb-4 text-3xl" />
                <h3 className="text-2xl font-bold mb-3">Reduced Repayments</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Lower your monthly commitments by securing a more competitive
                  interest rate from a wider pool of lenders.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-[#e27b30] font-bold cursor-pointer">
                Learn more <ArrowRight />
              </div>
            </div>
            <div className="bg-gray-900 dark:bg-[#1a130f] p-8 rounded-2xl text-white flex flex-col justify-between">
              <div>
                <Wallet className="text-[#e27b30] mb-4 text-3xl" />
                <h3 className="text-2xl font-bold mb-3">Debt Consolidation</h3>
                <p className="text-gray-400 dark:text-gray-500">
                  Roll high-interest debts like car loans and credit cards into
                  your low-rate mortgage.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#2a1e15] p-8 rounded-2xl border border-gray-200 dark:border-white/10 group hover:border-[#e27b30] transition-colors">
              <Unlock className="text-[#e27b30] mb-4 text-3xl" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Unlock Equity
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Access funds for renovations, investments, or personal
                milestones.
              </p>
            </div>
            <div className="bg-white dark:bg-[#2a1e15] p-8 rounded-2xl border border-gray-200 dark:border-white/10 group hover:border-[#e27b30] transition-colors">
              <ArrowRightLeft className="text-[#e27b30] mb-4 text-3xl" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Switch Lenders
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Move away from outdated service models to lenders who value your
                business.
              </p>
            </div>
            <div className="bg-white dark:bg-[#2a1e15] p-8 rounded-2xl border border-gray-200 dark:border-white/10 group hover:border-[#e27b30] transition-colors">
              <Percent className="text-[#e27b30] mb-4 text-3xl" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Lower Rates
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Instantly reduce the total interest paid over the life of your
                home loan.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Rates & Savings Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          {/* Rate Snapshot */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-[#2a1e15] p-8 rounded-2xl border-2 border-[#e27b30] ring-4 border-[#e27b30]/20 dark:border-[#e27b30]/30">
              <h3 className="text-xl font-bold mb-6">Market Rate Snapshot</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-gray-200 dark:border-white/10 pb-4">
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 dark:text-gray-500 uppercase">
                      Variable Rate
                    </div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">
                      5.94%{" "}
                      <span className="text-lg text-gray-400 dark:text-gray-500">
                        p.a.
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-semibold text-gray-400 dark:text-gray-500">
                      COMPARISON
                    </div>
                    <div className="text-sm font-bold text-gray-600 dark:text-gray-300">
                      6.02% p.a.
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 dark:text-gray-500 uppercase">
                      3-Year Fixed
                    </div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">
                      6.12%{" "}
                      <span className="text-lg text-gray-400 dark:text-gray-500">
                        p.a.
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-semibold text-gray-400 dark:text-gray-500">
                      COMPARISON
                    </div>
                    <div className="text-sm font-bold text-gray-600 dark:text-gray-300">
                      6.21% p.a.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Savings Example */}
          <div className="lg:col-span-3 bg-gray-50 dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-bold mb-8">
              Refinance Savings Example
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 bg-white dark:bg-[#2a1e15] rounded-xl border border-gray-200 dark:border-white/10">
                <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                  Current Loan
                </div>
                <div className="text-2xl font-bold text-gray-700 dark:text-gray-200">
                  $3,450 <span className="text-sm font-normal">/mo</span>
                </div>
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500">
                  Based on 7.20% Interest
                </div>
              </div>
              <div className="p-6 bg-[#e27b30]-muted rounded-xl border border-[#e27b30]/20">
                <div className="text-xs font-bold text-[#e27b30] uppercase tracking-wider mb-2">
                  Potential New Loan
                </div>
                <div className="text-2xl font-bold text-[#e27b30]">
                  $3,010{" "}
                  <span className="text-sm font-normal text-gray-700 dark:text-gray-200">
                    /mo
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Based on 5.94% Interest
                </div>
              </div>
            </div>
            <div className="bg-gray-900 dark:bg-[#1a130f] rounded-xl p-6 flex flex-col md:flex-row justify-between items-center text-white">
              <div className="mb-4 md:mb-0">
                <div className="text-sm text-gray-400 dark:text-gray-500">
                  Monthly Savings
                </div>
                <div className="text-3xl font-bold">$440</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-slate-700"></div>
              <div>
                <div className="text-sm text-gray-400 dark:text-gray-500">
                  Annual Savings
                </div>
                <div className="text-3xl font-bold text-[#e27b30]">$5,280</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Eligibility & Costs Grid */}
      <section className="py-20 bg-gray-50 dark:bg-white/5 border-y border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Eligibility */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <BadgeCheck className="text-[#e27b30] text-4xl" />
              Eligibility
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 p-5 bg-white dark:bg-[#2a1e15] rounded-xl shadow-sm">
                <LineChart className="text-[#e27b30]" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Equity (LVR)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Ideally have at least 20% equity (LVR &lt; 80%) to avoid LMI
                    costs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-white dark:bg-[#2a1e15] rounded-xl shadow-sm">
                <FileBadge className="text-[#e27b30]" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Stable Income
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Minimum 6 months in current role or 2 years for
                    self-employed.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-white dark:bg-[#2a1e15] rounded-xl shadow-sm">
                <Award className="text-[#e27b30]" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Credit History
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    A healthy credit score with no recent defaults or missed
                    payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Costs */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Receipt className="text-[#e27b30] text-4xl" />
              Estimated Costs
            </h2>
            <div className="overflow-hidden bg-white dark:bg-[#2a1e15] border border-gray-200 dark:border-white/10 rounded-2xl">
              <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-white/5 border-b border-gray-200 dark:border-white/10">
                  <tr>
                    <th className="p-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase">
                      Fee Type
                    </th>
                    <th className="p-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase text-right">
                      Est. Cost
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  <tr>
                    <td className="p-4 font-medium">
                      Discharge Fee (Old Loan)
                    </td>
                    <td className="p-4 text-right text-gray-600 dark:text-gray-300">
                      $200 – $400
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">
                      Application Fee (New Loan)
                    </td>
                    <td className="p-4 text-right text-gray-600 dark:text-gray-300">
                      $0 – $600
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Valuation Fee</td>
                    <td className="p-4 text-right text-gray-600 dark:text-gray-300">
                      $0 – $300
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Mortgage Registration</td>
                    <td className="p-4 text-right text-gray-600 dark:text-gray-300">
                      $120 – $150
                    </td>
                  </tr>
                </tbody>
                <tfoot className="bg-[#e27b30]-muted/30">
                  <tr>
                    <td className="p-4 font-bold">Estimated Total</td>
                    <td className="p-4 text-right font-bold text-[#e27b30]">
                      $320 – $1,450
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 dark:text-gray-500 italic">
              Costs vary by state and lender. Many lenders offer cashback to
              offset these fees.
            </p>
          </div>
        </div>
      </section>
      {/* Process Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              4 Steps to a Better Loan
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We handle the paperwork, you enjoy the savings.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="relative text-center group">
              <div className="w-16 h-16 bg-white dark:bg-[#2a1e15] border-4 border-[#e27b30]/20 group-hover:border-[#e27b30] rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <span className="text-xl font-bold text-[#e27b30]">01</span>
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Application
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500 px-4">
                Submit your details and financial documents online.
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative text-center group">
              <div className="w-16 h-16 bg-white dark:bg-[#2a1e15] border-4 border-[#e27b30]/20 group-hover:border-[#e27b30] rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <span className="text-xl font-bold text-[#e27b30]">02</span>
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Assessment
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500 px-4">
                The lender reviews your profile and property value.
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative text-center group">
              <div className="w-16 h-16 bg-white dark:bg-[#2a1e15] border-4 border-[#e27b30]/20 group-hover:border-[#e27b30] rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <span className="text-xl font-bold text-[#e27b30]">03</span>
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Approval
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500 px-4">
                Receive your formal offer and sign the loan contract.
              </p>
            </div>
            {/* Step 4 */}
            <div className="relative text-center group">
              <div className="w-16 h-16 bg-[#e27b30] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#e27b30]/20">
                <PartyPopper />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Loan Switch
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500 px-4">
                Your new lender pays off the old loan. Success!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Document List & CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-900 dark:bg-[#1a130f] rounded-3xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-16">
              <h3 className="text-3xl font-bold text-white mb-8">
                Ready to start?
              </h3>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#e27b30]/20 flex items-center justify-center mt-1">
                    <Check className="text-[#e27b30] text-sm" />
                  </div>
                  <div className="text-white">
                    <p className="font-medium">Loan Statements</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      Last 6 months of existing mortgage statements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#e27b30]/20 flex items-center justify-center mt-1">
                    <Check className="text-[#e27b30] text-sm" />
                  </div>
                  <div className="text-white">
                    <p className="font-medium">Income Proof</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      Most recent 2 payslips and PAYG summaries.
                    </p>
                  </div>
                </div>
              </div>
              <button className="bg-[#e27b30] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#e27b30]/90 transition-colors w-full sm:w-auto">
                Start Application
              </button>
            </div>
            <div className="lg:w-1/2 relative min-h-[300px]">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                data-alt="Person signing digital documents on a tablet"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2pJgQjfron8VyrgvJUJVqZrkpGbyVcNyr4bkN0bA6_455sZTq9jg523ovrfdKe_TBoRyE2_lsSRCj_VIHrLDv5NEpZiBE42L-t7Xr5aX_wQNpCbNFX1XgjTbJs2a1FrlHNpjtjlPaEO6mIhelUz0PxkqeVHrGDzdbA_yV_DRLT7MVLb_z29I0yetstMjyuxdqW2L1tphkQXa5o0Sed1qeiMy6FYTXoWcg6q4V1pzj-j3hQqQicsoyoPdht6z3OsDdijQNRsYUfY7T"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r"></div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-[#2a1e15]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="group border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-gray-50 dark:bg-white/5">
                <span className="font-bold text-gray-900 dark:text-white">
                  How much equity do I need to refinance?
                </span>
                <ChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="p-5 pt-0 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-gray-200 dark:border-white/10">
                While some lenders allow refinancing with as little as 5-10%
                equity, having at least 20% equity (an 80% Loan-to-Value Ratio)
                ensures you avoid paying Lenders Mortgage Insurance (LMI) and
                access the most competitive rates.
              </div>
            </details>
            <details className="group border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-gray-50 dark:bg-white/5">
                <span className="font-bold text-gray-900 dark:text-white">
                  How long does the process take?
                </span>
                <ChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="p-5 pt-0 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-gray-200 dark:border-white/10">
                On average, refinancing takes between 2 to 6 weeks. This
                includes the valuation, assessment, and the legal discharge of
                your existing mortgage with your current bank.
              </div>
            </details>
            <details className="group border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-gray-50 dark:bg-white/5">
                <span className="font-bold text-gray-900 dark:text-white">
                  Will refinancing impact my credit score?
                </span>
                <ChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="p-5 pt-0 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-gray-200 dark:border-white/10">
                A single refinance application typically has a minor, temporary
                impact on your credit score, similar to any other loan
                application. However, making multiple applications in a short
                period can be a negative signal.
              </div>
            </details>
          </div>
        </div>
      </section>
      {/* Footer */}
    </>
  );
}
