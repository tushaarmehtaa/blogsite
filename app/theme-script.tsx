"use client";

import { useEffect } from "react";
import React from "react";

export function ThemeScript(): React.ReactNode {
  useEffect(() => {
    // Check for dark mode preference
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.head
        .querySelector("meta[name=theme-color]")
        ?.setAttribute("content", "#1c1c1c");
    } else {
      document.documentElement.classList.remove("dark");
      document.head
        .querySelector("meta[name=theme-color]")
        ?.setAttribute("content", "#fcfcfc");
    }
  }, []);

  return null;
}
