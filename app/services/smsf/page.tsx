import React from "react";
import {
  Building2,
  Check,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  FileBadge,
  FileText,
  Gavel,
  LineChart,
  ListChecks,
  Percent,
  Settings2,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from "lucide-react";

export default function SmsfPage() {
  return (
    <>
      {/* Key Features (Bento Grid) */}
      <section className="py-20 bg-gray-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Strategic Financing Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl">
              Flexible lending structures designed to grow your retirement nest
              egg through smart property acquisition.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#2a1e15] p-8 rounded-xl border border-gray-200 dark:border-white/10 md:col-span-2">
              <Building2 className="text-[#e27b30] mb-4 text-3xl" />
              <h3 className="text-xl font-bold mb-3">
                Residential &amp; Commercial
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Finance everything from suburban houses to high-yield industrial
                warehouses. Our loans adapt to your investment strategy.
              </p>
            </div>
            <div className="bg-gray-900 dark:bg-[#1a130f] text-white p-8 rounded-xl border border-brand-dark">
              <Gavel className="text-[#e27b30] mb-4 text-3xl" />
              <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                Full alignment with SIS Act requirements and limited recourse
                structures to protect your fund assets.
              </p>
            </div>
            <div className="bg-white dark:bg-[#2a1e15] p-8 rounded-xl border border-gray-200 dark:border-white/10">
              <Percent className="text-[#e27b30] mb-4 text-3xl" />
              <h3 className="text-xl font-bold mb-3">Competitive Rates</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Institutional-grade pricing for SMSF clients, ensuring your cash
                flow remains positive.
              </p>
            </div>
            <div className="bg-white dark:bg-[#2a1e15] p-8 rounded-xl border border-gray-200 dark:border-white/10 md:col-span-2">
              <Settings2 className="text-[#e27b30] mb-4 text-3xl" />
              <h3 className="text-xl font-bold mb-3">Flexible Terms</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tailored repayment options including interest-only periods to
                align with your fund's liquidity needs and member contributions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Rates & Investment Snapshot */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-[#2a1e15] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm flex flex-col lg:flex-row">
            <div className="p-12 lg:w-1/2 bg-gray-900 dark:bg-[#1a130f] text-white">
              <h2 className="text-3xl font-bold mb-8">
                Current SMSF Market Rates
              </h2>
              <div className="space-y-8">
                <div>
                  <p className="text-gray-400 dark:text-gray-500 text-sm mb-1">
                    Variable Rate from
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-[#e27b30]">
                      6.45%
                    </span>
                    <span className="text-xl text-gray-400 dark:text-gray-500">
                      p.a.
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-500 mt-2">
                    Comparison rate 6.58% p.a.*
                  </p>
                </div>
                <div className="h-px bg-white dark:bg-[#2a1e15]/10 w-full"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">
                      Max LVR
                    </p>
                    <p className="text-xl font-bold">80%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">
                      Max Term
                    </p>
                    <p className="text-xl font-bold">30 Years</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-12 lg:w-1/2">
              <h3 className="text-2xl font-bold mb-6">Retirement Impact</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                By leveraging your super into property, you can accelerate
                wealth creation. A $500,000 property investment today could
                significantly outpace standard contributions over a 15-year
                horizon.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-lg">
                  <TrendingUp className="text-[#e27b30]" />
                  <div>
                    <p className="font-bold text-sm">Compound Growth</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-500">
                      Asset appreciation inside a low-tax environment.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-lg">
                  <Wallet className="text-[#e27b30]" />
                  <div>
                    <p className="font-bold text-sm">Tax Efficiency</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-500">
                      Rent and capital gains taxed at max 15% (or 0% in pension
                      phase).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Eligibility & Costs */}
      <section className="py-24 bg-gray-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <ListChecks className="text-[#e27b30]" />
                Lending Requirements
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#e27b30]/20 flex items-center justify-center shrink-0">
                    <Check className="text-[14px] text-[#e27b30]" />
                  </div>
                  <div>
                    <p className="font-bold">Established SMSF</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Must be registered with the ATO and have a valid ABN/TFN.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#e27b30]/20 flex items-center justify-center shrink-0">
                    <Check className="text-[14px] text-[#e27b30]" />
                  </div>
                  <div>
                    <p className="font-bold">Corporate Trustee</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Most lenders require a company structure rather than
                      individual trustees.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#e27b30]/20 flex items-center justify-center shrink-0">
                    <Check className="text-[14px] text-[#e27b30]" />
                  </div>
                  <div>
                    <p className="font-bold">Super Balance</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Typically requires $200k+ total balance for diversified
                      risk management.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#e27b30]/20 flex items-center justify-center shrink-0">
                    <Check className="text-[14px] text-[#e27b30]" />
                  </div>
                  <div>
                    <p className="font-bold">Investment Strategy</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      The property purchase must align with the fund's formal
                      written strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Costs */}
            <div className="bg-white dark:bg-[#2a1e15] p-10 rounded-2xl shadow-sm border border-gray-200 dark:border-white/10">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <CircleDollarSign className="text-[#e27b30]" />
                Estimated Costs
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-white/10">
                  <span className="text-gray-600 dark:text-gray-300">
                    Application &amp; Setup Fees
                  </span>
                  <span className="font-bold">From $995</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-white/10">
                  <span className="text-gray-600 dark:text-gray-300">
                    Legal &amp; Trust Deed Docs
                  </span>
                  <span className="font-bold">From $1,200</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-white/10">
                  <span className="text-gray-600 dark:text-gray-300">
                    Property Valuation
                  </span>
                  <span className="font-bold">Market Rate</span>
                </li>
                <li className="flex justify-between items-center py-3">
                  <span className="text-gray-600 dark:text-gray-300">
                    Lender Protection Fee
                  </span>
                  <span className="font-bold">Scale-based</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-[#e27b30]/5 rounded border border-[#e27b30]/10">
                <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-500 italic">
                  Note: These are indicative estimates. Final costs depend on
                  loan complexity and lender selection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* The Path to Settlement */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            The Path to Settlement
          </h2>
          <div className="relative">
            {/* Process Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-border -translate-y-1/2"></div>
            <div className="grid lg:grid-cols-4 gap-8 relative">
              <div className="bg-white dark:bg-[#2a1e15] p-6 text-center relative z-10">
                <div className="w-12 h-12 bg-[#e27b30] text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold shadow-lg">
                  1
                </div>
                <h4 className="font-bold mb-2">SMSF Review</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500">
                  We analyze your trust deed and financial position for
                  borrowing capacity.
                </p>
              </div>
              <div className="bg-white dark:bg-[#2a1e15] p-6 text-center relative z-10">
                <div className="w-12 h-12 bg-[#e27b30] text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold shadow-lg">
                  2
                </div>
                <h4 className="font-bold mb-2">Property Selection</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500">
                  Select a qualifying residential or commercial investment
                  property.
                </p>
              </div>
              <div className="bg-white dark:bg-[#2a1e15] p-6 text-center relative z-10">
                <div className="w-12 h-12 bg-[#e27b30] text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold shadow-lg">
                  3
                </div>
                <h4 className="font-bold mb-2">Loan Approval</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500">
                  Submission to our specialized panel of SMSF lending partners.
                </p>
              </div>
              <div className="bg-white dark:bg-[#2a1e15] p-6 text-center relative z-10">
                <div className="w-12 h-12 bg-[#e27b30] text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold shadow-lg">
                  4
                </div>
                <h4 className="font-bold mb-2">Settlement</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500">
                  Final legal sign-off and transfer of property to the bare
                  trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Compliance & Docs */}
      <section className="py-24 bg-gray-900 dark:bg-[#1a130f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">Document Checklist</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <FileText className="text-[#e27b30]" />
                  <span>Current SMSF Trust Deed</span>
                </li>
                <li className="flex items-center gap-3">
                  <LineChart className="text-[#e27b30]" />
                  <span>2 Years Audited Financial Statements</span>
                </li>
                <li className="flex items-center gap-3">
                  <FileBadge className="text-[#e27b30]" />
                  <span>Member Identification &amp; Details</span>
                </li>
                <li className="flex items-center gap-3">
                  <ClipboardCheck className="text-[#e27b30]" />
                  <span>Investment Strategy Document</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <details className="group bg-white dark:bg-[#2a1e15]/5 rounded-lg border border-white/10 overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-white dark:bg-[#2a1e15]/10 transition-colors">
                    <span className="font-medium">
                      What is the minimum balance required?
                    </span>
                    <ChevronDown className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="p-4 text-sm text-gray-400 dark:text-gray-500 border-t border-white/10">
                    Most lenders look for a minimum net balance of $200,000 to
                    ensure the fund remains diversified and can handle ongoing
                    costs.
                  </div>
                </details>
                <details className="group bg-white dark:bg-[#2a1e15]/5 rounded-lg border border-white/10 overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-white dark:bg-[#2a1e15]/10 transition-colors">
                    <span className="font-medium">
                      Are there property restrictions?
                    </span>
                    <ChevronDown className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="p-4 text-sm text-gray-400 dark:text-gray-500 border-t border-white/10">
                    Yes, the property must be a "single acquirable asset" and
                    cannot be purchased from a related party (for residential)
                    or lived in by members.
                  </div>
                </details>
                <details className="group bg-white dark:bg-[#2a1e15]/5 rounded-lg border border-white/10 overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-white dark:bg-[#2a1e15]/10 transition-colors">
                    <span className="font-medium">
                      How are repayments managed?
                    </span>
                    <ChevronDown className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="p-4 text-sm text-gray-400 dark:text-gray-500 border-t border-white/10">
                    Repayments are made using the rental income from the
                    property and employer contributions into the SMSF.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to build your wealth?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-10">
            Connect with our SMSF specialists for a tailored borrowing capacity
            assessment.
          </p>
          <button className="bg-[#e27b30] text-white px-10 py-5 rounded-lg font-bold text-lg shadow-xl border-[#e27b30]/20 dark:border-[#e27b30]/30 hover:scale-105 transition-all">
            Book a consultation
          </button>
        </div>
      </section>
      {/* Footer */}
    </>
  );
}
