import React, { useState } from "react";

// 07A: Live name greeting
// Task: Create an input labeled "Your name". As the user types, display "Hello, [name]!" below it.

export default function Exercise07A() {
  const [name, setName] = useState("");

  // value={name} makes the input show the state.
  // onChange saves every keystroke back into state, so the greeting updates right away.
  return (
    <main>
      <h1>07A Live name greeting</h1>
      <label htmlFor="name">Your name</label>
      <input
        id="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <p>Hello, {name}!</p>
    </main>
  );
}
