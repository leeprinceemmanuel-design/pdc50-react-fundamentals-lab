import React from "react";

// 02A: Greeting by name
// Task: Create a Greeting component that accepts a name prop. Render it from the exercise component with name="Ana".

// Child component: it receives the "name" prop from its parent.
function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

// Parent component: it sends name="Ana" down to Greeting.
export default function Exercise02A() {
  return (
    <main>
      <h1>02A Greeting by name</h1>
      <Greeting name="Lee" />
    </main>
  );
}
