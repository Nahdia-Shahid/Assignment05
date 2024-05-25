"use strict";
console.log("Task#01");
//Using filter to remove negative numbers
const numArr1 = [1, 2, -3, 3, 4, -4, -2, 5, -5];
console.log("Before using filter", numArr1);
const filteredarr = numArr1.filter((val) => {
    if (val > 0) {
        return true;
    }
});
console.log("Filtered array", filteredarr);
console.log("Task#02");
//Map method to create a new array where each number is multiplied by 2.
const numArr2 = [1, 2, 3, 4, 5];
console.log("The actual array", numArr2);
const mappedarr = numArr2.map((val) => {
    val *= 2;
    return val;
});
console.log("After multiplying with 2", mappedarr);
console.log("Task#03");
//use the filter method to create a new array containing only the fruits with more than 5 characters
const strArr1 = ["apple", "banana", "cherry", "date", "grape"];
console.log("The actual array", strArr1);
const filterredstr = strArr1.filter((array) => {
    return array.length > 5;
});
console.log("Fruits with more than 5 characters", filterredstr);
console.log("Task#04");
//use the map and filter methods together to create a new array containing the squares of even numbers.
const numArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("The actual array", numArr3);
const square = (arr) => {
    return arr.filter(val => val % 2 === 0)
        .map(val => val * val);
};
console.log("Square of even numbers is", square(numArr3));
console.log("Task#05");
//use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
const numArr4 = [0, 10, 20, 30, 40];
console.log("Temperature in Celsius", numArr4);
const convert = numArr4.map((val) => {
    let Farhen = (val * 9 / 5) + 32;
    return Farhen;
});
console.log("Temperature in Farhenheit", convert);
console.log("Task#06");
//use the map and filter methods together to create a new array containing the doubled values of odd numbers.
const numArr5 = [3, 6, 9, 12, 15, 18];
console.log("The actual array is", numArr5);
const doubledvalue = (arr) => {
    return arr.filter(val => val % 2 != 0)
        .map(val => val + val);
};
console.log("Square of even numbers is", doubledvalue(numArr5));
console.log("Task#07");
//use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
const strArr2 = ["Alice", "Bob", "Charlie", "David", "Emily"];
console.log("The list of names", strArr2);
console.log("After modification the list of array is");
const modifiedlist = strArr2.forEach((array) => {
    console.log(`${array}!`);
});
