import Link from "next/link";
import { Car, Truck, Tractor, Wrench, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white to-orange-50 dark:from-background-dark dark:to-[#2a1e15] py-20 lg:py-32 overflow-hidden border-b border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
            Drive Growth with Tailored Asset Finance.
          </h1>
          <p className="text-xl text-neutral-600 dark:text-gray-300 leading-relaxed">
            Elevate your lifestyle and operational capacity with bespoke lending
            solutions tailored for your next purchase.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Option 1 */}
          <div className="bg-white dark:bg-[#2a1e15] p-8 rounded-xl shadow-sm border border-neutral-100 dark:border-white/10 hover:border-primary/30 dark:hover:border-[#e27b30]/50 transition-all group cursor-pointer lg:col-span-1 md:col-span-1 flex flex-col">
            <div className="w-12 h-12 bg-orange-50 dark:bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#e27b30] transition-colors">
              <Car className="text-[#e27b30] group-hover:text-white w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Car Loans
            </h3>
            <p className="text-sm text-neutral-500 dark:text-gray-400 mb-6 flex-grow">
              Finance your new or used vehicle with competitive rates.
            </p>
            <span className="text-[#e27b30] text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-auto">
              Explore <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </div>
          {/* Option 2 */}
          <div className="bg-white dark:bg-[#2a1e15] p-8 rounded-xl shadow-sm border border-neutral-100 dark:border-white/10 hover:border-primary/30 dark:hover:border-[#e27b30]/50 transition-all group cursor-pointer flex flex-col">
            <div className="w-12 h-12 bg-orange-50 dark:bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#e27b30] transition-colors">
              <Truck className="text-[#e27b30] group-hover:text-white w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Truck Loans
            </h3>
            <p className="text-sm text-neutral-500 dark:text-gray-400 mb-6 flex-grow">
              Expand your fleet with specialized transport financing.
            </p>
            <span className="text-[#e27b30] text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-auto">
              Explore <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </div>
          {/* Option 3 */}
          <div className="bg-white dark:bg-[#2a1e15] p-8 rounded-xl shadow-sm border border-neutral-100 dark:border-white/10 hover:border-primary/30 dark:hover:border-[#e27b30]/50 transition-all group cursor-pointer flex flex-col">
            <div className="w-12 h-12 bg-orange-50 dark:bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#e27b30] transition-colors">
              <Tractor className="text-[#e27b30] group-hover:text-white w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Commercial Vehicles
            </h3>
            <p className="text-sm text-neutral-500 dark:text-gray-400 mb-6 flex-grow">
              Keep your business moving with commercial options.
            </p>
            <span className="text-[#e27b30] text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-auto">
              Explore <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </div>
          {/* Option 4 */}
          <div className="bg-white dark:bg-[#2a1e15] p-8 rounded-xl shadow-sm border border-neutral-100 dark:border-white/10 hover:border-primary/30 dark:hover:border-[#e27b30]/50 transition-all group cursor-pointer flex flex-col">
            <div className="w-12 h-12 bg-orange-50 dark:bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#e27b30] transition-colors">
              <Wrench className="text-[#e27b30] group-hover:text-white w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Equipment Finance
            </h3>
            <p className="text-sm text-neutral-500 dark:text-gray-400 mb-6 flex-grow">
              Secure heavy machinery and business equipment.
            </p>
            <span className="text-[#e27b30] text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-auto">
              Explore <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
