/*
map() creates a new array from calling a function for every array element. (returning an array)

map() calls a function once for each element in an array.

map() does not execute the function for empty elements.

map() does not change the original array. Returns the copy array and execute the function on this array.

*/

// Multiply all the values in an array with 5:

const arr = [10, 5, 60, 250];
const arr5 = arr.map((x) => x * 5);
console.log(arr5);

/* Let's store all the elements in the names array in capital letters in the another array
 */
const names = ["Gabriel", "James", "marcus", "kevin"];
const bigNames = names.map((x) => x.toUpperCase());
console.log(bigNames);

// Just make bigger first letter of names' elements
const firstLetter = names.map(
  (value) => value[0].toLocaleUpperCase() + value.slice(1).toLocaleLowerCase()
);
console.log(firstLetter);

/* We give a 15% raise for the elements in the price array that are less than 100, and a 10% raise for the larger ones. */
const price = [20, 125, 48, 165, 74];
const raise = price.map((x) => {
  if (x >= 100) {
    return `${(x * 1.1).toFixed(2)} is new price of ${x}`;
  } else {
    return `${(x * 1.15).toFixed(2)} is new price of ${x}`;
  }
});
console.log(raise);

/*
We want to raise 50% for those whose salaries are less than 4000, and we want to store it as a separate array.
 */

const salary = [3000, 5000, 4000, 6000, 6500];

const raising = salary
  .filter((x) => x <= 4000)
  .map((y) => {
    return `${y} is raising 50% and it becomes ${y * 1.5}`;
  });
console.log(raising);
