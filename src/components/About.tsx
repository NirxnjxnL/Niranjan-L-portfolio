"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-50 dark:bg-neutral-900/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Driven by logic. <br className="hidden md:block" /> Defined by design.</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                I&apos;m a graphic designer based in Bengaluru, working across brand identity, packaging, social media design, and digital content. My experience includes client branding projects, freelance YouTube thumbnail design, video editing, and social media creatives developed during a branding agency internship.
              </p>
              <p>
                I enjoy working with typography, composition, and visual storytelling to create purposeful visual communication. My background in Computer Science and Mathematics fundamentally shapes how I approach design—viewing visual challenges as puzzles to be solved strategically.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Experience */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary"></span>
                Experience
              </h3>
              
              <div className="space-y-6">
                {/* Mythili Miracle */}
                <div className="bg-background border border-border p-6 md:p-8 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                    <h4 className="text-lg font-bold">YouTube Thumbnail Designer &amp; Video Editor</h4>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">Oct 2026 – Present</span>
                  </div>
                  <p className="font-medium mb-4 text-primary text-sm">Mythili Miracle (Kannada Astrology Channel)</p>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                      <span>Design thumbnails for every video uploaded to the channel, using Photoshop and Canva.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                      <span>Keep a consistent look across the 12 zodiac signs with set typography, colours and zodiac-specific graphics.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                      <span>Edit videos for the channel using VN Video Editor.</span>
                    </li>
                  </ul>
                </div>

                {/* Bumbblebee Branding Company */}
                <div className="bg-background border border-border p-6 md:p-8 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                    <h4 className="text-lg font-bold">Graphic Design Intern</h4>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">Oct 2026 – Nov 2026</span>
                  </div>
                  <p className="font-medium mb-4 text-primary text-sm">Bumbblebee Branding Company, Chennai</p>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                      <span>Designed Ayudha Pooja and Diwali festive social media posts for Le Miami Resort.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                      <span>Made static promotional creatives, including an interactive &ldquo;Spot the Difference&rdquo; post and a swimming pool-focused resort post.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                      <span>Developed additional social media content concepts and campaign ideas for Le Miami Resort.</span>
                    </li>
                  </ul>
                </div>

                {/* Codec Technologies */}
                <div className="bg-background border border-border p-6 md:p-8 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                    <h4 className="text-lg font-bold">Graphic Design Intern</h4>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">Mar 2026 – Apr 2026</span>
                  </div>
                  <p className="font-medium mb-4 text-primary text-sm">Codec Technologies Pvt. Ltd.</p>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                      <span>Trained in graphic design and branding through guided video lessons and practice exercises.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                      <span>Practised Illustrator, Photoshop and Figma through guided design assignments.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Toolkit & Skills */}
            <div className="space-y-5">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary"></span>
                Skills & Software
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-2.5">Design</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Branding",
                      "Typography",
                      "Layout Design",
                      "Packaging",
                      "Social Media Design",
                      "YouTube Thumbnails"
                    ].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:border-primary transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-2.5">Software</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Adobe Photoshop",
                      "Adobe Illustrator",
                      "Canva",
                      "VN Video Editor"
                    ].map((tool) => (
                      <span key={tool} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:border-primary transition-colors cursor-default">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-2.5">Currently Learning</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm font-medium cursor-default">
                      Figma
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
