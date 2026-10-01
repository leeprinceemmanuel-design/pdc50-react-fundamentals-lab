import React from "react";

// 05C: Weather message
// Task: Set const temperature = 29. Show "Cold" below 20, "Warm" from 20 through 29, and "Hot" from 30 up.
// Test 19, 20, 29, and 30.

// The if / else if / else rules live in one function so the same rules
// are used for the main value and for the boundary test list below.
function getWeatherMessage(temp) {
  if (temp < 20) {
    return "Cold";
  } else if (temp <= 29) {
    return "Warm"; // 20 up to and including 29
  } else {
    return "Hot"; // 30 and above
  }
}

const TEST_VALUES = [19, 20, 29, 30];

export default function Exercise05C() {
  const temperature = 29;

  // Decide the message before the return, then just display it.
  const message = getWeatherMessage(temperature);

  return (
    <main>
      <h1>05C Weather message</h1>
      <p>Temperature: {temperature}°C</p>
      <p>Weather: <strong>{message}</strong></p>

      <h2>Boundary tests</h2>
      <ul>
        {TEST_VALUES.map(value => (
          <li key={value}>{value}°C → {getWeatherMessage(value)}</li>
        ))}
      </ul>
    </main>
  );
}
