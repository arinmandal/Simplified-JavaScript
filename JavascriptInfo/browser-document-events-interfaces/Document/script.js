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

/* <!DOCTYPE html>
<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

  <script>
    /* your code */
  </script>
</body>
</html > 
*/

// let widget = document.querySelector('[data-widget-name]');
// console.log(widget.getAttribute('data-widget-name'));
