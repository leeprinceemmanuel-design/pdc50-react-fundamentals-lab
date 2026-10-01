import React, { useState } from "react";

// 03C: Score with a limit
// Task: Make a score that starts at 0. Each click adds 5, but the score must never go above 20. Add a reset button.

const MAX_SCORE = 20;

export default function Exercise03C() {
  const [score, setScore] = useState(0);

  // Math.min picks the smaller number, so the score stops at 20 even if we keep clicking.
  function handleAdd() {
    setScore(previous => Math.min(previous + 5, MAX_SCORE));
  }

  return (
    <main>
      <h1>03C Score with a limit</h1>
      <p>Score: {score} / {MAX_SCORE}</p>
      <button onClick={handleAdd}>Add 5</button>
      <button onClick={() => setScore(0)}>Reset</button>
    </main>
  );
}
