/*
DataType = It is a method to check type of a value, like 8 is number, hi is a word, in js 8 is a integer or a number, hi is a string
*/

let number = 10
let word = "Hi" // Remember that strings(words) are always in quotes " ", ' ', prefer using " "
let boolen = true // It is only yes or no, true and false
let undefine; // In undefine, a valriable is assigned but not assigned a value
let nothingNull; // Null is literally nothing, empty
let bigint = 264585483542547656784453542585485634523426348764656756676458487e3 // Its not something special, just a big number

console.table([typeof number, number, typeof word, word, typeof boolen, boolen, typeof undefine, undefine, typeof bigint, bigint])