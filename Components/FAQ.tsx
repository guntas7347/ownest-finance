"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const FAQS = [
  {
    question: "What are the eligibility requirements for an asset loan?",
    answer:
      "Our asset loans are available to individuals with verifiable luxury assets or real estate portfolios. Minimum asset valuation usually starts at $500,000 for standard applications. We also take into account your income, credit history, and overall financial position.",
  },
  {
    question: "How long does the consultation process take?",
    answer:
      "Initial consultations typically take 30–45 minutes. We aim to provide an indicative approval within 24–48 hours of document submission, depending on the complexity of your application.",
  },
  {
    question: "Are there early repayment penalties?",
    answer:
      "We pride ourselves on flexibility. Most of our products allow for partial or full early repayments without traditional penalty structures. Speak to a broker to understand the specific terms for your loan type.",
  },
  {
    question: 'What is the "Liquid Glass" approach?',
    answer:
      "It's our philosophy of transparency (Glass) and flexibility (Liquid). We provide clear financial visibility while adapting our structures to your evolving needs — no fine print surprises.",
  },
  {
    question: "Can I refinance an existing loan through Ownest?",
    answer:
      "Absolutely. Refinancing is one of our specialties. We compare products across 30+ lenders to find you a better rate, lower fees, or more suitable loan terms — often saving clients thousands annually.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section className="py-14 bg-background-light dark:bg-background-dark relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-3">
            <MessageCircle className="w-3 h-3" />
            FAQ
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Clear <span className="text-primary">Answers.</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Everything you need to know about our lending process.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white dark:bg-[#2a1e15] border-primary/25 shadow-md shadow-primary/5"
                    : "bg-white/60 dark:bg-white/3 border-gray-100 dark:border-white/8 hover:border-primary/20"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Number badge */}
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center transition-colors ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-gray-100 dark:bg-white/10 text-gray-400 group-hover:bg-primary/15 group-hover:text-primary"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <h3
                      className={`text-sm font-semibold transition-colors ${
                        isOpen
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`flex-shrink-0 w-4 h-4 text-primary transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer — CSS animated */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="px-5 pb-5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed pl-14">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/15">
          <div>
            <p className="text-sm font-bold text-gray-900 dark:text-white">
              Still have questions?
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Our brokers are happy to help — no obligation.
            </p>
          </div>
          <Link href="/contact">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-sm whitespace-nowrap">
              Talk to a Broker
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
