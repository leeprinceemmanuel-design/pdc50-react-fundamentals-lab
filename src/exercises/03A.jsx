import React, { useState } from "react";

// 03A: Attendance counter
// Task: Use useState(0) for an attendance count. Show "Present: 0" when the page first loads.

export default function Exercise03A() {
  // useState(0) gives the component a value it remembers, starting at 0.
  // present = the current value; setPresent = the function used to change it later.
  const [present, setPresent] = useState(0);

  return (
    <main>
      <h1>03A Attendance counter</h1>
      <p>Present: {present}</p>
    </main>
  );
}
