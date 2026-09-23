"use client";

import React, { useState } from "react";
import { Star, Quote, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import type { GoogleReviewItem } from "@/lib/googleReviews";

interface TestimonialsProps {
  reviews?: GoogleReviewItem[];
}

const DEFAULT_FALLBACK: GoogleReviewItem[] = [
  {
    authorName: "Davinder Attri",
    source: "google",
    score: 5,
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocLkq758tgjoGVXASo1qi9P2cjP_42wAZR9_y3DFs5Q8TBg3OQ=s120-c-rp-mo-br100",
    content:
      "Ibban from Ownest Finance was great to deal with. He explained the home loan process clearly, kept me updated and got me a really good interest rate for my home loan. Would definitely recommend him.",
    mediaUrl: null,
    authorInitials: "DA",
    publishedAt: "2026-08-02",
    relativeDate: "Verified Google Review",
    sourceUrl:
      "https://www.google.com/maps/place/Ownest+Finance/@-33.8688,151.2093,12z/data=!4m8!3m7!1s0xae39810cb73a6bc1:0x37827649c57a93d4!8m2!3d-33.8688!4d151.2093!9m1!1b1",
  },
  {
    authorName: "Tania Kashyap",
    source: "google",
    score: 5,
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocIYTfRHHg483Lg5igp73oX5tn4v8zTCUw65qzxsmEg6N7AKfw=s120-c-rp-mo-br100",
    content:
      "Highly recommend Ownest Finance. Quick approval. Cheaper interest rate than dealership on my car loan. Very happy with the service 👍🏻",
    mediaUrl: null,
    authorInitials: "TK",
    publishedAt: "2026-08-06",
    relativeDate: "Verified Google Review",
    sourceUrl:
      "https://www.google.com/maps/place/Ownest+Finance/@-33.8688,151.2093,12z/data=!4m8!3m7!1s0xae39810cb73a6bc1:0x37827649c57a93d4!8m2!3d-33.8688!4d151.2093!9m1!1b1",
  },
  {
    authorName: "Ekamjot Singh",
    source: "google",
    score: 5,
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocLF3Cy8IN0w3HS_KzrJEOSqy4JO3Ap4y-1gFw6vZwvFoZwmPQ=s120-c-rp-mo-ba12-br100",
    content:
      "Got my car loan approved without any hassle! The team provided excellent service and secured one of the most competitive rates in the market, despite my visa conditions. Highly recommended!",
    mediaUrl: null,
    authorInitials: "ES",
    publishedAt: "2026-08-06",
    relativeDate: "Verified Google Review",
    sourceUrl:
      "https://www.google.com/maps/place/Ownest+Finance/@-33.8688,151.2093,12z/data=!4m8!3m7!1s0xae39810cb73a6bc1:0x37827649c57a93d4!8m2!3d-33.8688!4d151.2093!9m1!1b1",
  },
  {
    authorName: "Sid Mahajan",
    source: "google",
    score: 5,
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjUvop_giFNBRn5HPQ6-j_4tNGL3nOVUgSAX71x-neTA8X5EoJKH=s120-c-rp-mo-ba12-br100",
    content:
      "Excellent communication and great support throughout by Ibban. Highly recommend!",
    mediaUrl: null,
    authorInitials: "SM",
    publishedAt: "2026-08-02",
    relativeDate: "Verified Google Review",
    sourceUrl:
      "https://www.google.com/maps/place/Ownest+Finance/@-33.8688,151.2093,12z/data=!4m8!3m7!1s0xae39810cb73a6bc1:0x37827649c57a93d4!8m2!3d-33.8688!4d151.2093!9m1!1b1",
  },
];

export default function Testimonials({ reviews }: TestimonialsProps) {
  const items = reviews && reviews.length > 0 ? reviews : DEFAULT_FALLBACK;
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + items.length) % items.length);
  const next = () => setActive((a) => (a + 1) % items.length);

  return (
    <section className="py-16 bg-slate-50/70 dark:bg-black/30 transition-colors relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 shadow-sm text-xs font-bold mb-3">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="text-neutral-900 dark:text-white font-extrabold">
                5.0 Rating
              </span>
              <span className="text-neutral-400 font-medium">on Google</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white">
              Verified <span className="text-primary">Google Reviews.</span>
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1.5 max-w-lg">
              Real feedback from clients who trusted Ownest Finance with their
              home loans and asset financing.
            </p>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            <a
              href="https://g.page/r/CdSTesVJdoI3EAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors mr-2"
            >
              Write a Review <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-10 h-10 rounded-xl border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-white dark:hover:bg-white/10 hover:text-primary hover:border-primary/30 transition-all bg-white dark:bg-neutral-900 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="w-10 h-10 rounded-xl border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-white dark:hover:bg-white/10 hover:text-primary hover:border-primary/30 transition-all bg-white dark:bg-neutral-900 shadow-sm"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`relative rounded-3xl p-6 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? "bg-white dark:bg-neutral-900 border-primary/40 shadow-xl shadow-primary/10 -translate-y-1.5 ring-2 ring-primary/20"
                    : "bg-white/80 dark:bg-neutral-900/60 border-neutral-200/80 dark:border-white/5 hover:border-primary/30 hover:bg-white dark:hover:bg-neutral-900 hover:-translate-y-0.5"
                }`}
              >
                <div>
                  {/* Rating + Google Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-amber-400">
                      {Array.from({ length: item.score || 5 }).map((_, s) => (
                        <Star
                          key={s}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-neutral-500 dark:text-neutral-400 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10">
                      Google
                    </span>
                  </div>

                  {/* Text */}
                  <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed mb-6">
                    "{item.content}"
                  </p>
                </div>

                {/* Author */}
                <div className="pt-4 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {item.authorAvatarUrl ? (
                      <img
                        src={item.authorAvatarUrl}
                        alt={item.authorName}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center ring-2 ring-primary/20">
                        {item.authorInitials || item.authorName[0]}
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">
                        {item.authorName}
                      </p>
                      <span className="text-[11px] text-neutral-400 font-medium">
                        {item.relativeDate || "Verified Client"}
                      </span>
                    </div>
                  </div>

                  {item.sourceUrl && (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-primary transition-colors p-1"
                      title="View on Google Maps"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile dots */}
        <div className="flex justify-center gap-1.5 mt-8 md:hidden">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all ${
                i === active
                  ? "w-6 h-2 bg-primary"
                  : "w-2 h-2 bg-neutral-300 dark:bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
