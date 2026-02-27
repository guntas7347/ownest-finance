
"use client";

import React, { useEffect, useState, useRef } from "react";
import Card from "@/Components/Card";
import { TrendingUp, TrendingDown } from "lucide-react";

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
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp: number | null = null;
        const duration = 1000 * 1.5; // 2 seconds

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Easing function for smooth animation (easeOutExpo)
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            // Ensure we don't start from 0 if value is 0, but here value is number.
            // Just animating from 0 to value.
            setDisplayValue(value * easeProgress);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [value, isVisible]);

    return (
        <div ref={cardRef} className="lg:col-span-1 h-full">
            <Card className="h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start mb-4">
                    <p className="text-[10px] font-black text-brown/60 dark:text-white/60 uppercase tracking-widest">
                        {title}
                    </p>

                    {type === "rate" && badge && (
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[8px] font-bold uppercase border border-primary/20">
                            {badge}
                        </span>
                    )}

                    {type === "index" && trend === "up" && (
                        <TrendingUp className="text-green-500 w-5 h-5" />
                    )}
                    {type === "index" && trend === "down" && (
                        <TrendingDown className="text-red-500 w-5 h-5" />
                    )}
                </div>

                <div className={type === "index" ? "mb-4" : "mb-2"}>
                    <p className={`font-black text-brown ${type === "rate" ? "text-3xl" : "text-2xl"}`}>
                        {displayValue.toFixed(decimals)}
                        {type === "rate" && "%"}
                    </p>
                    {type === "rate" && subtext && (
                        <p className="text-[10px] font-bold text-brown/40 dark:text-white/40">
                            {subtext}
                        </p>
                    )}
                </div>

                {type === "index" && chartPath && (
                    <div className="w-full h-8">
                        <svg
                            className="w-full h-full"
                            preserveAspectRatio="none"
                            viewBox="0 0 100 20"
                        >
                            <path
                                d={chartPath}
                                fill="none"
                                stroke={trend === "down" ? "#ef4444" : chartColor}
                                strokeWidth={2}
                            />
                        </svg>
                    </div>
                )}
            </Card>
        </div>
    );
}
