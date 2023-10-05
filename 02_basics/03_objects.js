// singleton
// Object.create

// object literals

// How tp declare the symbol data type into the object. [mySym] = "key1"
const mySym = Symbol("key1")

const JsUser = {
    name: "Arin",
    "full name": "Mandal Arin",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//* There are two types to access objects
// 1) dot notation JsUser.name
// 2) bracket notation JsUser["name"]

console.log(JsUser["age"])
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// Object Destructuring

const user = {
    name: "Arin",
    age: 24,
    city: "Tamluk",
    designation: "Software Engineer"
}

// const { city: HomeTown } = user;
// console.log(HomeTown)
// console.log(user.name)
// console.log(user["name"])

//Object.freeze(user) // freeze didn't updatable
// user.designation = "Photographer";
// console.log(user.designation)

user.greeting = function () {
    console.log("Hello User")
}

user.greetingTwo = function () {
    console.log(`Hello ${this.name}`)
}

console.log(user.greetingTwo())