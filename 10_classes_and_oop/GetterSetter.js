class User{
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return `${this._email} getSuccess`;
  }
  
  set email(value) {
    this._email = value;
  }
}

const person = new User("hello@gmail.com", "456123");
console.log(person.email);