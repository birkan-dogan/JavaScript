/*
The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.

*/

// Return an array of all values in ages[] that are 18 or over:

const ages = [32, 33, 16, 40, 12];
const result = ages.filter((x) => x >= 18);
console.log(result);

// find negative coordinates in coordinates array and make a new list with them

const coordinates = [-100, 150, -32, 43, -20, -1];
const negativeCoordinates = coordinates.filter((x) => x < 0);
console.log(negativeCoordinates);

// and make the negative numbers positive with the coordinates array

const positiveCoordinates = coordinates.filter((x) => x < 0).map((t) => t * -1);
console.log(positiveCoordinates);

// return true values in arr array

const arr = [11, null, 0, "abc", -13, NaN, "", undefined, false];
const filterArr = arr.filter(Boolean);
console.log(filterArr);

/*
with the elements in the names array whose names start with the specified letter, store them in a separate array
*/
const names = ["James", "Birkan", "Hank", "Gabriel", "Bellick"];
const filterNames = function (letter) {
  const h = letter.toUpperCase();
  const filter = names.filter((x) => x.startsWith(h));
  return filter;
};
console.log(filterNames("b"));

/* Let's print the results by making an 25% increase for whose salary is greater than 4000. */

const salary = [3000, 5000, 4000, 6000, 6500];

const bigRaise = salary
  .filter((x) => x >= 4000)
  .map((t) => t * 1.25)
  .forEach((z) => console.log(z));
