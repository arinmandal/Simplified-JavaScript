// basic example of closures.

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   } y();
// }

// x();

// function x() {
//   let b = 9;
//   function y() {
//     console.log(b);
//   }
//   return y;
// }

// let z = x();
// console.log(z);
// z();



function b() {
  let a = 10;
  return function x() {
    console.log(a);
  } 
}
console.log(b());
