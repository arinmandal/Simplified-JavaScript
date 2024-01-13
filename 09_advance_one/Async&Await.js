// Async & Await
// Always return a promise

// const p = new Promise((resolve, reject) => {
//   resolve("Promise resolve value");
// })

// async
// async function getData() {
//   return "Arin";

// }
// const dataPromise = getData()
// dataPromise.then(res => console.log(res))


// function getData() {
//   p.then((res) => console.log(res))
// }

// getData()

// Async & Await

// ! await can only be used inside an async function.

// const basicPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Basic promise resolve");
//   }, 5000);
// })

// async function handlePromise() {
//   console.log("Result will shown after 5sec")
//   const val = await basicPromise;
//   console.log(val)
//   console.log("Hello World")
// }
// handlePromise();

// function handlePromise() {
//   basicPromise.then((res) => console.log(res));
//   console.log("Hello World");

// }
// handlePromise();


// More Example

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise Resolve p1"), 5000)
// })
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise Resolve p2"), 3000)
// })

// async function resolveAll() {
//   console.log("Promise test");

//   const val = await p1;
//   console.log("Awaiting.. after p1")
//   console.log(val);

//   const val2 = await p2;
//   console.log("Awaiting.. after p1")
//   console.log(val2);

// }

// resolveAll();


// Async Await using fetch

const API_URL = "https://api.github.com/users/arinmandal"

async function getResult() {
  // handling error
  try {
    const data = await fetch(API_URL);
    const jsonData = await data.json();
    console.log(jsonData.name)
  } catch (err) {
    console.log(err)
}
    
 
}
// handling error with older method
// getResult().catch(err => console.log(err));
getResult()