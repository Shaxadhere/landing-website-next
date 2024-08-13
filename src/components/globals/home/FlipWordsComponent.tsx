import React from "react";
import { FlipWords } from "../sections/flip-words";

export function FlipWordsComponent() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="text-4xl mx-auto font-normal text-gray-100 dark:text-neutral-400">
      Build
      <FlipWords words={words} /> <br />
      websites with Aceternity UI
    </div>
  );
}
