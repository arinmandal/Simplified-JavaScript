// Dates
//* JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

let myDate = new Date()
// console.log(myDate)
// Returns a string representation of a date. The format of the string depends on the locale. 
//*!Wed Oct 04 2023 16: 56: 17 GMT +0530(India Standard Time)
console.log(myDate.toString());
// Returns a date as a string value.
// *!Wed Oct 04 2023
console.log(myDate.toDateString());
// Converts a date and time to a string by using the current or specified locale.
//*! 10/4/2023, 4:56:17 PM
console.log(myDate.toLocaleString());

// Gets the year, using local time.
//*!2023
console.log(myDate.getFullYear())

console.log(typeof myDate);
console.log(myDate.getDate())

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

//  console.log(`${newDate.getDay()} and the time`)

newDate.toLocaleString('default', {
    weekday: "long",
    
})

