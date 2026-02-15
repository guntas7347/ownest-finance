
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

export default function Button({
    children,
    className = "",
    variant = "primary",
    size = "md",
    isLoading = false,
    disabled,
    ...props
}: ButtonProps) {
    const baseStyles = "font-bold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-orange-600 shadow-xl shadow-orange-500/20",
        secondary: "bg-white/10 backdrop-blur-md text-brown dark:text-white hover:bg-white/20 border border-white/10",
        outline: "bg-transparent border border-primary text-primary hover:bg-primary/10",
        ghost: "bg-transparent text-brown dark:text-white hover:bg-black/5 dark:hover:bg-white/10",
    };

    const sizes = {
        sm: "py-2 px-4 text-sm",
        md: "py-3 px-6 text-base",
        lg: "py-4 px-10 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled || isLoading ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
                }`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : null}
            {children}
        </button>
    );
}
