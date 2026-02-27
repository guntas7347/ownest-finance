import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(226,123,50,0.1)_0%,transparent_70%)] -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        Expert Solutions
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-foreground">
                        Regain Financial <br />
                        <span className="text-primary italic">Control</span>
                    </h1>
                    <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
                        Weightless finance for high-net-worth complexity. We transform
                        fragmented high-interest liabilities into a singular, elegant
                        financial strategy designed for long-term preservation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/30">
                            Book a Confidential Session
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="bg-white/50 dark:bg-stone-800/50 backdrop-blur-md px-8 py-4 rounded-xl font-bold text-lg border border-stone-200 dark:border-stone-700 hover:bg-white dark:hover:bg-stone-700 transition-all text-foreground">
                            View Case Studies
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="w-full aspect-square bg-stone-200/20 dark:bg-stone-800/20 rounded-full absolute -top-10 -right-10 blur-3xl"></div>

                    {/* Debt Consolidation Visual */}
                    <div className="relative glass-card rounded-3xl p-8 min-h-[450px] flex items-center justify-center overflow-hidden border border-white/40">
                        {/* High interest bubbles */}
                        <div className="absolute top-12 left-12 w-24 h-24 rounded-full bg-stone-300/30 backdrop-blur-md flex flex-col items-center justify-center border border-white/50 scale-75 opacity-60">
                            <span className="text-[10px] uppercase font-bold text-stone-500">
                                Credit Card
                            </span>
                            <span className="font-bold text-xs text-foreground">24.5% APR</span>
                        </div>

                        <div className="absolute bottom-20 left-16 w-32 h-32 rounded-full bg-stone-300/30 backdrop-blur-md flex flex-col items-center justify-center border border-white/50 scale-90 opacity-40">
                            <span className="text-[10px] uppercase font-bold text-stone-500">
                                Store Debt
                            </span>
                            <span className="font-bold text-xs text-foreground">19.9% APR</span>
                        </div>

                        <div className="absolute top-20 right-12 w-28 h-28 rounded-full bg-stone-300/30 backdrop-blur-md flex flex-col items-center justify-center border border-white/50 scale-90 opacity-50">
                            <span className="text-[10px] uppercase font-bold text-stone-500">
                                Bank Loan
                            </span>
                            <span className="font-bold text-xs text-foreground">14.2% APR</span>
                        </div>

                        {/* Central Merged Bubble */}
                        <div className="relative z-10 w-64 h-64 rounded-full bg-gradient-to-tr from-primary to-orange-300 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(226,123,50,0.4)] border-4 border-white/20 animate-pulse">
                            <span className="text-white/80 text-sm font-bold tracking-widest uppercase mb-1">
                                Ownest Single Rate
                            </span>
                            <span className="text-white text-5xl font-black mb-1">
                                4.2%
                            </span>
                            <span className="text-white/90 text-sm font-medium">
                                Consolidated APR
                            </span>
                        </div>

                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full h-24 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent z-20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
