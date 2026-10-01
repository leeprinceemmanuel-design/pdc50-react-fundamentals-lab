import React from "react";

// 06C: Completed tasks
// Task: Create four task objects with id, label, and done values. Show only tasks where done is true.
// Also show how many completed tasks there are.

const tasks = [
  { id: 1, label: "Install Node.js", done: true },
  { id: 2, label: "Run npm install", done: true },
  { id: 3, label: "Finish 07C sign-up form", done: false },
  { id: 4, label: "Take evidence screenshots", done: true },
];

export default function Exercise06C() {
  // filter() makes a NEW array with only the done tasks. The original tasks array is not changed.
  const completed = tasks.filter(task => task.done);

  return (
    <main>
      <h1>06C Completed tasks</h1>
      <p>Completed: {completed.length} of {tasks.length}</p>
      <ul>
        {completed.map(task => <li key={task.id}>{task.label}</li>)}
      </ul>
    </main>
  );
}
