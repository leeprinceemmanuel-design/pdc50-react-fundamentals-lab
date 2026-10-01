import React, { useState } from "react";

// 07C: Event sign up
// Task: Make a simple sign-up form with a name and a number of seats. Require a nonempty name and 1 to 4 seats.
// Show a helpful error or "Registered: [name] for [seats] seat(s)."

export default function Exercise07C() {
  // Both inputs are stored in state. Input values are always text, even for type="number".
  const [name, setName] = useState("");
  const [seats, setSeats] = useState("");
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const cleanName = name.trim();
    const seatCount = Number(seats); // turn the text "2" into the number 2

    // Clear old messages first so only the newest result shows.
    setError("");
    setConfirmation("");

    if (cleanName === "") {
      setError("Please enter your name.");
      return;
    }

    // Number.isInteger also blocks blank seats and decimals like 1.5.
    if (seats.trim() === "" || !Number.isInteger(seatCount) || seatCount < 1 || seatCount > 4) {
      setError("Please choose from 1 to 4 seats.");
      return;
    }

    setConfirmation(`Registered: ${cleanName} for ${seatCount} seat(s).`);
  }

  return (
    <main>
      <h1>07C Event sign up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" value={name} onChange={event => setName(event.target.value)} />

        <label htmlFor="seats">Number of seats (1–4)</label>
        <input id="seats" type="number" value={seats} onChange={event => setSeats(event.target.value)} />

        <button type="submit">Register</button>
      </form>

      {error && <p style={{ color: "#b3261e" }}>{error}</p>}
      {confirmation && <p style={{ color: "#1e6b34" }}>{confirmation}</p>}
    </main>
  );
}
