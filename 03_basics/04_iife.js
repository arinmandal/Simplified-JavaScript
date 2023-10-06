// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Arin')


let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = (num1 + num2);
    console.log(total);
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);