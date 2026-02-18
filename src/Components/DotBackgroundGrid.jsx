import { cn } from "../../lib/utils";
import React from "react";

export function DotBackgroundGrid() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#030412]">
      {/* dots */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:22px_22px]",
          "[background-image:radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)]"
        )}
      />

      {/* fade vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[#030412] [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)]" />
    </div>
  );
}
