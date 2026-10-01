import React, { useState } from "react";

// 04B: Choose a greeting
// Task: Show "Morning" and "Evening" buttons. Clicking either button changes a line of text
// to "Good morning!" or "Good evening!".

export default function Exercise04B() {
  const [greeting, setGreeting] = useState("Pick a time of day.");

  // Both buttons call the same setter, just with a different string.
  return (
    <main>
      <h1>04B Choose a greeting</h1>
      <button onClick={() => setGreeting("Good morning!")}>Morning</button>
      <button onClick={() => setGreeting("Good evening!")}>Evening</button>
      <p>{greeting}</p>
    </main>
  );
}
