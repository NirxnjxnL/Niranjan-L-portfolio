"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Layers, Eye, X, ChevronLeft, ChevronRight, Calendar, Compass, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface MediaItem {
  title: string
  category: string
  format: string
  description: string
  image: string
}

const festiveCreatives: MediaItem[] = [
  {
    title: "Ayudha Pooja — \"Clock out, Check in\"",
    category: "Festive Campaigns",
    format: "Feed Post (4:5)",
    description: "Centred around the headline \"This Ayudha pooja. Clock out, Check in.\", showing a person on a laptop with a confirmed resort booking, connecting the holiday tool-down tradition with a weekend getaway.",
    image: "/images/le-miami/festive/ayudha-pooja-post.webp",
  },
  {
    title: "Ayudha Pooja — \"Recharge, Refresh, Recreate\"",
    category: "Festive Campaigns",
    format: "Story Creative (9:16)",
    description: "Vertical story creative with the copy \"This Ayudha pooja, celebrate by giving yourself the rest you deserve\", structured with a clear festive call to action.",
    image: "/images/le-miami/festive/ayudha-pooja-story.webp",
  },
  {
    title: "Diwali Campaign — Family Group Chat Concept",
    category: "Festive Campaigns",
    format: "Story / Feed Creative",
    description: "Conversational creative framed as an 8-member family WhatsApp group chat where members discuss villa, pool, and food preferences before choosing Le Miami for Diwali.",
    image: "/images/le-miami/festive/diwali-post-1.webp",
  },
  {
    title: "Diwali Campaign — Family Reunion",
    category: "Festive Campaigns",
    format: "Festive Announcement Creative",
    description: "Festive creative themed \"Make this Diwali a Family Reunion — We handle hosting, so you can catch up\", highlighting private villa stays for family gatherings.",
    image: "/images/le-miami/festive/diwali-post-2.webp",
  },
]

const interactiveCreatives: MediaItem[] = [
  {
    title: "Spot the Difference — Slide 1: Challenge Hook",
    category: "Promotional & Interactive Creatives",
    format: "Multi-Slide Carousel (Slide 1)",
    description: "Opening slide with the prompt: \"Spot the differences! There are 8 hiding in here. How many can you find?\" prompting followers to swipe.",
    image: "/images/le-miami/promotional/spot-the-difference-1.webp",
  },
  {
    title: "Spot the Difference — Slide 2: Visual Puzzle",
    category: "Promotional & Interactive Creatives",
    format: "Multi-Slide Carousel (Slide 2)",
    description: "Curated resort pool scene with 8 subtle differences edited into the composition with \"Swipe To Spot\".",
    image: "/images/le-miami/promotional/spot-the-difference-2.webp",
  },
  {
    title: "Spot the Difference — Slide 3: Comment Prompt",
    category: "Promotional & Interactive Creatives",
    format: "Multi-Slide Carousel (Slide 3)",
    description: "Closing carousel slide prompting users to \"Comment The Answer\" to drive comment interaction.",
    image: "/images/le-miami/promotional/spot-the-difference-3.webp",
  },
  {
    title: "Swimming Pool Leisure — \"Little Splashes. Big Family Memories\"",
    category: "Promotional & Interactive Creatives",
    format: "Static Promotional Post",
    description: "Resort lifestyle promotional creative featuring children enjoying the swimming pool with the copy \"Where kids have fun and families make memories together\".",
    image: "/images/le-miami/promotional/pool-family-post.webp",
  },
]

const allItems = [...festiveCreatives, ...interactiveCreatives]

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
}

export default function LeMiamiLayout() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (item: MediaItem) => {
    const idx = allItems.findIndex((i) => i.image === item.image)
    if (idx !== -1) setLightboxIndex(idx)
  }

  const closeLightbox = () => setLightboxIndex(null)

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 selection:bg-amber-500/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/#work"
            className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
              Agency Internship
            </span>
            <p className="font-bold tracking-tight">Bumbblebee Branding Company</p>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-20 overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/20 via-background to-background" />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-xs font-medium uppercase tracking-wider text-muted-foreground mb-5">
              <Briefcase className="w-3.5 h-3.5 text-amber-500" />
              Graphic Design Internship
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-3">
              Bumbblebee Branding Company
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Graphic Design Internship
            </p>
          </motion.div>

          {/* Project Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-border mb-12 text-sm"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Company</p>
              <p className="font-medium">Bumbblebee Branding Company</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Client Project</p>
              <p className="font-medium">Le Miami Resort</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Duration</p>
              <p className="font-medium">October 2026 – November 2026</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Deliverables</p>
              <p className="font-medium">Social Media Creatives & Concepts</p>
            </div>
          </motion.div>

          {/* Hero Branding Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden border border-border bg-neutral-900 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 p-8 md:p-12 space-y-5">
                <span className="text-xs uppercase font-bold tracking-widest text-amber-500">
                  Agency Internship Experience
                </span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                  Social Media Design for Le Miami Resort
                </h2>
                <p className="text-neutral-400 leading-relaxed text-base">
                  During my internship at Bumbblebee Branding Company, I worked on social media creatives and campaign concepts for Le Miami Resort, developing festive posts, promotional layouts, and interactive engagement formats.
                </p>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/15">
                    Ayudha Pooja & Diwali
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/15">
                    Interactive Puzzle Carousels
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/15">
                    Leisure Promotions
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5 relative aspect-[4/3] w-full bg-white overflow-hidden flex items-center justify-center p-6">
                <Image
                  src="/images/bumbblebee/cover.webp"
                  alt="Bumbblebee Branding Company Official Branding"
                  fill
                  className="object-contain p-6"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <motion.div {...fadeIn} className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Internship Overview</h2>
          <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-3">
            <p>
              During my graphic design internship at <strong>Bumbblebee Branding Company</strong> (October 2026 – November 2026), I worked on social media design for <strong>Le Miami Resort</strong>.
            </p>
            <p>
              My work included designing festive social media posts for Ayudha Pooja and Diwali, static promotional creatives, an interactive &ldquo;Spot the Difference&rdquo; carousel, a swimming pool-focused resort post, and developing additional campaign concepts.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION HEADER: SELECTED WORK — LE MIAMI RESORT */}
      <section className="pt-8 pb-4 max-w-7xl mx-auto px-6 border-t border-border">
        <motion.div {...fadeIn}>
          <span className="text-xs uppercase font-bold tracking-widest text-amber-500 mb-2 block">
            Internship Deliverables
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Selected Work — Le Miami Resort
          </h2>
          <p className="text-muted-foreground text-base mt-2 max-w-2xl">
            Social media creatives and campaign directions developed for Le Miami Resort, neatly organised by campaign format.
          </p>
        </motion.div>
      </section>

      {/* CATEGORY 1: FESTIVE CAMPAIGNS */}
      <section className="py-14 border-t border-border bg-neutral-50/50 dark:bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider mb-2.5">
              <Calendar className="w-3.5 h-3.5" />
              Completed Creatives
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">Festive Campaigns</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Festive designs for Ayudha Pooja and Diwali, connecting holiday occasions with resort getaways and family reunions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {festiveCreatives.map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-3xl overflow-hidden border border-border bg-card hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div
                  className="relative aspect-[4/5] w-full overflow-hidden bg-muted cursor-pointer"
                  onClick={() => openLightbox(item)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5" />
                    Preview
                  </div>
                </div>
                <div className="p-6 border-t border-border space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                    {item.format}
                  </span>
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY 2: PROMOTIONAL & INTERACTIVE CREATIVES */}
      <section className="py-14 max-w-7xl mx-auto px-6 border-t border-border">
        <motion.div {...fadeIn} className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Compass className="w-3.5 h-3.5" />
            Audience Engagement
          </div>
          <h3 className="text-2xl font-bold tracking-tight mb-2">
            Promotional & Interactive Creatives
          </h3>
          <p className="text-muted-foreground text-sm md:text-base">
            Static promotional posts and interactive puzzle formats created to encourage audience participation.
          </p>
        </motion.div>

        {/* Spot the Difference Carousel Showcase */}
        <div className="mb-14 rounded-3xl border border-border p-6 md:p-8 bg-card">
          <div className="mb-6 pb-5 border-b border-border">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-500">
              Interactive Carousel
            </span>
            <h4 className="text-xl md:text-2xl font-bold mt-1">Interactive &ldquo;Spot the Difference&rdquo; Post</h4>
            <p className="text-sm text-muted-foreground mt-1.5 max-w-2xl">
              A 3-slide carousel challenging viewers to find 8 differences hidden within a curated resort pool photograph, prompting users to swipe and comment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interactiveCreatives.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(item)}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-border bg-background hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                  </div>
                </div>
                <div className="p-4 border-t border-border">
                  <p className="text-xs font-semibold text-primary mb-1">Slide 0{idx + 1}</p>
                  <h5 className="font-bold text-sm">{item.title.split("—")[1]?.trim() || item.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Swimming Pool Promotional Post */}
        <div className="rounded-3xl border border-border p-6 md:p-8 bg-neutral-50 dark:bg-neutral-900/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-border bg-card">
              <Image
                src="/images/le-miami/promotional/pool-family-post.webp"
                alt="Swimming Pool Leisure Resort Post"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-4"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-primary">
                Static Promotional Creative
              </span>
              <h4 className="text-xl md:text-2xl font-bold">
                Swimming Pool & Family Leisure Post
              </h4>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Highlights the resort’s signature pool amenity with the copy &ldquo;Little Splashes. Big Family Memories. Where kids have fun and families make memories together.&rdquo; Designed with clean text hierarchy and website booking details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY 3: CREATIVE EXPLORATIONS & ALTERNATIVE DIRECTIONS */}
      <section className="py-14 border-t border-border bg-neutral-50/50 dark:bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5">
              <Layers className="w-3.5 h-3.5" />
              Concepts & Explorations
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">Creative Explorations</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Additional campaign concepts and design ideas developed during the internship exploring different layout and engagement directions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }} className="p-6 md:p-8 rounded-2xl border border-border bg-card">
              <span className="text-xs uppercase font-bold tracking-widest text-primary mb-2 block">Concept Direction 01</span>
              <h4 className="text-lg font-bold mb-2">Conversational UI Storytelling</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Testing WhatsApp group chat mockups to reflect real family vacation planning discussions in an authentic, relatable social media format.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }} className="p-6 md:p-8 rounded-2xl border border-border bg-card">
              <span className="text-xs uppercase font-bold tracking-widest text-primary mb-2 block">Concept Direction 02</span>
              <h4 className="text-lg font-bold mb-2">Gamified Content Formats</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Prototyping multi-slide &ldquo;Spot the Difference&rdquo; puzzles to transform standard resort photography into interactive participation posts.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.3 }} className="p-6 md:p-8 rounded-2xl border border-border bg-card">
              <span className="text-xs uppercase font-bold tracking-widest text-primary mb-2 block">Concept Direction 03</span>
              <h4 className="text-lg font-bold mb-2">Multi-Format Layout Adaptation</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Structuring concepts across portrait feed posts (4:5), full-screen vertical stories (9:16), and carousel slides for social channels.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6 border-t border-border">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:bg-primary/90 transition-all shadow-sm text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Projects
        </Link>
        <p className="text-xs text-muted-foreground mt-5">
          Tools Used: Adobe Photoshop • Adobe Illustrator • Canva
        </p>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8"
          >
            <div
              className="flex items-center justify-between text-white z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <p className="text-xs text-neutral-400 font-medium">
                  {allItems[lightboxIndex].category}
                </p>
                <h3 className="text-lg md:text-xl font-bold">
                  {allItems[lightboxIndex].title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div
              className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxIndex((lightboxIndex - 1 + allItems.length) % allItems.length)}
                className="absolute left-2 md:left-6 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 transition-colors z-20"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="relative w-full max-w-4xl aspect-[4/5] max-h-[82vh] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={allItems[lightboxIndex].image}
                  alt={allItems[lightboxIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <button
                onClick={() => setLightboxIndex((lightboxIndex + 1) % allItems.length)}
                className="absolute right-2 md:right-6 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 transition-colors z-20"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div
              className="text-center text-xs text-neutral-400 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              Click outside or press X to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
