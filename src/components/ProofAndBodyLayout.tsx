"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Palette,
  Type,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Compass,
  ArrowUpRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" as const }
}

interface LightboxItem {
  src: string
  title: string
  caption: string
  direction?: string
}

export default function ProofAndBodyLayout() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Gallery of key images for lightbox inspection
  const galleryItems: LightboxItem[] = [
    {
      src: "/images/proof-and-body/hero-triptych.webp",
      title: "PROOF & BODY — Three Directions",
      caption: "Side-by-side product lineup showcasing Bold, Luxury, and Modern Minimal directions.",
      direction: "Brand Overview"
    },
    // Direction 1: Bold
    {
      src: "/images/proof-and-body/moodboard-page-2.webp",
      title: "Direction 01 — Moodboard & Identity System",
      caption: "Streetwear-inspired aesthetic, high-contrast palette, and experimental typography.",
      direction: "Bold & High-Energy"
    },
    {
      src: "/images/proof-and-body/moodboard-page-3.webp",
      title: "Direction 01 — Hero Products & Environment",
      caption: "Body wash, shampoo, and sunscreen in high-impact shelf arrangements.",
      direction: "Bold & High-Energy"
    },
    {
      src: "/images/proof-and-body/genz-all-in-one-1.webp",
      title: "Direction 01 — Full Product Lineup",
      caption: "Opaque vibrant packaging with Cobalt Blue, Vivid Yellow, and Punchy Orange.",
      direction: "Bold & High-Energy"
    },
    {
      src: "/images/proof-and-body/genz-bodywash.webp",
      title: "Direction 01 — Body Wash Mockup",
      caption: "Heavy typography and graphic sticker treatment on cylindrical container.",
      direction: "Bold & High-Energy"
    },
    {
      src: "/images/proof-and-body/genz-shampoo.webp",
      title: "Direction 01 — Shampoo Mockup",
      caption: "High-contrast label design with warning-label style secondary typography.",
      direction: "Bold & High-Energy"
    },
    {
      src: "/images/proof-and-body/genz-sunscreen.webp",
      title: "Direction 01 — Sunscreen Tube",
      caption: "Dynamic tube mockup featuring punchy orange and vibrant yellow accents.",
      direction: "Bold & High-Energy"
    },
    // Direction 2: Luxury
    {
      src: "/images/proof-and-body/moodboard-page-4.webp",
      title: "Direction 02 — Luxury Moodboard & Typography",
      caption: "Quiet luxury aesthetic, oversized ampersand monogram, and restrained three-tone palette.",
      direction: "Luxury & Premium"
    },
    {
      src: "/images/proof-and-body/moodboard-page-5.webp",
      title: "Direction 02 — The Luxury Collection",
      caption: "Spa-inspired environments, natural stone, and diffused lighting product presentation.",
      direction: "Luxury & Premium"
    },
    {
      src: "/images/proof-and-body/luxury-all-in-one-1.webp",
      title: "Direction 02 — Full Apothecary Suite",
      caption: "Luminous Cream bottles with Deep Olive-Black caps and refined brass typography.",
      direction: "Luxury & Premium"
    },
    {
      src: "/images/proof-and-body/luxury-handshot-1.webp",
      title: "Direction 02 — Tactile Handshot Interaction",
      caption: "Demonstrating physical scale, bottle texture, and refined label balance.",
      direction: "Luxury & Premium"
    },
    {
      src: "/images/proof-and-body/luxury-bodywash.webp",
      title: "Direction 02 — Luxury Body Wash",
      caption: "Meticulously kerned typography with generous negative space on cream vessel.",
      direction: "Luxury & Premium"
    },
    {
      src: "/images/proof-and-body/luxury-shampoo.webp",
      title: "Direction 02 — Luxury Shampoo",
      caption: "Interlocking 'O's in PROOF subtly nodding to molecular bonds and clinical efficacy.",
      direction: "Luxury & Premium"
    },
    {
      src: "/images/proof-and-body/luxury-sunscreen.webp",
      title: "Direction 02 — Luxury Sunscreen",
      caption: "Sophisticated tube design featuring the signature oversized ampersand monogram.",
      direction: "Luxury & Premium"
    },
    // Direction 3: Modern Minimal
    {
      src: "/images/proof-and-body/moodboard-page-6.webp",
      title: "Direction 03 — Modern Minimal Moodboard",
      caption: "Structured utilitarian aesthetic, Duffiesh wordmark, and rigid bottom-anchored grid.",
      direction: "Modern Minimal"
    },
    {
      src: "/images/proof-and-body/moodboard-page-7.webp",
      title: "Direction 03 — Architectural Minimal Visuals",
      caption: "Cool-toned daylight, sharp structural shadows, and raw material textures.",
      direction: "Modern Minimal"
    },
    {
      src: "/images/proof-and-body/minimal-all-in-one-1.webp",
      title: "Direction 03 — Minimal Product Trio",
      caption: "Matte Ash White resin bodies, Soft Slate typography, and Muted Sage pump accents.",
      direction: "Modern Minimal"
    },
    {
      src: "/images/proof-and-body/minimal-bodywash.webp",
      title: "Direction 03 — Minimal Body Wash",
      caption: "70% negative space on top, with ultra-clean bottom-anchored typographic labeling.",
      direction: "Modern Minimal"
    },
    {
      src: "/images/proof-and-body/minimal-shampoo.webp",
      title: "Direction 03 — Minimal Shampoo",
      caption: "Sculptural form emulating unglazed ceramic and industrial laboratory clarity.",
      direction: "Modern Minimal"
    },
    {
      src: "/images/proof-and-body/minimal-sunscreen.webp",
      title: "Direction 03 — Minimal Sunscreen",
      caption: "Clean matte tube with structured left-aligned typographic system.",
      direction: "Modern Minimal"
    },
    {
      src: "/images/proof-and-body/minimal-handshot.webp",
      title: "Direction 03 — Tactile Minimal Lifestyle",
      caption: "Raw architectural materials and human interaction with the functional packaging.",
      direction: "Modern Minimal"
    }
  ]

  const openLightbox = (src: string) => {
    const idx = galleryItems.findIndex(item => item.src === src)
    if (idx !== -1) {
      setLightboxIndex(idx)
    } else {
      // fallback
      galleryItems.push({ src, title: "Image Inspection", caption: "Original assessment artwork." })
      setLightboxIndex(galleryItems.length - 1)
    }
  }

  const closeLightbox = () => setLightboxIndex(null)
  const prevLightbox = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length)
  }, [lightboxIndex, galleryItems.length])

  const nextLightbox = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % galleryItems.length)
  }, [lightboxIndex, galleryItems.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") prevLightbox()
      if (e.key === "ArrowRight") nextLightbox()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxIndex, prevLightbox, nextLightbox])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Top Sticky Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-background/85 backdrop-blur-md border-b border-border/60 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <Link
            href="/design-assignments"
            className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Design Assignments</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-muted-foreground font-semibold px-3 py-1 rounded-full border border-border/60 bg-muted/20">
              Brand Assessment
            </span>
            <span className="text-sm font-bold tracking-tight">PROOF & BODY</span>
          </div>
        </div>
      </nav>

      <main className="pt-24 md:pt-32 pb-24 space-y-28 md:space-y-36">

        {/* ================================================================= */}
        {/* 01 — HERO SECTION                                                 */}
        {/* ================================================================= */}
        <section className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="space-y-8">
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
                Design Assessment
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium text-muted-foreground border border-border/60 bg-muted/10">
                Bumbblebee Branding Company
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium text-muted-foreground border border-border/60 bg-muted/10">
                Personal Care & Packaging
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]">
                PROOF & BODY
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium tracking-tight">
                Three Directions. One Brand.
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed max-w-3xl">
              An exploration of three distinct visual identities for a personal-care brand, developed as part of a branding and packaging design assessment for Bumbblebee Branding Company.
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border/60">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Role</span>
                <p className="text-sm font-semibold">Visual Identity & Packaging</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Context</span>
                <p className="text-sm font-semibold">Design Assessment</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Deliverables</span>
                <p className="text-sm font-semibold">Moodboards, Packaging, Concepts</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Software</span>
                <p className="text-sm font-semibold">Illustrator, Photoshop</p>
              </div>
            </div>

            {/* Multi-Direction Hero Arrangement */}
            <div
              onClick={() => openLightbox("/images/proof-and-body/hero-triptych.webp")}
              className="group cursor-zoom-in relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-border/70 shadow-2xl bg-neutral-900 mt-6"
            >
              <Image
                src="/images/proof-and-body/hero-triptych.webp"
                alt="PROOF & BODY — Three Directions Hero Triptych"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
              
              {/* Triptych Overlays */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 flex justify-between items-end">
                <div className="grid grid-cols-3 w-full gap-2 md:gap-6 text-white">
                  <div className="p-2 md:p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
                    <span className="text-[10px] md:text-xs font-bold tracking-wider text-[#FFC700] uppercase block">Direction 01</span>
                    <span className="text-xs md:text-sm font-semibold">Bold & High-Energy</span>
                  </div>
                  <div className="p-2 md:p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
                    <span className="text-[10px] md:text-xs font-bold tracking-wider text-[#FFFFCC] uppercase block">Direction 02</span>
                    <span className="text-xs md:text-sm font-semibold">Luxury & Premium</span>
                  </div>
                  <div className="p-2 md:p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
                    <span className="text-[10px] md:text-xs font-bold tracking-wider text-[#A8B2A1] uppercase block">Direction 03</span>
                    <span className="text-xs md:text-sm font-semibold">Modern Minimal</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center italic">
              Original product lineup across the three proposed creative directions: Bold Gen-Z, Luxury Apothecary, and Modern Minimal.
            </p>
          </motion.div>
        </section>


        {/* ================================================================= */}
        {/* 02 — THE CREATIVE CHALLENGE                                       */}
        {/* ================================================================= */}
        <section className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeIn} className="p-8 md:p-12 rounded-3xl border border-border/60 bg-muted/20 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-primary">
                <Compass className="w-4 h-4" />
                <span>The Creative Challenge</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                One Brand, Three Different Personalities
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              &ldquo;The challenge was to explore how one personal-care brand could communicate different personalities through typography, colour, packaging and visual storytelling. I developed three creative directions, each with its own moodboard, identity system and product presentation.&rdquo;
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border/50">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#003DA5] dark:text-[#60a5fa]">01. High-Impact Shelf</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Loud, unapologetic streetwear graphics crafted to stand out instantly on retail shelves and appeal to Gen-Z consumers.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B59A68]">02. Quiet Sophistication</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Refined apothecary elegance leaning into negative space, warm organic cream, and bespoke monogram detailing.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#71717a] dark:text-[#a1a1aa]">03. Pure Function</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Structured industrial utility inspired by contemporary architecture, clinical clarity, and confident subtraction.
                </p>
              </div>
            </div>
          </motion.div>
        </section>


        {/* ================================================================= */}
        {/* 03 — DIRECTION ONE: BOLD & HIGH-ENERGY                            */}
        {/* ================================================================= */}
        <section className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="space-y-12 rounded-3xl p-6 md:p-12 border border-blue-500/20 bg-gradient-to-b from-blue-950/15 via-background to-background">
            
            {/* Direction Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/60">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#003DA5]/10 text-[#003DA5] dark:text-[#60a5fa] border border-[#003DA5]/30">
                  Direction 01
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                  Bold & High-Energy
                </h2>
                <p className="text-base md:text-lg text-muted-foreground font-medium">
                  Theme: Playful / Youthful / Expressive
                </p>
              </div>
              <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
                An unapologetic, streetwear-inspired aesthetic targeting the modern Gen-Z consumer. Uses loud graphic intensity, interlocking typography, and high-contrast colorways.
              </p>
            </div>

            {/* Original Color Palette */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <Palette className="w-4 h-4" />
                <span>Original Color Palette</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                <div className="p-4 rounded-2xl bg-[#003DA5] text-white flex flex-col justify-between h-28 shadow-sm">
                  <span className="text-xs font-semibold opacity-90">Cobalt Blue</span>
                  <span className="font-mono text-xs font-bold">#003DA5</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#FFC700] text-black flex flex-col justify-between h-28 shadow-sm">
                  <span className="text-xs font-semibold opacity-90">Vivid Yellow</span>
                  <span className="font-mono text-xs font-bold">#FFC700</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#FF5A3C] text-white flex flex-col justify-between h-28 shadow-sm">
                  <span className="text-xs font-semibold opacity-90">Punchy Orange</span>
                  <span className="font-mono text-xs font-bold">#FF5A3C</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#F0EEE9] text-zinc-900 border border-zinc-300 dark:border-zinc-700 flex flex-col justify-between h-28 shadow-sm">
                  <span className="text-xs font-semibold opacity-80">Off-White</span>
                  <span className="font-mono text-xs font-bold">#F0EEE9</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#1D252D] text-white flex flex-col justify-between h-28 shadow-sm">
                  <span className="text-xs font-semibold opacity-80">Dark</span>
                  <span className="font-mono text-xs font-bold">#1D252D</span>
                </div>
              </div>
            </div>

            {/* Visual Approach Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-muted/30 border border-border/50 text-sm">
              <div className="space-y-1">
                <span className="font-semibold text-foreground">Typography</span>
                <p className="text-muted-foreground leading-relaxed">
                  Heavy, geometric, interlocking sans-serif styled like a solid graphic sticker for heavy shelf impact.
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-foreground">Graphic Language</span>
                <p className="text-muted-foreground leading-relaxed">
                  Utilitarian &ldquo;warning label&rdquo; secondary text, thick rectangular borders, and rebellious sticker aesthetics.
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-foreground">Product Photography</span>
                <p className="text-muted-foreground leading-relaxed">
                  Harsh flash, dynamic low angles, and raw product textures communicating high vibrancy.
                </p>
              </div>
            </div>

            {/* 1. Original Identity Moodboard Spread */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  1. Original Moodboard & Identity System (Pages 2 & 3)
                </span>
                <span className="text-xs text-muted-foreground">Click to inspect</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div
                  onClick={() => openLightbox("/images/proof-and-body/moodboard-page-2.webp")}
                  className="group cursor-zoom-in relative aspect-[16/9] rounded-2xl overflow-hidden border border-border/70 bg-neutral-900 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/moodboard-page-2.webp"
                    alt="Direction 01 Moodboard Presentation Page"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/70 text-white text-xs backdrop-blur-sm">
                    Mood Board 01 Overview & Typography
                  </div>
                </div>

                <div
                  onClick={() => openLightbox("/images/proof-and-body/moodboard-page-3.webp")}
                  className="group cursor-zoom-in relative aspect-[16/9] rounded-2xl overflow-hidden border border-border/70 bg-neutral-900 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/moodboard-page-3.webp"
                    alt="Direction 01 Hero Products Visuals Page"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/70 text-white text-xs backdrop-blur-sm">
                    Hero Products, Environment & Lifestyle Visuals
                  </div>
                </div>
              </div>
            </div>

            {/* 2 & 3. Product Packaging Visuals */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                2. Product Packaging Suite — Body Wash, Shampoo & Sunscreen
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  onClick={() => openLightbox("/images/proof-and-body/genz-bodywash.webp")}
                  className="group cursor-zoom-in relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/60 bg-neutral-900/60 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/genz-bodywash.webp"
                    alt="Direction 01 Body Wash Mockup"
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 text-white text-xs">
                    Body Wash Mockup
                  </div>
                </div>

                <div
                  onClick={() => openLightbox("/images/proof-and-body/genz-shampoo.webp")}
                  className="group cursor-zoom-in relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/60 bg-neutral-900/60 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/genz-shampoo.webp"
                    alt="Direction 01 Shampoo Mockup"
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 text-white text-xs">
                    Shampoo Mockup
                  </div>
                </div>

                <div
                  onClick={() => openLightbox("/images/proof-and-body/genz-sunscreen.webp")}
                  className="group cursor-zoom-in relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/60 bg-neutral-900/60 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/genz-sunscreen.webp"
                    alt="Direction 01 Sunscreen Tube"
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 text-white text-xs">
                    Sunscreen Mockup
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Lifestyle & Environment Mockups */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                3. Retail, Environment & Collection Mockups
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  onClick={() => openLightbox("/images/proof-and-body/genz-all-in-one-1.webp")}
                  className="group cursor-zoom-in relative aspect-[16/10] rounded-2xl overflow-hidden border border-border/60 bg-neutral-900/40 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/genz-all-in-one-1.webp"
                    alt="Direction 01 Complete Collection Lineup"
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 text-white text-xs">
                    Collection Trio — Shelf Impact
                  </div>
                </div>

                <div
                  onClick={() => openLightbox("/images/proof-and-body/genz-all-in-one-2.webp")}
                  className="group cursor-zoom-in relative aspect-[16/10] rounded-2xl overflow-hidden border border-border/60 bg-neutral-900/40 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/genz-all-in-one-2.webp"
                    alt="Direction 01 Alternative Collection Angle"
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 text-white text-xs">
                    Alternative Arrangement & Flash Photography
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Caption */}
            <div className="pt-6 border-t border-border/50 text-center">
              <p className="text-lg md:text-xl font-medium tracking-tight text-foreground/90 italic">
                &ldquo;Designed to feel expressive, energetic and instantly noticeable.&rdquo;
              </p>
            </div>

          </motion.div>
        </section>


        {/* ================================================================= */}
        {/* 04 — DIRECTION TWO: LUXURY & PREMIUM                              */}
        {/* ================================================================= */}
        <section className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="space-y-12 rounded-3xl p-6 md:p-12 border border-[#B59A68]/30 bg-gradient-to-b from-[#1A1A00]/15 via-background to-background">
            
            {/* Direction Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/60">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#B59A68]/15 text-[#B59A68] border border-[#B59A68]/40">
                  Direction 02
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                  Luxury & Premium
                </h2>
                <p className="text-base md:text-lg text-muted-foreground font-medium">
                  Theme: Refined / Minimal / Sophisticated
                </p>
              </div>
              <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
                Embraces &ldquo;quiet luxury&rdquo; and clinical elegance. Built for an exclusive high-end apothecary or premium spa brand, communicating efficacy and sophistication through restraint.
              </p>
            </div>

            {/* Original Color Palette */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <Palette className="w-4 h-4" />
                <span>Original Color Palette</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#FFFFCC] text-zinc-950 flex flex-col justify-between h-28 border border-amber-200/50 shadow-sm">
                  <span className="text-xs font-semibold opacity-90">Luminous Cream (Primary Canvas)</span>
                  <span className="font-mono text-xs font-bold">#FFFFCC</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#1A1A00] text-amber-100 flex flex-col justify-between h-28 shadow-sm">
                  <span className="text-xs font-semibold opacity-90">Deep Olive-Black (Typography & Caps)</span>
                  <span className="font-mono text-xs font-bold">#1A1A00</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#B59A68] text-zinc-950 flex flex-col justify-between h-28 shadow-sm">
                  <span className="text-xs font-semibold opacity-90">Muted Brass (Hardware Accent)</span>
                  <span className="font-mono text-xs font-bold">#B59A68</span>
                </div>
              </div>
            </div>

            {/* Visual Approach Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-muted/30 border border-border/50 text-sm">
              <div className="space-y-1">
                <span className="font-semibold text-foreground">Typography & Ampersand</span>
                <p className="text-muted-foreground leading-relaxed">
                  Meticulously kerned with an oversized ampersand monogram. Interlocking &ldquo;O&rdquo;s nod to molecular wellness.
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-foreground">Negative Space & Finishes</span>
                <p className="text-muted-foreground leading-relaxed">
                  Graphic clutter removed. Luminous cream flooded bottles, deep olive typography, and muted brass hardware accents.
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-foreground">Spa Art Direction</span>
                <p className="text-muted-foreground leading-relaxed">
                  Raw travertine stone, soft diffused daylight, and feathered shadows showcasing tactile material weight.
                </p>
              </div>
            </div>

            {/* 1. Original Identity Moodboard Spread */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  1. Original Moodboard & Identity System (Pages 4 & 5)
                </span>
                <span className="text-xs text-muted-foreground">Click to inspect</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div
                  onClick={() => openLightbox("/images/proof-and-body/moodboard-page-4.webp")}
                  className="group cursor-zoom-in relative aspect-[16/9] rounded-2xl overflow-hidden border border-border/70 bg-neutral-900 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/moodboard-page-4.webp"
                    alt="Direction 02 Moodboard Presentation Page"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/70 text-white text-xs backdrop-blur-sm">
                    Mood Board 02 Overview & Typography
                  </div>
                </div>

                <div
                  onClick={() => openLightbox("/images/proof-and-body/moodboard-page-5.webp")}
                  className="group cursor-zoom-in relative aspect-[16/9] rounded-2xl overflow-hidden border border-border/70 bg-neutral-900 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/moodboard-page-5.webp"
                    alt="Direction 02 Hero Products Visuals Page"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/70 text-white text-xs backdrop-blur-sm">
                    Hero Products & The Luxury Collection
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Body Wash, Shampoo & Sunscreen Mockups */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                2. Luxury Product Packaging Suite
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  onClick={() => openLightbox("/images/proof-and-body/luxury-bodywash.webp")}
                  className="group cursor-zoom-in relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/60 bg-neutral-900/60 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/luxury-bodywash.webp"
                    alt="Direction 02 Luxury Body Wash"
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 text-white text-xs">
                    Luxury Body Wash Mockup
                  </div>
                </div>

                <div
                  onClick={() => openLightbox("/images/proof-and-body/luxury-shampoo.webp")}
                  className="group cursor-zoom-in relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/60 bg-neutral-900/60 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/luxury-shampoo.webp"
                    alt="Direction 02 Luxury Shampoo"
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 text-white text-xs">
                    Luxury Shampoo Mockup
                  </div>
                </div>

                <div
                  onClick={() => openLightbox("/images/proof-and-body/luxury-sunscreen.webp")}
                  className="group cursor-zoom-in relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/60 bg-neutral-900/60 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/luxury-sunscreen.webp"
                    alt="Direction 02 Luxury Sunscreen Tube"
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 text-white text-xs">
                    Luxury Sunscreen Mockup
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Tactile Handshot & Collection Visuals */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                3. Tactile Scale & Collection Presentation
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  onClick={() => openLightbox("/images/proof-and-body/luxury-handshot-1.webp")}
                  className="group cursor-zoom-in relative aspect-[16/10] rounded-2xl overflow-hidden border border-border/60 bg-neutral-900/40 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/luxury-handshot-1.webp"
                    alt="Direction 02 Tactile Handshot"
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 text-white text-xs">
                    Tactile Hand Interaction & Scale
                  </div>
                </div>

                <div
                  onClick={() => openLightbox("/images/proof-and-body/luxury-all-in-one-1.webp")}
                  className="group cursor-zoom-in relative aspect-[16/10] rounded-2xl overflow-hidden border border-border/60 bg-neutral-900/40 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/luxury-all-in-one-1.webp"
                    alt="Direction 02 Luxury All In One Collection"
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 text-white text-xs">
                    Full Apothecary Suite & Brass Finishes
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Caption */}
            <div className="pt-6 border-t border-border/50 text-center">
              <p className="text-lg md:text-xl font-medium tracking-tight text-foreground/90 italic">
                &ldquo;A quieter visual identity built around restraint, elegance and everyday luxury.&rdquo;
              </p>
            </div>

          </motion.div>
        </section>


        {/* ================================================================= */}
        {/* 05 — DIRECTION THREE: MODERN MINIMAL                              */}
        {/* ================================================================= */}
        <section className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="space-y-12 rounded-3xl p-6 md:p-12 border border-emerald-500/20 bg-gradient-to-b from-emerald-950/15 via-background to-background">
            
            {/* Direction Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/60">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#A8B2A1]/20 text-emerald-800 dark:text-emerald-300 border border-[#A8B2A1]/40">
                  Direction 03
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                  Modern Minimal
                </h2>
                <p className="text-base md:text-lg text-muted-foreground font-medium">
                  Theme: Clean / Functional / Architectural
                </p>
              </div>
              <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
                Embraces a highly structured, utilitarian aesthetic relying on confidence through subtraction. Features rigid left-aligned grid systems, sterile laboratory labels, and modern industrial materials.
              </p>
            </div>

            {/* Original Color Palette */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <Palette className="w-4 h-4" />
                <span>Original Color Palette</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#F7F7F7] text-zinc-950 flex flex-col justify-between h-28 border border-zinc-300 dark:border-zinc-700 shadow-sm">
                  <span className="text-xs font-semibold opacity-90">Matte Ash White (Primary Canvas)</span>
                  <span className="font-mono text-xs font-bold">#F7F7F7</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#2B2D2F] text-zinc-100 flex flex-col justify-between h-28 shadow-sm">
                  <span className="text-xs font-semibold opacity-90">Soft Slate (Typography & Contrast)</span>
                  <span className="font-mono text-xs font-bold">#2B2D2F</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#A8B2A1] text-zinc-950 flex flex-col justify-between h-28 shadow-sm">
                  <span className="text-xs font-semibold opacity-90">Muted Sage (Grounding Accent)</span>
                  <span className="font-mono text-xs font-bold">#A8B2A1</span>
                </div>
              </div>
            </div>

            {/* Visual Approach Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-muted/30 border border-border/50 text-sm">
              <div className="space-y-1">
                <span className="font-semibold text-foreground">Typographic Architecture</span>
                <p className="text-muted-foreground leading-relaxed">
                  Stylized &ldquo;Duffiesh&rdquo; wordmark paired with hyper-basic sterile sans-serif emulating precision lab labels.
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-foreground">Bottom-Anchored Grid</span>
                <p className="text-muted-foreground leading-relaxed">
                  Typography pushed into the bottom third, allowing the upper 70% of the canvas to remain pure negative space.
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-foreground">Material Focus</span>
                <p className="text-muted-foreground leading-relaxed">
                  Inspired by unglazed ceramic, matte soft-touch resin, raw concrete, brushed aluminum, and structural shadows.
                </p>
              </div>
            </div>

            {/* 1. Original Identity Moodboard Spread */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  1. Original Moodboard & Identity System (Pages 6 & 7)
                </span>
                <span className="text-xs text-muted-foreground">Click to inspect</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div
                  onClick={() => openLightbox("/images/proof-and-body/moodboard-page-6.webp")}
                  className="group cursor-zoom-in relative aspect-[16/9] rounded-2xl overflow-hidden border border-border/70 bg-neutral-900 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/moodboard-page-6.webp"
                    alt="Direction 03 Moodboard Presentation Page"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/70 text-white text-xs backdrop-blur-sm">
                    Mood Board 03 Overview & Duffiesh Typography
                  </div>
                </div>

                <div
                  onClick={() => openLightbox("/images/proof-and-body/moodboard-page-7.webp")}
                  className="group cursor-zoom-in relative aspect-[16/9] rounded-2xl overflow-hidden border border-border/70 bg-neutral-900 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/moodboard-page-7.webp"
                    alt="Direction 03 Hero Products Visuals Page"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/70 text-white text-xs backdrop-blur-sm">
                    Hero Products & Modern Minimal Visuals
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Product Packaging Suite */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                2. Modern Minimal Product Packaging Suite
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  onClick={() => openLightbox("/images/proof-and-body/minimal-bodywash.webp")}
                  className="group cursor-zoom-in relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/60 bg-neutral-900/60 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/minimal-bodywash.webp"
                    alt="Direction 03 Minimal Body Wash"
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 text-white text-xs">
                    Minimal Body Wash Mockup
                  </div>
                </div>

                <div
                  onClick={() => openLightbox("/images/proof-and-body/minimal-shampoo.webp")}
                  className="group cursor-zoom-in relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/60 bg-neutral-900/60 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/minimal-shampoo.webp"
                    alt="Direction 03 Minimal Shampoo"
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 text-white text-xs">
                    Minimal Shampoo Mockup
                  </div>
                </div>

                <div
                  onClick={() => openLightbox("/images/proof-and-body/minimal-sunscreen.webp")}
                  className="group cursor-zoom-in relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/60 bg-neutral-900/60 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/minimal-sunscreen.webp"
                    alt="Direction 03 Minimal Sunscreen Tube"
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 text-white text-xs">
                    Minimal Sunscreen Mockup
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Architectural & Collection Visuals */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                3. Architectural Materials & Trio Lineup
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  onClick={() => openLightbox("/images/proof-and-body/minimal-all-in-one-1.webp")}
                  className="group cursor-zoom-in relative aspect-[16/10] rounded-2xl overflow-hidden border border-border/60 bg-neutral-900/40 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/minimal-all-in-one-1.webp"
                    alt="Direction 03 Trio Lineup"
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 text-white text-xs">
                    Full Minimal Trio — Soft Slate & Muted Sage
                  </div>
                </div>

                <div
                  onClick={() => openLightbox("/images/proof-and-body/minimal-handshot.webp")}
                  className="group cursor-zoom-in relative aspect-[16/10] rounded-2xl overflow-hidden border border-border/60 bg-neutral-900/40 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/minimal-handshot.webp"
                    alt="Direction 03 Tactile Handshot"
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 text-white text-xs">
                    Tactile Concrete & Architectural Shadows
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Caption */}
            <div className="pt-6 border-t border-border/50 text-center">
              <p className="text-lg md:text-xl font-medium tracking-tight text-foreground/90 italic">
                &ldquo;A focused identity that communicates through simplicity, contrast and form.&rdquo;
              </p>
            </div>

          </motion.div>
        </section>


        {/* ================================================================= */}
        {/* 06 — COMPARING THE THREE DIRECTIONS                               */}
        {/* ================================================================= */}
        <section className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="space-y-12">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-primary">
                <Layers className="w-4 h-4" />
                <span>Editorial Comparison</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Comparing the Three Directions
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                How different typographic systems, palettes, and material choices craft distinctly varied brand personalities for the exact same personal-care product category.
              </p>
            </div>

            {/* Three Large Editorial Panels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* BOLD PANEL */}
              <div className="flex flex-col rounded-3xl border border-blue-500/30 bg-blue-950/10 p-6 space-y-6">
                <div
                  onClick={() => openLightbox("/images/proof-and-body/genz-all-in-one-1.webp")}
                  className="group cursor-zoom-in relative aspect-[4/3] rounded-2xl overflow-hidden border border-blue-500/20 bg-neutral-900 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/genz-all-in-one-1.webp"
                    alt="Bold Direction Summary Visual"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#003DA5] text-white text-xs font-bold uppercase tracking-wider">
                    BOLD
                  </div>
                </div>

                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight mb-2">Direction 01: Bold</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      High energy, expressive typography, vibrant contrasts.
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-border/50 text-xs">
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">Target Audience</span>
                      <span className="font-semibold text-right">Modern Gen-Z Consumer</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">Typography</span>
                      <span className="font-semibold text-right">Interlocking Heavy Sans</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">Core Colors</span>
                      <span className="font-semibold text-right">Cobalt, Yellow, Orange</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">Retail Strategy</span>
                      <span className="font-semibold text-right">Shelf Disruption</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* LUXURY PANEL */}
              <div className="flex flex-col rounded-3xl border border-[#B59A68]/40 bg-[#1A1A00]/10 p-6 space-y-6">
                <div
                  onClick={() => openLightbox("/images/proof-and-body/luxury-all-in-one-1.webp")}
                  className="group cursor-zoom-in relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#B59A68]/30 bg-neutral-900 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/luxury-all-in-one-1.webp"
                    alt="Luxury Direction Summary Visual"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#B59A68] text-zinc-950 text-xs font-bold uppercase tracking-wider">
                    LUXURY
                  </div>
                </div>

                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight mb-2">Direction 02: Luxury</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Elegant forms, restrained colours, premium materials.
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-border/50 text-xs">
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">Target Audience</span>
                      <span className="font-semibold text-right">Premium Spa & Apothecary</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">Typography</span>
                      <span className="font-semibold text-right">Oversized Ampersand Monogram</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">Core Colors</span>
                      <span className="font-semibold text-right">Cream, Deep Olive, Brass</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">Retail Strategy</span>
                      <span className="font-semibold text-right">Quiet Sophistication</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* MINIMAL PANEL */}
              <div className="flex flex-col rounded-3xl border border-emerald-500/30 bg-emerald-950/10 p-6 space-y-6">
                <div
                  onClick={() => openLightbox("/images/proof-and-body/minimal-all-in-one-1.webp")}
                  className="group cursor-zoom-in relative aspect-[4/3] rounded-2xl overflow-hidden border border-emerald-500/20 bg-neutral-900 shadow-md"
                >
                  <Image
                    src="/images/proof-and-body/minimal-all-in-one-1.webp"
                    alt="Minimal Direction Summary Visual"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#2B2D2F] text-zinc-100 text-xs font-bold uppercase tracking-wider">
                    MINIMAL
                  </div>
                </div>

                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight mb-2">Direction 03: Minimal</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Structured typography, neutral materials, architectural simplicity.
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-border/50 text-xs">
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">Target Audience</span>
                      <span className="font-semibold text-right">Design & Architecture Conscious</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">Typography</span>
                      <span className="font-semibold text-right">Duffiesh Wordmark + Sterile Lab</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">Core Colors</span>
                      <span className="font-semibold text-right">Ash White, Slate, Sage</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">Retail Strategy</span>
                      <span className="font-semibold text-right">Subtractive Utility</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </section>


        {/* ================================================================= */}
        {/* 07 — WHAT THIS PROJECT DEMONSTRATES                               */}
        {/* ================================================================= */}
        <section className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeIn} className="p-8 md:p-12 rounded-3xl border border-border/70 bg-muted/20 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-wider uppercase text-primary block">
                Reflection & Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Exploring Identity Through Different Perspectives
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              &ldquo;Working on three directions for the same concept helped me explore how colour, typography, packaging and art direction influence the overall personality of a brand. Each direction required a different approach while keeping the product category consistent.&rdquo;
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border/50">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-sm font-semibold">Multi-Directional Conceptualisation</span>
                  <p className="text-xs text-muted-foreground">Demonstrating creative breadth across divergent aesthetic spectrums.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-sm font-semibold">Moodboard Curation & Strategy</span>
                  <p className="text-xs text-muted-foreground">Articulating intentional rationale for typography, palettes, and textures.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-sm font-semibold">Consistent Category Extension</span>
                  <p className="text-xs text-muted-foreground">Adapting identity systems across body wash, shampoo, and sunscreen containers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-sm font-semibold">Packaging Layout & Mockup Execution</span>
                  <p className="text-xs text-muted-foreground">Delivering photorealistic 3D mockups and flat packaging artwork.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>


        {/* ================================================================= */}
        {/* 08 — CLOSING & CREDITS                                            */}
        {/* ================================================================= */}
        <section className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeIn} className="p-8 md:p-12 rounded-3xl border border-border/60 bg-gradient-to-b from-muted/30 to-background text-center space-y-8 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-black tracking-tight">PROOF & BODY</h3>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Brand Identity & Packaging Exploration
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div>
                <span className="font-semibold text-foreground">Credit: </span>
                <span>Niranjan L — Graphic Designer</span>
              </div>
              <div className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-border" />
              <div>
                <span className="font-semibold text-foreground">Context: </span>
                <span>Design Assessment for Bumbblebee Branding Company</span>
              </div>
            </div>

            {/* Assessment Disclaimer Notice */}
            <div className="p-4 md:p-5 rounded-2xl border border-border/60 bg-background/80 text-xs text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              <p className="flex items-center justify-center gap-2 font-semibold text-foreground mb-1">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Design Assessment Disclaimer
              </p>
              This case study presents concept explorations developed as part of a professional graphic design assessment for Bumbblebee Branding Company. These concepts were created for evaluation purposes and do not represent commercially manufactured products or live client engagements.
            </div>

            {/* Navigation Actions */}
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/design-assignments"
                className="px-6 py-3 rounded-full text-sm font-semibold border border-border bg-background hover:bg-muted/50 transition-colors inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Design Assignments
              </Link>
              <Link
                href="/#work"
                className="px-6 py-3 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                View All Portfolio Work
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </main>

      {/* =================================================================== */}
      {/* FULL-SCREEN LIGHTBOX MODAL                                          */}
      {/* =================================================================== */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Lightbox Header */}
            <div
              className="flex items-center justify-between z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-white space-y-0.5">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                  {galleryItems[lightboxIndex].direction || "Image View"} ({lightboxIndex + 1} / {galleryItems.length})
                </span>
                <h3 className="text-base md:text-lg font-bold">
                  {galleryItems[lightboxIndex].title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close image viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Main Stage */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={prevLightbox}
                className="absolute left-2 md:left-6 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/15 transition-colors z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="relative w-full max-w-5xl h-[70vh] md:h-[80vh] rounded-2xl overflow-hidden">
                <Image
                  src={galleryItems[lightboxIndex].src}
                  alt={galleryItems[lightboxIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <button
                onClick={nextLightbox}
                className="absolute right-2 md:right-6 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/15 transition-colors z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Footer */}
            <div
              className="text-center text-xs text-neutral-400 z-10 space-y-1"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-neutral-300 font-medium max-w-2xl mx-auto">
                {galleryItems[lightboxIndex].caption}
              </p>
              <p className="text-[11px] text-neutral-500">
                Click outside or press Escape to close • Use ← / → to navigate
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
