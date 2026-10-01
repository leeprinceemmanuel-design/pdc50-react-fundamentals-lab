import React from "react";

// 02B: Two student cards
// Task: Create StudentCard with name and course props. Render two cards with different names and courses.

// One reusable component. It shows whatever name and course it is given.
function StudentCard({ name, course }) {
  return (
    <section style={{ border: "1px solid #b8c4d0", borderRadius: "8px", padding: ".5rem 1rem", marginBottom: ".75rem" }}>
      <h2 style={{ margin: ".25rem 0" }}>{name}</h2>
      <p style={{ margin: ".25rem 0" }}>Course: {course}</p>
    </section>
  );
}

export default function Exercise02B() {
  // Same component used twice, with different data each time.
  return (
    <main>
      <h1>02B Two student cards</h1>
      <StudentCard name="Lee" course="IT" />
      <StudentCard name="Prince" course="Computer Science" />
    </main>
  );
}
