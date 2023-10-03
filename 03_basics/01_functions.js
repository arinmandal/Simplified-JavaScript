function satMyName() {
  console.log("A");
  console.log("R");
  console.log("I");
  console.log("N");
  console.log("M");
  console.log("A");
  console.log("N");
  console.log("D");
  console.log("A");
  console.log("L");
}

// satMyName();

// function addTwoNumber(number1, number2) {
//   console.log(number1 + number2);
// }

// const result = addTwoNumber(8, 10);
// console.log(result) //!Undefine because the function does not return anything

// function addNumber(num1, num2) {
//     // const result = num1 * num2
//     // return result;
//     return num1 * num2
// }

// console.log(addNumber(4, 2));

function loginUserMessage(username) {
  if (!username) {
    console.log("please enter your username");
    return;
  }
  return `${username} just logged in`;
}
// let Myname = "Arin";
// console.log(loginUserMessage("Arin"));

// rest operator
// function calculateCartPrice(...num1) {
//   return num1;
// }

// console.log(calculateCartPrice([200, 240, 400, 633, 300, 400]));

// // passing object as an arguments
// function handelObjects(anyObject) {
//   console.log(
//     `Username is ${anyObject.username} and price is ${anyObject.price}`,
//   );
// }

// handelObjects({ username: "Arin", price: 500 });

// Passing Array as an arguments

const myNewArray = [200, 4000, 750, 800, 120, 360];
function getArray(anyArray) {
  return anyArray[3]
}

console.log(getArray(myNewArray))
