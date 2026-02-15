
import React from "react";
import Button from "@/Components/Button";
import Card from "@/Components/Card";
import {
    ShieldCheck,
    ChevronLeft,
    ChevronRight,
    Clock,
    CheckCircle,
    ArrowRight,
} from "lucide-react";

export default function BookAppointment() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-12 bg-background-light dark:bg-background-dark min-h-screen text-brown transition-colors">
            <div className="flex flex-col lg:flex-row gap-12 pt-20">
                {/* Sidebar: Consultant & Progress */}
                <aside className="w-full lg:w-1/3 space-y-8">
                    {/* Consultant Card */}
                    <Card className="sticky top-32 p-8">
                        <div className="relative w-24 h-24 mb-6 mx-auto lg:mx-0">
                            <img
                                alt="Lead Consultant"
                                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-xl"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKJ0rBt5r6Le4Ql_fQNPVr0qktb39_Tp8DfiLSPd1FcwBVyPnffix9bJC7nZBVU7_0J1r7UsNeoJ2tV7p4fp8Uz8TE7y8haJpJ4mWJ4_Rymnt7gRsQxb363F7nlDCmuv0VqF_wWG58fRmhmkaehfdG0jOVi2PUyVsAsLxYHvx7k-I2VlViCzxFXgTfKp1u3n5Yfeco3eZLmDIor9iB_zZbJthgNQ8TKyKlz0mZV4tCvtiLE9L5Gufmz40PllnB0NnLRkYUuZxR7Qwz"
                            />
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 border-4 border-white dark:border-background-dark rounded-full" />
                        </div>
                        <h2 className="text-2xl font-bold mb-1">Marcus Sterling</h2>
                        <p className="text-primary font-semibold text-sm mb-4 uppercase tracking-wider">
                            Senior Wealth Strategist
                        </p>
                        <p className="text-brown/60 dark:text-white/60 text-sm leading-relaxed mb-8">
                            Specializing in ultra-high-net-worth portfolio management and
                            bespoke fiscal structural planning for the modern era.
                        </p>
                        {/* Booking Progress */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs">
                                        1
                                    </div>
                                    <div className="w-0.5 h-10 bg-primary/20" />
                                </div>
                                <span className="font-bold text-sm">Select Service</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs">
                                        2
                                    </div>
                                    <div className="w-0.5 h-10 bg-primary/20" />
                                </div>
                                <span className="font-bold text-sm">Pick Date &amp; Time</span>
                            </div>
                            <div className="flex items-center space-x-4 opacity-40">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-brown/10 dark:bg-white/10 text-brown/50 dark:text-white/50 flex items-center justify-center text-xs">
                                        3
                                    </div>
                                </div>
                                <span className="font-bold text-sm">Personal Details</span>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-primary/10">
                            <div className="flex items-center space-x-3 text-brown/50 dark:text-white/50 text-xs">
                                <ShieldCheck className="text-primary text-lg" />
                                <span>Secure encrypted booking process</span>
                            </div>
                        </div>
                    </Card>
                </aside>

                {/* Main Booking Area */}
                <div className="w-full lg:w-2/3 space-y-8">
                    <header className="mb-8">
                        <h1 className="text-4xl font-extrabold mb-2 tracking-tight">
                            Reserve Your Strategy Session
                        </h1>
                        <p className="text-brown/60 dark:text-white/60">
                            Secure your spot for a private consultation with Marcus.
                        </p>
                    </header>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Liquid Glass Calendar */}
                        <Card variant="glass" className="p-6">
                            <div className="flex items-center justify-between mb-8">
                                <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-brown">
                                    <ChevronLeft className="text-primary w-6 h-6" />
                                </button>
                                <h3 className="font-bold text-lg text-brown">
                                    October 2024
                                </h3>
                                <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-brown">
                                    <ChevronRight className="text-primary w-6 h-6" />
                                </button>
                            </div>
                            <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-brown/40 dark:text-white/40 mb-4 uppercase tracking-widest">
                                <div>Mo</div>
                                <div>Tu</div>
                                <div>We</div>
                                <div>Th</div>
                                <div>Fr</div>
                                <div>Sa</div>
                                <div>Su</div>
                            </div>
                            <div className="grid grid-cols-7 gap-1">
                                {/* Empty spacers for calendar alignment */}
                                <div className="aspect-square" />
                                <div className="aspect-square" />
                                {/* Calendar Days */}
                                {[
                                    { day: 1, active: false },
                                    { day: 2, active: false },
                                    { day: 3, active: false },
                                    { day: 4, disabled: true },
                                    { day: 5, disabled: true },
                                    { day: 6, active: false },
                                    { day: 7, active: false },
                                    { day: 8, selected: true },
                                    { day: 9, active: false },
                                    { day: 10, active: false },
                                    { day: 11, disabled: true },
                                    { day: 12, disabled: true },
                                    { day: 13, active: false },
                                    { day: 14, active: false },
                                    { day: 15, active: false },
                                    { day: 16, active: false },
                                    { day: 17, active: false },
                                    { day: 18, disabled: true },
                                    { day: 19, disabled: true },
                                    { day: 20, active: false },
                                    { day: 21, active: false },
                                    { day: 22, active: false },
                                    { day: 23, active: false },
                                    { day: 24, active: false },
                                    { day: 25, disabled: true },
                                    { day: 26, disabled: true },
                                ].map((item, index) => (
                                    <button
                                        key={index}
                                        className={`aspect-square flex items-center justify-center rounded-lg transition-all text-sm ${item.selected
                                            ? "bg-primary text-white shadow-lg shadow-primary/30 font-bold"
                                            : item.disabled
                                                ? "text-brown/30 dark:text-white/30 pointer-events-none"
                                                : "hover:bg-primary/10 text-brown"
                                            }`}
                                    >
                                        {item.day}
                                    </button>
                                ))}
                            </div>
                        </Card>

                        {/* Time Slots Selection */}
                        <div className="space-y-6">
                            <Card variant="glass" className="p-6 h-full">
                                <h3 className="font-bold text-lg mb-6 flex items-center text-brown">
                                    <Clock className="text-primary mr-2 w-6 h-6" />
                                    Available Slots
                                </h3>
                                <div className="grid grid-cols-1 gap-3">
                                    <button className="group flex items-center justify-between p-4 rounded-xl border border-primary/10 dark:border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-brown">
                                        <span className="text-sm font-semibold">
                                            09:00 AM - 10:00 AM
                                        </span>
                                        <CheckCircle className="text-brown/20 dark:text-white/20 group-hover:text-primary transition-colors w-6 h-6" />
                                    </button>
                                    <button className="group flex items-center justify-between p-4 rounded-xl border-2 border-primary bg-primary/5 transition-all">
                                        <span className="text-sm font-bold text-primary">
                                            10:30 AM - 11:30 AM
                                        </span>
                                        <CheckCircle className="text-primary w-6 h-6" />
                                    </button>
                                    <button className="group flex items-center justify-between p-4 rounded-xl border border-primary/10 dark:border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-brown">
                                        <span className="text-sm font-semibold">
                                            02:00 PM - 03:00 PM
                                        </span>
                                        <CheckCircle className="text-brown/20 dark:text-white/20 group-hover:text-primary transition-colors w-6 h-6" />
                                    </button>
                                    <button className="group flex items-center justify-between p-4 rounded-xl border border-primary/10 dark:border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-brown">
                                        <span className="text-sm font-semibold">
                                            04:30 PM - 05:30 PM
                                        </span>
                                        <CheckCircle className="text-brown/20 dark:text-white/20 group-hover:text-primary transition-colors w-6 h-6" />
                                    </button>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Footer Action Area */}
                    <Card
                        variant="glass"
                        className="p-8 flex flex-col md:flex-row items-center justify-between border-t-4 border-primary"
                    >
                        <div className="mb-6 md:mb-0">
                            <p className="text-xs uppercase tracking-widest text-brown/40 dark:text-white/40 font-bold mb-1">
                                Current Selection
                            </p>
                            <h4 className="text-xl font-extrabold text-brown">
                                Wealth Strategy Session
                            </h4>
                            <p className="text-brown/60 dark:text-white/60 text-sm">
                                October 8th, 2024 at 10:30 AM
                            </p>
                        </div>
                        <Button className="w-full md:w-auto px-12 py-4">
                            <span>Confirm Appointment</span>
                            <ArrowRight className="w-6 h-6 ml-2" />
                        </Button>
                    </Card>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-brown/5 dark:bg-white/5 rounded-full blur-[120px]" />
            </div>
        </main>
    );
}
