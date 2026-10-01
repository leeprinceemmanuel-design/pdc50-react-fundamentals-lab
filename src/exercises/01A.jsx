import React from "react";

// 01A: Welcome message
// Task: Make a component that shows the heading "Welcome to React" and a paragraph with your first name.

export default function Exercise01A() {
  // A component is a function that returns JSX.
  // <main> wraps both elements so the function returns one outer element.
  return (
    <main>
      <h1>Welcome to React</h1>
      <p>My name is Prince.</p>
    </main>
  );
}
