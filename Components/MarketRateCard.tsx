"use client";

import React, { useEffect, useState, useRef } from "react";
import Card from "@/Components/Card";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

interface MarketRateCardProps {
  title: string;
  value: number;
  type: "rate" | "index";
  badge?: string;
  subtext?: string;
  trend?: "up" | "down";
  chartPath?: string;
  chartColor?: string;
  decimals?: number;
  icon?: React.ReactNode;
  description?: string;
}

export default function MarketRateCard({
  title,
  value,
  type,
  badge,
  subtext,
  trend,
  chartPath,
  chartColor = "#22c55e",
  decimals = 2,
  icon,
  description,
}: MarketRateCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const duration = 1000 * 1.5; // 1.5 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayValue(value * easeProgress);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, isVisible]);

  const renderIcon = () => {
    if (icon) return icon;
    if (type === "index") {
      if (trend === "up")
        return <TrendingUp className="text-green-500 w-5 h-5" />;
      if (trend === "down")
        return <TrendingDown className="text-red-500 w-5 h-5" />;
      return <DollarSign className="text-gray-400 w-5 h-5" />;
    }
    return null;
  };

  return (
    <div ref={cardRef} className="h-full">
      <Card
        className="h-full flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 bg-white/60 dark:bg-black/40 backdrop-blur-sm border-white/40 dark:border-white/5 shadow-lg hover:shadow-xl"
        hoverEffect={false}
      >
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              {renderIcon()}
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                {title}
              </p>
            </div>
            {type === "rate" && badge && (
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase border border-primary/20 whitespace-nowrap">
                {badge}
              </span>
            )}
          </div>

          <div className={type === "index" ? "mb-4" : "mb-2"}>
            <div className="flex items-baseline gap-1">
              {type === "index" && (
                <span className="text-lg font-bold text-gray-400 mr-1">$</span>
              )}
              <p
                className={`font-black text-gray-900 dark:text-white ${type === "rate" ? "text-4xl" : "text-3xl"}`}
              >
                {displayValue.toFixed(decimals)}
              </p>
              {type === "rate" && (
                <span className="text-xl font-bold text-gray-500 ml-1">%</span>
              )}
            </div>
            {type === "rate" && subtext && (
              <p className="text-xs font-semibold text-gray-500 mt-1">
                {subtext}
              </p>
            )}
            {description && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>

        {type === "index" && chartPath && (
          <div className="w-full h-10 mt-4 opacity-70">
            <svg
              className="w-full h-full drop-shadow-sm"
              preserveAspectRatio="none"
              viewBox="0 0 100 20"
            >
              <path
                d={chartPath}
                fill="none"
                stroke={trend === "down" ? "#ef4444" : chartColor}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </Card>
    </div>
  );
}
