"use client"

import { SectionHeading } from "@/components/ui/section-heading"
import { useInView } from "@/hooks/use-in-view"

const skillCategories = [
  {
    title: "Programming & Web",
    skills: [
      { name: "Python", icon: "py" },
      { name: "C/C++", icon: "cpp" },
      { name: "JavaScript", icon: "js" },
      { name: "Java (OOP)", icon: "java" },
      { name: "React", icon: "react" },
      { name: "HTML/CSS", icon: "html" },
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "SQL", icon: "sql" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongo" },
      { name: "AWS Basics", icon: "aws" },
      { name: "Azure Basics", icon: "azure" },
      { name: "DSA", icon: "dsa" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Teamwork", icon: "team" },
      { name: "Adaptability", icon: "adapt" },
      { name: "Time Mgmt", icon: "time" },
      { name: "Eager Learner", icon: "learn" },
      { name: "Problem Solving", icon: "solve" },
      { name: "Communication", icon: "comm" },
    ],
  },
]

function SkillIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, string> = {
    py: "Py",
    cpp: "C+",
    js: "JS",
    java: "Jv",
    react: "Re",
    html: "HT",
    sql: "SQ",
    mysql: "My",
    mongo: "Mo",
    aws: "AW",
    azure: "Az",
    dsa: "DS",
    team: "Tm",
    adapt: "Ad",
    time: "Ti",
    learn: "Lr",
    solve: "Ps",
    comm: "Co",
  }

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 font-mono text-xs font-bold text-primary">
      {iconMap[icon] || icon.slice(0, 2).toUpperCase()}
    </div>
  )
}

export function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="px-6 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <SectionHeading number="03" title="Skills & Technologies" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              style={{ transitionDelay: `${catIdx * 100}ms` }}
            >
              <h3 className="mb-5 text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-secondary"
                  >
                    <SkillIcon icon={skill.icon} />
                    <span className="text-sm text-muted-foreground">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
