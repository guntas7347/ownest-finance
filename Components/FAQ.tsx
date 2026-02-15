import React from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const faqs = [
        {
            question: "What are the eligibility requirements for an asset loan?",
            answer:
                "Our asset loans are available to individuals with verifiable luxury assets or real estate portfolios. Minimum asset valuation usually starts at $500,000 for standard applications.",
        },
        {
            question: "How long does the consultation process take?",
            answer:
                "Initial consultations typically take 30-45 minutes. We aim to provide an indicative approval within 24-48 hours of document submission.",
        },
        {
            question: "Are there early repayment penalties?",
            answer:
                "We pride ourselves on flexibility. Most of our high-end products allow for partial or full early repayments without traditional penalty structures.",
        },
        {
            question: "What is the \"Liquid Glass\" approach?",
            answer:
                "It's our philosophy of transparency (Glass) and flexibility (Liquid). We provide clear financial visibility while adapting our structures to your evolving needs.",
        },
    ];

    return (
        <section className="py-24 max-w-4xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-5xl font-extrabold text-brown">Clear Answers.</h2>
                <p className="text-xl text-brown/60 dark:text-white/60">
                    Everything you need to know about our premium lending.
                </p>
            </div>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="group">
                        <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-brown/5 dark:border-white/5 hover:border-primary/20 transition-all cursor-pointer">
                            <div className="flex justify-between items-center text-brown">
                                <h3 className="text-xl font-bold">{faq.question}</h3>
                                <ChevronDown className="w-6 h-6 text-primary group-hover:rotate-180 transition-transform" />
                            </div>
                            <div className="mt-4 text-brown/70 dark:text-white/70 leading-relaxed overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
