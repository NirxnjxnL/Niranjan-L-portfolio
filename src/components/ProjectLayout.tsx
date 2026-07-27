"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { projectsData } from "@/data/projects"

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as const }
}

const ProjectFooter = ({ tools }: { tools?: string[] }) => {
  if (!tools || tools.length === 0) return null;
  return (
    <div className="mt-20 text-center text-sm font-medium text-zinc-500 dark:text-zinc-400">
      Tools Used: {tools.join(' • ')}
    </div>
  );
};

export default function ProjectLayout({ slug }: { slug: string }) {
  const project = projectsData.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-6 bg-background">
        <h1 className="text-4xl font-bold">Project Coming Soon</h1>
        <Link href="/#work" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    )
  }

  // --- COLLECTION LAYOUT (Poster Explorations) ---
  if ('collections' in project) {
    return (
      <div className="min-h-screen bg-background pb-24">
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/#work" className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <p className="font-bold tracking-tight">{project.title}</p>
          </div>
        </nav>

        {/* Header */}
        <section className="pt-40 pb-16 px-6 max-w-4xl mx-auto text-center border-b border-border">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">{project.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8">{project.subtitle}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
          </motion.div>
        </section>

        {/* Collections */}
        <div className="max-w-7xl mx-auto px-6 pt-24 space-y-32">
          {project.collections.map((collection, index) => (
            <motion.section key={index} {...fadeIn} className="space-y-16">
              {/* Collection Header */}
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-4xl font-bold">{collection.title}</h2>
                <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed mx-auto">
                  {collection.description.split('\n').map((line, i) => (
                    line.trim() ? <p key={i}>{line}</p> : <br key={i} />
                  ))}
                </div>
                {/* Skills Tags */}
                <div className="flex flex-wrap justify-center gap-3">
                  {collection.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-4 py-2 rounded-full bg-muted text-sm font-medium border border-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                {collection.items.map((item, iIdx) => (
                  <div key={iIdx} className="space-y-6">
                    <div className="w-full aspect-[4/5] bg-muted rounded-3xl overflow-hidden border border-border flex items-center justify-center bg-neutral-100 dark:bg-neutral-900">
                      <img src={encodeURI(item.image)} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
          
          <motion.section {...fadeIn} className="py-24 text-center max-w-4xl mx-auto border-t border-border">
            <Link href="/#work" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all">
              Back to Gallery
            </Link>
          </motion.section>
          
          <ProjectFooter tools={project.tools} />
        </div>
      </div>
    )
  }

  // --- STANDARD LAYOUT (Lavender Lily) ---
  if ('sections' in project) {
    return (
      <div className="min-h-screen bg-background pb-24">
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/#work" className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <p className="font-bold tracking-tight">{project.title}</p>
          </div>
        </nav>

        <section className="relative w-full h-screen bg-muted flex items-end justify-center pb-24 overflow-hidden">
          {project.heroImage ? (
            <img src={encodeURI(project.heroImage)} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse flex items-center justify-center">
                 <span className="text-muted-foreground font-medium uppercase tracking-widest">Hero Image Placeholder</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 text-center max-w-4xl px-6"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">{project.title}</h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">{project.subtitle}</p>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-6 pt-24 space-y-32">
          {/* 4-Column Project Info Grid */}
          <motion.section {...fadeIn}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-y border-border py-12">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-2">Role</p>
                <p className="font-medium">{project.role}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-2">Industry</p>
                <p className="font-medium">{project.industry}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-2">Timeline</p>
                <p className="font-medium">{project.timeline}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-2">Deliverables</p>
                <p className="font-medium leading-relaxed">{project.deliverables}</p>
              </div>
            </div>
          </motion.section>

          {/* Dynamic Sections */}
          {project.sections.map((section, index) => (
            <div key={index} className="space-y-16">
              <motion.section {...fadeIn} className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">{section.title}</h2>
                <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
                  {section.content.map((paragraph, pIndex) => {
                    const formatBold = (text: string) => {
                      const parts = text.split(/(\*\*.*?\*\*)/g);
                      return parts.map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={i} className="text-foreground">{part.slice(2, -2)}</strong>;
                        }
                        return part;
                      });
                    };
                    return <p key={pIndex} className="mb-6">{formatBold(paragraph)}</p>;
                  })}
                </div>
              </motion.section>

              {/* Optional Image Placeholders (Fallback) */}
              {section.imagePlaceholder && (
                <motion.section {...fadeIn} className="w-full aspect-[16/9] md:aspect-[21/9] bg-muted rounded-3xl overflow-hidden border border-border">
                  <div className="w-full h-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                    <span className="text-muted-foreground font-medium uppercase tracking-widest px-6 text-center">{section.imagePlaceholder}</span>
                  </div>
                </motion.section>
              )}

              {section.fullWidthImagePlaceholder && (
                <motion.section {...fadeIn} className="w-full aspect-[4/3] md:aspect-[21/9] bg-muted rounded-3xl overflow-hidden border border-border">
                  <div className="w-full h-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                    <span className="text-muted-foreground font-medium uppercase tracking-widest px-6 text-center">{section.fullWidthImagePlaceholder}</span>
                  </div>
                </motion.section>
              )}

              {/* Actual Full Width Image */}
              {section.fullWidthImage && (
                <motion.section {...fadeIn} className="w-full max-w-6xl mx-auto">
                  <img src={encodeURI(section.fullWidthImage)} alt={section.title} className="w-full h-auto rounded-3xl object-contain border border-border bg-white dark:bg-neutral-900" />
                </motion.section>
              )}

              {/* Actual Grid Images */}
              {section.images && section.images.length > 0 && (
                <motion.section {...fadeIn} className={`grid grid-cols-1 ${section.images.length > 1 ? 'md:grid-cols-2' : ''} gap-8 max-w-6xl mx-auto`}>
                  {section.images.map((img, imgIndex) => (
                    <img key={imgIndex} src={encodeURI(img)} alt={`${section.title} ${imgIndex + 1}`} className="w-full h-auto rounded-3xl object-contain border border-border bg-white dark:bg-neutral-900" />
                  ))}
                </motion.section>
              )}
              {/* Social Layout (Main Mockup + Grid) */}
              {section.mainMockup && section.socialPosts && (
                <motion.section {...fadeIn} className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto items-start">
                  <div className="w-full md:max-w-sm shrink-0">
                    <img src={encodeURI(section.mainMockup)} alt={`${section.title} Main Mockup`} className="w-full h-auto rounded-3xl object-contain border border-border bg-white dark:bg-neutral-900" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {section.socialPosts.map((post, postIndex) => (
                      <img key={postIndex} src={encodeURI(post)} alt={`${section.title} Post ${postIndex + 1}`} className="w-full h-auto rounded-xl object-contain border border-border bg-white dark:bg-neutral-900" />
                    ))}
                  </div>
                </motion.section>
              )}
            </div>
          ))}
          
          {/* Final Statement & CTA */}
          <motion.section {...fadeIn} className="py-24 text-center max-w-4xl mx-auto border-t border-border">
            {project.finalStatement && (
              <h3 className="text-2xl md:text-4xl font-medium leading-relaxed mb-12 italic text-muted-foreground">
                "{project.finalStatement}"
              </h3>
            )}
            <Link href="/#work" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all">
              Back to Gallery
            </Link>
          </motion.section>
          
          <ProjectFooter tools={project.tools} />
        </div>
      </div>
    )
  }

  // --- EDITORIAL LAYOUT (Pulse Fit) ---
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/#work" className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <p className="font-bold tracking-tight">{project.title}</p>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative w-full h-screen bg-muted flex items-end justify-center pb-24 overflow-hidden">
        {project.heroImage ? (
          <img src={encodeURI(project.heroImage)} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse flex items-center justify-center" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">{project.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium">{project.subtitle}</p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-24 space-y-32">
        {/* Project Info Overview */}
        <motion.section {...fadeIn}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-border pb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Executive Summary</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.executiveSummary}</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-2">Roles</p>
                <ul className="space-y-1">
                  {project.roles.map(r => <li key={r} className="font-medium">{r}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-2">Deliverables</p>
                <ul className="space-y-1">
                  {project.deliverables.map(d => <li key={d} className="font-medium text-sm">{d}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* The Challenge & Research */}
        <motion.section {...fadeIn} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">{project.theChallenge.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.theChallenge.text}</p>
              <div className="bg-muted p-8 rounded-2xl border-l-4 border-primary">
                <p className="text-xl font-medium italic">"{project.theChallenge.question}"</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Research Insights</h3>
              <ul className="space-y-4">
                {project.research.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-sm">{idx + 1}</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Strategy & Creative Direction */}
        <motion.section {...fadeIn} className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-8 md:p-16 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-10">
              <h2 className="text-3xl font-bold">Brand Strategy</h2>
              <div className="space-y-6">
                <div><strong className="block text-sm uppercase tracking-widest text-muted-foreground mb-1">Vision</strong><p>{project.strategy.vision}</p></div>
                <div><strong className="block text-sm uppercase tracking-widest text-muted-foreground mb-1">Mission</strong><p>{project.strategy.mission}</p></div>
                <div><strong className="block text-sm uppercase tracking-widest text-muted-foreground mb-1">Positioning</strong><p>{project.strategy.positioning}</p></div>
                <div><strong className="block text-sm uppercase tracking-widest text-muted-foreground mb-1">Values</strong><p>{project.strategy.values}</p></div>
                <div><strong className="block text-sm uppercase tracking-widest text-muted-foreground mb-1">Keywords</strong><p>{project.strategy.keywords}</p></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Creative Direction</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.creativeDirection.text}</p>
              <h4 className="font-bold mb-4">Core Objectives:</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {project.creativeDirection.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Concept Development */}
        <motion.section {...fadeIn}>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">{project.conceptDevelopment.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.conceptDevelopment.text}</p>
          </div>
          {project.conceptDevelopment.sketches && project.conceptDevelopment.sketches.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {project.conceptDevelopment.sketches.map((img, i) => (
                <img key={i} src={encodeURI(img)} alt={`Sketch ${i + 1}`} className="w-full rounded-2xl border border-border" />
              ))}
            </div>
          )}
        </motion.section>

        {/* The Concept */}
        <motion.section {...fadeIn} className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{project.theConcept.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.theConcept.text}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img src={encodeURI(project.theConcept.image)} alt="Final Logo Concept" className="w-full rounded-3xl border border-border" />
            </div>
          </div>
        </motion.section>

        {/* Identity System */}
        <motion.section {...fadeIn} className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Color Palette</h3>
              <p className="text-muted-foreground">{project.identitySystem.colorsText}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Typography</h3>
              <p className="text-muted-foreground">{project.identitySystem.typographyText}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Brand Elements</h3>
              <p className="text-muted-foreground">{project.identitySystem.brandElementsText}</p>
            </div>
          </div>
          
          <img src={encodeURI(project.identitySystem.image)} alt="Identity System" className="w-full rounded-3xl border border-border" />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {project.identitySystem.alternateLogos.map((logo, i) => (
              <img key={i} src={encodeURI(logo)} alt={`Alternate Logo ${i + 1}`} className="w-full rounded-2xl border border-border bg-neutral-100 dark:bg-neutral-900" />
            ))}
          </div>
        </motion.section>

        {/* UI/UX Design */}
        {project.uiDesign && (
          <motion.section {...fadeIn} className="max-w-6xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold text-center">UI/UX & App Experience</h2>
            {project.uiDesign.text && (
              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                {project.uiDesign.text}
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.uiDesign.screens.map((screen, idx) => (
                <img key={idx} src={encodeURI(screen)} alt={`UI Screen ${idx + 1}`} className="w-full rounded-[2.5rem] border-4 border-border shadow-xl bg-neutral-100 dark:bg-neutral-900 object-contain" />
              ))}
            </div>
          </motion.section>
        )}

        {/* Applications */}
        {project.applications && (
          <motion.section {...fadeIn} className="max-w-6xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold text-center">Brand Applications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.applications.merch.map((img, i) => (
                <img key={i} src={encodeURI(img)} alt={`Merch ${i + 1}`} className="w-full rounded-2xl border border-border" />
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6">
              {project.applications.environment.map((img, i) => (
                <img key={i} src={encodeURI(img)} alt={`Environment ${i + 1}`} className="w-full rounded-3xl border border-border" />
              ))}
            </div>
          </motion.section>
        )}

        {/* Results */}
        <motion.section {...fadeIn} className="py-24 text-center max-w-4xl mx-auto border-t border-border">
          <h2 className="text-2xl font-bold mb-8">Results & Reflection</h2>
          <h3 className="text-xl md:text-2xl font-medium leading-relaxed mb-8 italic text-foreground">
            "{project.results.outcomes}"
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-12">
            {project.results.reflection}
          </p>
          <Link href="/#work" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all">
            Back to Gallery
          </Link>
        </motion.section>
        
        <ProjectFooter tools={project.tools} />
      </div>
    </div>
  )
}
