
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: "glass" | "solid";
    hoverEffect?: boolean;
}

export default function Card({
    children,
    className = "",
    variant = "glass",
    hoverEffect = true,
    ...props
}: CardProps) {
    const baseStyles = "rounded-3xl p-6 transition-all duration-300";

    const variants = {
        glass: "glass-card dark:bg-white/5 dark:border-white/10",
        solid: "bg-white dark:bg-gray-900 border border-brown/5 dark:border-white/5 shadow-lg",
    };

    const hoverStyles = hoverEffect
        ? "hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 hover:shadow-orange-500/10"
        : "";

    return (
        <div
            className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
