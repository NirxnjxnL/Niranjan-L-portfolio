"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { categories } from "@/components/Projects"

export default function DesignAssignmentsPage() {
  const category = categories.find(c => c.title === "Design Assignments")

  if (!category) return null

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="mb-16 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{category.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{category.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.projects.map((project, index) => (
              <Link href={`/projects/${project.slug}`} key={project.title} className="group cursor-pointer block transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl rounded-2xl p-4 -m-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-full aspect-[4/3] rounded-2xl mb-6 bg-gradient-to-br ${project.color} ${project.darkColor} overflow-hidden relative border border-border/50 flex items-center justify-center`}>
                    {project.image ? (
                      <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    ) : (
                      <span className="text-muted-foreground font-medium uppercase tracking-widest text-sm text-black/40 dark:text-white/40">Coming Soon</span>
                    )}
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
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
