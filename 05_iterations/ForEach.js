// forEach()

// The forEach() method of Array instances executes a provided function once for each array element.

const num = ["1", "2", "3", "4", "5"]
// num.forEach((num) => console.log(num)); 

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((item) => console.log(item));

// coding.forEach( (item) => {
//     console.log(item);
// } )

// normal function
// function printMe(item){
//     console.log(item);
// }

// function reference
// coding.forEach(printMe)

// Full Array, index, item

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
} )