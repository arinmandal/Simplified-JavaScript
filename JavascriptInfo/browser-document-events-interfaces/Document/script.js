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
