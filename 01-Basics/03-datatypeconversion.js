// Data Type Conversion = In dataType conversion, we can change a dataType of a variable, like 
//   let num = "33"(string), we can change it into a number

let number = "33"
let realNumber = Number(number) // when using type conversion, write first letter capital in    datatype, like Number()

console.log(typeof realNumber, realNumber);

// what if number = "33abc"

number = "33abc"
realNumber = Number(number) // NaN(Not a number) because we have added letters abc
console.log(typeof realNumber, realNumber);

// what if number = "null"

number = null
realNumber = Number(number)
console.log(typeof realNumber, realNumber);

// what if : number = undefined

number = undefined
realNumber = Number(number)
console.log(typeof realNumber, realNumber);