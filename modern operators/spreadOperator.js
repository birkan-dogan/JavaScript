// we can use the spread operator (...) to basically expand an array into all its elements. So, basically unpacking all the array elements at one

const arr = [7, 8, 9];

const arrWithoutSpread = [1, 2, arr];
console.log(arrWithoutSpread); // [1, 2, [7, 8, 9]]

const arrWithSpread = [1, 2, ...arr];
console.log(arrWithSpread); // [1, 2, 7, 8, 9]


// whenever we need the elements of an array individually, we can use the spread operator
console.log(...arrWithSpread); // 1 2 7 8 9


/*
spread operator is actually a bit similar to the destructuring, because it also helps us get elements out of arrays.

the big difference is that the spread operator takes all the elements from the array and it doesn't create new variables.
*/


/*
2 important use cases of the spread operator:

--> to create shallow copies of arrays,
--> to merge 2 arrays together

*/


// shallow copy of the array
const mainMenu = ["Pizza", "Pasta", "Risotto"];
const mainMenuCopy = [...mainMenu];
console.log(mainMenuCopy);


// join 2 arrays
const starterMenu = [
  "Focaccia",
  "Bruschetta",
  "Garlic",
  "Bread",
  "Caprese Salad",
];
const menu = [...starterMenu, ...mainMenu];
console.log(menu);
//  ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']



// Also, the spread operator works on all iterables
// In JavaScript iterables are: arrays, strings, maps, sets
// Objects are not iterable


// using spread operator on a string

const str = "React ⚛";
const letters = [...str];
console.log(letters); // ['R', 'e', 'a', 'c', 't', ' ', '⚛']


/*
spread operator works on just 2 scenario:

--> when we pass an arguments into a function
--> when we build a new array

*/


// passing arguments into the function

const orderCake = (ing1, ing2, ing3) => {
  console.log(`Here is your delicious cake with ${ing1}, ${ing2} and ${ing3}`);
};

const ingredients = ["vanilla", "strawberry", "chocolate"];
orderCake(...ingredients);
// Here is your delicious cake with vanilla, strawberry and chocolate



// since ES2018, the spread operator actually works on objects, even though objects are not iterables

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  foundedIn: 1998,
};

/*
...restaurant
statement will basically copy all the properties of the restaurant into new object
*/

const newRestaurant = { ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);
// {name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', foundedIn: 1998, founder: 'Guiseppe'}


// we can create shallow copies of objects by using the spread operator. (instead of using Object.assign())

const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);
// {name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', foundedIn: 1998}

restaurantCopy.name = "Ristorante Roma";
// of course, the original one will not be affected.
