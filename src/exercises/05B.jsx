import React from "react";

// 05B: Pass or retry
// Task: Set const score = 74. Show "Pass" when score is at least 75; otherwise show "Retry". Then test with 75.

export default function Exercise05B() {
  // Test: 74 shows Retry. Change to 75, save, and it shows Pass.
  const score = 74;

  // ">=" means "at least", so 75 itself counts as passing.
  return (
    <main>
      <h1>05B Pass or retry</h1>
      <p>Score: {score}</p>
      <p>Result: {score >= 75 ? "Pass" : "Retry"}</p>
    </main>
  );
}
