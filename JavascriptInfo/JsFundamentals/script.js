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
// let value = true;
// console.log(typeof value); // boolean

//value = String(value); // now value is a string "true"
// console.log(typeof value); // string

// Numeric Conversion
// console.log("6" / "2"); // Output: 3, strings are converted to numbers

// Boolean Conversion
/* console.log(Boolean(1)); // Output: true
console.log(Boolean(0)); // Output: false
console.log(Boolean("hello")); // Output: true
console.log(Boolean("")); // Output: false
console.log(Boolean("0")); // Output: true
console.log(Boolean(" ")); // Output: true
 */
//? Basic Operators
//TODO: Task 1
// * The postfix and prefix forms
/* let a = 1, b = 1;
let c = ++a; // 2;
let d = b++; // 1; */

// TODO: Task 2
// * Assignment result
let x = 2;

let y = 1 + (x *= 2);
// console.log(y); // Output: 5

// TODO: Task 3
//* Type conversions
/* "" + 1 + 0 // Output: 10
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
" \t \n" - 2 // Output: -2 */

//TODO: Task 4
// * Fix the addition
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(Number(a) + Number(b)); // 3


//? Comparison Operators
/* Greater/less than: a > b, a < b.
Greater/less than or equals: a >= b, a <= b.
Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
and === for the strict equality check. The strict equality check === compares two values without type conversion.
Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.
 */
// TODO: Task 1
/* 5 > 4 // true
"apple" > "pineapple" // true
"2" > "12" //false
undefined == null // false
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" //false */

//? Conditional branching:
// TODO: Task 1
/* if ("0") {
  console.log('Hello'); // Output: Hello
} */

// TODO: Task 2
// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

/* let officialName = prompt("What is the “official” name of JavaScript?", "");
if (officialName === "ECMAScript") {
  alert("Right!");
} else {
  alert("You don't know? ECMAScript!");
} */

// TODO: Task 3
// Using if..else, write the code which gets a number via prompt and then shows in alert:
/* 1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero. */

/* let value = prompt('Type a number', 0);

if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
} */

// TODO: Task 4
// Rewrite this if using the conditional operator '?':
/*
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
let result = (a + b < 4) ? 'Below' : 'Over';
 */
// TODO: Task 5
// Rewrite if..else using multiple ternary operators '?'.

/* let login = prompt('Enter your message here... ');
let message;
if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
console.log(message)
let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : ''; */


//? Logical Operators
// The AND operator (&&) returns true if both operands are true; otherwise, it returns false.
// The OR operator (||) returns true if at least one of the operands is true; otherwise, it returns false.
// The NOT operator (!) returns true for false statements and false for true statements.

// TODO: Task 1
// What will the code below output?
// alert( null || 2 || undefined ); // Output: 2

// TODO: Task 2
// What will the code below output?
// alert( alert(1) || 2 || alert(3) ); // Output: 1, 2

// TODO: Task 3
// What is the result of AND ?
// alert( 1 && null && 2 ); // Output: null

// TODO: Task 4
// What will this code output?
// alert( alert(1) && alert(2) ); // Output: 1, undefined

// TODO: Task 5
// What will the result be?
// alert( null || 2 && 3 || 4 ); // Output: 3
// The precedence of AND && is higher than ||, so it executes first.

// The result of 2 && 3 = 3, so the expression becomes: null || 3 || 4

// TODO: Task 6
// Check the range between
// Write an “if” condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.
// if (age >= 14 && age <= 90);

// TODO: Task 7
// Check the range outside
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
// if (!(age >= 14 && age <= 90));

// TODO: Task 8
// A question about "if"
// Which of these alerts are going to execute?
/* if (-1 || 0) alert( 'first' ); // true
if (-1 && 0) alert( 'second' ); // false
if (null || -1 && 1) alert('third'); // true */

// ? Nullish coalescing operator '??'
// The nullish coalescing operator ?? provides a way to specify a default value.

/* let user;
alert(user ?? "Anonymous"); // Anonymous (user is undefined)

let user = "John";
alert(user ?? "Anonymous"); // John (user is not null/undefined) */

/* let firstName = null;
let lastName = null;
let nickName = "Supercoder";
 */
// shows the first defined value:
// alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// ! Comparison with ||
// The OR || operator, on the other hand, would return the first truthy value.
/*
let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0 */

// ! Precedence
// The precedence of the ?? operator is about the same as ||, and it’s higher than ? and =, so ?? is executed first.

/* let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000 */

//! AND operator with Nullish coalescing operator

// let y = (0 && 1) ?? 2;
// alert(0); // 0


//? Loops: while and for
// TODO: Task 1
// Last loop value
/* let i = 3;
while (i) {
  console.log(i--); // Output: 3, 2, 1
} */

// TODO: Task 2
// Which values does the while loop show?
// The prefix form ++i:
/* let i = 0;

while (++i < 5) {
  console.log(i); // Output: 1, 2, 3, 4
} */
// The postfix form
/* let i = 0;

while (i++ < 5) {
  console.log(i); // Output: 1, 2, 3, 4, 5
} */

// TODO: Task 3
// Which values get shown by the “for” loop?
/* Prefix
for (let i = 0; i < 5; ++i) alert(i) // Output: 0, 1, 2, 3, 4 */

/* Postfix
for (let i = 0; i < 5; i++) alert(i) // Output: 0, 1, 2, 3, 4
 */
// TDOO: Task 4
// Output even numbers in the loop
/* for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i); // Output: 2, 4, 6, 8, 10
  } */

// TODO: Task 5
// Replace “for” with “while”
/* for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
} */

/* 
let i = 0;
while( i < 3){
  console.log(`number ${i}!`);
  i++;
} 
*/

//? The "switch" statement
// TODO: Task 1
/* let names = prompt("Enter your name:");

switch (names) {
  case "John":
    console.log("Hello, John!");
    break;
  case "Jane":
    console.log("Hello, Jane!");
    break;
  case "Hello":
    console.log("Hello, Hello!");
    break;
  default:
    console.log("Hello, Stranger!");
} */

// TODO: Task 2
// rewrite this "switch" into an "if"

// let browser = prompt("Enter your browser name:");
/* switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
} */

/* if (browser == 'Edge') {
  alert( "You've got the Edge!" );
} else if (browser === 'Chrome' || 'Firefox' || 'Safari' || 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
} */

//TODO: Task 3
// Rewrite "if" to switch
// let a = +prompt('a?', '');

/* if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
} */

/* switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2, 3');
    break;
} */

//? Functions
// TODO: Task 1
// Is "else" required?

/* function checkAge() {
  let age = prompt("Enter your age:");
  if (age > 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?");
  }
}

checkAge(); */
// No, else is not required.

// TODO: Task 2
// Rewrite the function using '?' or '||'

/* function checkAge(age) {
  return (age > 18) ? true : confirm("Do you have permission from your parents?");
}

function checkAge(age) {
  return (age > 18) || confirm("Do you have permission from your parents?");
} */

// TODO: Task 3
// Write a function min(a,b) which returns the least of two numbers a and b.
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

/* function min(a, b) {
  if (a > b) {
    return a;
  } else{
    return b;
  }
} */
// min(2, 5); // Output: 5

//? Function expressions
// Function Declaration
/* function sayHi() {
  alert( "Hello" );
} */

// Function Expression

/* let sayHi = function () { 
  alert("Hello");
} */

//! Callback Functions
// Function that takes a callback function as an argument
/* function greetUser(callback) {
  const name = prompt("What's your name?");
  callback(name);
}

// Callback function
function sayHello(name) {
  alert("Hello, " + name + "!");
}

// Using the greetUser function with the sayHello function as a callback
greetUser(sayHello);
 */


//? Arrow Functions

/* let sum = (a, b) => a + b;
console.log(sum(1, 2)); // Output: 3 */

//TODO: Task 1 ;
// Rewrite with arrow functions
/* function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
} */

/* ask(
  "Do you agree?",
  function () { alert("You agreed."); },
  function () { alert("You canceled the execution."); }
); */


/* let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
}

ask('Do you agree', () => alert("You agreed."), () => alert("You canceled the execution.")); */

