// a map is a data structure that we can use to map values to keys

// Just like objects, data is stored in key value pairs in maps

/*

The big difference between objects and maps is that in maps the keys can have any type.

In objects, the keys are basically always strings,
In maps, we can have any type of key

*/

// creating an empty map

const restaurant = new Map();

// adding key value pair to map
restaurant.set("name", "Classico Italiano");
restaurant.set(1, "Italy"); // the keys can be any type
restaurant.set(2, "Portugal");

console.log(restaurant.set(2, "Portugal"));
// {'name' => 'Classico Italiano', 1 => 'Italy', 2 => 'Portugal'}

// .set() method returns the updated map, and this allows us to chain the .set() methods

restaurant
  .set("categories", ["Italian", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

// to read data from a map, we use the .get() method. All we need to do is to pass the name of the key

console.log(restaurant.get("name")); // Classico Italiano

const time = 21;
console.log(
  restaurant.get(
    time > restaurant.get("open") && time < restaurant.get("close")
  )
); // We are open :D

// we can also check if a map contains a certain key
console.log(restaurant.has("categories")); // true

// we can also delete elements from the map based on the key
restaurant.delete("close");
console.log(restaurant);
// {'name' => 'Classico Italiano', 1 => 'Italy', 2 => 'Portugal', 'categories' => Array(3), 'open' => 11, {true => "We are open :D", false => "We are closed :("}

// maps also have size property
console.log(restaurant.size); // 7

console.log("using arrays and objects as a key");

restaurant.set([1, 2], "Test");

// Can we use the .get() method to read "Test"?

console.log(restaurant.get([1, 2]));
// this will return undefined, because the arrays are not the same object in the heap

console.log("to make it work: ");

const arr = [1, 2];

restaurant.set(arr, "Test");
console.log(restaurant.get(arr)); // this will return "Test", because arr refers to the same place in the memory

// DOM elements also can be a key in maps

restaurant.set(document.querySelector("h1"), "Heading");
console.log(restaurant);

/*
{
"name" => "Classico Italiano",
1 => "Italy",
2 => "Portugal",
"categories" => Array(3),
"open" => 11,
true => "We are open :D",
false => "We are closed :(",
Array(2) => "Test",
Array(2) => "Test",
h1 => "Heading"
}

*/
