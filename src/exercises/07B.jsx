import React, { useState } from "react";

// 07B: Name form
// Task: Make a form with a name input and Submit button. When submitted, show "Please enter a name."
// if it is empty or only spaces. Otherwise show "Saved: [name]".

export default function Exercise07B() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  function handleSubmit(event) {
    // Stop the browser from reloading the page on submit.
    event.preventDefault();

    // trim() removes spaces at the start and end, so "   " becomes "".
    if (name.trim() === "") {
      setResult("Please enter a name.");
    } else {
      setResult(`Saved: ${name.trim()}`);
    }
  }

  return (
    <main>
      <h1>07B Name form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" value={name} onChange={event => setName(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {result && <p>{result}</p>}
    </main>
  );
}
