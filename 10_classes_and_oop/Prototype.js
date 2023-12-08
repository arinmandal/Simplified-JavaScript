let superHeros = ['ironMan', 'Hulk'];


let myHeros = {
  ironMan: "Iron",
  Hulk: "Hawkman",

  getHulkPower: function () {
    console.log(`Hulk power is ${this.Hulk}`);
  }
}

Object.prototype.arin = function () {
  console.log(`Arin is available for all objects`);
}

// myHeros.arin()
// superHeros.arin();

// Array.prototype.arr = function () {
//   console.log(`Available in all arrays`)
// }

// superHeros.arr();


// Inheritance

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com"
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: true
}

const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Hellofrommoon    "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

'JavaScriptIsMakingYourLifeEasy'.trueLength();

// console.log(TASupport.__proto__)
// TASupport.__proto__;

console.log(Teacher.__proto__)
