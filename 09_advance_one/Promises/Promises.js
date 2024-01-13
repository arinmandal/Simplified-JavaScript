// // createOrder
// // proceedToPayment
// // showOrderSummary
// // updateWallet


// const cart = ["Watches", "Pants", "Kurta", "Speacs"];

// function cartValid(cart) {
//   return false;
// }
// const orderId = "12233"
// function createOrder(cart) {
//   return new Promise((resolve, reject) => {
//     if (!cartValid) {
//       return reject(new Error("cart is not valid"));
//     }
//     let orderId = "12345";
//     if (orderId) {
//       resolve(orderId);
//     }
//   });
// }

// function proceedToPayment(cart) {
//   return new Promise((resolve, reject) => {
//     if (orderId) {
//       resolve("Payment successful");
//     }
//   });
// }

// function showOrderSummary(orderId, paymentId) {
//   // Display the order summary and payment details
//   console.log(`Order ID: ${orderId}`);
//   console.log(`Payment ID: ${paymentId}`);
// }

// function updateWallet(paymentId) {
//   return new Promise((resolve, reject) => {
//     resolve("wallet updated");
//   });
// }

// // Usage example
// createOrder(cart)
//   .then(cart => proceedToPayment(orderId))
//   .then(paymentId => {
//     showOrderSummary(orderId, paymentId);
//     return updateWallet(paymentId);
//   })
//   .then(walletBalance => {
//     console.log(`Wallet Balance: ${walletBalance}`);
//   })
//   .catch(error => {
//     console.error(error);
//   });



// promise.all()

const p1 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P1 Successful"), 3000)
  setTimeout(() => reject("P1 Failed"), 3000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P2 Failed"), 1000)
  // setTimeout(() => resolve("P2 Successful"), 1000) 
})
const p3 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P3 Successful"), 2000)
  setTimeout(() => reject("P3 Failed"), 2000)
})
// Promise.all([p1, p2, p3])
//   .then(res => {
//     console.log(res);
//   }).catch(err => {
//     console.error(err)
//   })
// Promise.allSettled([p1, p2, p3])
//   .then(res => {
//     console.log(res);
//   }).catch(err => {
//     console.error(err)
//   })
// Promise.race([p1, p2, p3])
//   .then(res => {
//     console.log(res);
//   }).catch(err => {
//     console.error(err)
//   })
Promise.any([p1, p2, p3])
  .then(res => {
    console.log(res);
  }).catch(err => {
    console.error(err);
    console.log(err.errors)
  })