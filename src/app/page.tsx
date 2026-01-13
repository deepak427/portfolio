import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-primary/20 bg-background text-foreground">
      <div className="noise-bg" />
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />

      <footer className="py-12 text-center text-muted-foreground text-sm border-t border-border bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-medium">&copy; {new Date().getFullYear()} Deepak Singh. Made with ❤️</p>
            <div className="flex items-center gap-6">
              <a
                href="/Resume-Dec-End-2025.pdf"
                download="Deepak_Singh_Resume_2025.pdf"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Download Resume
              </a>
              <a
                href="mailto:negid0253@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
