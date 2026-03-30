"use client";

import React, { useEffect, useState, useRef } from "react";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

interface MarketRateCardProps {
  title: string;
  value: number;
  type: "rate" | "index";
  badge?: string;
  subtext?: string;
  trend?: "up" | "down";
  decimals?: number;
  icon?: React.ReactNode;
  description?: string;
  accentColor?: string;
}

export default function MarketRateCard({
  title,
  value,
  type,
  badge,
  decimals = 2,
  icon,
  description,
  accentColor = "text-primary",
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
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const duration = 1200;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayValue(value * easeProgress);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [value, isVisible]);

  const renderIcon = () => {
    if (icon) return icon;
    return <DollarSign className="text-gray-400 w-4 h-4" />;
  };

  const formattedValue = displayValue.toFixed(decimals);

  return (
    <div
      ref={cardRef}
      className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-gray-100 dark:border-white/8 hover:border-primary/30 dark:hover:border-primary/20 hover:bg-white dark:hover:bg-white/8 hover:shadow-md transition-all duration-200"
    >
      {/* Left: icon + title */}
      <div className="flex items-center gap-2.5 min-w-0">
        <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center">
          {renderIcon()}
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider leading-none truncate">
            {title}
          </p>
          {description && (
            <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5 leading-tight truncate max-w-[160px]">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Right: value + badge */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className={`text-base font-black tabular-nums ${accentColor}`}>
          {type === "index" && (
            <span className="text-xs font-semibold text-gray-400 mr-0.5">
              $
            </span>
          )}
          {formattedValue}
          {type === "rate" && (
            <span className="text-xs font-semibold text-gray-400 ml-0.5">
              %
            </span>
          )}
        </span>
        {badge && (
          <span className="hidden sm:inline-flex px-1.5 py-0.5 rounded-md bg-primary/10 text-primary text-[9px] font-bold uppercase tracking-wider border border-primary/15">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}
