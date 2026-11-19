"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
  Maximize2,
  Palette,
  Type,
  Layers,
  Sparkles,
  Info,
  Sliders,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface IPodSlide {
  id: number
  title: string
  headline: string
  subhead: string
  description: string
  image: string
}

const slides: IPodSlide[] = [
  {
    id: 1,
    title: "Introduction",
    headline: "Say hello to iPod.",
    subhead: "1,000 songs in your pocket.",
    description:
      "Opening hook showcasing the classic white 1st-generation Apple iPod and wired earphones, establishing the minimalist tone with generous negative space and the Apple mark.",
    image: "/images/ipod/slide-1.webp",
  },
  {
    id: 2,
    title: "The Click Wheel",
    headline: "Pure music. Zero distractions.",
    subhead: "Just you and your music.",
    description:
      "Macro focus on the iconic mechanical scroll wheel, celebrating tactile physical controls and effortless navigation without digital interruptions.",
    image: "/images/ipod/slide-2.webp",
  },
  {
    id: 3,
    title: "User Interface",
    headline: "No algorithms.",
    subhead: "Navigate your entire library with a beautifully minimal interface.",
    description:
      "Highlighting the nostalgic monochrome LCD screen and linear menu hierarchy—putting the listener in complete control of their curated music library.",
    image: "/images/ipod/slide-3.webp",
  },
  {
    id: 4,
    title: "The White Wire",
    headline: "The white wire.",
    subhead: "An instant icon. Delivering high-fidelity sound, wherever you go.",
    description:
      "Close-up of the signature white earbuds and gold-plated 3.5mm stereo jack that became a cultural symbol of portable music culture.",
    image: "/images/ipod/slide-4.webp",
  },
  {
    id: 5,
    title: "Industrial Design",
    headline: "Industrial elegance.",
    subhead: "Seamless stainless steel. Polished to a brilliant mirror finish.",
    description:
      "Back perspective showcasing the polished stainless steel casing, engraved 5GB storage capacity, and laser-etched Apple insignia.",
    image: "/images/ipod/slide-5.webp",
  },
  {
    id: 6,
    title: "Form Factor",
    headline: "1,000 songs in your pocket.",
    subhead: "5GB of storage. 6.5 ounces. Engineered to be smaller than a deck of cards.",
    description:
      "In-hand scale reference demonstrating the breakthrough compactness and ergonomic palm feel of Steve Jobs' original 2001 vision.",
    image: "/images/ipod/slide-6.webp",
  },
  {
    id: 7,
    title: "FireWire Sync",
    headline: "Blazing fast.",
    subhead: "Powered by FireWire. Sync an entire CD to your pocket in under 10 seconds.",
    description:
      "Product composition highlighting the high-speed FireWire wall adapter and 30-pin cable syncing tracks at breakthrough speeds.",
    image: "/images/ipod/slide-7.webp",
  },
  {
    id: 8,
    title: "Battery Life",
    headline: "10 hours of power.",
    subhead: "Enough juice to listen to your entire music library, all on a single charge.",
    description:
      "Bold visual icon celebrating the all-day battery performance that set a new benchmark for portable digital audio players.",
    image: "/images/ipod/slide-8.webp",
  },
  {
    id: 9,
    title: "Transfer Speed",
    headline: "Seconds flat.",
    subhead: "The power of FireWire. Sync an entire CD to your pocket before you even walk out the door.",
    description:
      "High-impact typographic composition centered around a massive '10' numeral emphasizing instantaneous transfer performance.",
    image: "/images/ipod/slide-9.webp",
  },
  {
    id: 10,
    title: "Brand Close",
    headline: "Think Different.",
    subhead: "apple.com",
    description:
      "Minimalist closing brand card featuring the pure white Apple silhouette and website mark on solid black.",
    image: "/images/ipod/slide-10.webp",
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
}

export default function IPodLayout() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [slideDirection, setSlideDirection] = useState<number>(0)

  const goToSlide = (newIndex: number) => {
    setSlideDirection(newIndex > currentSlide ? 1 : -1)
    setCurrentSlide(newIndex)
  }

  const prevSlide = useCallback(() => {
    setSlideDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const nextSlide = useCallback(() => {
    setSlideDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const nextLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % slides.length)
    }
  }, [lightboxIndex])

  const prevLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + slides.length) % slides.length)
    }
  }, [lightboxIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") closeLightbox()
        if (e.key === "ArrowRight") nextLightbox()
        if (e.key === "ArrowLeft") prevLightbox()
      } else {
        if (e.key === "ArrowRight") nextSlide()
        if (e.key === "ArrowLeft") prevSlide()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [lightboxIndex, nextLightbox, prevLightbox, nextSlide, prevSlide])

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 selection:bg-neutral-700/30">
      {/* Top Navigation */}
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
            <span className="hidden sm:inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700">
              Concept Project
            </span>
            <p className="font-bold tracking-tight">iPod — A Modern Take on a Classic</p>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-20 overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/20 via-background to-background" />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-xs font-medium uppercase tracking-wider text-muted-foreground mb-5">
              <Sparkles className="w-3.5 h-3.5 text-foreground" />
              Self-Initiated Concept Project
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-3">
              iPod — A Modern Take on a Classic
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Product Advertising &amp; Social Media Carousel
            </p>
          </motion.div>

          {/* Project Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-border mb-8 text-sm"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Format</p>
              <p className="font-medium">10-Slide Carousel (4:5)</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Project Type</p>
              <p className="font-medium">Self-Initiated Concept</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Subject</p>
              <p className="font-medium">Apple iPod (1st Gen Homage)</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Software</p>
              <p className="font-medium">Figma &amp; Graphic Design</p>
            </div>
          </motion.div>

          {/* Disclaimer Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12 p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900/60 border border-border flex items-start gap-3 text-xs md:text-sm text-muted-foreground"
          >
            <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p>
              <strong>Disclaimer:</strong> This project is an unofficial, self-initiated design concept created for portfolio exploration and is not an official advertisement, commissioned campaign, or endorsed by Apple Inc.
            </p>
          </motion.div>

          {/* SECTION: INTERACTIVE CAROUSEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-xl"
          >
            {/* Carousel Header Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-border">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-primary mb-1 block">
                  Interactive Carousel
                </span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  The 10-Slide Sequence
                </h2>
              </div>

              {/* Controls & Slide Counter */}
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 rounded-full bg-secondary border border-border text-xs font-mono font-semibold tracking-wider text-muted-foreground">
                  {currentSlide + 1 < 10 ? `0${currentSlide + 1}` : currentSlide + 1} / 10
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2.5 rounded-full bg-secondary hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-border transition-all active:scale-95"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2.5 rounded-full bg-secondary hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-border transition-all active:scale-95"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Carousel Main Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Slide Display */}
              <div className="lg:col-span-7 flex justify-center">
                <div
                  onClick={() => openLightbox(currentSlide)}
                  className="group relative aspect-[4/5] w-full max-w-[420px] rounded-2xl overflow-hidden bg-black shadow-2xl cursor-pointer border border-neutral-800"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: slideDirection > 0 ? 60 : -60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: slideDirection > 0 ? -60 : 60 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={slides[currentSlide].image}
                        alt={`iPod Carousel Slide ${slides[currentSlide].id} — ${slides[currentSlide].headline}`}
                        fill
                        priority
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 420px"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Enlarge Hint Pill */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Enlarge
                  </div>

                  {/* Mobile Tap Cue */}
                  <div className="absolute bottom-3 right-3 sm:hidden bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-neutral-300">
                    Tap to enlarge
                  </div>
                </div>
              </div>

              {/* Slide Context & Details */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Slide {slides[currentSlide].id} of 10 • {slides[currentSlide].title}
                  </span>
                  <h3 className="text-3xl font-black tracking-tight mt-1 mb-2 text-foreground">
                    {slides[currentSlide].headline}
                  </h3>
                  <p className="text-base text-neutral-600 dark:text-neutral-300 font-medium leading-relaxed">
                    {slides[currentSlide].subhead}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-secondary/60 border border-border space-y-2">
                  <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground">
                    Design &amp; Composition Context
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => openLightbox(currentSlide)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-all shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    View Fullscreen (No Crop)
                  </button>
                  <span className="text-xs text-muted-foreground">Use ← / → keys to flip</span>
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="mt-10 pt-6 border-t border-border">
              <div className="flex items-center justify-between mb-3 text-xs text-muted-foreground">
                <span className="font-semibold uppercase tracking-wider">Slide Navigator</span>
                <span>Click any slide to jump</span>
              </div>

              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2.5">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => goToSlide(idx)}
                    className={`group relative aspect-[4/5] rounded-lg overflow-hidden bg-black border transition-all duration-200 ${
                      currentSlide === idx
                        ? "border-primary ring-2 ring-primary/40 scale-105 shadow-md"
                        : "border-border/60 hover:border-border opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`Jump to slide ${s.id}`}
                  >
                    <Image
                      src={s.image}
                      alt={`Thumbnail ${s.id}`}
                      fill
                      className="object-contain p-0.5"
                      sizes="100px"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/80 text-[10px] font-mono text-center text-white py-0.5">
                      0{s.id}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <motion.div {...fadeIn} className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Project Overview</h2>
          <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              <strong>iPod — A Modern Take on a Classic</strong> is a self-initiated graphic design exploration that reinterprets Steve Jobs&apos; iconic 2001 Apple iPod launch through modern digital advertising aesthetics.
            </p>
            <p>
              Designed as a sequential 10-slide Instagram carousel (4:5 format), the project strips away modern smartphone clutter to celebrate the pure, focused utility of the original portable music player: high-contrast monochrome typography, tactile hardware details, FireWire speed, and timeless industrial minimalism.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION: DESIGN APPROACH */}
      <section className="py-16 border-t border-border bg-neutral-50/50 dark:bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
              Creative Strategy
            </span>
            <h2 className="text-3xl font-black tracking-tight mb-3">Design Approach</h2>
            <p className="text-muted-foreground text-base">
              Four fundamental design principles guiding the typography, visual structure, and narrative progression across the carousel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 md:p-8 rounded-3xl border border-border bg-card space-y-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-foreground mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase font-bold tracking-widest text-primary block">Principle 01</span>
              <h3 className="text-lg font-bold">Monochromatic Palette</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A disciplined palette of pure black (<code className="text-xs">#000000</code>), clean whites, and subtle greys echoing the original Dieter Rams-inspired Apple industrial design language.
              </p>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 md:p-8 rounded-3xl border border-border bg-card space-y-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-foreground mb-4">
                <Type className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase font-bold tracking-widest text-primary block">Principle 02</span>
              <h3 className="text-lg font-bold">Bold Typography &amp; Space</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Confident, large-scale modern sans-serif headlines contrasted with generous breathing room to command immediate focus in fast-scrolling social media feeds.
              </p>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 md:p-8 rounded-3xl border border-border bg-card space-y-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-foreground mb-4">
                <Sliders className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase font-bold tracking-widest text-primary block">Principle 03</span>
              <h3 className="text-lg font-bold">Product-Focused Composition</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sculptural studio lighting and macro crops focusing on tactile physical details: the mechanical click wheel, polished mirror-back steel, and FireWire connectors.
              </p>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 md:p-8 rounded-3xl border border-border bg-card space-y-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-foreground mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase font-bold tracking-widest text-primary block">Principle 04</span>
              <h3 className="text-lg font-bold">Sequential Storytelling</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A seamless 10-slide narrative arc moving from nostalgic opening hook through interface simplicity and technical speed to timeless brand closure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: ALL 10 SLIDES GRID */}
      <section className="py-16 max-w-7xl mx-auto px-6 border-t border-border">
        <motion.div {...fadeIn} className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
            Complete Sequence
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">All 10 Carousel Slides</h2>
          <p className="text-muted-foreground text-base">
            Click any slide to open the high-resolution uncropped lightbox.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {slides.map((s, idx) => (
            <motion.div
              key={s.id}
              {...fadeIn}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => openLightbox(idx)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                <Image
                  src={s.image}
                  alt={`Slide ${s.id}: ${s.headline}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono font-medium text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  Slide {s.id < 10 ? `0${s.id}` : s.id}
                </div>
              </div>
              <div className="p-3.5 border-t border-border">
                <p className="text-[11px] font-mono text-primary mb-0.5">Slide 0{s.id}</p>
                <h4 className="text-xs font-bold truncate text-foreground">{s.headline}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER & DISCLAIMER */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6 border-t border-border space-y-6">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:bg-primary/90 transition-all shadow-sm text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Projects
        </Link>

        <p className="text-xs text-muted-foreground pt-4 max-w-xl mx-auto leading-relaxed italic">
          Note: This concept was created as a self-initiated design exploration and is not an official, published campaign by Apple Inc. All product names, logos, and trademarks are property of their respective owners.
        </p>
      </section>

      {/* FULLSCREEN LIGHTBOX (NO CROPPING) */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8"
          >
            {/* Lightbox Header */}
            <div
              className="flex items-center justify-between text-white z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <p className="text-xs text-neutral-400 font-mono">
                  Slide {lightboxIndex + 1} of {slides.length}
                </p>
                <h3 className="text-lg md:text-xl font-bold">
                  {slides[lightboxIndex].headline}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Close fullscreen view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Main Artwork (Zero Cropping) */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={prevLightbox}
                className="absolute left-2 md:left-6 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 transition-colors z-20"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="relative w-full max-w-3xl aspect-[4/5] max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-black">
                <Image
                  src={slides[lightboxIndex].image}
                  alt={`Slide ${slides[lightboxIndex].id}: ${slides[lightboxIndex].headline}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <button
                onClick={nextLightbox}
                className="absolute right-2 md:right-6 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 transition-colors z-20"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Footer */}
            <div
              className="text-center text-xs text-neutral-400 z-10 space-y-1"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-neutral-300 font-medium">
                {slides[lightboxIndex].subhead}
              </p>
              <p className="text-[11px] text-neutral-500">
                Click outside, press Escape, or click X to close • Use ← / → to navigate
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
