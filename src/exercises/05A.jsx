import React from "react";

// 05A: Room status
// Task: Set const isOpen = true. Show "Room open" when true and "Room closed" when false. Try both values.

export default function Exercise05A() {
  // Test: change true to false, save, and the text switches to "Room closed".
  const isOpen = true;

  // condition ? valueIfTrue : valueIfFalse
  return (
    <main>
      <h1>05A Room status</h1>
      <p>{isOpen ? "Room open" : "Room closed"}</p>
    </main>
  );
}
