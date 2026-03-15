import React from "react";
import MarketRateCard from "@/Components/MarketRateCard";
import { TrendingUp, Activity } from "lucide-react";

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
      icon: <TrendingUp className="w-5 h-5 text-primary opacity-80" />,
      description: "The official interest rate set by the Reserve Bank.",
    },
    {
      title: "Cash Rate Effective",
      value: toNumber(data.cashEffective),
      type: "rate",
      badge: "Effective",
      decimals: 2,
      icon: <Activity className="w-5 h-5 text-blue-500 opacity-80" />,
      description: "The actual rate at which overnight funds are traded.",
    },
    {
      title: `Inflation (${data.inflationPeriod})`,
      value: toNumber(data.inflation),
      type: "rate",
      badge: "CPI",
      decimals: 2,
      icon: <TrendingUp className="w-5 h-5 text-orange-500 opacity-80" />,
      description: "Annual change in the Consumer Price Index.",
    },

    ...Object.entries(data.exchangeRates).map(([code, value]) => ({
      title: `AUD / ${code}`,
      value: toNumber(value),
      type: "index" as const,
      decimals: 4,
      badge: undefined,
      description: `Current exchange rate for ${code}.`,
      icon: undefined as React.ReactNode | undefined,
    })),
  ];

  return (
    <section className="py-20 bg-surface-50 dark:bg-background-dark border-y border-gray-100 dark:border-white/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded-full mb-4">
            Market Intelligence
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Live Economic Indicators
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Stay informed with the latest macroeconomic data and exchange rates
            driving the Australian financial landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((rate, i) => (
            <MarketRateCard
              key={i}
              title={rate.title}
              value={rate.value ?? 0}
              type={rate.type as "rate" | "index"}
              badge={rate.badge}
              decimals={rate.decimals}
              icon={rate.icon}
              description={rate.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
