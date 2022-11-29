// Sets

/*

A set is basically just a collection of unique values, that means that a set can never have any duplicates.
Sets are also iterables. Order of elements in a set is irrelevant.

*/

// to create a new set

console.log(new Set(["a", "b", "c", "a", "a", "b", "d", "c", "d", "d"]));
// {'a', 'b', 'c', 'd'}

const ordersSet = new Set([
  "Pizza",
  "Risotto",
  "Pizza",
  "Pasta",
  "Risotto",
  "Pasta",
]);

// we can get the size of a set
console.log(ordersSet.size); // 3

// we can check if a certain element is in a set
console.log(ordersSet.has("Pizza")); // true
console.log(ordersSet.has("Bread")); // false

// we can also add new elements to a set
ordersSet.add("Garlic Bread");

// we can also delete elements in a set
ordersSet.delete("Risotto");

console.log(ordersSet); // {'Pizza', 'Pasta', 'Garlic Bread'}

// we can delete all of the elements of a set by using .clear() method

/*

how do we actually retrieve values out of a set?

In sets, there are no indexes. And in fact, there is no way of getting values out of a set. If our goal is to actually store values in order and then retrieve them, then the best use case is an array.

*/

// sets are also iterables, and we can loop over them
for (const order of ordersSet) console.log(order);

/*

Pizza
Pasta
Garlic Bread

*/

console.log("Let's see a big use case for sets");

// to remove duplicate values of arrays

const staff = [
  "Waiter",
  "Chef",
  "Waiter",
  "Manager",
  "Waiter",
  "Chef",
  "Waiter",
];

// we just want to know which different positions there are in our restaurant

const staffUnique = new Set(staff);
console.log(staffUnique.size); // 3

// to convert a set to an array, we can use the spread operator

const staffUniqueArray = [...staffUnique];
console.log(staffUniqueArray); // ['Waiter', 'Chef', 'Manager']
