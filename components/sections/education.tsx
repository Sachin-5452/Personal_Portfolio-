"use client"

import { SectionHeading } from "@/components/ui/section-heading"
import { useInView } from "@/hooks/use-in-view"

const education = [
  {
    degree: "B.E - Information Science",
    institution: "Global Academy of Technology, Bengaluru",
    period: "2022 - Present",
    detail: "CGPA: 7.22",
  },
  {
    degree: "Pre-University (PCMC)",
    institution: "Sri Chaitanya Pre-University College, Bengaluru",
    period: "2020 - 2022",
    detail: "Percentage: 77.83%",
  },
  {
    degree: "Secondary Education",
    institution: "The New Cambridge High School, Bengaluru",
    period: "Completed 2020",
    detail: "Aggregate: 76.64%",
  },
]

function GraduationCapIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-primary"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  )
}

export function Education() {
  const { ref, inView } = useInView()

  return (
    <section id="education" className="px-6 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <SectionHeading number="02" title="Education" />

        <div className="relative ml-4 border-l-2 border-border pl-8">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className="group relative mb-10 last:mb-0"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[calc(2rem+5px)] flex h-3 w-3 items-center justify-center rounded-full border-2 border-primary bg-background transition-all group-hover:scale-125 group-hover:bg-primary" />

              <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <GraduationCapIcon />
                    <h3 className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                  </div>
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-primary">
                    {edu.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.institution}
                </p>
                <p className="mt-2 font-mono text-sm font-medium text-primary/80">
                  {edu.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
