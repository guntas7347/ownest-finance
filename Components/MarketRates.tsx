import React from "react";
import MarketRateCard from "@/Components/MarketRateCard";
import { TrendingUp, Activity, RefreshCw } from "lucide-react";

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

  const rateCards = [
    {
      title: "RBA Cash Rate",
      value: toNumber(data.cashRate),
      type: "rate" as const,
      badge: "Target",
      decimals: 2,
      accentColor: "text-primary",
      icon: <TrendingUp className="w-4 h-4 text-primary" />,
      description: "Official rate by the Reserve Bank",
    },
    {
      title: "Cash Rate Effective",
      value: toNumber(data.cashEffective),
      type: "rate" as const,
      badge: "Effective",
      decimals: 2,
      accentColor: "text-blue-500",
      icon: <Activity className="w-4 h-4 text-blue-500" />,
      description: "Overnight interbank rate",
    },
    {
      title: `CPI Inflation`,
      value: toNumber(data.inflation),
      type: "rate" as const,
      badge: "CPI",
      decimals: 2,
      accentColor: "text-orange-500",
      icon: <TrendingUp className="w-4 h-4 text-orange-500" />,
      description: `Consumer Price Index (${data.inflationPeriod})`,
    },
  ];

  const fxCards = Object.entries(data.exchangeRates).map(([code, value]) => ({
    title: `AUD / ${code}`,
    value: toNumber(value),
    type: "index" as const,
    decimals: 4,
    badge: undefined,
    accentColor: "text-gray-700 dark:text-gray-200",
    description: `Live exchange rate`,
    icon: undefined as React.ReactNode | undefined,
  }));

  return (
    <section className="py-6 bg-surface-50 dark:bg-background-dark border-y border-gray-100 dark:border-white/5 relative overflow-hidden">
      {/* Subtle bg accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-500/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header row */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Live Data
              </span>
            </div>
            <h2 className="text-base font-extrabold text-gray-900 dark:text-white">
              Market Indicators
            </h2>
          </div>
          <RefreshCw className="w-3.5 h-3.5 text-gray-400 animate-spin [animation-duration:8s]" />
        </div>

        {/* Key Rates */}
        <div className="mb-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">
            Key Rates
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {rateCards.map((card, i) => (
              <MarketRateCard
                key={i}
                title={card.title}
                value={card.value ?? 0}
                type={card.type}
                badge={card.badge}
                decimals={card.decimals}
                icon={card.icon}
                description={card.description}
                accentColor={card.accentColor}
              />
            ))}
          </div>
        </div>

        {/* FX Rates */}
        {fxCards.length > 0 && (
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">
              Exchange Rates
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {fxCards.map((card, i) => (
                <MarketRateCard
                  key={i}
                  title={card.title}
                  value={card.value ?? 0}
                  type={card.type}
                  decimals={card.decimals}
                  icon={card.icon}
                  description={card.description}
                  accentColor={card.accentColor}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
