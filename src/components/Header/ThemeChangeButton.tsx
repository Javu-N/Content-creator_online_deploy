"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeChangeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <button onClick={handleThemeChange}>
          {theme === "dark" ? (
            <MoonIcon className="hover:cursor-pointer text-yellow-300 font-" />
          ) : (
            <SunIcon className="hover:cursor-pointer text-red-500" />
          )}
        </button>
      )}
    </>
  );
};

export default ThemeChangeButton;
