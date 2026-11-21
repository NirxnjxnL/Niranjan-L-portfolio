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
          Looking to add a dedicated designer to your team? Let&apos;s connect.
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I&apos;m looking for a full-time design role where I can contribute to branding, visual communication, and digital design.
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

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a 
            href="https://www.behance.net/niranjanl3" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2.5 px-6 py-3.5 bg-secondary text-secondary-foreground border border-border rounded-full font-medium hover:bg-secondary/80 hover:border-primary transition-all text-sm group"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.104 1.185.074 1.828h-8.814c.07 1.348 1.171 2.569 2.871 2.569 1.175 0 2.048-.485 2.507-1.228h3.186zm-5.174-5.404c-1.391 0-2.261.854-2.456 2.062h4.945c-.097-1.189-.968-2.062-2.489-2.062zm-13.552-6.596h5.864c3.414 0 5.094 1.63 5.094 4.093 0 1.536-.782 2.684-2.188 3.262 1.723.477 2.766 1.85 2.766 3.691 0 2.898-2.158 4.954-5.926 4.954h-5.61v-16zm3.176 6.551h2.247c1.365 0 2.296-.549 2.296-1.784 0-1.127-.852-1.688-2.176-1.688h-2.367v3.472zm0 6.368h2.477c1.551 0 2.592-.587 2.592-1.961 0-1.332-.977-1.924-2.529-1.924h-2.54v3.885z" />
            </svg>
            <span>Behance Profile</span>
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/niranjan-l-381b71394/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2.5 px-6 py-3.5 bg-secondary text-secondary-foreground border border-border rounded-full font-medium hover:bg-secondary/80 hover:border-primary transition-all text-sm group"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>LinkedIn Profile</span>
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
