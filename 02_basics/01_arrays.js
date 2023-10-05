// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2)


// Array methods

//* Appends new elements to the end of an array, and returns the new length of the array.
// myArr.push(6)
// myArr.push(7)

//* Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// myArr.pop()
// console.log(myArr)

//* Inserts new elements at the start of an array, and returns the new length of the array.
// myArr.unshift(9)

//* Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// myArr.shift()
// console.log(myArr);

// for checking value inside array
// Determines whether an array includes a certain element, returning true or false as appropriate.
// The position in this array at which to begin searching for searchElement.
// console.log(myArr.includes(1));

//* Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// console.log(myArr.indexOf(5));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// slice, splice

console.log("A ","B ", ...myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);
