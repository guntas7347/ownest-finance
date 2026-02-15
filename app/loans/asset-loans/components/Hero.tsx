"use client";

import React from "react";
import Button from "@/Components/Button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            </div>
            <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
                    Bespoke Financial Solutions
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold text-brown mb-6 leading-tight">
                    Tailored Asset <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                        Finance Excellence
                    </span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-brown/60 dark:text-white/60 mb-10 leading-relaxed font-light">
                    Elevate your lifestyle and operational capacity with bespoke lending
                    solutions for luxury vehicles, marine vessels, and high-performance
                    industrial equipment.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="w-full sm:w-auto">
                        Get Started <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="w-full sm:w-auto text-brown"
                    >
                        View Rates
                    </Button>
                </div>
            </div>
        </section>
    );
}
