"use client"

import { SectionHeading } from "@/components/ui/section-heading"
import { useInView } from "@/hooks/use-in-view"

const projects = [
  {
    title: "Food Recommendation Chatbot",
    description:
      "Built an intelligent Python-based chatbot leveraging NLP and third-party APIs to deliver personalized food recommendations, featuring a user-friendly interface with core functionalities like menu suggestions, dietary filtering, and order tracking.",
    tech: ["Python", "NLP", "REST APIs", "Flask", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Automated 3D Visualization from 2D Blueprints",
    description:
      "Pioneered an AI-driven pipeline that transforms flat architectural drawings into immersive, data-accurate 3D models using deep learning, bridging the gap between design concepts and tangible visualization for architects and designers.",
    tech: ["Python", "Deep Learning", "OpenCV", "TensorFlow", "Three.js"],
    github: "https://github.com/Sachin-5452/Automated-3d-vizualization-using-2d-blueprints-.git",
    live: "https://example.com",
    featured: true,
  },
]

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function FeaturedProject({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <div className="group relative grid items-center gap-4 md:grid-cols-12">
      {/* Project image placeholder */}
      <div
        className={`relative overflow-hidden rounded-md md:col-span-7 ${
          isEven ? "md:col-start-1" : "md:col-start-6"
        } md:row-start-1`}
      >
        <div className="aspect-video w-full bg-secondary transition-all duration-300 group-hover:brightness-110">
          <div className="flex h-full items-center justify-center">
            <div className="font-mono text-2xl text-primary/20">
              {project.title}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-primary/5 transition-opacity duration-300 group-hover:opacity-0" />
      </div>

      {/* Project info */}
      <div
        className={`relative z-10 md:col-span-7 md:row-start-1 ${
          isEven
            ? "md:col-start-6 md:text-right"
            : "md:col-start-1 md:text-left"
        }`}
      >
        <p className="mb-1 font-mono text-sm text-primary">Featured Project</p>
        <h3 className="mb-4 text-2xl font-bold text-foreground transition-colors hover:text-primary">
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>
        <div className="rounded-md bg-card border border-border p-6 shadow-lg">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>
        <ul
          className={`mt-4 flex flex-wrap gap-3 font-mono text-xs text-muted-foreground ${
            isEven ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div
          className={`mt-4 flex items-center gap-4 ${
            isEven ? "md:justify-end" : "md:justify-start"
          }`}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GitHubIcon />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="px-6 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <SectionHeading number="04" title="Projects" />

        {/* Featured projects */}
        <div className="space-y-24">
          {projects.map((project, i) => (
            <FeaturedProject key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
