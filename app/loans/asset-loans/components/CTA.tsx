"use client";

import React from "react";
import Button from "@/Components/Button";

export default function CTA() {
    return (
        <section className="py-24 container max-w-7xl mx-auto px-6">
            <div className="relative bg-primary-dark rounded-3xl p-12 lg:p-24 overflow-hidden text-center">
                <div className="absolute inset-0 opacity-30">
                    <img
                        className="w-full h-full object-cover"
                        alt="Abstract golden currency coins in soft focus"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD0Hog0-MxICwyyAiG63hwoldkzkhzObIbxrqHSfulWt7PJeKoypN-s9E5fn7xlY8BQe_ZuzYnfavQO3YhSyNYuazRUhq16IKn7G5WqoXoSKUH1Fr-TNnL9EbJ_u9uXm7bSjC3-geYLezdmxya4OmzhRaQ1raZnD5Rk5kvu7FG6hV-Qg9btSrKUY4AaqudBIVAWwh-e_HEzQ-KfGKjeTUUEALzcx8htpVRsZWb75lJfr45DlHnC9SF-eiCr8_ByZPapPv7xMKNamAo"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
                        Ready to secure your{" "}
                        <span className="text-primary">next milestone?</span>
                    </h2>
                    <p className="text-white/60 text-lg mb-12">
                        Our advisors are standing by to design a financing structure as unique
                        as the asset you're acquiring. Let's build your future together.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="w-full sm:w-auto px-10 py-5 text-xl">
                            Book a Consultation
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="w-full sm:w-auto px-10 py-5 text-xl"
                        >
                            Download Brochure
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
