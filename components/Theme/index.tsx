"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const container = document.documentElement;
    container.classList.remove("theme-light", "theme-dark");
    container.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <div
      className="shadow-md bg-white dark:bg-neutral-800 mt-1 px-2 py-2 cursor-pointer flex rounded-lg"
      placeholder="Change theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <button className="relative inline-flex justify-center items-center">
        <Sun
          size="18"
          className="transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0"
        />
        <Moon
          size="18"
          className="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100"
        />
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  );
}
