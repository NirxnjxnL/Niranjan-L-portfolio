"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight, Eye, Sparkles, Video, BarChart3, Layers, Palette, Type, Layout } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ThumbnailItem {
  id: string
  title: string
  kannada: string
  rashi: string
  image: string
  series: string
  seriesId: string
}

const featuredThumbnails: ThumbnailItem[] = [
  {
    id: "feat-oct",
    title: "Kanya Rashi — October Horoscope",
    kannada: "ಕನ್ಯಾ ರಾಶಿ",
    rashi: "Virgo",
    image: "/images/mythili-miracle/featured/october-kanya.webp",
    series: "October 2026 Horoscope",
    seriesId: "october",
  },
  {
    id: "feat-nov",
    title: "Dhanu Rashi — November Horoscope",
    kannada: "ಧನು ರಾಶಿ",
    rashi: "Sagittarius",
    image: "/images/mythili-miracle/featured/november-dhanu.webp",
    series: "November 2026 Horoscope",
    seriesId: "november",
  },
  {
    id: "feat-guru",
    title: "Mithuna Rashi — Guru Transit",
    kannada: "ಮಿಥುನ ರಾಶಿ",
    rashi: "Gemini",
    image: "/images/mythili-miracle/featured/guru-mithuna.webp",
    series: "Guru Transit 2026",
    seriesId: "guru-transit",
  },
]

const rashiList = [
  { slug: "mesha", kannada: "ಮೇಷ", english: "Aries" },
  { slug: "vrishaba", kannada: "ವೃಷಭ", english: "Taurus" },
  { slug: "mithuna", kannada: "ಮಿಥುನ", english: "Gemini" },
  { slug: "kataka", kannada: "ಕಟಕ", english: "Cancer" },
  { slug: "simha", kannada: "ಸಿಂಹ", english: "Leo" },
  { slug: "kanya", kannada: "ಕನ್ಯಾ", english: "Virgo" },
  { slug: "thula", kannada: "ತುಲಾ", english: "Libra" },
  { slug: "vrushchika", kannada: "ವೃಶ್ಚಿಕ", english: "Scorpio" },
  { slug: "dhanu", kannada: "ಧನು", english: "Sagittarius" },
  { slug: "makara", kannada: "ಮಕರ", english: "Capricorn" },
  { slug: "kumba", kannada: "ಕುಂಭ", english: "Aquarius" },
  { slug: "meena", kannada: "ಮೀನ", english: "Pisces" },
]

const octoberThumbnails: ThumbnailItem[] = rashiList.map((r) => ({
  id: `oct-${r.slug}`,
  title: `${r.english} (${r.kannada} ರಾಶಿ)`,
  kannada: `${r.kannada} ರಾಶಿ`,
  rashi: r.english,
  image: `/images/mythili-miracle/october/${r.slug}.webp`,
  series: "October 2026 Horoscope",
  seriesId: "october",
}))

const novemberThumbnails: ThumbnailItem[] = rashiList.map((r) => ({
  id: `nov-${r.slug}`,
  title: `${r.english} (${r.kannada} ರಾಶಿ)`,
  kannada: `${r.kannada} ರಾಶಿ`,
  rashi: r.english,
  image: `/images/mythili-miracle/november/${r.slug}.webp`,
  series: "November 2026 Horoscope",
  seriesId: "november",
}))

const guruTransitThumbnails: ThumbnailItem[] = rashiList.map((r) => ({
  id: `guru-${r.slug}`,
  title: `${r.english} (${r.kannada} ರಾಶಿ)`,
  kannada: `${r.kannada} ರಾಶಿ`,
  rashi: r.english,
  image: `/images/mythili-miracle/guru-transit/${r.slug}.webp`,
  series: "Guru Transit 2026",
  seriesId: "guru-transit",
}))

const allGalleryThumbnails = [...octoberThumbnails, ...novemberThumbnails, ...guruTransitThumbnails]

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
}

export default function MythiliMiracleLayout() {
  const [activeSeries, setActiveSeries] = useState<string>("all")
  const [expandedSeries, setExpandedSeries] = useState<{ [key: string]: boolean }>({
    october: false,
    november: false,
    "guru-transit": false,
  })
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const toggleExpand = (seriesId: string) => {
    setExpandedSeries((prev) => ({
      ...prev,
      [seriesId]: !prev[seriesId],
    }))
  }

  const openLightbox = (item: ThumbnailItem) => {
    const idx = allGalleryThumbnails.findIndex((t) => t.id === item.id)
    if (idx !== -1) {
      setLightboxIndex(idx)
    }
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const nextLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % allGalleryThumbnails.length)
    }
  }, [lightboxIndex])

  const prevLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + allGalleryThumbnails.length) % allGalleryThumbnails.length)
    }
  }, [lightboxIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") nextLightbox()
      if (e.key === "ArrowLeft") prevLightbox()
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
  }, [lightboxIndex, nextLightbox, prevLightbox])

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 selection:bg-purple-500/30">
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
            <span className="hidden sm:inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
              Ongoing Freelance
            </span>
            <p className="font-bold tracking-tight">Mythili Miracle</p>
          </div>
        </div>
      </nav>

      {/* SECTION A — PROJECT HERO */}
      <section className="relative pt-32 pb-16 md:pb-20 overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/20 via-background to-background" />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-xs font-medium uppercase tracking-wider text-muted-foreground mb-5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              YouTube Thumbnail Design & Video Editing
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-3">
              Mythili Miracle
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              YouTube Thumbnail Design & Video Editing
            </p>
          </motion.div>

          {/* Project Metadata Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-border mb-12 text-sm"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Category</p>
              <p className="font-medium">YouTube Thumbnails & Video Editing</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Type</p>
              <p className="font-medium">Ongoing Freelance Work</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Duration</p>
              <p className="font-medium">October 2026 – Present</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Software</p>
              <p className="font-medium">Photoshop, Canva, VN Editor</p>
            </div>
          </motion.div>

          {/* Hero Cover: Official Channel Identity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl"
          >
            <div className="relative aspect-[16/9] w-full max-h-[520px] overflow-hidden bg-neutral-950 flex items-center justify-center">
              <Image
                src="/images/mythili-miracle/cover.webp"
                alt="Mythili Miracle Channel Identity"
                fill
                priority
                className="object-contain md:object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white/90">
                <span className="font-semibold uppercase tracking-wider bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                  Channel Identity & Astrological Visual Theme
                </span>
                <span className="hidden sm:inline bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-neutral-300">
                  Kannada Typography • Celestial Compass • Cosmic Atmosphere
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <motion.div {...fadeIn} className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Project Overview</h2>
          <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-3">
            <p>
              Mythili Miracle is a Kannada astrology YouTube channel that publishes monthly horoscope predictions, zodiac-specific videos, and astrology-related content.
            </p>
            <p>
              My responsibilities include creating thumbnails for its videos and editing video content. I design consistent visual themes for different content series and adapt each theme across the 12 zodiac signs using Kannada typography, zodiac symbols, presenter images, astrological illustrations, lighting effects, and cosmic backgrounds.
            </p>
            <p>
              Alongside thumbnail design, I edit video content for the channel using VN Video Editor.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION C — FEATURED THUMBNAILS (16:9 Showcase) */}
      <section className="py-16 border-t border-border bg-neutral-50/50 dark:bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">Series Representation</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Featured Thumbnails</h2>
            <p className="text-muted-foreground text-base">
              Three representative thumbnail designs showcasing the distinct visual direction created for each major series.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredThumbnails.map((item, idx) => (
              <motion.div
                key={item.id}
                {...fadeIn}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-border bg-background hover:border-primary/40 transition-all duration-300 hover:shadow-md"
                onClick={() => openLightbox(item)}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-xs font-medium text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5" />
                    Preview
                  </div>
                </div>
                <div className="p-4 border-t border-border">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider block mb-1">
                    {item.series}
                  </span>
                  <h3 className="text-base font-bold mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    Original 16:9 proportion with native Kannada typography and series color styling.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION B — COMPLETE THUMBNAIL COLLECTIONS (3 Preview Thumbnails + Expandable) */}
      <section className="py-16 max-w-7xl mx-auto px-6 border-t border-border">
        <motion.div {...fadeIn} className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">Full Collections</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Thumbnail Series</h2>
          <p className="text-muted-foreground text-base">
            All 36 completed thumbnail designs organised by series, systematically adapted across the 12 zodiac signs.
          </p>
        </motion.div>

        {/* Series Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveSeries("all")}
            className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
              activeSeries === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
            }`}
          >
            All Collections (36)
          </button>
          <button
            onClick={() => setActiveSeries("october")}
            className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
              activeSeries === "october"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
            }`}
          >
            October 2026 (12)
          </button>
          <button
            onClick={() => setActiveSeries("november")}
            className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
              activeSeries === "november"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
            }`}
          >
            November 2026 (12)
          </button>
          <button
            onClick={() => setActiveSeries("guru-transit")}
            className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
              activeSeries === "guru-transit"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
            }`}
          >
            Guru Transit 2026 (12)
          </button>
        </div>

        {/* SERIES 1: OCTOBER 2026 */}
        {(activeSeries === "all" || activeSeries === "october") && (
          <div className="mb-14 rounded-3xl border border-border p-6 md:p-8 bg-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-5 border-b border-border">
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-500/10 text-blue-500 mb-1.5">
                  Series 1
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">October 2026 Horoscope</h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 max-w-2xl">
                  Dark blue and purple cosmic background • Gold astrological detailing • Presenter in an orange saree • Kannada text and zodiac symbols • 12 zodiac variations.
                </p>
              </div>
            </div>

            {/* Grid: 3 previews when collapsed, all 12 when expanded */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(expandedSeries["october"] ? octoberThumbnails : octoberThumbnails.slice(0, 3)).map((item) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item)}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-border bg-background hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                    </div>
                  </div>
                  <div className="p-3 flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground">{item.rashi}</span>
                    <span className="text-muted-foreground font-medium">{item.kannada}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* View All / Show Less Button */}
            <div className="mt-6 text-center">
              <button
                onClick={() => toggleExpand("october")}
                className="inline-flex items-center gap-2 text-xs md:text-sm font-medium px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 border border-border transition-colors"
              >
                {expandedSeries["october"] ? (
                  <>
                    <span>Show less</span>
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>October 2026 — View all thumbnails (12)</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* SERIES 2: NOVEMBER 2026 */}
        {(activeSeries === "all" || activeSeries === "november") && (
          <div className="mb-14 rounded-3xl border border-border p-6 md:p-8 bg-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-5 border-b border-border">
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-indigo-500/10 text-indigo-500 mb-1.5">
                  Series 2
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">November 2026 Horoscope</h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 max-w-2xl">
                  Blue-purple astrology-themed background • Golden zodiac wheel and celestial elements • Presenter in a green and red saree • Kannada typography • 12 zodiac variations.
                </p>
              </div>
            </div>

            {/* Grid: 3 previews when collapsed, all 12 when expanded */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(expandedSeries["november"] ? novemberThumbnails : novemberThumbnails.slice(0, 3)).map((item) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item)}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-border bg-background hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                    </div>
                  </div>
                  <div className="p-3 flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground">{item.rashi}</span>
                    <span className="text-muted-foreground font-medium">{item.kannada}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* View All / Show Less Button */}
            <div className="mt-6 text-center">
              <button
                onClick={() => toggleExpand("november")}
                className="inline-flex items-center gap-2 text-xs md:text-sm font-medium px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 border border-border transition-colors"
              >
                {expandedSeries["november"] ? (
                  <>
                    <span>Show less</span>
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>November 2026 — View all thumbnails (12)</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* SERIES 3: GURU TRANSIT 2026 */}
        {(activeSeries === "all" || activeSeries === "guru-transit") && (
          <div className="rounded-3xl border border-border p-6 md:p-8 bg-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-5 border-b border-border">
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-amber-500/10 text-amber-500 mb-1.5">
                  Series 3
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">Guru Transit 2026</h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 max-w-2xl">
                  Warm golden and orange visual theme • Religious and astrological imagery • Presenter in a maroon-and-green saree • Kannada typography • 12 zodiac variations.
                </p>
              </div>
            </div>

            {/* Grid: 3 previews when collapsed, all 12 when expanded */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(expandedSeries["guru-transit"] ? guruTransitThumbnails : guruTransitThumbnails.slice(0, 3)).map((item) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item)}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-border bg-background hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                    </div>
                  </div>
                  <div className="p-3 flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground">{item.rashi}</span>
                    <span className="text-muted-foreground font-medium">{item.kannada}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* View All / Show Less Button */}
            <div className="mt-6 text-center">
              <button
                onClick={() => toggleExpand("guru-transit")}
                className="inline-flex items-center gap-2 text-xs md:text-sm font-medium px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 border border-border transition-colors"
              >
                {expandedSeries["guru-transit"] ? (
                  <>
                    <span>Show less</span>
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>Guru Transit 2026 — View all thumbnails (12)</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </section>

      {/* SECTION D — DESIGN PROCESS (4 Concise Topics) */}
      <section className="py-16 border-t border-border bg-neutral-50/50 dark:bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">Process</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Design Approach</h2>
            <p className="text-muted-foreground text-base">
              Key principles applied to maintain visual identity across high-volume YouTube publishing.
            </p>
          </motion.div>

          {/* 4 Concise Topics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.05 }} className="p-6 rounded-2xl border border-border bg-card">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Visual Themes</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Created distinct color palettes and celestial visual themes for monthly and astrology-specific content series.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }} className="p-6 rounded-2xl border border-border bg-card">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Type className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Kannada Typography</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Used Kannada typography to establish clear information hierarchy between transit titles and individual zodiac names.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }} className="p-6 rounded-2xl border border-border bg-card">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Zodiac Adaptation</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Adapted each thumbnail to its individual Rashi while maintaining visual consistency across the 12 signs.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }} className="p-6 rounded-2xl border border-border bg-card">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Composition</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Combined presenter images, zodiac symbols, and cosmic imagery with high contrast for mobile YouTube feed visibility.
              </p>
            </motion.div>
          </div>

          {/* Visual System Asset Breakdown (With Full 16:9 Thumbnail Example) */}
          <motion.div {...fadeIn} className="rounded-3xl border border-border p-6 md:p-10 bg-background">
            <h3 className="text-xl font-bold mb-2">Visual System Breakdown</h3>
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
              Showing how background art and presenter cutouts assemble into the final completed thumbnail design.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <div className="space-y-2">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border bg-neutral-900">
                  <Image
                    src="/images/mythili-miracle/process/guru-transit-bg.webp"
                    alt="Celestial background art asset"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">01. Celestial Art Asset</p>
                <p className="text-xs text-muted-foreground">Background artwork prepared for the series theme.</p>
              </div>

              <div className="space-y-2">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border bg-neutral-900">
                  <Image
                    src="/images/mythili-miracle/process/presenter-green-red.webp"
                    alt="Presenter cutout asset"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">02. Presenter Cutout</p>
                <p className="text-xs text-muted-foreground">Standardized high-resolution presenter cutouts.</p>
              </div>

              <div className="space-y-2">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border bg-neutral-900 shadow-md">
                  <Image
                    src="/images/mythili-miracle/featured/guru-mithuna.webp"
                    alt="Full completed 16:9 thumbnail design"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">03. Completed 16:9 Thumbnail</p>
                <p className="text-xs text-muted-foreground">Fully assembled thumbnail with Kannada typography.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION E — VIDEO EDITING */}
      <section className="py-16 max-w-7xl mx-auto px-6 border-t border-border">
        <motion.div {...fadeIn} className="max-w-3xl mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">Post-Production</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Video Editing</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Alongside thumbnail design, I edit video content for Mythili Miracle using VN Video Editor, supporting the presentation of the channel&apos;s Kannada astrology videos.
          </p>
        </motion.div>

        {/* Video Editing Scope */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }} className="p-6 md:p-8 rounded-2xl border border-border bg-card">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Video Assembly & Formatting</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Trimming presenter takes, pacing video delivery, and structuring episode segments using VN Video Editor.
            </p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }} className="p-6 md:p-8 rounded-2xl border border-border bg-card">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">On-Screen Graphics & Labels</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Placing Kannada titles, zodiac name overlays, and contact details throughout the video presentation.
            </p>
          </motion.div>
        </div>

        {/* Video Embed Readiness */}
        <motion.div {...fadeIn} className="p-6 rounded-2xl border border-border bg-neutral-50 dark:bg-neutral-900/40 text-center">
          <p className="text-xs text-muted-foreground italic">
            Representative video edits produced for Mythili Miracle using VN Video Editor. Embedded video links will be attached once approved for publication.
          </p>
        </motion.div>
      </section>

      {/* SECTION F — CHANNEL ANALYTICS */}
      <section className="py-16 border-t border-border bg-neutral-50/50 dark:bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider mb-2.5">
              <BarChart3 className="w-3.5 h-3.5" />
              Reporting Period: November 2026, 28-day period
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Channel Performance</h2>
            <p className="text-muted-foreground text-base">
              Recorded channel-wide analytics during the reporting period.
            </p>
          </motion.div>

          {/* 4 Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.05 }} className="p-6 rounded-2xl border border-border bg-card">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">Video Views</p>
              <p className="text-3xl lg:text-4xl font-black tracking-tight text-foreground">76.1K</p>
              <p className="text-xs text-muted-foreground mt-1.5">Channel video plays</p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }} className="p-6 rounded-2xl border border-border bg-card">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">Thumbnail Impressions</p>
              <p className="text-3xl lg:text-4xl font-black tracking-tight text-foreground">309.4K</p>
              <p className="text-xs text-muted-foreground mt-1.5">YouTube feed impressions</p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }} className="p-6 rounded-2xl border border-border bg-card">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">Impressions CTR</p>
              <p className="text-3xl lg:text-4xl font-black tracking-tight text-foreground">7.3%</p>
              <p className="text-xs text-muted-foreground mt-1.5">Click-through rate</p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }} className="p-6 rounded-2xl border border-border bg-card">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">Top Video Views</p>
              <p className="text-3xl lg:text-4xl font-black tracking-tight text-foreground">~12.3K</p>
              <p className="text-xs text-muted-foreground mt-1.5">Top-performing video</p>
            </motion.div>
          </div>

          {/* Mandatory Disclaimer */}
          <motion.div {...fadeIn} className="max-w-4xl mx-auto p-5 rounded-2xl border border-border bg-background text-center">
            <p className="text-xs md:text-sm text-muted-foreground italic leading-relaxed">
              &ldquo;These figures represent overall channel performance during the reporting period and are not attributable solely to thumbnail design or video editing.&rdquo;
            </p>
          </motion.div>
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
          Tools Used: Adobe Photoshop • Canva • VN Video Editor
        </p>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between text-white z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <p className="text-xs text-neutral-400 font-medium">
                  {allGalleryThumbnails[lightboxIndex].series}
                </p>
                <h3 className="text-base md:text-xl font-bold">
                  {allGalleryThumbnails[lightboxIndex].rashi} Rashi (
                  {allGalleryThumbnails[lightboxIndex].kannada})
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-neutral-400 font-mono">
                  {lightboxIndex + 1} / {allGalleryThumbnails.length}
                </span>
                <button
                  onClick={closeLightbox}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image */}
            <div
              className="relative flex-1 flex items-center justify-center my-3 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={prevLightbox}
                className="absolute left-2 md:left-6 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 transition-colors z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="relative w-full max-w-5xl aspect-[16/9] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={allGalleryThumbnails[lightboxIndex].image}
                  alt={allGalleryThumbnails[lightboxIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <button
                onClick={nextLightbox}
                className="absolute right-2 md:right-6 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 transition-colors z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Footer */}
            <div
              className="text-center text-xs text-neutral-400 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              Use arrow keys or click buttons to navigate • Press ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
