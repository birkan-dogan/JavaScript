console.log("***** Working with Arrays *****");

// array methods

let arr = ["a", "b", "c", "d", "e"];

/*
slice() method:
    with the slice method, we can extract part of any array without changing the original array

*/
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(1, -3)); // ['b']

// we can use the .slice() method to simply create a shallow copy of an array
const arr2 = arr.slice();

/*

.splice() method works in almost the same way as slice() method.
But the difference is that splice method actually changes the original array

The syntax:
.splice(start, deleteCount)
*/

console.log(arr.splice(2)); // ['c', 'd', 'e']
console.log(arr); // ['a', 'b']

arr.splice(-1);
console.log(arr); // ['a']

console.log([1, 2, 3, 4, true, false].splice(1, 4)); // [2, 3, 4, true]

/*

reverse() method --> reverse the original array

*/

const letterArr = ["j", "f", "k", "i", "b", "h"];
console.log(letterArr.reverse());
console.log(letterArr);

/*

concat() method --> we use concat() method to concatenate two arrays

*/

const letters = arr.concat(letterArr);
console.log(letters); // ['a', 'h', 'b', 'i', 'k', 'f', 'j']
console.log([...arr, ...letterArr]); // gives exact result thanks to spread operator

/*

join() method --> gives us a string with the seperator that we specified

*/
console.log(letters.join(" | ")); // a | h | b | i | k | f | j
