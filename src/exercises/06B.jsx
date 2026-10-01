import React from "react";

// 06B: Book titles
// Task: Make an array of at least three book objects with unique id and title values. Display their titles in a list.

const books = [
  { id: 1, title: "Clean Code" },
  { id: 2, title: "The Pragmatic Programmer" },
  { id: 3, title: "Eloquent JavaScript" },
];

export default function Exercise06B() {
  // Each book has a unique id, so it is a stable key for React.
  return (
    <main>
      <h1>06B Book titles</h1>
      <ul>
        {books.map(book => <li key={book.id}>{book.title}</li>)}
      </ul>
    </main>
  );
}
