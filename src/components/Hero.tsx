"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-200/50 via-background to-background dark:from-neutral-800/50" />
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Designing brands with <span className="text-neutral-500">purpose</span>, <span className="text-neutral-500">clarity</span>, and personality.
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Hi, I'm <strong className="text-foreground font-semibold">Niranjan L</strong>, a Graphic and UI/UX Designer based in Bengaluru. I build visual identities that communicate clearly, solve real business problems, and leave a lasting impression.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#work" 
            className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all w-full sm:w-auto justify-center"
          >
            View Work
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="/resume.pdf" 
            download="Niranjan_L_Resume.pdf"
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-medium hover:bg-secondary/80 transition-all border border-border w-full sm:w-auto justify-center"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
