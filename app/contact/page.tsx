"use client";

import React, { useState } from "react";
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
  CheckCircle2,
  Loader2,
  AlertCircle,
  MessageCircle,
} from "lucide-react";
import { submitContactForm } from "./actions";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

const INTEREST_OPTIONS = [
  "Wealth Planning",
  "Investment Management",
  "Tax Strategy",
  "Philanthropy",
  "Real Estate Advisory",
  "Estate Planning",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "Wealth Planning",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          interest: "Wealth Planning",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  const inputClass = (name: string) =>
    `w-full px-4 py-3 bg-white/70 dark:bg-white/5 border rounded-xl transition-all duration-200 placeholder:text-brown/30 dark:placeholder:text-white/20 text-brown dark:text-white outline-none ${
      focused === name
        ? "border-primary ring-2 ring-primary/20 shadow-sm"
        : "border-brown/15 dark:border-white/10 hover:border-brown/30 dark:hover:border-white/20"
    }`;

  return (
    <main className="relative min-h-screen pt-20 flex flex-col items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark transition-colors">
      {/* Background gradient blobs */}
      <div className="fixed top-1/4 -right-32 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px] -z-10" />
      <div className="fixed -bottom-20 -left-20 w-[600px] h-[600px] bg-brown/5 dark:bg-white/3 rounded-full blur-[160px] -z-10" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="relative z-10 w-full max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brown dark:text-white mb-5 tracking-tight">
            Connect with <span className="text-primary italic">Excellence</span>
          </h1>
          <p className="text-lg text-brown/55 dark:text-white/55 max-w-xl mx-auto leading-relaxed">
            Our advisors are available for exclusive consultations. Reach out to
            discuss how we can secure your financial legacy.
          </p>
        </div>

        {/* Main Card */}
        <Card
          variant="glass"
          className="border border-white/40 dark:border-white/5 shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 p-0 bg-white/75 dark:bg-black/50 backdrop-blur-xl"
          hoverEffect={false}
        >
          {/* Form Section */}
          <div className="lg:col-span-7 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-brown dark:text-white mb-8 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-primary inline-block" />
              Send an Inquiry
            </h2>

            {/* Success state */}
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-brown dark:text-white">
                  Message Sent!
                </h3>
                <p className="text-brown/60 dark:text-white/60 max-w-sm leading-relaxed">
                  Thank you for reaching out. Our team will contact you within
                  24 hours for an exclusive consultation.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => setStatus("idle")}
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Banner */}
                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl text-red-700 dark:text-red-400 text-sm animate-in fade-in duration-300">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>
                      Something went wrong. Please try again or contact us
                      directly.
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-brown/45 dark:text-white/45 ml-1">
                      Full Name
                    </label>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onFocus={() => setFocused("fullName")}
                      onBlur={() => setFocused(null)}
                      className={inputClass("fullName")}
                      placeholder="Jonathan Doe"
                      type="text"
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-brown/45 dark:text-white/45 ml-1">
                      Work Email
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={inputClass("email")}
                      placeholder="j.doe@company.com"
                      type="email"
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-brown/45 dark:text-white/45 ml-1">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      className={inputClass("phone")}
                      placeholder="+91 98765 43210"
                      type="tel"
                      disabled={status === "loading"}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-brown/45 dark:text-white/45 ml-1">
                      Interest Area
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      onFocus={() => setFocused("interest")}
                      onBlur={() => setFocused(null)}
                      className={inputClass("interest") + " cursor-pointer"}
                      disabled={status === "loading"}
                    >
                      {INTEREST_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-brown/45 dark:text-white/45 ml-1">
                    How can we assist you?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("message") + " resize-none"}
                    placeholder="Tell us about your financial goals and how we can help..."
                    rows={4}
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Button
                    type="submit"
                    className="w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <span>Request Consultation</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-brown/40 dark:text-white/35 leading-relaxed">
                    We respect your privacy. Your information is never shared.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 bg-brown/[0.04] dark:bg-white/[0.03] p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-brown/10 dark:border-white/5">
            <h2 className="text-xl font-bold text-brown dark:text-white mb-10 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-primary inline-block" />
              Direct Channels
            </h2>

            <div className="space-y-8">
              {/* Office */}
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white dark:bg-white/8 border border-brown/8 dark:border-white/8 flex items-center justify-center shadow-sm group-hover:bg-primary/10 transition-colors">
                  <MapPin className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                    Office
                  </p>
                  <p className="text-brown dark:text-white font-semibold leading-snug">
                    Sydeny, NSW
                    <br />
                    Australia
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white dark:bg-white/8 border border-brown/8 dark:border-white/8 flex items-center justify-center shadow-sm group-hover:bg-primary/10 transition-colors">
                  <Phone className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                    Inquiry Line
                  </p>
                  <p className="text-brown dark:text-white font-semibold">
                    +61 414 060 000
                  </p>
                  <p className="text-xs text-brown/45 dark:text-white/45 mt-1">
                    Mon – Sat: 9am – 6pm AEST
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white dark:bg-white/8 border border-brown/8 dark:border-white/8 flex items-center justify-center shadow-sm group-hover:bg-primary/10 transition-colors">
                  <Mail className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                    Email
                  </p>
                  <p className="text-brown dark:text-white font-semibold break-all">
                    ownestfinance@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Quick response badge */}
            <div className="mt-10 p-4 rounded-xl bg-primary/8 dark:bg-primary/10 border border-primary/15">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  Typically responds in &lt; 24 hrs
                </span>
              </div>
              <p className="text-xs text-brown/55 dark:text-white/55 ml-4">
                All inquiries are treated with the utmost confidentiality.
              </p>
            </div>

            {/* Social */}
            <div className="mt-10 pt-8 border-t border-brown/8 dark:border-white/8">
              <p className="text-xs font-bold text-brown/45 dark:text-white/45 mb-4 uppercase tracking-widest">
                Follow Us
              </p>
              <div className="flex space-x-3">
                {[
                  {
                    Icon: MessageCircle,
                    label: "Whatsapp",
                    href: "https://wa.me/61414060000",
                  },
                  {
                    Icon: Instagram,
                    label: "Instagram",
                    href: "https://www.instagram.com/ownestfinance/",
                  },
                ].map(({ Icon, label, href }) => (
                  <Link
                    key={label}
                    aria-label={label}
                    href={href}
                    className="w-10 h-10 rounded-xl border border-brown/10 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 group"
                  >
                    <Icon className="w-4 h-4 text-brown/60 dark:text-white/60 group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
