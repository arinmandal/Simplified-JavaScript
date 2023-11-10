// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// *A Promise is in one of these states:

//! pending: initial state, neither fulfilled nor rejected.
// ! fulfilled: meaning that the operation was completed successfully.
// ! rejected: meaning that the operation failed.


// Create promise

// const NewPromise = new Promise(function (resolve, reject) {
//   // Async task

//   setTimeout(() => {
//     console.log('Async task is completed');
//     // After completed this task, its important to resolve it.
//     resolve();
//   }, 1000)
// })

// Promise consumed

// NewPromise.then(() => {
//   console.log('Promise Consumed');
// })


// Create promise without creating variable

// new Promise((resolve) => {
//   console.log('Hello from promise')
//   resolve();
// }).then(() => {
//   console.log('Second promise task completed');
// })

// promise resolve() data

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "Arin", email: "Simplified Javascript" })
//   }, 1000)
// })


// promiseThree.then((user) => {
//   console.log(user)
// })

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const user = false;
//     if (!user) {
//       resolve({ username: "Arin", password: "456" });
//     } else {
//       console.log("ERROR: Something went worng");
//     }

//   }, 1000);
// })


// promiseFour.then((user) => {
//   console.log(user);
//   return user.username;
// }).then((username) => {
//   console.log(username)
// }).catch(() => {
//   console.log()
// }).finally(() => {
//   console.log('Experiment completed');
// });

//////////////////////////////////////

// Promise with async / await

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let user = false;
//     if (!user) {
//       resolve({ username: "JavaScript", password: "mystery" })
//     } else {
//       console.log('Error!: JS Error')
//     }
//   }, 1000)
// })

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive()


// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// getAllUsers()

// //////////////////////////////////////////////

// fetch()

// fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
//   return response.json()
// }).then((data) => {
//   console.log(data)
// }).catch((error) => {
//   console.log(error);
// })

console.log('start')
setTimeout(function cb() {
  console.log("hello from CB")
}, 5000);

console.log('end')