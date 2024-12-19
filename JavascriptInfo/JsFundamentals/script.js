'use strict';
// This code works the mordern way.


//? Working with Variable
// TODO Task 1:
/*Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/
let admin, name;
name = 'John';
admin = name;
// alert(admin); // Output: John

// TODO Task 2:
/*Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable?
*/
let ourPlanetName = 'Earth';
let currentVisitorName = 'John';

//? Working with Data Types
// Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
// alert(1 / 0); // Output: Infinity

// NaN (Not a Number) is a special value that represents an operation that cannot be performed. For instance:
// alert("not a number" / 2); // Output: NaN

// Seven primitive data types:
//* number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
//* bigint for integer numbers of arbitrary length.
//* string for strings. A string may have zero or more characters, there’s no separate single-character type.
//* boolean for true/false.
//* null for unknown values – a standalone type that has a single value null.
//* undefined for unassigned values – a standalone type that has a single value undefined.
//* symbol for unique identifiers.
//* And one non-primitive data type:
//* object for more complex data structures.

//! Interaction: alert, prompt, confirm

// alert
// shows a message.
// prompt
// shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
// confirm
// shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.

//? Type Conversions
// String Conversion
let value = true;
// console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
// console.log(typeof value); // string

// Numeric Conversion
// console.log("6" / "2"); // Output: 3, strings are converted to numbers

// Boolean Conversion
//console.log(Boolean(1)); // Output: true
//console.log(Boolean(0)); // Output: false
//console.log(Boolean("hello")); // Output: true
//console.log(Boolean("")); // Output: false
//console.log(Boolean("0")); // Output: true
//console.log(Boolean(" ")); // Output: true

//? Basic Operators
//TODO: Task 1
// * The postfix and prefix forms
// let a = 1, b = 1;
// let c = ++a; // 2;
// let d = b++; // 1;

// TODO: Task 2
// * Assignment result
let x = 2;

let y = 1 + (x *= 2);
// console.log(y); // Output: 5

// TODO: Task 3
//* Type conversions
"" + 1 + 0 // Output: 10
"" - 1 + 0 // Output:
true + false // Output: 1 
6 / "3" // Output: 2
"2" * "3" // Output: 6
4 + 5 + "px" // Output: 9px
"$" + 4 + 5 // Output: $45
"4" - 2 // Output: 2  
"4px" - 2 // Output: NaN
"  -9  " + 5 // Output: " -9 5"
"  -9  " - 5 // Output: -14
null + 1 // Output: 1
undefined + 1 // Output: NaN
" \t \n" - 2 // Output: -2

//TODO: Task 4
// * Fix the addition
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(Number(a) + Number(b)); // 3
