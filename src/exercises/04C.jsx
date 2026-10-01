import React, { useState } from "react";

// 04C: Cheer counter
// Task: Show a button labeled "Cheer". Each click increases a count.
// When the count reaches three, also show "Great support!".

export default function Exercise04C() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>04C Cheer counter</h1>
      <button onClick={() => setCount(previous => previous + 1)}>Cheer</button>
      <p>Cheers: {count}</p>
      {/* The extra message appears only once count is 3 or more. */}
      {count >= 3 && <p><strong>Great support!</strong></p>}
    </main>
  );
}
