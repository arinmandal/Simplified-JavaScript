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

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    const user = true;
    if (!user) {
      resolve({ username: "Arin", password: "456" });
    } else {
      console.log("ERROR: Something went worng");
    }

  }, 1000);
})


const user = promiseFour.then((user) => {
  console.log(user);
  return user.username;
}).then((username) => {
  console.log(username)
}).catch(() => {
  console.log()
})