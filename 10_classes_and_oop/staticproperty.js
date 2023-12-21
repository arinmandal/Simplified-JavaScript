class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }

  compliment() {
    return console.log("This is a nice car");
  }
}

const myCar = new Car("Ford");

myCar.compliment();
// Static class methods are defined on the class itself. its not available for all object.
myCar.hello();