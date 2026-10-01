import React from "react";

// 02C: Score badge
// Task: Create ScoreBadge with student and points props. Render one badge for Ana with 18 points
// and another for Leo with 15 points. Change only the passed props to try new values.

function ScoreBadge({ student, points }) {
  return (
    <p style={{ display: "inline-block", background: "#e3eef9", borderRadius: "999px", padding: ".35rem .9rem", marginRight: ".5rem" }}>
      {student}: <strong>{points}</strong> points
    </p>
  );
}

export default function Exercise02C() {
  // Text props use quotes. Number props use curly braces, e.g. points={18}.
  return (
    <main>
      <h1>02C Score badge</h1>
      <ScoreBadge student="Prince" points={18} />
      <ScoreBadge student="Lee" points={15} />
    </main>
  );
}
