import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Calendar,
  Car,
  CheckCircle,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Factory,
  Gauge,
  Package,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";

export default function AssetFinancePage() {
  return (
    <>
      <main>
        <section className="py-20 bg-gray-50 dark:bg-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Finance Solutions
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-xl">
                Tailored options for every asset type.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-white dark:bg-[#2a1e15] p-8 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded flex items-center justify-center mb-6 text-[#e27b30] group-hover:bg-[#e27b30] group-hover:text-white transition-colors">
                  <Car />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Car Loans
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500 leading-relaxed">
                  Competitive financing for personal or fleet passenger
                  vehicles.
                </p>
              </div>
              <div className="group bg-white dark:bg-[#2a1e15] p-8 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded flex items-center justify-center mb-6 text-[#e27b30] group-hover:bg-[#e27b30] group-hover:text-white transition-colors">
                  <Package />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Truck Loans
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500 leading-relaxed">
                  Heavy-duty solutions for logistics and heavy haulage
                  operations.
                </p>
              </div>
              <div className="group bg-white dark:bg-[#2a1e15] p-8 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded flex items-center justify-center mb-6 text-[#e27b30] group-hover:bg-[#e27b30] group-hover:text-white transition-colors">
                  <Truck />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Commercial Vehicles
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500 leading-relaxed">
                  Vans, utes, and specialized delivery vehicles for your
                  business.
                </p>
              </div>
              <div className="group bg-white dark:bg-[#2a1e15] p-8 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded flex items-center justify-center mb-6 text-[#e27b30] group-hover:bg-[#e27b30] group-hover:text-white transition-colors">
                  <Factory />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Equipment Finance
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500 leading-relaxed">
                  Funding for specialized machinery and industrial equipment.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gray-900 dark:bg-[#1a130f] rounded-3xl p-12 lg:p-16 flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-extrabold text-white mb-6">
                  Why Choose Ownest?
                </h2>
                <p className="text-gray-400 dark:text-gray-500 mb-8">
                  We combine industry expertise with rapid technology to get you
                  moving faster.
                </p>
                <button className="bg-[#e27b30] text-white px-6 py-3 rounded font-bold inline-flex items-center gap-2">
                  Explore All Features
                  <ArrowRight className="text-sm" />
                </button>
              </div>
              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <BadgeCheck className="text-[#e27b30]" />
                  <div>
                    <h4 className="text-white font-bold mb-2">
                      Competitive Rates
                    </h4>
                    <p className="text-gray-400 dark:text-gray-500 text-sm">
                      Market-leading interest rates through our extensive lender
                      network.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Calendar className="text-[#e27b30]" />
                  <div>
                    <h4 className="text-white font-bold mb-2">
                      Flexible Repayments
                    </h4>
                    <p className="text-gray-400 dark:text-gray-500 text-sm">
                      Terms and structures designed to align with your cash flow
                      cycles.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Gauge className="text-[#e27b30]" />
                  <div>
                    <h4 className="text-white font-bold mb-2">
                      Fast Approvals
                    </h4>
                    <p className="text-gray-400 dark:text-gray-500 text-sm">
                      Simplified digital application for rapid credit decisions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Sparkles className="text-[#e27b30]" />
                  <div>
                    <h4 className="text-white font-bold mb-2">
                      New &amp; Used Assets
                    </h4>
                    <p className="text-gray-400 dark:text-gray-500 text-sm">
                      We finance both brand new and quality pre-owned equipment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Briefcase className="text-[#e27b30]" />
                  <div>
                    <h4 className="text-white font-bold mb-2">
                      Business or Personal
                    </h4>
                    <p className="text-gray-400 dark:text-gray-500 text-sm">
                      Solutions for sole traders, large companies, or
                      individuals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white dark:bg-[#2a1e15]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-extrabold mb-8">
                  Rates &amp; Repayments
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="border border-gray-200 dark:border-white/10 rounded-xl p-6 bg-gray-50 dark:bg-white/5">
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 dark:text-gray-500 uppercase mb-1">
                      Starting From
                    </p>
                    <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                      5.49%{" "}
                      <span className="text-lg font-medium text-gray-400 dark:text-gray-500">
                        p.a.
                      </span>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500 mt-2">
                      Fixed interest rates
                    </p>
                  </div>
                  <div className="border border-gray-200 dark:border-white/10 rounded-xl p-6 bg-gray-50 dark:bg-white/5">
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 dark:text-gray-500 uppercase mb-1">
                      Flexible Terms
                    </p>
                    <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                      1 - 7{" "}
                      <span className="text-lg font-medium text-gray-400 dark:text-gray-500">
                        Years
                      </span>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500 mt-2">
                      Repayment flexibility
                    </p>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#2a1e15] border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 dark:bg-white/5 px-6 py-4 border-b border-gray-200 dark:border-white/10">
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      Repayment Preview
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600 dark:text-gray-300">
                        Financing Amount
                      </span>
                      <span className="font-bold text-gray-900 dark:text-white">
                        $50,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600 dark:text-gray-300">
                        Loan Term
                      </span>
                      <span className="font-bold text-gray-900 dark:text-white">
                        5 Years
                      </span>
                    </div>
                    <div className="h-px bg-slate-100 my-4"></div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900 dark:text-white">
                        Monthly Repayment
                      </span>
                      <span className="text-3xl font-extrabold text-[#e27b30]">
                        $954.80*
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-6 leading-tight">
                      *Estimated monthly repayment based on 5.49% p.a.
                      Comparison rate may vary. T&amp;Cs apply.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <ClipboardCheck className="text-[#e27b30]" />
                    Requirements
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm">
                      <CheckCircle className="text-[#e27b30] text-base" />
                      <span className="text-gray-600 dark:text-gray-300 font-medium">
                        Verified Proof of Income
                      </span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <CheckCircle className="text-[#e27b30] text-base" />
                      <span className="text-gray-600 dark:text-gray-300 font-medium">
                        ABN/Business Registration (if applicable)
                      </span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <CheckCircle className="text-[#e27b30] text-base" />
                      <span className="text-gray-600 dark:text-gray-300 font-medium">
                        Valid Asset Details &amp; Invoice
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                  <h3 className="text-xl font-bold mb-4">Required Documents</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded">
                      Tax Returns
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded">
                      Bank Statements
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded">
                      ID Documentation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50 dark:bg-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12">
              Process &amp; Support
            </h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-[#2a1e15] border border-gray-200 dark:border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#e27b30] text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Online Quote
                  </h4>
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500 ml-12">
                  Submit your basic details and asset information for a rapid
                  indicative offer.
                </p>
              </div>
              <div className="bg-white dark:bg-[#2a1e15] border border-gray-200 dark:border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#e27b30] text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Verification
                  </h4>
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500 ml-12">
                  Our specialists review your documents and verify the asset
                  value.
                </p>
              </div>
              <div className="bg-white dark:bg-[#2a1e15] border border-gray-200 dark:border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#e27b30] text-white flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Settlement
                  </h4>
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500 ml-12">
                  Funds are transferred directly to the vendor for immediate
                  asset delivery.
                </p>
              </div>
            </div>
            <div className="mt-16 space-y-4">
              <h3 className="text-xl font-bold text-center mb-8">
                Frequently Asked Questions
              </h3>
              <details
                className="group bg-white dark:bg-[#2a1e15] rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden"
                open
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-gray-900 dark:text-white">
                  How fast is the approval process?
                  <ChevronDown className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-sm text-gray-600 dark:text-gray-300">
                  Most applications are assessed within 24-48 business hours
                  once all documentation is received.
                </div>
              </details>
              <details className="group bg-white dark:bg-[#2a1e15] rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-gray-900 dark:text-white">
                  Do I need a deposit?
                  <ChevronDown className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-sm text-gray-600 dark:text-gray-300">
                  We offer 100% financing for qualified applicants, meaning zero
                  upfront deposit is required.
                </div>
              </details>
              <details className="group bg-white dark:bg-[#2a1e15] rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-gray-900 dark:text-white">
                  Are there limits on asset age?
                  <ChevronDown className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-sm text-gray-600 dark:text-gray-300">
                  Typically we finance assets up to 10-12 years of age at the
                  end of the loan term, depending on the asset type.
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#e27b30] rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">
                  Ready to secure your next asset?
                </h2>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                  Our finance specialists are standing by to help you find the
                  best rate and term for your needs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-gray-900 dark:bg-[#1a130f] text-white px-8 py-4 rounded font-bold hover:bg-black transition-colors shadow-lg">
                    Apply Now
                  </button>
                  <button className="bg-white dark:bg-[#2a1e15] text-[#e27b30] px-8 py-4 rounded font-bold hover:bg-gray-50 dark:bg-white/5 transition-colors shadow-lg">
                    Schedule a Call
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white dark:bg-[#2a1e15]/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white dark:bg-[#2a1e15]/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
