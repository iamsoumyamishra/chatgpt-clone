"use client"

import React, { useEffect, useState } from 'react'
import { MoonIcon, Sun, SunIcon } from 'lucide-react'

const ThemeToggle = ({ className }: { className: string }) => {

    type ThemeValues = "light" | "dark"

    const [theme, setTheme] = useState<ThemeValues>(() => {
        if (typeof window === "undefined") return "light";
        return (localStorage.getItem("data-theme") as ThemeValues) ?? "light";
    });

    useEffect(() => {
        if (localStorage) {
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("data-theme", theme)
        }
    }, [theme]);

    return (
            <button id='toggle-theme' onClick={() => {
                setTheme(theme == "dark" ? "light": "dark");
            }} className={className}>
                {theme == "dark" ? <MoonIcon />: <Sun />}
            </button>
    )
}

export default ThemeToggle
