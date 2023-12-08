function setUserName(username) {
  this.username = username;
  console.log(`called`)
}


function createUser(username, email, password) {
  
  // setUsername need the call() method for collection reference

  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const user = new createUser("hello", "hello320@gmail.com", "4561");

console.log(user.username);