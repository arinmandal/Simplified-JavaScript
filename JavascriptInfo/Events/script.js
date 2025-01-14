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

// ? addEventListener
// In previous examples, we can only assign one handler to an event.If we assign a second one, it overwrites the first one.

// To add multiple event listeners to an element, we can use addEventListener.
// ! The syntax is: element.addEventListener(event, handler[, options]);
// ? event - The name of the event, e.g. "click".
// ? handler - The function to run when the event occurs.
// ? options - An options object.

// To remove the handler, use removeEventListener:
// btn.removeEventListener('click', handler);


/* let btn = document.getElementById('myButton');
btn.addEventListener('click', handler);
function handler() {
  alert('Clicked');
  console.log('remove');
} */


//? Event object

let newBtn = document.getElementById('btnObj');
newBtn.onclick = function (event) {
  alert(event.type + " at " + event.currentTarget);
  alert("Coordinates: " + event.clientX + ":" + event.clientY);
}

// TODO: Task 1
// ? Hide On Click
// Add JavaScript to the button to make <div id="text"> disappear when we click it.
let hide = document.getElementById('hide')
let para = document.getElementById('para')
hide.addEventListener('click', () => {
  para.style.display = 'none';
})

// TODO: Task 2
// ? Hide self
// Create a button that hides itself on click.

let hideSelf = document.getElementById('hideSelf')
hideSelf.addEventListener('click', () => {
  hideSelf.style.visibility = 'hidden';
})

// TODO: Task 3
// ? Check which handler runs
// There’s a button in the variable. There are no handlers on it.
// Which handlers run on click after the following code? Which alerts show up?

let runs = document.getElementById("runs")
runs.addEventListener("click", () => alert("1")); // first
runs.removeEventListener("click", () => alert("1"));
runs.onclick = () => alert(2); // second

// TODO: Task 4
//? Create a toggle menu
document.querySelector('span').addEventListener('click', () => {
  const ulElement = document.querySelector('ul');
  if (ulElement.style.visibility === 'hidden') {
    ulElement.style.visibility = 'visible';
  }
  else { ulElement.style.visibility = 'hidden'; }
})

// TODO: Task 5
//? Add a closing button
let panes = document.querySelectorAll('.pane');

for (let pane of panes) {
  pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
  // button becomes the first child of pane
  pane.firstChild.onclick = () => pane.remove();
}
