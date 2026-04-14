import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/Footer";
import WavyText from "../Components/WavyText";
import { DotBackgroundGrid } from "../Components/DotBackgroundGrid";

export default function ProjectShowcase() {
  const project = {
    title: "Enchanted Bites",
    tagline:
      "A top down 2D shooter where you play as a witch scavanging the wilderness for ingredients to cook for villagers. Face off against wild animals and chat with different NPCs.",
    role: "Team Lead & Gameplay Programmer",
    timeline: "5 months",
    tools: ["Unity", "C#", "URP"],
    liveUrl: "",
    repoUrl: "",
    heroImage: `assets/ProjectImage/enchantedBites.png`,
    demoVideo: "https://www.youtube.com/embed/1kz5HQCLQLw",
    overview:
      "This was a second-year project in my Game Development diploma, where a team of six was tasked to develop a 2D mobile game. I served as the team lead and gameplay programmer, responsible for designing core gameplay systems, coordinating development tasks, and ensuring features were integrated cohesively.",
    goals: [
      "Create a fun and challenging enemy AI that can react to the player and provide a satisfying gameplay experience",
      "Ensure user experience is smooth and intuitive, with good combat feel",
    ],
    features: [
      {
        title: "Boss fights using state machines",
        desc: "Bosses have different phases and attack patterns, making fights more engaging and challenging.",
      },
      {
        title: "Melee and ranged combat",
        desc: "The witch has both melee and ranged options, giving the player more flexibility in combat.",
      },
      {
        title: "Enemy pathfinding",
        desc: "Enemies use context-based steering to navigate around obstacles and chase the player dynamically.",
      },
    ],
    challenges: [
      {
        problem: "Enemies kept running into walls.",
        solution:
          "Our AI originally moved straight toward the player without considering obstacles. After talking to classmates, I learned about context-based steering and implemented it to handle avoidance and movement direction more intelligently.",
      },
      {
        problem: "Sometimes enemies would be outside of camera view.",
        solution:
          "We averaged the player position with nearby enemy positions, then interpolated the camera toward that blended point. This kept action on-screen and improved combat readability.",
      },
    ],
    learned: [
      {
        LearningPoint: "Context-based steering",
        Description:
          "I learned the theory behind context-based steering and implemented it in a way that suited our enemy behaviour. It made a huge improvement to the feel of enemy movement and responsiveness.",
      },
      {
        LearningPoint: "State machines for boss fights",
        Description:
          "I used simple state machines (via Animator) to create boss phases and attack patterns, making fights less predictable and more engaging.",
      },
      {
        LearningPoint: "Project file structure and organization",
        Description:
          "I learned how much a clean folder structure and naming conventions matter for teamwork and speed. I now apply these habits in my personal projects too.",
      },
    ],
    results: [
      "Boss fight with a fun set of moves that challenges the player.",
      "Enemies navigate around the map and chase the player more dynamically and reliably.",
    ],
    gallery: [
      { label: "Boss Fight", src: `assets/Gallery/enchanted-bites-screenshot1.png` },
      { label: "Context Based Steering", src: `assets/Gallery/enchanted-bites-screenshot2.gif` },
      { label: "Gameplay", src: `assets/Gallery/enchanted-bites-screenshot3.gif` },
    ],
  };

  return (
    <main className="relative min-h-screen text-white bg-[#030412]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <DotBackgroundGrid />
        {/* extra soft vignette so text pops */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40" />
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

      {/* Demo video */}
      {project.demoVideo ? (
        <section className="mx-auto max-w-6xl px-6 pb-12 relative">
          <h2 className="text-2xl font-semibold section-title">Trailer</h2>

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
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-purple-400/30 hover:bg-purple-400/5 transition-all duration-300"
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
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-yellow-400/20 hover:bg-yellow-400/5 transition-all duration-300"
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