"use client"

import { motion } from "framer-motion"
import { Mail, Phone, ExternalLink } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
          Looking to add a dedicated designer to your team? Let's connect.
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I am currently seeking full-time opportunities where I can contribute my skills, collaborate with great teams, and grow professionally.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="mailto:niranjanl.design@gmail.com" 
            className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-transform hover:scale-105 w-full md:w-auto justify-center"
          >
            <Mail className="h-5 w-5" />
            niranjanl.design@gmail.com
          </a>
          
          <a 
            href="tel:+918150922366" 
            className="flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground border border-border rounded-full font-medium hover:bg-secondary/80 transition-transform hover:scale-105 w-full md:w-auto justify-center"
          >
            <Phone className="h-5 w-5" />
            +91 81509 22366
          </a>
          

        </div>
      </motion.div>
    </section>
  )
}
