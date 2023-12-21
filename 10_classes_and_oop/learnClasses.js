// ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   securePassword() {
//     return `your password is ${this.password}abc201`
//   }

//   allUpperCase() {
//     return `${this.username.toUpperCase()}`
//   }
// }

// const user1 = new User("Rahul", "rahul306@g,ail.com", "rahul305");
// console.log(user1)
// console.log(user1.allUpperCase());

// behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.securePassword = function () {
  return `your password is ${this.password}abc201`
}

User.prototype.allUpperCase = function () {
  return `${this.username.toUpperCase()}`
}

const new1 = new User("Arin", "arinhello45@gmail.com", "Hello123");

console.log(new1.securePassword());
console.log(new1.allUpperCase());

