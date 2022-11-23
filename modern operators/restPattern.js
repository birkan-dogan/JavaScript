// rest pattern looks exactly like the spread operator (...) but it actually does the opposite of the spread operator.


/*

we use the spread operator to expand an array into individual elements, (unpacking an array)

we use the rest pattern to collect multiple elements and condense them into an array (pack elements into an array)

*/


// below ... is a spread operator, because on RIGHT side of the assignment operator
const arr = [1, 2, ...[3, 4, 5]];

// below ... is a rest pattern, because on LEFT side of the assignment operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3, 4, 5]

// the rest pattern called `rest` because it will take the rest of the elements, and then put them into a new array.


const mainMenu = ["Pizza", "Pasta", "Risotto"];
const starterMenu = [
  "Focaccia",
  "Bruschetta",
  "Garlic",
  "Bread",
  "Caprese Salad",
];

// using three dots both sides of assignment operator

const [pizza, , risotto, ...otherFood] = [...mainMenu, ...starterMenu];
console.log(pizza, risotto, otherFood);
//Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad']



// rest operator also works on Objects

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: { open: 0, close: 24 },
};

// just select `sat` and then the rest should go into a new object which is the weekdays
const { sat, ...weekdays } = openingHours;
console.log(sat); // {open: 0, close: 24}
console.log(weekdays); // {thu: {…}, fri: {…}}


/*
we can write functions that they can accept any arbitrary amount of arguments thanks to the rest parameters.

add(2, 3);
add(5, 3, 7, 2);
add(5, 3, 7, 2, 4, 5, 8, 9, 1, 2);  like that

*/

const add = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};


// the function can accept any number of parameters
add(2, 3);
add(5, 3, 7, 2);
add(5, 3, 7, 2, 4, 5, 8, 9, 1, 2);
