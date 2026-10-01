import React from "react";

// 01C: Simple profile
// Task: Declare const studentName = "Mina" and const course = "IT" inside the component.
// Display both values in JSX. Change studentName and confirm the screen changes.

export default function Exercise01C() {
  // Plain JavaScript variables declared inside the component.
  // Test: change "Mina" to another name, save, and the page updates.
  const studentName = "Prince";
  const course = "IT";

  // Curly braces { } put a JavaScript value inside JSX.
  return (
    <main>
      <h1>01C Simple profile</h1>
      <p>Name: {studentName}</p>
      <p>Course: {course}</p>
    </main>
  );
}
