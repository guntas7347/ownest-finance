"use client";

import React, { useState } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "The liquid-glass interface is just the surface. Their actual financial expertise helped me secure a $2M asset loan in record time. Couldn't have done it without their team.",
    name: "Marcus Chen",
    role: "Property Developer",
    rating: 5,
    highlight: true,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdtu8fpdbh0ahzbaOCQpkik2pYOY7w7ql5L3YkJNypW3gVYGs_i0WLKUMpsSy-FjgTxRi5PMtb7yqDym5rP7Ar9ICeQmJX5S6xyXXwDxPxChnXGOyp7bLV2zTLQYJJK00rNylk_6dLe7vzqsZk6xjO-QzBh1a5wyR2pTa7RykBYk_KYouCEtYabozt-LDhuU2NrY7Iz8FjywwFBOU_5bVY7RUxuFAPgsN-5QwXA-w4YkZG7CLH6ZwrD4WndqqtZu3Aoiy4lsKUMtRX",
  },
  {
    text: "Smooth, transparent, and remarkably high-end. Ownest doesn't just provide loans — they build long-term partnerships you can actually rely on.",
    name: "Elena Rodriguez",
    role: "Tech Entrepreneur",
    rating: 5,
    highlight: false,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvbcy8B5mEUao7l7_5qYiwx84toZryprW7x61vV7dPqF21ovQwuXXOBUf-X1COrusMGJga3Bfyf_WqJbma7-oAdwLg5oPOplsi1FmhNzKe1j_yRkWw_0sFFs-RPEcV_EkmBdj3dEvHBHxxIE4s3V3MyuJAsGvX3t_esR2fhqG8Y55SFfyLkZJsFjfMoTcIs7B8bHAucrfup6U34sEuHCjwYUth1_1EO5qgGaoWKYkNeth1LOPrSXCx5M85UNCH0OLUoSoCDIEV05Uq",
  },
  {
    text: "The best asset financing experience I've had in 20 years of investing. The calculator was pinpoint accurate and the process was seamless.",
    name: "David Sterling",
    role: "Capital Investor",
    rating: 5,
    highlight: false,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAETLbYJNaM1jFm090NW158yXuRzxMQUheSTv-p4DhpEh5CbkQuwtqdMbTn6TPF6BypvpRS_UOrMKNJPGAq0YnuRmyq2pwnw4xToAOanlnOGvVNSgfWZ27iVi2kawuv4Xvnu59auVrmKOmL9ajWNqhIlPRbahmrQSDVzekSK306dSbryvw_tXMcNWypN0_vPgKpkT-1wIM7FuSFBA7kQL8ZLJMRdeW1v2634IHOpfeuifVZbJQPrCRX0ahHaQUFtRt8BPUYS6lfiMZZ",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  return (
    <section className="py-14 bg-gray-50/60 dark:bg-black/20 transition-colors relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-3">
              <Star className="w-3 h-3 fill-primary" />
              Client Stories
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              Shared <span className="text-primary">Success.</span>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Voices from our community of investors & homeowners.
            </p>
          </div>

          {/* Nav arrows */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 hover:bg-white dark:hover:bg-white/10 hover:text-primary hover:border-primary/30 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 hover:bg-white dark:hover:bg-white/10 hover:text-primary hover:border-primary/30 transition-all"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((item, i) => {
            const isActive = i === active;
            return (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`relative rounded-2xl p-5 border cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "bg-white dark:bg-[#2a1e15] border-primary/30 shadow-xl shadow-primary/10 -translate-y-1"
                    : "bg-white/60 dark:bg-white/3 border-gray-100 dark:border-white/8 hover:border-primary/20 hover:bg-white dark:hover:bg-white/5"
                }`}
              >
                {/* Accent glow on active */}
                {isActive && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none -z-0" />
                )}

                <div className="relative z-10">
                  {/* Quote icon + stars */}
                  <div className="flex items-start justify-between mb-3">
                    <Quote className="w-7 h-7 text-primary/25 fill-primary/15 flex-shrink-0" />
                    <div className="flex gap-0.5">
                      {Array.from({ length: item.rating }).map((_, s) => (
                        <Star
                          key={s}
                          className="w-3 h-3 text-primary fill-primary"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    "{item.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className={`w-9 h-9 rounded-full object-cover ring-2 transition-all ${
                        isActive
                          ? "ring-primary/40"
                          : "ring-transparent grayscale"
                      }`}
                    />
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white leading-none mb-0.5">
                        {item.name}
                      </p>
                      <span className="inline-block text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-white/8 text-gray-400">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile dots */}
        <div className="flex sm:hidden justify-center gap-1.5 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all ${
                i === active
                  ? "w-5 h-1.5 bg-primary"
                  : "w-1.5 h-1.5 bg-gray-300 dark:bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
