"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 text-navy-900 transition-colors hover:bg-navy-900/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
    >
      {mounted && theme === "dark" ? (
        <Sun className="h-[18px] w-[18px]" />
      ) : (
        <Moon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
