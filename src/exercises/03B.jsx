import React, { useState } from "react";

// 03B: Counter and reset
// Task: Add one button that increases the attendance number by one and another that resets it to zero.

export default function Exercise03B() {
  const [present, setPresent] = useState(0);

  // Add uses the previous value so each click always builds on the latest number.
  function handleAdd() {
    setPresent(previous => previous + 1);
  }

  // Reset does not need the old value, so it sets 0 directly.
  function handleReset() {
    setPresent(0);
  }

  return (
    <main>
      <h1>03B Counter and reset</h1>
      <p>Present: {present}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReset}>Reset</button>
    </main>
  );
}
