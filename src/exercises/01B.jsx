import React from "react";

// 01B: Class schedule
// Task: Show a heading "Today's Schedule" followed by three separate class activities. Use one component.

export default function Exercise01B() {
  // One component, one outer <main>, with a heading and three <p> lines nested inside it.
  return (
    <main>
      <h1>Today’s Schedule</h1>
      <p>8:00 AM – PDC50: React Fundamentals Lab</p>
      <p>10:30 AM – ITE40: Software Quality Assurance Lecture</p>
      <p>1:00 PM – Thesis 1: Group Consultation</p>
    </main>
  );
}
