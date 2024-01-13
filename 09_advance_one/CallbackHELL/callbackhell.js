// console.log("Namaste Javascript season 2");
// // this code is execute after 5second

// setTimeout(function () {
//   console.log("Welcome to Callback hell");
// },5000)
// console.log("Hello World")

// TODO CALLBACK
// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { message: "Data fetched successfully" };
//     callback(data);
//   }, 2000);
// }

// function userData(data) {
//   console.log(data.message);
// }

// fetchData(userData);

// ! CALLBACK HELL

// function operation1(callback) {
//   setTimeout(() => {
//     console.log("Operation 1 completed");
//     callback();
//   }, 1000)
// }
// function operation2(callback) {
//   setTimeout(() => {
//     console.log("Operation 2 completed");
//     callback();
//   }, 1000)
// }
// function operation3(callback) {
//   setTimeout(() => {
//     console.log("Operation 3 completed");
//     callback();
//   }, 1000)
// }

// // * Callback Hell
// operation1(() => {
//   operation2(() => {
//     operation3(() => {
//       console.log("All operation completed")
//     })
//   })
// })

// With Promise
function operation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Operation 1 completed");
      resolve();
    }, 1000)
  })

}

function operation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Operation 2 completed");
      resolve();
    }, 1000);
  })
}

function operation3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Operation 3 Completed");
      resolve();
    }, 1000);
  })
}

// With Promise

operation1()
  .then(() => operation2())
  .then(() => operation3())
  .then(() => console.log("All operations completed"));