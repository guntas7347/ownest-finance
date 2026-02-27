"use client";

import React, { useState, useEffect, useRef } from "react";
import Button from "@/Components/Button";
import LoanCard from "@/Components/LoanCard";
import { MarketRatesProps } from "./MarketRates";

export default function Hero({ data }: MarketRatesProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const sectionRef = useRef<HTMLElement>(null);

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            setMousePosition({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
            });
        }
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative py-24 bg-light min-h-screen dark:bg-dark overflow-hidden flex items-center"
        >


            <div
                className="absolute inset-0 pointer-events-none z-20
  bg-[linear-gradient(to_right,#4b556340_1px,transparent_1px),
      linear-gradient(to_bottom,#4b556340_1px,transparent_1px)]
  bg-[size:50px_50px]"
            /><div
                className="absolute inset-0 pointer-events-none z-10 bg-[url('/dollars.jpg')] bg-cover bg-center"
                style={{
                    maskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                }}
            />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center relative z-20 w-full">
                <div className="space-y-6 lg:max-w-xl">

                    <h1 className="text-5xl font-extrabold text-brown leading-none tracking-tighter">
                        Finance
                        Your <span className="text-primary italic">Future</span>
                    </h1>

                    <p className="text-lg text-brown/70 dark:text-white/70 max-w-md leading-relaxed">
                        Bespoke financial architecture for high-net-worth individuals.
                        Experience the seamless synergy of liquid-glass aesthetics and
                        solid financial growth.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button size="lg" className="shadow-xl shadow-orange-500/30 hover:-translate-y-1">
                            Start Application
                        </Button>

                        <Button variant="secondary" size="lg">
                            View Products
                        </Button>
                    </div>
                </div>
            </div>

            {/* Static Cards Right Side */}
            <div className="hidden absolute md:flex right-12 top-1/2 -translate-y-1/2 flex-col gap-6 z-20">
                <LoanCard
                    label="RBA Cash Rate"
                    value={data?.cashRate ? `${parseFloat(data.cashRate).toFixed(2)}%` : "Loading..."}
                    badge="Target"
                    subtext="Current Rate"
                    className="translate-x-4"
                />
                <LoanCard
                    label="Inflation"
                    value={data?.inflation ? `${parseFloat(data.inflation).toFixed(2)}%` : "Loading..."}
                    badge="CPI"
                    subtext={data?.inflationPeriod || "Quarterly"}
                    className="-translate-x-4"
                />
                <LoanCard
                    label="Effective Date"
                    value={data?.cashEffective || "Loading..."}
                    badge="Next Check"
                    subtext="RBA Meeting"
                    className="translate-x-4"
                />
            </div>
        </section>
    );
}
