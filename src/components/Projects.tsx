"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Lavender Lily",
    tag: "Client Project | Brand Identity & Packaging",
    description: "A premium, modern artisan bakery brand balancing elegance with warmth. Delivered complete visual identity, packaging, and social media templates.",
    image: "/images/lavender-lily/main-logo.png",
    color: "from-[#e4dcf1] to-[#f4f0fa]",
    darkColor: "dark:from-[#4b3e63] dark:to-[#2d253b]",
  },
  {
    title: "Pulse Fit",
    tag: "Self-Initiated | Brand Identity",
    description: "A bold fitness brand identity built around strength, focus, and a unique 'P' heartbeat mark symbolizing cardiovascular vitality.",
    image: "/images/pulse-fit/logo-alt-color.jpg",
    color: "from-[#e6ffed] to-[#f0fff4]",
    darkColor: "dark:from-[#1b4329] dark:to-[#0f2a18]",
  },
  {
    title: "Flowy",
    tag: "Self-Initiated | Brand Identity & UI/UX",
    description: "A cohesive digital ecosystem and mobile app interface for a calm, minimal wellness brand focusing on mindfulness and balance.",
    image: "/images/flowy/final-logo.png",
    color: "from-[#e6fff2] to-[#f5fffa]",
    darkColor: "dark:from-[#214c38] dark:to-[#133022]",
  },
  {
    title: "Poster Explorations",
    tag: "Personal & Professional | Digital Art & Poster Design",
    description: "A curated collection of professional promotional designs and passion projects exploring visual composition and typography.",
    image: "/images/my-posters/poster-porsche.png",
    color: "from-[#f3e7e9] to-[#e3eeff]",
    darkColor: "dark:from-[#2a1b1f] dark:to-[#141d29]",
  }
]

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Selected Work</h2>
        <p className="text-muted-foreground text-lg max-w-2xl">A collection of brand identities, packaging, and digital experiences crafted with intention.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const slug = project.title.toLowerCase().replace(/\s+/g, '-');
          return (
          <Link href={`/projects/${slug}`} key={project.title} className="group cursor-pointer block transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl rounded-2xl p-4 -m-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
            <div className={`w-full aspect-[4/3] rounded-2xl mb-6 bg-gradient-to-br ${project.color} ${project.darkColor} overflow-hidden relative border border-border/50 flex items-center justify-center`}>
               <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority={index < 2} />
               <div className="absolute top-4 right-4 bg-white dark:bg-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:-translate-y-1 group-hover:translate-x-1 shadow-sm z-10">
                  <ArrowUpRight className="h-5 w-5 text-primary" />
               </div>
            </div>
            
            <div>
              <p className="text-sm font-semibold tracking-wide text-muted-foreground mb-2 uppercase">{project.tag}</p>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
            </motion.div>
          </Link>
          )
        })}
      </div>
    </section>
  )
}
