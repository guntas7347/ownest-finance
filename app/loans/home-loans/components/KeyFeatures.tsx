import { TrendingDown, Sliders, Zap } from "lucide-react";

export default function KeyFeatures() {
    const features = [
        {
            title: "Industry Low Rates",
            description:
                "Access market-leading interest rates negotiated directly with premier banking institutions.",
            icon: <TrendingDown className="w-8 h-8 text-primary" />,
        },
        {
            title: "Flexible Terms",
            description:
                "Customizable repayment structures that align with your unique cash flow and wealth goals.",
            icon: <Sliders className="w-8 h-8 text-primary" />,
        },
        {
            title: "Fast Pre-approval",
            description:
                "Digital-first processing that delivers pre-approval results in as little as 24 hours.",
            icon: <Zap className="w-8 h-8 text-primary" />,
        },
    ];

    return (
        <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark dark:text-white mb-4">
                        Why Ownest Finance?
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-card p-8 rounded-xl border border-white/50 hover:shadow-xl transition-all group dark:border-white/10"
                        >
                            <div className="w-16 h-16 rounded-full liquid-glass-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-primary-dark/70 dark:text-white/70 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
