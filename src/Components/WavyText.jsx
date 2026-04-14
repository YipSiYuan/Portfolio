import React from "react";

export default function WavyText({ text }) {
  const n = text.length;

  return (
    <span className="font-bold inline-block">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block animate-wave"
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          <span
            className="gold-char"
            style={{ "--i": i, "--n": n }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  );
}