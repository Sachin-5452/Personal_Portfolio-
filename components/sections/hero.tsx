"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <p
          className={`mb-4 font-mono text-sm text-primary transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Hi, my name is
        </p>

        <h1
          className={`text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl transition-all duration-700 delay-100 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Sachin P.
        </h1>

        <h2
          className={`mt-2 text-balance text-3xl font-bold leading-tight text-muted-foreground sm:text-4xl lg:text-5xl transition-all duration-700 delay-200 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          I build innovative software solutions.
        </h2>

        <p
          className={`mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg transition-all duration-700 delay-300 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {
            "I'm a Computer Science Engineering student passionate about leveraging technology to solve real-world problems. Specializing in Python, React, and full-stack web development with a keen interest in AI and emerging technologies."
          }
        </p>

        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-[400ms] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <a
            href="#projects"
            className="rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/20"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border px-8 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-[600ms] ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <a href="#about" aria-label="Scroll to about section">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/40 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-primary" />
          </div>
        </a>
      </div>
    </section>
  )
}
