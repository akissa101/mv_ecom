"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, SunMoon } from "lucide-react";
import Image from "next/image";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let src: React.ReactNode;

  return (
    <button
      className="swap swap-rotate border p-1 bg-slate-400 dark:bg-slate-950 rounded-full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <Moon fill="" /> : <SunMoon />}
    </button>
  );
};

export default ThemeToggle;
