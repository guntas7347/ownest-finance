import { BarChart3 } from "lucide-react";

export default function Process() {
    const steps = [
        {
            number: 1,
            title: "Liability Audit",
            description:
                "We perform a forensic analysis of your current debt obligations, identifying predatory rates and hidden fees.",
        },
        {
            number: 2,
            title: "Liquidity Engineering",
            description:
                "Our experts negotiate with creditors to close out high-interest facilities using our proprietary bridge financing.",
        },
        {
            number: 3,
            title: "Consolidated Lifecycle",
            description:
                "Your new consolidated facility is activated with a single, manageable term and transparent fixed rate.",
        },
    ];

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
                            The Anatomy of <span className="text-primary">Restructuring</span>
                        </h2>
                        <div className="space-y-8">
                            {steps.map((step) => (
                                <div key={step.number} className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-full flex items-center justify-center font-bold">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 text-foreground">
                                            {step.title}
                                        </h4>
                                        <p className="text-muted-foreground text-sm">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-stone-900 dark:bg-stone-900/50 rounded-3xl p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10">
                            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
                                <BarChart3 className="text-primary w-6 h-6" />
                                Projected Impact
                            </h4>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 text-stone-400">
                                        Monthly Stress Level
                                    </div>
                                    <div className="h-2 w-full bg-stone-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-full opacity-30"></div>
                                    </div>
                                    <div className="flex justify-between mt-1">
                                        <span className="text-[10px] text-stone-500 italic">
                                            Before: Fragmented & High
                                        </span>
                                        <span className="text-[10px] text-primary font-bold">
                                            After: Unified & Controlled
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="p-6 bg-stone-800/50 rounded-2xl border border-stone-700">
                                        <span className="text-stone-500 text-[10px] font-bold uppercase block mb-1">
                                            Time to Clear
                                        </span>
                                        <span className="text-2xl font-black text-white">-42%</span>
                                        <p className="text-[10px] text-stone-400 mt-2">
                                            Reduction in debt lifespan
                                        </p>
                                    </div>
                                    <div className="p-6 bg-stone-800/50 rounded-2xl border border-stone-700">
                                        <span className="text-stone-500 text-[10px] font-bold uppercase block mb-1">
                                            Cash Flow
                                        </span>
                                        <span className="text-2xl font-black text-primary">
                                            +$1,840
                                        </span>
                                        <p className="text-[10px] text-stone-400 mt-2">
                                            Average monthly savings
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-8">
                                    {/* Placeholder for chart image if strict local image policy allows, else we rely on CSS gradient/placeholder */}
                                    <div className="w-full h-32 bg-gradient-to-t from-stone-800 to-transparent rounded-xl opacity-60"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
