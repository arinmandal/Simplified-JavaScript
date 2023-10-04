const accountId = 144553
let accountEmail = "helloWorld@gmail.com"
var accountPassword = "12345"
let accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed because TypeError: Assignment to constant variable. 

accountEmail = "account0321@gmail.com"
accountPassword = "21212121"
accountCity = "Chennai"
// accountState = "West Bengal"
console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])