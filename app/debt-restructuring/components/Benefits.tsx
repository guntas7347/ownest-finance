import { CalendarClock, TrendingDown, ShieldCheck } from "lucide-react";

export default function Benefits() {
    const benefits = [
        {
            title: "Single Monthly Payment",
            description:
                "Replace the chaos of multiple due dates and disparate banking apps with one simplified, automated transfer.",
            icon: <CalendarClock className="w-8 h-8 text-primary" />,
        },
        {
            title: "Substantial Interest Savings",
            description:
                "Our institutional leverage allows us to secure rates far below standard consumer debt, saving you thousands in interest.",
            icon: <TrendingDown className="w-8 h-8 text-primary" />,
        },
        {
            title: "Credit Preservation",
            description:
                "Unlike traditional debt relief, our restructuring protects and often enhances your credit score via healthy utilization ratios.",
            icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        },
    ];

    return (
        <section className="py-24 bg-white/30 dark:bg-background-dark/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-foreground">
                        Financial Simplicity Through Design
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We don't just move debt; we restructure your entire financial architecture. Experience the relief of a singular focus.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="glass-card p-10 rounded-2xl hover:bg-white/60 dark:hover:bg-stone-800/60 transition-all border-b-4 border-b-primary/40 group"
                        >
                            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-extrabold mb-4 text-foreground">
                                {benefit.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
