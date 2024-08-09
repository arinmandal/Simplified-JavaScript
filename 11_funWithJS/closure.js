// ! Closure - Lexical scope
// A closure gives you access to an outer function scope from an inner function

//* Lexical scope
function outer() {
  let name = 'outer';
  //console.log(secret) // can't accsible from inner function
  function inner() {
    console.log(name);
    let secret = 'secret';
  }
  inner();
}
outer();


// ! Closure example

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();


