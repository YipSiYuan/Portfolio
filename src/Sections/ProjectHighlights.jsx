import React, { useRef, useState } from "react";
import {
  Reorder,
  useMotionValue,
  useTransform,
  useVelocity,
  useSpring,
} from "framer-motion";

import { TheQuackeningCard } from "../Components/UICards/TheQuackeningCard";
import { MindWarriorCard } from "../Components/UICards/MindWarriorCard";
import { EnchantedBites } from "../Components/UICards/EnchantedBites";
import Button from "../Components/Button";

const initialCards = [
  { id: "quackening", node: <TheQuackeningCard /> },
  { id: "mindwarrior", node: <MindWarriorCard /> },
  { id: "enchantedbites", node: <EnchantedBites /> },
];

// ✅ Draggable item with SMOOTHED (lerped) velocity-based tilt (no shaking)
function TiltItem({ value, boundsRef, children }) {
  const x = useMotionValue(0);

  // Raw velocity is noisy -> causes shake
  const vxRaw = useVelocity(x);

  // 1) Smooth the velocity (this is the "lerp" feel)
  const vx = useSpring(vxRaw, {
    stiffness: 1200,
    damping: 50,
    mass: 0.6,
  });

  // 2) Map smoothed velocity -> tilt
  // Make the input range bigger to reduce sensitivity (less jitter).
  const rotateZTarget = useTransform(vx, [-1000, 0, 1500], [-20, 0, 20]);
  const rotateYTarget = useTransform(vx, [-1000, 0, 1500], [10, 0, -10]);
  const scaleTarget = useTransform(vx, [-1500, 0, 1500], [1.02, 1, 1.02]);

  // 3) Smooth the rotations themselves (extra anti-snap)
  const rotateZ = useSpring(rotateZTarget, { stiffness: 1600, damping: 22 });
  const rotateY = useSpring(rotateYTarget, { stiffness: 1600, damping: 22 });
  const scale = useSpring(scaleTarget, { stiffness: 180, damping: 20 });

  return (
    <Reorder.Item
      value={value}
      drag="x"
      dragConstraints={boundsRef}
      dragElastic={0.05}
      dragMomentum={false}
      style={{
        x,
        rotateZ,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      whileDrag={{ cursor: "grabbing" }}
      className="shrink-0 snap-start cursor-grab active:cursor-grabbing"
    >
      {children}
    </Reorder.Item>
  );
}

const ProjectHighlights = () => {
  const [cards, setCards] = useState(initialCards);
  const boundsRef = useRef(null);

  return (
    <section className="c-space pt-30">
      <h2 className="text-center text-6xl font-bold" style={{ fontFamily: "jaro" }}>
        Project Highlights
      </h2>
      <div className="flex justify-evenly items-center">
        <div
          ref={boundsRef}
          className="max-w-8xl w-full overflow-x-hidden overflow-y-hidden pt-8 no-scrollbar"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <Reorder.Group
            axis="x"
            values={cards}
            onReorder={setCards}
            className="flex justify-center gap-10 snap-x snap-mandatory"
          >
            {cards.map((card) => (
              <TiltItem key={card.id} value={card} boundsRef={boundsRef}>
                {card.node}
              </TiltItem>
            ))}
          </Reorder.Group>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button title="Go to Projects" href="/projects" />
      </div>
    </section>
  );
};

export default ProjectHighlights;
