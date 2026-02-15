
import React from "react";
import Button from "@/Components/Button";
import Card from "@/Components/Card";
import {
    ArrowRight,
    MapPin,
    Phone,
    Mail,
    Linkedin,
    Twitter,
    Instagram,
} from "lucide-react";

export default function Contact() {
    return (
        <main className="relative min-h-screen pt-20 flex flex-col items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark transition-colors">
            {/* Background Map Image (Soft Focus) */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <img
                    className="w-full h-full object-cover grayscale brightness-110 blur-[4px] dark:invert"
                    alt="Soft focus aerial view of an urban financial district map"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0VxW_-ijeLXdGUFNAESawbT4ygnPd480e0tj5NcgQWaZwFxcP1LizrHg-LS21HNZQq_cGFz_FFPyUeF8qU9XZNLdl_pOHIsKOXIYxrnYYdIlEPGLjXNBJot18O7Nv2fP59F-eBNI2GNLfpy9DspFNT9bzi3HkRutNKUJXgXFDzLpu9cynHq9OV_L_LLLt_8qURDCUlioSNhCMly7CFCcKsa16d-aEnVGGqe8fAZ3fz3OT1y3gJfY_jWAsWFVm_pn2SrbimpuL-tDK"
                />
            </div>

            <div className="relative z-10 w-full max-w-6xl px-6 py-12">
                {/* Header Text */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brown mb-4 tracking-tight">
                        Connect with Excellence
                    </h1>
                    <p className="text-lg text-brown/60 dark:text-white/60 max-w-2xl mx-auto">
                        Our advisors are available for exclusive consultations. Reach out to
                        discuss how we can secure your financial legacy.
                    </p>
                </div>

                {/* Central Glass Card */}
                <Card
                    variant="glass"
                    className="border border-white/50 shadow-2xl rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 p-0"
                    hoverEffect={false}
                >
                    {/* Inquiry Form Section */}
                    <div className="lg:col-span-7 p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-brown mb-8 flex items-center">
                            <span className="w-8 h-[2px] bg-primary mr-4" />
                            Send an Inquiry
                        </h2>
                        <form action="#" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-brown/50 dark:text-white/50 ml-1">
                                        Full Name
                                    </label>
                                    <input
                                        className="w-full px-4 py-3 bg-white/50 dark:bg-white/10 border border-brown/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-brown/30 dark:placeholder:text-white/30 text-brown outline-none"
                                        placeholder="Johnathan Doe"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-brown/50 dark:text-white/50 ml-1">
                                        Work Email
                                    </label>
                                    <input
                                        className="w-full px-4 py-3 bg-white/50 dark:bg-white/10 border border-brown/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-brown/30 dark:placeholder:text-white/30 text-brown outline-none"
                                        placeholder="j.doe@company.com"
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-brown/50 dark:text-white/50 ml-1">
                                        Phone Number
                                    </label>
                                    <input
                                        className="w-full px-4 py-3 bg-white/50 dark:bg-white/10 border border-brown/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-brown/30 dark:placeholder:text-white/30 text-brown outline-none"
                                        placeholder="+1 (555) 000-0000"
                                        type="tel"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-brown/50 dark:text-white/50 ml-1">
                                        Interest Area
                                    </label>
                                    <select className="w-full px-4 py-3 bg-white/50 dark:bg-white/10 border border-brown/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-brown/60 dark:text-white/60 outline-none">
                                        <option>Wealth Planning</option>
                                        <option>Investment Management</option>
                                        <option>Tax Strategy</option>
                                        <option>Philanthropy</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-brown/50 dark:text-white/50 ml-1">
                                    How can we assist you?
                                </label>
                                <textarea
                                    className="w-full px-4 py-3 bg-white/50 dark:bg-white/10 border border-brown/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-brown/30 dark:placeholder:text-white/30 text-brown outline-none resize-none"
                                    placeholder="Your message here..."
                                    rows={4}
                                />
                            </div>
                            <Button type="submit" className="w-full md:w-auto">
                                <span>Request Consultation</span>
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </div>

                    {/* Contact Details Sidebar */}
                    <div className="lg:col-span-5 bg-brown/5 dark:bg-black/20 p-8 md:p-12 border-l border-white/20 dark:border-white/5">
                        <h2 className="text-2xl font-bold text-brown mb-10">
                            Direct Channels
                        </h2>
                        <div className="space-y-10">
                            {/* Office */}
                            <div className="flex items-start space-x-5">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center shadow-sm">
                                    <MapPin className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                                        Global Headquarters
                                    </p>
                                    <p className="text-brown font-semibold text-lg leading-snug">
                                        One Financial Plaza, Suite 4200
                                        <br />
                                        New York, NY 10004
                                    </p>
                                </div>
                            </div>
                            {/* Phone */}
                            <div className="flex items-start space-x-5">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center shadow-sm">
                                    <Phone className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                                        Inquiry Line
                                    </p>
                                    <p className="text-brown font-semibold text-lg">
                                        +1 (212) 555-8800
                                    </p>
                                    <p className="text-sm text-brown/50 dark:text-white/50 mt-1">
                                        Mon - Fri: 8am - 6pm EST
                                    </p>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="flex items-start space-x-5">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center shadow-sm">
                                    <Mail className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                                        Concierge Email
                                    </p>
                                    <p className="text-brown font-semibold text-lg">
                                        concierge@ownest.finance
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 pt-10 border-t border-brown/10 dark:border-white/10">
                            <p className="text-sm font-bold text-brown/60 dark:text-white/60 mb-4 uppercase tracking-widest">
                                Secure Channels
                            </p>
                            <div className="flex space-x-4">
                                <button className="w-10 h-10 rounded-full border border-brown/10 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors group">
                                    <Linkedin className="w-5 h-5 opacity-80 group-hover:opacity-100 text-brown group-hover:text-white" />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-brown/10 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors group">
                                    <Twitter className="w-5 h-5 opacity-80 group-hover:opacity-100 text-brown group-hover:text-white" />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-brown/10 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors group">
                                    <Instagram className="w-5 h-5 opacity-80 group-hover:opacity-100 text-brown group-hover:text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Background Decorative Elements */}
            <div className="fixed top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-brown/5 dark:bg-white/5 rounded-full blur-[150px] -z-10" />
        </main>
    );
}
