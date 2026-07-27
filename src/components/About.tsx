"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-50 dark:bg-neutral-900/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Driven by logic. <br className="hidden md:block" /> Defined by design.</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                My background in Computer Science and Mathematics fundamentally shapes how I approach design. I view visual challenges as puzzles to be solved strategically, ensuring every decision has a clear rationale behind it.
              </p>
              <p>
                As a self-taught designer, my journey is a testament to my curiosity and dedication. I have honed my craft through continuous learning, moving from conceptual explorations to delivering impactful visual identities.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-12"
          >
            {/* Experience */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary"></span>
                Experience
              </h3>
              <div className="bg-background border border-border p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h4 className="text-lg font-bold">Graphic Design Intern</h4>
                  <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">Mar 2026 - Apr 2026</span>
                </div>
                <p className="font-medium mb-4 text-primary">Codec Technologies Pvt. Ltd.</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-neutral-400 shrink-0 mt-0.5" />
                    <span>Completed structured training in branding, graphic design, and visual communication.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-neutral-400 shrink-0 mt-0.5" />
                    <span>Designed branding concepts, social media creatives, and marketing assets through practical assignments.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-neutral-400 shrink-0 mt-0.5" />
                    <span>Strengthened skills in Adobe Illustrator, Photoshop, Figma, typography, layout design, and visual storytelling through project-based learning.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Toolkit */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary"></span>
                Toolkit & Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Adobe Illustrator", "Adobe Photoshop", "Figma", "Canva", "Brand Identity", "UI/UX Design", "Packaging", "Visual Branding"].map((skill) => (
                  <span key={skill} className="px-5 py-2.5 bg-background border border-border rounded-full text-sm font-medium hover:border-primary transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
