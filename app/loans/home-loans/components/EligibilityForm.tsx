"use client";

import { useState } from "react";

export default function EligibilityForm() {
    const [formData, setFormData] = useState({
        loanAmount: "",
        propertyValue: "",
        fullName: "",
        email: "",
        loanType: "First Home Buyer",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add submission logic here
    };

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmCVk5qmGsvxryHg9FAScFdNNqZZ953E-oJ8Vg7ujA0VFZaU1x4LYch0VlvCwnU36n9SYqMJU8FO6Sww-87T3jgYTFhc_lPuIyH9pGvYcjNgw1IJn0kk947h04ElqPLVxJwlXg4qJLdVy6DAzB3vJyNKY6BE3Rq8dHRFtY-Q5mAceRFeDRxJyXt0MrwLJSLOn8gO-afCUI98WVRLssTA4IhfoBrX2TmtyBE3i3WJvQiR71oNGb0qOUCPGzCH2-DIVjBXaENGQDqxmt"
                    alt="Residential landscape"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="glass-card p-12 rounded-xl shadow-2xl border border-white dark:border-white/20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark dark:text-white mb-4">
                            Check Your Eligibility
                        </h2>
                        <p className="text-primary-dark/70 dark:text-white/70">
                            Take the first step towards your new home. It only takes 2 minutes.
                        </p>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary-dark dark:text-white">
                                    Desired Loan Amount
                                </label>
                                <input
                                    name="loanAmount"
                                    value={formData.loanAmount}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/50 dark:bg-black/30 border border-primary/20 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-primary-dark/40 dark:text-white"
                                    placeholder="$0.00"
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary-dark dark:text-white">
                                    Property Value
                                </label>
                                <input
                                    name="propertyValue"
                                    value={formData.propertyValue}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/50 dark:bg-black/30 border border-primary/20 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-primary-dark/40 dark:text-white"
                                    placeholder="$0.00"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary-dark dark:text-white">
                                    Full Name
                                </label>
                                <input
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/50 dark:bg-black/30 border border-primary/20 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-primary-dark/40 dark:text-white"
                                    placeholder="John Doe"
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary-dark dark:text-white">
                                    Email Address
                                </label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/50 dark:bg-black/30 border border-primary/20 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-primary-dark/40 dark:text-white"
                                    placeholder="john@example.com"
                                    type="email"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-primary-dark dark:text-white">
                                Loan Type
                            </label>
                            <select
                                name="loanType"
                                value={formData.loanType}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/50 dark:bg-black/30 border border-primary/20 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none dark:text-white"
                            >
                                <option>First Home Buyer</option>
                                <option>Investment Property</option>
                                <option>Refinance</option>
                                <option>Construction</option>
                            </select>
                        </div>
                        <button
                            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded text-lg shadow-xl shadow-primary/30 transition-all uppercase tracking-widest mt-4"
                            type="submit"
                        >
                            Submit Assessment
                        </button>
                        <p className="text-center text-xs text-primary-dark/50 dark:text-white/50 mt-4">
                            By clicking submit, you agree to our terms of service and privacy
                            policy.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
