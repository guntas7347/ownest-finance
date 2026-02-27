import React from "react";
import { scrapeMarketRates } from "@/lib/scraper";

// Components
import Hero from "@/Components/Hero";
import MarketRates from "@/Components/MarketRates";
import Partners from "@/Components/Partners";
import SimpleCalculator from "@/Components/SimpleCalculator";
import Testimonials from "@/Components/Testimonials";
import FAQ from "@/Components/FAQ";

export default async function Home() {
  const data = await scrapeMarketRates();
  // console.log(data); 

  return (
    <>
      <Hero data={data} />
      <Partners />    <MarketRates data={data} />

      <SimpleCalculator />
      <Testimonials />
      <FAQ />
    </>
  );
}
