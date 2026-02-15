
'use client'

import { useTheme } from "@/lib/useTheme";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();



    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Moon className="w-5 h-5 text-brown dark:text-white" />
            ) : (
                <Sun className="w-5 h-5 text-brown dark:text-white" />
            )}
        </button>
    );
}
