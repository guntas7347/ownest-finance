import { Shield, BadgeCheck, FileText, Gavel } from "lucide-react";
import Image from "next/image";

export default function CTA() {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="bg-background-dark text-white rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <pattern
                                id="grid"
                                width="10"
                                height="10"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 10 0 L 0 0 0 10"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>
                    <div className="relative z-10 text-white">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white">
                            Start Your Confidential Strategy Session
                        </h2>
                        <p className="text-stone-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                            Speak with a senior financial architect today. No judgment, no
                            commitment, just a professional path forward.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <button className="w-full md:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-extrabold text-xl hover:bg-orange-500 transition-all shadow-2xl shadow-primary/40">
                                Book Now
                            </button>
                            <div className="flex items-center gap-4 text-stone-400">
                                <div className="flex -space-x-3">
                                    {/* Placeholder avatars if external images not allowed, using divs or just <img> tags if no local asset */}
                                    <div className="w-10 h-10 rounded-full border-2 border-stone-900 bg-gray-500"></div>
                                    <div className="w-10 h-10 rounded-full border-2 border-stone-900 bg-gray-400"></div>
                                </div>
                                <span className="text-sm font-medium">
                                    Experts available now
                                </span>
                            </div>
                        </div>
                        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-40 grayscale filter invert">
                            <Shield className="w-10 h-10" />
                            <BadgeCheck className="w-10 h-10" />
                            <FileText className="w-10 h-10" />
                            <Gavel className="w-10 h-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
