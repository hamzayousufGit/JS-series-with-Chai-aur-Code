/*
Comparision = we can compare two variables, strings or numbers etc
Note: The answer will be always in boolean value, true or false
*/


console.log(5 > 4); // output: True

let x = 5
let y = 6
console.log("is 5 > 5",x > (y - 1));// if we compare two same numbers the output will be false

let num1 = "1" //string
let num2 = 1 //number
console.log("is 1(string) is equal to 1(number) with ==(lazy guard)",num1 == num2) //== this operator only checks value not dataType, a lazy guard,output:true, but num1 is a string, and num2 a number so how they can be same, because == this is a lazy guard, it only checks values not datatypes
console.log("is 1(string) is equal to 1(number) with ===(strict guard)",num1 === num2)// output: false because this is a strict operator it also checks datatypes, I always prefer tp use that

// >,< you know what they mean, to compare a value, is it big or small 1 >= 3 this one says, is 1 greater than or equal to 3, output: false, 1 <= 3, is 1 smaller than or equal to 3? output: true

let number1 = 2
let number2 = 1
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number2 > number1)
console.log(number1 > number2)