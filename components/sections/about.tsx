"use client"

import { SectionHeading } from "@/components/ui/section-heading"
import { useInView } from "@/hooks/use-in-view"

const technologies = [
  "Python",
  "C/C++",
  "JavaScript",
  "React",
  "SQL / MySQL",
  "MongoDB",
]

export function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="px-6 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <SectionHeading number="01" title="About Me" />

        <div className="grid gap-10 md:grid-cols-5">
          <div className="space-y-4 md:col-span-3">
            <p className="leading-relaxed text-muted-foreground">
              {
                "Hello! I'm Sachin, an innovative and enthusiastic Computer Science Engineering student currently in my 7th semester at Global Academy of Technology, Bengaluru. I'm eager to leverage my strong analytical skills and passion for technology to build impactful software solutions."
              }
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {
                "My journey spans from building intelligent Python-based chatbots with NLP to pioneering AI-driven pipelines that transform 2D architectural drawings into immersive 3D models. I'm passionate about problem-solving, data structures & algorithms, and object-oriented programming."
              }
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {
                "I'm committed to continuous learning and adapting to emerging technologies. My goal is to contribute effectively to innovative projects while further developing my professional skills in full-stack development, AI, and cloud computing."
              }
            </p>

            <p className="mt-6 text-sm text-muted-foreground">
              Here are a few technologies I work with:
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-primary">{">"}</span>
                  <span className="font-mono">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[280px] md:col-span-2">
            <div className="group relative">
              <div className="relative overflow-hidden rounded-md bg-primary/10">
                <div className="aspect-square w-full bg-secondary flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30">SP</div>
                </div>
                <div className="absolute inset-0 bg-primary/10 transition-opacity duration-300 group-hover:opacity-0" />
              </div>
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-md border-2 border-primary transition-all duration-300 group-hover:-bottom-4 group-hover:-right-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
