// array destructuring

// destructuring means that breaking a complex data structure down into a smaller data structure like a variable

const [a, b, c] = [2, 3, 4];
console.log(a); // 2

// the original array of course not affected

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// let's take some elements out of the categories

const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria

// let's take only first and third element of restaurant.categories array
// we need a hole in the destructuring operator

let [firstElement, , thirdElement] = restaurant.categories;
console.log(firstElement, thirdElement); // Italian Vegetarian

// we can switch variables' values by using destructuring in a easy way.

[firstElement, thirdElement] = [thirdElement, firstElement];
console.log(firstElement, thirdElement);

// receive 2 return values from a function
// console.log(restaurant.order(2, 0));
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// what will we do if we have nested arrays?
const nested = [2, 4, [5, 6]];

// how can we get 2, 5 and 6 from that array
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// if we don't know array length, we can assign default values to destructuring variables. This feature can be really helpful when we fetch data from an api to avoid undefined variables
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
