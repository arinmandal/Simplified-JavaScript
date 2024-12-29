// ? DOM ~ Document Object Model
// The Document Object Model, or DOM for short, represents all page content as objects that can be modified.
// The document object is the main “entry point” to the page. We can change or create anything on the page using it.

// Background Color Change
// document.body.style.background = "lightgreen";

// This will change background color after 3 seconds

// setTimeout(() => document.body.style.background = "crimson", 3000)

//? BOM (Browser Object Model)
// The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document;

//! Window Object
// Alert a message
// window.alert("Hello, World!");

// Open a new window
// window.open("https://www.example.com");

// Close the current window
// window.close();

// ! Location Object
// console.log(location.href); // Returns the href (URL) of the current page

// ! Screen Object
// console.log(screen.width); // Returns the width of the screen
// console.log(screen.height); // Returns the height of the screen

// ! History Object
// history.back(); // Move the window back
// history.forward(); // Move the window forward

// ! Navigator Object
// console.log(navigator.appName); // Returns the name of the browser
// console.log(navigator.appVersion); // Returns the version information of the browser


//? DOM tree

/* <!DOCTYPE HTML>
<html> Root node
<head> Child node of html
  <title>
  About elk ~ text node
  </title> Child node of head
</head>
<body> Child node of html
  The truth about elk.
</body>
</html> */

// Tree Structure
/* ▾
HTML
▾
HEAD
#text ↵␣␣
▾
TITLE
#text About elk
#text ↵
#text ↵
▾
BODY
#text ↵␣␣The truth about elk.↵ */

// ? Most Commonly Used Nodes
// 1. document ~ root node
// 2. element ~`<p>`, `<div>`, `<ul>`, `<li>`, `<a>`, `<img>`, `<form>`, `<input>`, `<button>`
// 3. comments – sometimes we can put information there, it won’t be shown, but JS can read it from the DOM.
// 4. text  ~ text inside elements
// 5. attributes ~ class, id, href, src, style, etc.

//? Walking the DOM

/* // Accessing the document object
var doc = document;

// Accessing the document element (<html>)
var docElement = document.documentElement;

// Accessing the body element
var body = document.body;

// Assuming there is a <div> element in the body
var div = document.querySelector('div');

// Accessing the parent node of the <div>
var parent = div.parentNode;

// Accessing the previous sibling of the <div>
var prevSibling = div.previousSibling;

// Accessing the next sibling of the <div>
var nextSibling = div.nextSibling;

// Accessing the first child of the <div>
var firstChild = div.firstChild;

// Accessing the last child of the <div>
var lastChild = div.lastChild;

// Accessing all child nodes of the <div>
var childNodes = div.childNodes; */


// In the DOM, the null value means “doesn’t exist” or “no such node”.
{/* <html>

  <head>
    <script>
      alert( "From HEAD: " + document.body ); // null, there's no <body> yet
    </script>
  </head>
</html> */}

// Children, firstChild, lastChild, childNodes
// Child nodes (or children) – elements that are direct children. In other words, they are nested exactly in the given one. For instance, <head> and <body> are children of <html> element.
// Descendants – all elements that are nested in the given one, including children, their children and so on.

// Properties firstElementChild and lastElementChild give fast access to the first and last children.

let firstChild = document.body.firstElementChild;
// console.log(body); <div>...</div>

let lastChild = document.body.lastElementChild;
// console.log(lastChild); // <script src="script.js"></script>

// for (let node of document.body.childNodes) {
//   alert(node); // shows all nodes from the collection
// }

// !Siblings and the parent
// Siblings are nodes that are children of the same parent.

// For instance, here <head> and <body> are siblings:
{/* <html>
  <head>...</head><body>...</body>
</html> */}

// TODO : Task 1
// DOM Children

{/* <html>
<body>
  <div>Users:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
</html> */}

// The <div> DOM node? document.body.firstElementChild
// The <ul> DOM node? document.body.lastElementChild
// The second <li> (with Pete)? console.log(document.body.children[1].lastElementChild.innerHTML);

//? Searching: getElement*, querySelector*

// 1. document.getElementById
// let elem = document.getElementById('heading');
// console.log(elem); // <h1 id="heading">Hello, World!</h1>

// 2. document.querySelector

// let elem = document.querySelectorAll('ul > li:first-child');
// console.log(elem[0].innerHTML); Item 1

// 3. document.querySelectorAll
// let elem = document.querySelectorAll('ul > li:last-child');
// console.log(elem[0].innerHTML); Item 2

// 4. document.getElementsByTagName
// let elem = document.getElementsByTagName('li');
// console.log(elem[0].innerHTML); // Item 1

// 5. document.getElementsByClassName
// let elem = document.getElementsByClassName('list');
// console.log(elem[0].innerHTML); // Item 1


// ? Node properties: type, tag and contents

/* Main DOM node properties are:

nodeType
We can use it to see if a node is a text or an element node. It has a numeric value: 1 for elements,3 for text nodes, and a few others for other node types. Read-only.
nodeName/tagName
For elements, tag name (uppercased unless XML-mode). For non-element nodes nodeName describes what it is. Read-only.
innerHTML
The HTML content of the element. Can be modified.
outerHTML
The full HTML of the element. A write operation into elem.outerHTML does not touch elem itself. Instead it gets replaced with the new HTML in the outer context.
nodeValue/data
The content of a non-element node (text, comment). These two are almost the same, usually we use data. Can be modified.
textContent
The text inside the element: HTML minus all <tags>. Writing into it puts the text inside the element, with all special characters and tags treated exactly as text. Can safely insert user-generated text and protect from unwanted HTML insertions.
hidden
When set to true, does the same as CSS display:none.
DOM nodes also have other properties depending on their class. For instance, <input> elements (HTMLInputElement) support value, type, while <a> elements (HTMLAnchorElement) support href etc. Most standard HTML attributes have a corresponding DOM property.

However, HTML attributes and DOM properties are not always the same, as we’ll see in the next chapter. */

// Change outer HTML
// let elem = document.getElementById('heading');
// elem.outerHTML = '<h2>New Heading</h2>';

// TODO: Count descendants
// There’s a tree structured as nested ul/li.

// Write the code that for each <li> shows:

// What’s the text inside it (without the subtree)
// The number of nested <li> – all descendants, including the deeply nested ones.

// for (let li of document.querySelectorAll('li')) {
//   let title = li.firstChild.data;
//   let count = li.getElementsByTagName('li').length;
//   // title is the text in <li> before any other nodes
//   console.log(title + ': ' + count);
// }

// TODO : Where's the "document" in the hierarchy?

/* Which class does the document belong to?
What’s its place in the DOM hierarchy?
Does it inherit from Node or Element, or maybe HTMLElement? */

// alert(document); // [object HTMLDocument]
// alert(document.constructor.name); // HTMLDocument

// ?Attributes and properties

// DOM Properties
// document.body.myData = {
//   name: 'Caesar',
//   title: 'Imperator'
// };


// alert(document.body.myData.title); // Imperator
// document.body.sayTagName = function() {
//   alert(this.tagName);
// };

// document.body.sayTagName(); // BODY

// We can also modify built-in prototypes like Element.prototype

// Element.prototype.sayHi = function() {
//   alert(`Hello, I'm ${this.tagName}`);
// };

// alert(document.body.sayHi());

// ? HTML attributes

/* elem.hasAttribute(name) – checks for existence.
elem.getAttribute(name) – gets the value.
elem.setAttribute(name, value) – sets the value.
elem.removeAttribute(name) – removes the attribute. */

// let attr = document.getElementById('heading');
// attr.setAttribute('class', "newHeading");
// console.log(attr.getAttribute('class'));


// TODO : Get the attribute

// Write the code to select the element with data-widget-name attribute from the document and to read its value.

// /* <!DOCTYPE html>
// <html>
// <body>

//   <div data-widget-name="menu">Choose the genre</div>

//   <script>
//     /* your code */
//   </script>
// </body>
// </html >
// */

// let widget = document.querySelector('[data-widget-name]');
// console.log(widget.getAttribute('data-widget-name'));

// ? Modifying the document

// DOM modification is the key to creating “live” pages.

/* // 1. Creating nodes
let div = document.createElement('div');
div.innerHTML = '<p>Hello, World!</p>';
div.style.background = 'red';
document.body.appendChild(div);

// 2. Removing nodes
let elem = document.getElementById('heading');
elem.remove();  

// 3. Cloning nodes
let clone = div.cloneNode(true);
document.body.appendChild(clone);

// 4. Inserting nodes
let p = document.createElement('p');
p.innerHTML = 'Hello, World!';
document.body.insertBefore(p, document.body.firstChild);

// 5. Replacing nodes
let newElem = document.createElement('p');
newElem.innerHTML = 'New Element';
document.body.replaceChild(newElem, document.body.firstChild);

// 6. The “insertAdjacent” methods
// elem.insertAdjacentHTML(where, html) – insert HTML at the position defined by where.
// elem.insertAdjacentElement(where, elem) – insert elem at the position defined by where.
// elem.insertAdjacentText(where, text) – insert text at the position defined by where.

// elem.insertAdjacentHTML('beforebegin', '<p>Hello, World!</p>');
// elem.insertAdjacentHTML('afterbegin', '<p>Hello, World!</p>');
// elem.insertAdjacentHTML('beforeend', '<p>Hello, World!</p>');
// elem.insertAdjacentHTML('afterend', '<p>Hello, World!</p>');

   */

// TODO : Task 1
/* createTextNode vs innerHTML vs textContent
We have an empty DOM element elem and a string text.
Which of these 3 commands will do exactly the same?
elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text */

{/* <div id="elem1"></div>
<div id="elem2"></div>
<div id="elem3"></div>
<script>
  let text = '<b>text</b>';

  elem1.append(document.createTextNode(text));
  elem2.innerHTML = text;
  elem3.textContent = text;
</script> */}

// TODO: Task 2
// Clear the element
// Create a function clear(element) that removes all children from the elem.

{/* <ol id="elem">
  <li>Hello</li>
  <li>World</li>
</ol>

<script>
function clear(elem) {
  elem.innerHTML = '';
}

</script> */}

// TODO: Task 3
// Create a list
// Write an interface to create a list from user input.
// For every list item:
// Ask a user about its content using prompt.
// Create the <li> with it and add it to <ul>.
// Continue until the user cancels the input (by pressing Esc or via an empty entry).
// All elements should be created dynamically.

// If a user types HTML-tags, they should be treated like a text.

/* let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
  let data = prompt("Enter the text for the list item", "");

  if (!data) {
    break;
  }

  let li = document.createElement('li');
  li.textContent = data;
  ul.append(li);
} */


//TODO : Task 4
// Create a calender
/* Write a function createCalendar(elem, year, month).
The call should create a calendar for the given year/month and put it inside elem.
The calendar should be a table, where a week is <tr>, and a day is <td>. The table top should be <th> with weekday names: the first day should be Monday, and so on till Sunday.
For instance, createCalendar(cal, 2012, 9) should generate in element cal the following calendar: */

/* 
function createCalendar(elem, year, month) {

  let mon = month - 1; // months in JS are 0..11, not 1..12
  let d = new Date(year, mon);

  let table = '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>';

  // spaces for the first row
  // from Monday till the first day of the month
  // * * * 1  2  3  4
  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  // <td> with actual dates
  while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>';

    if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  // add spaces after last days of month for the last row
  // 29 30 31 * * * *
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  // close the table
  table += '</tr></table>';

  elem.innerHTML = table;
}

function getDay(date) { // get day number from 0 (monday) to 6 (sunday)
  let day = date.getDay();
  if (day == 0) day = 7; // make Sunday (0) the last day
  return day - 1;
}

createCalendar(calendar, 2012, 9); */


// TODO : Task 5
// Insert the HTML in the list
// Write the code to insert <li>2</li><li>3</li> between two <li> here:
// one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');


// ? Styles and classes

/* There are generally two ways to style an element:
Create a class in CSS and add it: <div class="...">
Write properties directly into style: <div style="...">.
JavaScript can modify both classes and style properties. */



/* function showNotification({ top, right, html, className }) {
  let div = document.createElement('div');
  div.className = "notification";
  if (className) {
    div.classList.add(className);
  }

  div.style.top = top + 'px';
  div.style.right = right + 'px';
  div.style.color = "red";
  div.innerHTML = html;
  document.body.append(div);

  setTimeout(() => div.remove(), 1500);
}

showNotification({
  top: 200,
  right: 100,
  html: "Hello!", 
  className: "welcome" 
}); */