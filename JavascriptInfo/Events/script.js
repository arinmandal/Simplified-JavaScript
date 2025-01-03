//? Introduction to browser events
// An event is a signal that something has happened. All DOM nodes generate such signals (but events are not limited to DOM).

//? Mouse events:
/* click – when the mouse clicks on an element (touchscreen devices generate it on a tap).
contextmenu – when the mouse right-clicks on an element.
mouseover / mouseout – when the mouse cursor comes over / leaves an element.
mousedown / mouseup – when the mouse button is pressed / released over an element.
mousemove – when the mouse is moved. */

// ? Keyboard events:
// keydown and keyup – when a keyboard key is pressed and released.

//? Form element events:
/* 
submit – when the visitor submits a <form>.
focus – when the visitor focuses on an element, e.g. on an <input>. */

// ? Document events:

// DOMContentLoaded – when the HTML is loaded and processed, DOM is fully built.

//? CSS events:

// transitionend – when a CSS-animation finishes.


// ? Event handler
// To react on events we can assign a handler – a function that runs in case of an event.
// Handlers are a way to run javascript code in case of user actions.

// ? HTML Attribute
// A handler can be set in HTML with an attribute named on<event> like onclick or onsubmit.

// ! Event in HTML attribute

/* function countRabbits() {
  for (let i = 1; i <= 3; i++) {
    alert(`Rabbit number ${i}`);
  }
} */

// ? DOM property
// We can assign a handler to a DOM property.
/* 
let button = document.getElementById('myButton');
button.onclick = () => alert('Button CLicked'); */
// Assign a handler to elem.onclick, not elem.ONCLICK, because DOM properties are case-sensitive.

// Accessing the element this
{/* <button onclick="alert(this.innerHTML)">Click me</button> 
button shows its contents using this.innerHTML */}

