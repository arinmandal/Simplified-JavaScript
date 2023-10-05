const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//* Appends new elements to the end of an array, and returns the new length of the array.
marvel_heros.push("Balck Panthar")
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

//* Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

//*! Another Array Example

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7]]

//* Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

console.log(Array.isArray("Hello"))
//* Creates an array from an iterable object.
console.log(Array.from("Hello World"))
// console.log(Array.from({name: "Hello World"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

//* Returns a new array from a set of elements.
console.log(Array.of(score1, score2, score3));