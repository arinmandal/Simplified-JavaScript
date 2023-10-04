const score = 400
// console.log(score);

const balance = new Number(300)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
//* Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.
// console.log(Math.abs(-10));

//* Returns a supplied numeric expression rounded to the nearest integer.
// console.log(Math.round(4.6));

//* Returns the smallest integer greater than or equal to its numeric argument. 5 >= 4.2
// console.log(Math.ceil(4.2));

//* Returns the greatest integer less than or equal to its numeric argument 4 >= 4.9
// console.log(Math.floor(4.9));

//* Returns the smaller of a set of supplied numeric expressions.
// console.log(Math.min(4, 3, 6, 8));

//* Returns the larger of a set of supplied numeric expressions.
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log(Math.random() * 10 + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min )
