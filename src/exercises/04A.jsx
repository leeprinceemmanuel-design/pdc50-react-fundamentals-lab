import React, { useState } from "react";

// 04A: Thank you button
// Task: Display a button labeled "Say thanks". When clicked, show "Thank you!" on the page.

export default function Exercise04A() {
  // Starts as an empty string, so nothing shows before the click.
  const [message, setMessage] = useState("");

  return (
    <main>
      <h1>04A Thank you button</h1>
      {/* onClick gets a function. React runs it only when the button is clicked. */}
      <button onClick={() => setMessage("Thank you!")}>Say thanks</button>
      {/* Only draw the <p> once message has text in it. */}
      {message && <p>{message}</p>}
    </main>
  );
}
