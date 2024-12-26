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

