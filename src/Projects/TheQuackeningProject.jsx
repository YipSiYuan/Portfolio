import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/Footer";
import WavyText from "../Components/WavyText";

export default function ProjectShowcase() {
  const BASE = import.meta.env.BASE_URL;

  const project = {
    title: "The Quackening",
    tagline:
      "A tower defense game where you have to use ducks to defend your base from incoming enemies. Built with Unity and C#.",
    role: "Team Lead & Gameplay Programmer",
    timeline: "5 months",
    tools: ["Unity", "C#", "URP"],
    liveUrl: "",
    repoUrl: "",
    heroImage: `assets/ProjectImage/TheQuackeningCap.png`,
    demoVideo: "https://www.youtube.com/embed/GG2tUVcI8p8",
    overview:
      "This was a major second-year capstone project in my Game Development diploma, where a team of eight developed a 3D tower defense game in Unity using C#. I served as the team lead and gameplay programmer, responsible for designing core gameplay systems, coordinating development tasks, and ensuring features were integrated cohesively. My work focused on implementing different ducks and enemy behaviours.",
    goals: [
      "Create clear progression with waves and upgrades",
      "Create a modular enemy AI system that can be easily expanded",
      "Build a polished experience with attention to visual and gameplay feedback",
    ],
    features: [
      {
        title: "Wave & Spawn System",
        desc: "Configurable wave data and scalable spawning rules for difficulty pacing.",
      },
      {
        title: "Variety of Duck Types",
        desc: "A variety of duck types with unique abilities, allowing for diverse strategies and playstyles.",
      },
      {
        title: "Enemy Targeting AI",
        desc: "Enemies are given a hierachy of targets (ducks, then base) and will switch targets dynamically based on the situation.",
      },
    ],
    challenges: [
      {
        problem:
          "The original Ai system was way too messy and not modular at all, making it hard to add new enemy types/Duck types",
        solution:
          "I recoded the entire enemy and duck AI system using a more modular approach, where each enemy/duck type has its own scriptable object that defines its behaviour and stats. This made it much easier to add new types and tweak existing ones without affecting the rest of the codebase.",
      },
      {
        problem:
          "Enemies originally did not have an target priority system, which made the gameplay feel less strategic and more chaotic.",
        solution:
          "We implemented a target priority system where enemies will prioritize attacking ducks and barricades before targeting the base. This added a layer of strategy, as players had to consider the placement of their ducks and barricades to effectively defend against incoming waves.",
      },
    ],
    learned: [
      {
        LearningPoint:
          "The usage and importance of OOP principles and modular design in game development.",
        Description:
          "Through this project I have learned alot about inheritance, composition and scriptable objects, and how to use them to create a more modular and maintainable codebase. This has been something that i have started applying and have seen the benefits in my personal projects.",
      },
      {
        LearningPoint:
          "Learning how to make a 3D game in Unity and the various tools and features that come with it.",
        Description:
          "This project was the first time I have worked on a 3D game in Unity, and I have learned how to use various tools and features such as the URP, particle system, and post-processing to create a more polished and visually appealing game.",
      },
    {
        LearningPoint:
          "Ballistic trajectory and physics calculations for projectile motion.",
        Description:
          "At first it sounded simple enough to just make the projectile move towards the target, but after doing some research I have learned about ballistic trajectory and how to calculate the initial velocity needed for a projectile to hit a target at a certain distance and height. This was something that I implemented for the duck projectiles and it made the gameplay feel much more satisfying and realistic.",
      },
      {
        LearningPoint:
          "Object Pooling for performance optimization in games.",
        Description:
          "For many of my older projects I would usually simply just spawn a projectile and destroy it after it has done its job. However after I watch some videos on optimization and performance i have learned how spawning and destroying can cause memory to be left in garbage collection, which was where i also learned about object pooling. I tried to implement a simple version for it and manage to get it to work in the project. This was my first exposure to object pooling and would continue to use it in future projects.",
      },
    ],  
    results: [
      "Implementation of new enmies and ducks was 3x faster due to modular design.",
      "Gameplay feel more strategic and less chaotic.",
      "Minor improvement in performance due to object pooling.",
    ],
    gallery: [
      { label: "Gameplay", src: `assets/Gallery/Quackening-screenshot1.png` },
      { label: "Menu encyclopedia", src: `assets/Gallery/Quackening-screenshot2.png` },
      { label: "Gameplay", src: `assets/Gallery/Quackening-screenshot3.png` },
    ],
  };

  return (
    <main className="min-h-screen bg-[#030412] text-white">
      <Navbar />

      {/* Top nav */}
      <header className="mx-auto max-w-6xl px-6 pt-10">
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
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
              {project.title}
            </h1>
            <p className="mt-3 text-white/70 text-lg">{project.tagline}</p>

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

             {project.tools.map(t => (
                <Chip key={t} variant="tech">{t}</Chip>
            ))}
            </div>

            <h2 className="mt-10 text-xl font-semibold">Overview</h2>
            <p className="mt-3 body-text">{project.overview}</p>

            <h2 className="mt-10 text-xl font-semibold">Goals</h2>
            <ul className="mt-3 grid gap-2 text-white/70">
              {project.goals.map((g) => (
                <li key={g} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hero image */}
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
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
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold">Key Features</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {project.features.map((f) => (
            <Card key={f.title} title={f.title} desc={f.desc} />
          ))}
        </div>
      </section>

      {/* Demo video (optional) */}
    {project.demoVideo ? (
  <section className="mx-auto max-w-6xl px-6 pb-12">
    <h2 className="text-2xl font-semibold">Trailer</h2>

    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 overflow-hidden aspect-video">
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
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {project.gallery.map((g) => (
            <div
              key={g.label}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
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
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold">Challenges & Solutions</h2>
        <div className="mt-6 grid gap-4">
          {project.challenges.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="font-semibold text-red-300">Problem</p>
              <p className="mt-2 text-white/70">{c.problem}</p>

              <p className="mt-5 font-semibold text-purple-300">Solution</p>
              <p className="mt-2 text-white/70">{c.solution}</p>
            </div>
          ))}
        </div>
      </section>

         {/* Learning Ponts */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold">What I learned from this project</h2>
        <div className="mt-6 grid gap-4">
          {project.learned.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="font-semibold text-yellow-300">Learning Point</p>
              <p className="mt-2 text-white/70">{c.LearningPoint}</p>

              <p className="mt-5 text-white/90 font-medium">Description</p>
              <p className="mt-2 text-white/70">{c.Description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold">Results</h2>
        <ul className="mt-4 grid gap-2 text-white/70">
          {project.results.map((r) => (
            <li key={r} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>{r}</span>
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
function Chip({ children, variant="default" }) {
  const styles = {
    default:"border-white/15 bg-white/5 text-white/80",
    role:"border-yellow-400/40 bg-yellow-400/10 text-yellow-200",
    tech:"border-cyan-400/40 bg-cyan-400/10 text-cyan-200",
    timeline:"border-purple-400/40 bg-purple-400/10 text-purple-200"
  }

  return (
    <span className={`rounded-full px-3 py-1 text-xs ${styles[variant]}`}>
      {children}
    </span>
  );
}

function Card({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 
                    hover:border-cyan-400/40 hover:bg-neutral-600
                    transition-all duration-300 group">
      <h3 className="text-lg font-semibold text-cyan-200 group-hover:text-cyan-600">
        {title}
      </h3>
      <p className="mt-2 text-white/70 leading-relaxed">{desc}</p>
    </div>
  );
}