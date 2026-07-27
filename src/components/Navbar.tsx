"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function Navbar() {
  const { setTheme, theme } = useTheme()

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-white/20 dark:border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">Niranjan.L</a>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#work" className="hover:text-neutral-500 transition-colors">Work</a>
            <a href="#about" className="hover:text-neutral-500 transition-colors">About</a>
            <a href="#contact" className="hover:text-neutral-500 transition-colors">Contact</a>
          </div>
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute top-[1.2rem] h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
        </div>
      </div>
    </nav>
  )
}
