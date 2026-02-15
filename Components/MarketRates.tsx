import React from "react";
import MarketRateCard from "@/Components/MarketRateCard";

export interface MarketRatesProps {
    data: {
        cashRate: string;
        cashEffective: string;
        inflation: string;
        inflationPeriod: string;
        exchangeRates: Record<string, string>;
    } | null;
}

const toNumber = (v?: string) => {
    const n = parseFloat(v ?? "");
    return Number.isFinite(n) ? n : null;
};

export default function MarketRates({ data }: MarketRatesProps) {
    if (!data) return null;

    const cards = [
        {
            title: "RBA Cash Rate",
            value: toNumber(data.cashRate),
            type: "rate",
            badge: "Target",
            decimals: 2,
        },
        {
            title: "Cash Rate Effective",
            value: toNumber(data.cashEffective),
            type: "rate",
            badge: "Effective",
            decimals: 2,
        },
        {
            title: `Inflation (${data.inflationPeriod})`,
            value: toNumber(data.inflation),
            type: "rate",
            badge: "CPI",
            decimals: 2,
        },

        ...Object.entries(data.exchangeRates).map(([code, value]) => ({
            title: `AUD / ${code}`,
            value: toNumber(value),
            type: "index",
            decimals: 4,
            badge: undefined,
        })),
    ];

    return (
        <section className="py-16 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-extrabold mb-10">Market Rates</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                    {cards.map((rate, i) => (
                        <MarketRateCard
                            key={i}
                            title={rate.title}
                            value={rate.value ?? 0}
                            type={rate.type as "rate" | "index"}
                            badge={rate.badge}
                            decimals={rate.decimals}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}