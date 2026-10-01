import React from "react";

// 06A: Names on the board
// Task: Make an array of three names and show them as list items using map().

const names = ["Ana", "Leo", "Mina"];

export default function Exercise06A() {
  // map() turns each name in the array into one <li>.
  // key={name} works because every name is different.
  return (
    <main>
      <h1>06A Names on the board</h1>
      <ul>
        {names.map(name => <li key={name}>{name}</li>)}
      </ul>
    </main>
  );
}
