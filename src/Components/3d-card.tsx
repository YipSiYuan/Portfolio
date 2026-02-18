"use client";

import { cn } from "../../lib/utils";
import React, { createContext, useState, useContext, useRef, useEffect } from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  // rAF bookkeeping
  const rafIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const idleParams = useRef({
  baseX: random(-2, 2),
  baseY: random(-2, 2),
  ampX: random(-10, 10),
  ampY: random(-10, 10),
  speed: random(1.2, 1.2),
  phase: random(0, Math.PI * 2), // start offset so not synced
});

  const stopIdle = () => {
    if (rafIdRef.current != null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
  };

  const startIdle = () => {
    stopIdle();

    const el = containerRef.current;
    if (!el) return;

    const tick = (t: number) => {
      // If user is hovering, do nothing (mouse move handler will drive transform)
      if (isMouseEntered) {
        rafIdRef.current = null;
        return;
      }

      if (startTimeRef.current === 0) startTimeRef.current = t;
      const time = (t - startTimeRef.current) / 1000; // seconds

      // Nice slow oscillation
      const p = idleParams.current;
      const rotY = p.baseY + Math.sin(time * p.speed + p.phase) * p.ampY;
      const rotX = p.baseX + Math.cos(time * p.speed + p.phase) * p.ampX;


      el.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);
  };

  // Start idle on mount + whenever hover state changes back to false
  useEffect(() => {
    if (!isMouseEntered) {
      startTimeRef.current = 0;
      startIdle();
    } else {
      stopIdle();
    }

    return () => stopIdle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMouseEntered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1) return;
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;

    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("py-20 flex items-center justify-center", containerClassName)}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

type CardItemProps = {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  [key: string]: any;
};

export const CardItem = React.forwardRef<HTMLDivElement, CardItemProps>(
  (
    {
      as: Tag = "div",
      children,
      className,
      translateX = 0,
      translateY = 0,
      translateZ = 0,
      rotateX = 0,
      rotateY = 0,
      rotateZ = 0,
      ...rest
    },
    ref
  ) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const resolvedRef =
      (ref as React.MutableRefObject<HTMLDivElement | null>) || innerRef;

    const [isMouseEntered] = useMouseEnter();

    useEffect(() => {
      if (!resolvedRef.current) return;

      if (isMouseEntered) {
        resolvedRef.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px)
          rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
      } else {
        resolvedRef.current.style.transform =
          "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
      }
    }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

    return (
      <Tag
        ref={resolvedRef}
        className={cn("w-fit transition duration-200 ease-linear", className)}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
);

CardItem.displayName = "CardItem";

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
