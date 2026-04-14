import React from "react";
import { Link } from "react-router-dom";
import { DotBackgroundGrid } from "../Components/DotBackgroundGrid";

const BASE = import.meta.env.BASE_URL;

const projects = [
  {
    id: "Knight Run",
    category: "2D Game development",
    title: "knight Run(2D platformer game)",
    image: `assets/Gallery/2D-knight-screenshot-1.png`,
    href: "/projects/2d-knight",
  },
  {
    id: "Enchanted Bites",
    category: "2D Game Development",
    title: "Enchanted Bites(2D mobile game)",
    image: `assets/ProjectImage/enchantedBites.png`,
    href: "/projects/enchanted-bites",
  },
  {
    id: "The quackening",
    category: "3D Game Development",
    title: "The Quackening(3D Tower Defense)",
    image: `assets/ProjectImage/TheQuackeningCap.png`,
    href: "/projects/the-quackening",
  },
  {
    id: "Terresquall Joystick",
    category: "Asset Creation",
    title: "Terresquall Joystick(2D asset)",
    image: `assets/ProjectImage/boston.png`,
    href: "/projects/joystick",
  },
  {
    id: "Terresquall Vampire survivors",
    category: "Tutorial Series",
    title: "Vampire survivors(Tutorial Series)",
    image: `assets/ProjectImage/boston.png`,
    href: "/projects/vampire-survivors",
  },
  {
    id: "Bak chor",
    category: "Game Development",
    title: "Bak chor(2D game)",
    image: `assets/ProjectImage/boston.png`,
    href: "/projects/bak-chor",
  },
  {
    id: "Tetris style inventory system",
    category: "Asset Creation",
    title: "Tetris style inventory system",
    image: `assets/Gallery/inventory-screenshot (1).png`,
    href: "/projects/tetris-inventory-system",
  },
  {
    id: "Little Goober",
    category: "2D Game Development",
    title: "Little Goober(2D game)",
    image: `assets/Gallery/Goober1.png`,
    href: "/projects/little-goober",
  },
  {
    id: "Mind Warriors: Resilience Rising",
    category: "3D Game Development",
    title: "Mind Warriors: Resilience Rising",
    image: `assets/ProjectImage/MindWarriorsThumbnail.png`,
    href: "/projects/mind-warriors-resilience-rising",
  },
  {
    id: "VR Bartending Simulator",
    category: "VR Game Development",
    title: "VR Bartending Simulator",
    image: `assets/Gallery/Bartender-screenshot1.png`,
    href: "/projects/vr-bartending-game",
  },
  {
    id: "Doom tactical positioning system",
    category: "VR Game Development",
    title: "Doom Tactical Positioning System",
    image: `assets/Gallery/Doom-screenshot.png`,
    href: "/projects/doom-tactical-positioning-system",
  },
  {
    id: "Local multiplayer tank battle",
    category: "VR Game Development",
    title: "Local multiplayer tank battle",
    image: `assets/Gallery/tank1.jpg`,
    href: "/projects/local-multiplayer-tank-battle",
  },
];

const ProjectsBody = () => {
  return (
    <section className="relative min-h-screen w-full to-[#030412] text-white">
      <DotBackgroundGrid />

      <div
        className="absolute top-0 left-0 w-full h-30 md:h-30 lg:h-20 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(to bottom, rgba(3,4,18,0.65), rgba(3,4,18,0))",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="text-center">
          <h1
            className="text-6xl font-bold tracking-tight"
            style={{ fontFamily: "Jaro" }}
          >
            My Projects
          </h1>
          <p className="mt-2 text-lg text-neutral-400">
            Some Of My Distinguished Works
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.id}
              to={p.href}
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/30 backdrop-blur-sm transition
                         hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(124,108,255,0.25)]"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-red-400">
                {p.category}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white/90">
                {p.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsBody;