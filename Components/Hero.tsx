import React from "react";
import Button from "@/Components/Button";
import LoanCard from "@/Components/LoanCard";
import { MarketRatesProps } from "./MarketRates";

export default function Hero({ data }: MarketRatesProps) {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Fullscreen Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover -z-20"
                src="/bird-a.mp4"
                autoPlay
                muted
                loop
                playsInline
                poster="/ownest-t.png"
            >
                {/* Fallback image if video fails or not supported */}
                <img
                    src="/ownest-t.png"
                    alt="3D liquid glass bird in flight"
                    className="w-full h-full object-cover"
                />
            </video>

            {/* Video overlay for readability */}
            <div className="absolute inset-0 bg-white/70 dark:bg-black/70 backdrop-blur-[2px] -z-10 transition-colors" />

            {/* Abstract accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/50 dark:from-orange-900/20 to-transparent -z-10" />
            <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            {/* Foreground content */}
            <div className="relative z-10 pt-32 pb-20 min-h-screen flex items-center">
                {/* Left Text */}
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wide">
                            TRUSTED ASSET LENDING
                        </div>

                        <h1 className="text-6xl md:text-8xl font-extrabold text-brown leading-none tracking-tighter">
                            Finance <br />
                            Your <span className="text-primary italic">Future</span>
                        </h1>

                        <p className="text-xl text-brown/70 dark:text-white/70 max-w-lg leading-relaxed">
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

                {/* Rotating Cards Right Side */}
                <div className="hidden absolute md:block right-24 top-1/2 -translate-y-1/2 w-[420px] h-[420px]">
                    <div className="relative w-full h-full animate-spin-slow">

                        {/* Top */}
                        <div className="absolute inset-0 flex items-center justify-center rotate-[-90deg]">
                            <div className="translate-x-[210px] rotate-[90deg]">
                                <LoanCard
                                    label="RBA Cash Rate"
                                    value={data?.cashRate ? `${parseFloat(data.cashRate).toFixed(2)}%` : "Loading..."}
                                    badge="Target"
                                    subtext="Current Rate"
                                    className="animate-reverse-spin-slow"
                                />
                            </div>
                        </div>

                        {/* Bottom Right */}
                        <div className="absolute inset-0 flex items-center justify-center rotate-[30deg]">
                            <div className="translate-x-[210px] rotate-[-30deg]">
                                <LoanCard
                                    label="Inflation"
                                    value={data?.inflation ? `${parseFloat(data.inflation).toFixed(2)}%` : "Loading..."}
                                    badge="CPI"
                                    subtext={data?.inflationPeriod || "Quarterly"}
                                    className="animate-reverse-spin-slow"
                                />
                            </div>
                        </div>

                        {/* Bottom Left */}
                        <div className="absolute inset-0 flex items-center justify-center rotate-[150deg]">
                            <div className="translate-x-[210px] rotate-[-150deg]">
                                <LoanCard
                                    label="Effective Date"
                                    value={data?.cashEffective || "Loading..."}
                                    badge="Next Check"
                                    subtext="RBA Meeting"
                                    className="animate-reverse-spin-slow"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
