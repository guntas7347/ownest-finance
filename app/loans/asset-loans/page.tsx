"use client";

import React from "react";
import Hero from "./components/Hero";
import AssetBreakdown from "./components/AssetBreakdown";
import Calculator from "./components/Calculator";
import ComparisonTable from "./components/ComparisonTable";
import CTA from "./components/CTA";

export default function AssetLoans() {
    return (
        <main className="pt-20 bg-background-light dark:bg-background-dark text-brown transition-colors">
            <Hero />
            <AssetBreakdown />
            <Calculator />
            <ComparisonTable />
            <CTA />
        </main>
    );
}
