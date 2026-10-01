# React Fundamentals Practice Lab – Evidence Notes

One screenshot and one short note per concept.

## Concept 1 – Components and JSX
**Screenshot:** `concept1-components-jsx-01C.png` (01C Simple profile)

I learned that a component is just a JavaScript function that returns JSX. I can put normal JavaScript variables on the page by wrapping them in curly braces, like `{studentName}`. When I changed `studentName` from "Mina" to another name and saved, the page showed the new name right away.

## Concept 2 – Props
**Screenshot:** `concept2-props-02C.png` (02C Score badge)

I learned that props are how a parent component sends data to a child component. I wrote one `ScoreBadge` component and used it twice with different values. Text props go in quotes (`student="Ana"`), but number props go in curly braces (`points={18}`) so they stay real numbers.

## Concept 3 – State
**Screenshot:** `concept3-state-03C.png` (03C Score with a limit, after 5 clicks)

I learned that `useState` lets a component remember a value, and calling the setter makes React redraw the page with the new value. Using `Math.min(previous + 5, 20)` keeps the score from going past 20. The screenshot was taken after five clicks, and the score still shows 20.

## Concept 4 – Events
**Screenshot:** `concept4-events-04C.png` (04C Cheer counter, after 3 clicks)

I learned that `onClick` needs a function. React only runs that function when the button is clicked. Each click adds 1 to the count. Once the count reaches 3, the condition `count >= 3` becomes true and "Great support!" shows up.

## Concept 5 – Conditional rendering
**Screenshot:** `concept5-conditional-rendering-05C.png` (05C Weather message, with boundary tests)

I learned to decide the message with `if / else if / else` before the `return`, then show it. Testing the edge numbers is important. 19 is Cold, 20 and 29 are both Warm, and 30 is Hot. That proves every number has exactly one result.

## Concept 6 – Lists from arrays
**Screenshot:** `concept6-lists-06C.png` (06C Completed tasks)

I learned that `filter()` makes a new array with only the items I want (tasks where `done` is true), and `map()` turns each item into a `<li>`. Each item needs a unique `key`, so I used `task.id`. The count "3 of 4" comes from `completed.length` and `tasks.length`, and the original array is not changed.

## Concept 7 – Inputs and forms
**Screenshot:** `concept7-forms-07C.png` (07C Event sign up, Ana with 2 seats)

I learned to store each input's value in state using `value` and `onChange`, and to call `event.preventDefault()` so the form does not reload the page. Before accepting the form, I check that the name is not blank and that `Number(seats)` is from 1 to 4. A blank name or 0/5 seats shows an error, and Ana with 2 seats shows the confirmation.
