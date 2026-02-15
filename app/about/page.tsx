
import React from "react";
import Button from "@/Components/Button";
import Card from "@/Components/Card";
import {
    ShieldCheck,
    TrendingUp,
    Sparkles,
    Handshake,
    MapPin,
    Phone,
} from "lucide-react";

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <header className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl -z-10" />
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
                    <div className="relative order-2 md:order-1">
                        <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-tight mb-8 text-brown">
                            Redefining <br />
                            <span className="text-primary italic">Wealth</span> with <br />
                            Transparency.
                        </h1>
                        <p className="text-xl text-brown/80 dark:text-white/80 max-w-lg mb-10 leading-relaxed">
                            Ownest Finance was born from a singular vision: to strip away the
                            complexities of traditional asset management and reveal the clear
                            path to generational prosperity.
                        </p>
                        <div className="flex items-center gap-6">
                            <Button size="lg" className="shadow-lg shadow-primary/20 hover:-translate-y-1">
                                Discover Our Ethos
                            </Button>
                        </div>
                    </div>
                    <div className="relative order-1 md:order-2 flex justify-center">
                        <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                            <img
                                alt="Abstract Glass Bird"
                                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(226,123,50,0.3)]"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyLiKPY1xjdj2sTgNvzL9fJw_BL3oUcePOwJwXh8AYAsmABTO8mjUkYbQvOa7qWqSbtyZ-KlLXwlLJil7ei9lXp0MNB7ZTtSQV4Nn-v2T9aL7l-TLupJFBC2bi3jhO0yunSyzWN_qDTc_TpKqma41DZHq9VIL6ELvDAID_RngtMy0F--lJuEqSQqCGTAxoYZnP-z16TCTgV_949khodrCkdE8tBPuOqyfVzLhuqSyEfu95iYzOPVkPGRfJmGQ0ZiVls9QVXCwcIF2K"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Mission Deep Dive */}
            <section className="py-24 bg-white/30 dark:bg-black/10 backdrop-blur-sm transition-colors">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                        Our Philosophy
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-brown">
                        A Legacy Built on Honesty
                    </h2>
                    <p className="text-lg md:text-xl leading-loose text-brown/70 dark:text-white/70 italic">
                        "In a world of opaque financial structures, we choose clarity. Our
                        name is a promise—to be the 'Ownest' partner in your journey
                        towards financial sovereignty, treating your capital as if it were
                        our own."
                    </p>
                    <div className="mt-12 flex justify-center">
                        <div className="w-16 h-1 bg-primary/30 rounded-full" />
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl font-extrabold mb-4 text-brown">
                        Core Values
                    </h2>
                    <p className="text-brown/60 dark:text-white/60">
                        The pillars that uphold the Ownest standard.
                    </p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Value 1 */}
                    <Card className="hover:bg-primary hover:border-primary group transition-all duration-300">
                        <ShieldCheck className="text-primary group-hover:text-white w-10 h-10 mb-6" />
                        <h3 className="font-display font-bold text-xl mb-4 text-brown group-hover:text-white">
                            Absolute Integrity
                        </h3>
                        <p className="text-sm leading-relaxed text-brown/70 dark:text-white/70 group-hover:text-white/80">
                            We operate with radical transparency in every transaction and
                            consultation.
                        </p>
                    </Card>
                    {/* Value 2 */}
                    <Card className="hover:bg-primary hover:border-primary group transition-all duration-300">
                        <TrendingUp className="text-primary group-hover:text-white w-10 h-10 mb-6" />
                        <h3 className="font-display font-bold text-xl mb-4 text-brown group-hover:text-white">
                            Precision Strategy
                        </h3>
                        <p className="text-sm leading-relaxed text-brown/70 dark:text-white/70 group-hover:text-white/80">
                            Data-driven insights tailored to the unique contours of your
                            financial profile.
                        </p>
                    </Card>
                    {/* Value 3 */}
                    <Card className="hover:bg-primary hover:border-primary group transition-all duration-300">
                        <Sparkles className="text-primary group-hover:text-white w-10 h-10 mb-6" />
                        <h3 className="font-display font-bold text-xl mb-4 text-brown group-hover:text-white">
                            Liquid Innovation
                        </h3>
                        <p className="text-sm leading-relaxed text-brown/70 dark:text-white/70 group-hover:text-white/80">
                            Adopting modern financial technologies while maintaining classic
                            luxury service.
                        </p>
                    </Card>
                    {/* Value 4 */}
                    <Card className="hover:bg-primary hover:border-primary group transition-all duration-300">
                        <Handshake className="text-primary group-hover:text-white w-10 h-10 mb-6" />
                        <h3 className="font-display font-bold text-xl mb-4 text-brown group-hover:text-white">
                            Elite Partnership
                        </h3>
                        <p className="text-sm leading-relaxed text-brown/70 dark:text-white/70 group-hover:text-white/80">
                            We are more than advisors; we are long-term stewards of your
                            family’s future.
                        </p>
                    </Card>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-24 bg-primary-dark text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-xl">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">
                                Our Leadership
                            </span>
                            <h2 className="font-display text-4xl font-extrabold text-white">
                                The Minds Behind Ownest
                            </h2>
                        </div>
                        <p className="text-white/60 max-w-md">
                            Our executive team combines decades of institutional experience
                            with a boutique, client-first mindset.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Leader 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-48 h-48 rounded-full border-4 border-primary/40 p-2 mb-6">
                                <img
                                    alt="CEO"
                                    className="w-full h-full object-cover rounded-full"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVgJkCHMer8ThzjkNdMaRpR6ycIANTBmVIneBnmkpxy3fkpHG3EF2cf2Y2S7PBhIv6JE85uFtAtbuYsaxk5vQcA10d9_fMkRh1R0G6FTBZsIrzGh0zLWlxd9zSuzd7Lv-7yBcaYKz3Gt_F09b-dQgJz7ZvtX8Q9dnJBt8Q7LEzNXR2EWV3SXSqShsxb2S_KZY7jF_vR3hQM2IvEmlR815MLrmk-HzF4JjlJS_e-t0zBojuXVnG7UgNvVZb7DX8Ss2gfa_kG1hrXm8J"
                                />
                            </div>
                            <h4 className="font-display text-2xl font-bold mb-1 text-white">
                                Marcus Thorne
                            </h4>
                            <span className="text-primary text-sm font-bold uppercase tracking-wider mb-4 block">
                                Managing Director &amp; CEO
                            </span>
                            <p className="text-white/70 text-sm leading-relaxed">
                                A former Wall Street veteran with a vision for ethical private
                                banking and decentralized asset growth.
                            </p>
                        </div>
                        {/* Leader 2 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-48 h-48 rounded-full border-4 border-primary/40 p-2 mb-6">
                                <img
                                    alt="COO"
                                    className="w-full h-full object-cover rounded-full"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCem7Vp1ZklH8UmOkLmIG0FCnWQ4tb7A1ys7JKgFd4xsdbhANcQPN6zifU8hG6zDt2ANpt-daf5_HkZbJMiWS5TwIHZL7suUfM2QXkwS_llbI3SY7Cdor_UUBRZ7Q89a-Yg_vA13d8GUQsUVxxviagKX75LXz4zRYKhOgV6prarCnEiLlnTbCia1SLxE9OsMks5KBp-j5u_402-j9HNOHvP3lytZ13zOaSB125txdv3wOADQFj5I-D04q8rWl2xVQb2aH8aicaKOnyF"
                                />
                            </div>
                            <h4 className="font-display text-2xl font-bold mb-1 text-white">
                                Elena Vance
                            </h4>
                            <span className="text-primary text-sm font-bold uppercase tracking-wider mb-4 block">
                                Chief Strategy Officer
                            </span>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Specializing in global market trends and sustainable wealth
                                preservation for high-net-worth families.
                            </p>
                        </div>
                        {/* Leader 3 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-48 h-48 rounded-full border-4 border-primary/40 p-2 mb-6">
                                <img
                                    alt="CTO"
                                    className="w-full h-full object-cover rounded-full"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgwhOABJXMeXtY04W8QnaPTISuSwDRHv2f3-CD6XP734ZkjOYdH6BSxIcveVgDhyf0V-aksQiePIXVeqo1zRWtQONgIofsAuAO18eT8UDeA_sbEnv9iSR4pE7-BNTP-OZWLARidouRAF3VCdPg48-Tm-khqrjQ4FZsYlDGMhurApSFYx8uPmjNrCsVi9794XcttDQ7YBrmAqc_v1BxgnPUAAhxyd7WJF22hA4N311aDbKwoYxsaYTt4y0PbtlNO7CNDi3yyvtArB-8"
                                />
                            </div>
                            <h4 className="font-display text-2xl font-bold mb-1 text-white">
                                Julian Graves
                            </h4>
                            <span className="text-primary text-sm font-bold uppercase tracking-wider mb-4 block">
                                Head of Private Equity
                            </span>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Expert in identifying niche investment opportunities that offer
                                asymmetric risk-to-reward profiles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map & Contact Hook */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="glass-card dark:bg-white/5 rounded-3xl overflow-hidden grid md:grid-cols-2">
                    <div className="p-12 flex flex-col justify-center">
                        <h3 className="font-display text-3xl font-bold mb-6 text-brown dark:text-white">
                            Visit Our Sanctuary
                        </h3>
                        <p className="mb-8 text-brown/70 dark:text-white/70">
                            Located in the heart of the financial district, our office is
                            designed to be a haven for quiet deliberation and bold
                            decision-making.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-brown dark:text-white">
                                <MapPin className="text-primary w-6 h-6" />
                                <span>100 Financial Plaza, Floor 42, New York, NY</span>
                            </div>
                            <div className="flex items-center gap-4 text-brown dark:text-white">
                                <Phone className="text-primary w-6 h-6" />
                                <span>+1 (800) OWNEST-01</span>
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            className="mt-10 w-fit hover:bg-primary hover:text-white border-2 border-primary"
                        >
                            Schedule a Private Tour
                        </Button>
                    </div>
                    <div className="relative min-h-[400px]">
                        <img
                            alt="Office Location"
                            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhPXww0ceQGhCE40StPOO-WuzdEbKa7eEBKKWfz3ZS_a5y8hTGA1VfczuYYlQKNqld9SpWIWeayUVqTeW4Ql_r0h1eodyh_om7M8TjCnEYsDN3DhYY1zCdadt1DSAejPg4oGTPLeBzg8TdeiRdlZnD4CW-HRYpkPQrm-46jWYgHzALcs5ClyZYixfypsOMWwCnZRV2F9gB-aY8n-qWPqGJNBuXJJ1hk3AJGLlwMfGjx2Frs8jxenl4ddskh5k5m4f6ypE1oQ9Fzqmo"
                        />
                        <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
                    </div>
                </div>
            </section>
        </>
    );
}
