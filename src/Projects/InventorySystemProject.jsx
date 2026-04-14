import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/Footer";
import WavyText from "../Components/WavyText";
import { DotBackgroundGrid } from "../Components/DotBackgroundGrid";

export default function ProjectShowcase() {
  const project = {
    title: "Tetris style inventory system",
    tagline:
      "Creation of unity assets to be used for future projects",
    role: "Asset Designer & programmer",
    timeline: "2 months++",
    tools: ["Unity", "C#", "Still in progress"],
    liveUrl: "",
    repoUrl: "",
    heroImage: `assets/Gallery/inventory-screenshot (1).png`,
    demoVideo: "https://www.youtube.com/embed/__Y_vJaJ2r0", 
    overview:
      "I wanted to create an asset that could maybe be sold on the unity assets store. The reason i chose a inventory assets was due to it having a demand and not having much good assets on it in the store.",
    goals: [
      "Create a tetris style inventory",
      "Simple setup of inventory if were to be imported",
      "intuative UI in inspector and settings",
    ],
   features: [
  {
    title: "Configurable Inventory Grid",
    desc: "Grid width, height, padding, and slot behavior are fully configurable through exposed parameters, allowing rapid iteration without modifying core logic.",
  },
  {
    title: "Data-Driven Item System",
    desc: "Items are defined using data assets that specify properties such as grid size and tags. The inventory system automatically handles sizing and validation.",
  },
  {
    title: "Event-Driven Interaction",
    desc: "Items support modular interaction through an event subscription system, enabling flexible behaviors without tightly coupling gameplay logic.",
  },
    ],
   challenges: [
  {
    problem: "Accurate item positioning within the grid-based inventory UI",
    solution:
      "Items needed to snap precisely to grid slots while maintaining correct local positioning relative to the parent container. I resolved this by standardizing item anchors and calculating positions based on grid coordinates rather than relying on manual transform adjustments. This eliminated offset inconsistencies and ensured consistent placement.",
  },
  {
    problem: "Validating multi-slot item placement",
    solution:
      "Handling items larger than 1x1 grid size required validating multiple slots simultaneously. I implemented a helper validation system that checks all required grid cells before allowing placement, preventing overlap and ensuring reliable inventory state management.",
  },
],
learned: [
  {
    LearningPoint: "Custom Editor Development (UnityEditor)",
    Description:
      "Through this project, I gained experience extending Unity’s Editor base class to create custom inspector tools. This allowed me to streamline workflows and expose configurable parameters more efficiently, improving usability during development.",
  },
  {
    LearningPoint: "Programmatic Grid Systems",
    Description:
      "I learned how to construct and manage grid-based systems through code, including coordinate mapping and spatial validation. This strengthened my understanding of 2D spatial logic and grid indexing, which I can now implement confidently.",
  },
],
    results: [
      "A inventory system that is very dynamic and customizable",
      "A inventory system that only require a simple drag and drop to set-up",
    ],
    gallery: [
      { label: "Gameplay", src: `assets/Gallery/inventory-screenshot2.png` },
      { label: "Gameplay", src: `assets/Gallery/inventory-screenshot3.png` },
      { label: "Gameplay", src: `assets/Gallery/inventory-screenshot4.png` },
    ],
  };

  return (
    <main className="relative min-h-screen text-white bg-[#030412]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <DotBackgroundGrid />
        {/* vignette for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/45" />
      </div>

      <Navbar />

      {/* Top nav */}
      <header className="mx-auto max-w-6xl px-6 pt-10 relative">
        <div className="flex items-center justify-between">
          <Link
            to="/projects"
            className="text-sm text-white/70 hover:text-white transition"
          >
            ← Back to Projects
          </Link>

          <div className="flex gap-3">
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/5 transition"
              >
                Repo
              </a>
            ) : null}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white text-black px-4 py-2 text-sm hover:opacity-90 transition"
              >
                Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-10 relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
              {project.title}
            </h1>

            <p className="mt-3 text-white/70 text-lg max-w-[65ch] leading-relaxed">
              {project.tagline}
            </p>

            {/* Chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              <Chip variant="role">
                <span className="mr-1 opacity-70">Role:</span>
                <WavyText text={project.role} />
              </Chip>

              <Chip variant="timeline">
                <span className="mr-1 opacity-70">Timeline:</span>
                {project.timeline}
              </Chip>

              {project.tools.map((t) => (
                <Chip key={t} variant="tech">
                  {t}
                </Chip>
              ))}
            </div>

            <h2 className="mt-10 text-xl font-semibold section-title">Overview</h2>
            <p className="mt-3 body-text">{project.overview}</p>

            <h2 className="mt-10 text-xl font-semibold section-title">Goals</h2>
            <ul className="mt-3 grid gap-2 text-white/75 max-w-[70ch]">
              {project.goals.map((g) => (
                <li key={g} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-300/80" />
                  <span className="leading-relaxed">{g}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hero image */}
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_0_40px_rgba(124,108,255,0.12)]">
            <div className="aspect-[16/10] w-full">
              <img
                src={project.heroImage}
                alt={`${project.title} hero`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 pb-12 relative">
        <h2 className="text-2xl font-semibold section-title">Key Features</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {project.features.map((f) => (
            <Card key={f.title} title={f.title} desc={f.desc} />
          ))}
        </div>
      </section>

      {/* Trailer (optional) */}
      {project.demoVideo ? (
        <section className="mx-auto max-w-6xl px-6 pb-12 relative">
          <h2 className="text-2xl font-semibold section-title">Gameplay video</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 overflow-hidden aspect-video shadow-[0_0_40px_rgba(79,209,255,0.10)]">
            <iframe
              className="w-full h-full"
              src={project.demoVideo}
              title={`${project.title} Demo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
      ) : null}

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-6 pb-12 relative">
        <h2 className="text-2xl font-semibold section-title">Gallery</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {project.gallery.map((g) => (
            <div
              key={g.label}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden
                         hover:border-purple-400/30 hover:bg-purple-400/5
                         transition-all duration-300"
            >
              <div className="aspect-[16/10]">
                <img
                  src={g.src}
                  alt={g.label}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="px-4 py-3 text-sm text-white/70">{g.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="mx-auto max-w-6xl px-6 pb-12 relative">
        <h2 className="text-2xl font-semibold section-title">Challenges & Solutions</h2>
        <div className="mt-6 grid gap-4">
          {project.challenges.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition"
            >
              <p className="font-semibold text-red-300">Problem</p>
              <p className="mt-2 text-white/70 leading-relaxed max-w-[80ch]">
                {c.problem}
              </p>

              <p className="mt-5 font-semibold text-purple-300">Solution</p>
              <p className="mt-2 text-white/70 leading-relaxed max-w-[80ch]">
                {c.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning */}
      <section className="mx-auto max-w-6xl px-6 pb-12 relative">
        <h2 className="text-2xl font-semibold section-title">
          What I learned from this project
        </h2>
        <div className="mt-6 grid gap-4">
          {project.learned.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6
                         hover:border-yellow-400/20 hover:bg-yellow-400/5
                         transition-all duration-300"
            >
              <p className="font-semibold text-yellow-300">Learning Point</p>
              <p className="mt-2 text-white/80">{c.LearningPoint}</p>

              <p className="mt-5 font-semibold text-white/90">Description</p>
              <p className="mt-2 text-white/70 leading-relaxed max-w-[80ch]">
                {c.Description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-6xl px-6 pb-16 relative">
        <h2 className="text-2xl font-semibold section-title">Results</h2>
        <ul className="mt-4 grid gap-2">
          {project.results.map((r) => (
            <li key={r} className="flex gap-2 items-start">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-emerald-100/90 leading-relaxed">{r}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} — Project Case Study
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* UI helpers */
function Chip({ children, variant = "default" }) {
  const styles = {
    default: "border-white/15 bg-white/5 text-white/80",
    role: "border-yellow-400/40 bg-yellow-400/10 text-yellow-200",
    tech: "border-cyan-400/40 bg-cyan-400/10 text-cyan-200",
    timeline: "border-purple-400/40 bg-purple-400/10 text-purple-200",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs backdrop-blur ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

function Card({ title, desc }) {
  return (
    <div
      className="rounded-2xl border border-white/10 bg-white/5 p-6
                 hover:border-cyan-400/40 hover:bg-cyan-400/5
                 transition-all duration-300 group"
    >
      <h3 className="text-lg font-semibold text-cyan-200 group-hover:text-cyan-100">
        {title}
      </h3>
      <p className="mt-2 text-white/70 leading-relaxed">{desc}</p>
    </div>
  );
}