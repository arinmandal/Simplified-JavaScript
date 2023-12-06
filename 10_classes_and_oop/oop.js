// Object literals

// const user = {
//   username: "Arin",
//   LoginCount: 9,
//   signIn: true,

//   getUserDetails: function () {
//     console.log("Got user details from database");
//     // console.log(`Username:${this.username}`)
//     // console.log(this)
//   }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

// Constructor function

// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}


// const userOne = User("Arin Mandal", 12, true);
// const userTwo = User("Raja Mandal", 14, true);

// console.log(userOne);
// This will replace the value of userOne and change it with the value of userTwo.
//*so we need constructor
// constructor gives new instanceof the user

const userOne = new User("Arin Mandal", 12, true);
const userTwo = new User("Raja Mandal", 14, true);
// console.log(userOne);
// console.log(userTwo);


// instanceof

function d(name) {
  this.name = name
  console.log(`Name:${name}`);
}

function c() {
  console.log('hello')
}
const a = new d("Hello");

console.log(a instanceof d); //true
console.log(a instanceof c); //false