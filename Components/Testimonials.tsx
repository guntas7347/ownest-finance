import React from "react";
import Card from "@/Components/Card";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            text: "The liquid-glass interface is just the surface. Their actual financial expertise helped me secure a $2M asset loan in record time.",
            name: "Marcus Chen",
            role: "Property Developer",
            avatar:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAdtu8fpdbh0ahzbaOCQpkik2pYOY7w7ql5L3YkJNypW3gVYGs_i0WLKUMpsSy-FjgTxRi5PMtb7yqDym5rP7Ar9ICeQmJX5S6xyXXwDxPxChnXGOyp7bLV2zTLQYJJK00rNylk_6dLe7vzqsZk6xjO-QzBh1a5wyR2pTa7RykBYk_KYouCEtYabozt-LDhuU2NrY7Iz8FjywwFBOU_5bVY7RUxuFAPgsN-5QwXA-w4YkZG7CLH6ZwrD4WndqqtZu3Aoiy4lsKUMtRX",
            bgClass: "",
        },
        {
            text: "Smooth, transparent, and remarkably high-end. Ownest doesn't just provide loans; they build long-term partnerships.",
            name: "Elena Rodriguez",
            role: "Tech Entrepreneur",
            avatar:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCvbcy8B5mEUao7l7_5qYiwx84toZryprW7x61vV7dPqF21ovQwuXXOBUf-X1COrusMGJga3Bfyf_WqJbma7-oAdwLg5oPOplsi1FmhNzKe1j_yRkWw_0sFFs-RPEcV_EkmBdj3dEvHBHxxIE4s3V3MyuJAsGvX3t_esR2fhqG8Y55SFfyLkZJsFjfMoTcIs7B8bHAucrfup6U34sEuHCjwYUth1_1EO5qgGaoWKYkNeth1LOPrSXCx5M85UNCH0OLUoSoCDIEV05Uq",
            bgClass: "bg-white/60 dark:bg-white/5",
        },
        {
            text: "The best asset financing experience I've had in 20 years of investing. The calculator was pinpoint accurate.",
            name: "David Sterling",
            role: "Capital Investor",
            avatar:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAETLbYJNaM1jFm090NW158yXuRzxMQUheSTv-p4DhpEh5CbkQuwtqdMbTn6TPF6BypvpRS_UOrMKNJPGAq0YnuRmyq2pwnw4xToAOanlnOGvVNSgfWZ27iVi2kawuv4Xvnu59auVrmKOmL9ajWNqhIlPRbahmrQSDVzekSK306dSbryvw_tXMcNWypN0_vPgKpkT-1wIM7FuSFBA7kQL8ZLJMRdeW1v2634IHOpfeuifVZbJQPrCRX0ahHaQUFtRt8BPUYS6lfiMZZ",
            bgClass: "",
        },
    ];

    return (
        <section className="py-24 bg-brown/5 dark:bg-black/20 transition-colors">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div className="space-y-4">
                        <h2 className="text-5xl font-extrabold text-brown">
                            Shared Success.
                        </h2>
                        <p className="text-xl text-brown/60 dark:text-white/60">
                            Voices from our global community of investors.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="w-12 h-12 rounded-full border border-brown/10 dark:border-white/10 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 transition-all text-brown">
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button className="w-12 h-12 rounded-full border border-brown/10 dark:border-white/10 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 transition-all text-brown">
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <Card
                            key={index}
                            className={`hover:-translate-y-2 transition-transform duration-500 ${item.bgClass}`}
                        >
                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                                ))}
                            </div>
                            <p className="text-lg text-brown leading-relaxed mb-8 italic">
                                "{item.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    className="w-12 h-12 rounded-full object-cover grayscale"
                                    alt={`Portrait of ${item.name}`}
                                    src={item.avatar}
                                />
                                <div>
                                    <p className="font-bold text-brown">{item.name}</p>
                                    <p className="text-xs text-brown/50 dark:text-white/50 uppercase font-bold tracking-wider">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
