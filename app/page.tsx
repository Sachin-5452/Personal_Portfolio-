import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Education } from "@/components/sections/education"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { SideElements } from "@/components/sections/side-elements"

export default function Page() {
  return (
    <>
      <Navbar />
      <SideElements />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
