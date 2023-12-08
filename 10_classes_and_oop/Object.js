// function nummultiplyby5(num) {
//   return num * 5;
// }

// numMultiplyby5.power = 7;

// console.log(nummultiplyby5(5));
// console.log(nummultiplyby5.power);
// // console.log(nummultiplyby5(5));


function createProduct(productName, price) {
  this.productName = productName;
  this.price = price;
}

createProduct.prototype.increment = function () {
  this.price++;
}

createProduct.prototype.printMe = function () {
  console.log(`price is ${this.price}`);
}

createProduct.prototype.sayHello = function () {
  console.log(`hello ${this.productName}`);
}


const user1 = new createProduct("chai", 24);
const user2 = new createProduct("coffee", 250);
const user3 = new createProduct("cookies", 24);

user1.printMe();
user2.sayHello();
user3.sayHello();