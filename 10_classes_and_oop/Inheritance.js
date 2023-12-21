class NewUser {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

// The child class inherits all the methods from another class using extends keyword
class HelloUser extends NewUser {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  createAgroup() {
    console.log(`The group was created by ${this.username}`);
  }
}

const person = new HelloUser("Rohit", "rohit45@gmail.com", "password");

const person1 = new NewUser("Ronit");
person.createAgroup();
person.logMe();

console.log(person instanceof person1 );
