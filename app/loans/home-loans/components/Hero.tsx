import Link from "next/link";
import { PlayCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIxw3_AatR8tvAO12z-JQpVcfs5bEkeKUSVqIROE8TFcw7Mytj9l8J4MJ_I9tzym-DlUTrWKzHxStDDyNTY4oPCUMtFlNFJr4oWoXjHVpzJ9Q-3TR4TVqomO15gn9xhWQ8Oy9tLnAoAmmY4S4tWUe528Ea1tPGVg3clKqFsRU3wSk7ylOxayIN48o2gxQXAMPDnkyQ0B87cOrjaA9Sx8bboqCP-s8UwJiaAbssbMtHV77cqFlL_blaT78ZXI8exisKqxnAxVO7MYZF"
                    alt="Modern luxury home"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background-light/90 via-background-light/40 to-transparent dark:from-background-dark/90 dark:via-background-dark/60"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-xl glass-card p-10 rounded-xl shadow-2xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                        Premium Financing
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-primary-dark dark:text-white mb-6 leading-[1.1]">
                        Own your future, beautifully.
                    </h1>
                    <p className="text-lg text-primary-dark/80 dark:text-gray-200 mb-8 leading-relaxed">
                        Experience a new standard of home financing. Bespoke loan solutions
                        crafted for those who value precision, speed, and elegance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold text-base transition-all shadow-lg hover:shadow-primary/25">
                            Apply Now
                        </button>
                        <button className="glass-card border-primary/20 hover:bg-white/50 px-8 py-4 rounded-lg font-bold text-base transition-all flex items-center justify-center gap-2 text-primary-dark dark:text-white">
                            <PlayCircle className="w-5 h-5" /> View Rates
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
