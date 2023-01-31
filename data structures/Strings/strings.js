const airline = "TAP Air Portugal";
const plane = "A320";

// we can find the length of the string
console.log(airline.length); // 16

// we can get the position in which a certain letter is in the string
console.log(airline.indexOf("r")); // 6

// indexOf() gives us first occurence, if we need the last one, then we can use lastIndexOf() method
console.log(airline.lastIndexOf("r")); // 10

// How we extract parts of strings:

// string.slice(start, stop, step)
console.log(airline.slice(4)); // "Air Portugal"
console.log(airline.slice(4, 7)); // "Air"
console.log(airline.slice(-2)); // "al"

// changing the case of a string
console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// ex.)
const passenger = "jOnAS"; // it should be like `Jonas`

const passengerName = function (name) {
  const passengerName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  console.log(passengerName);
};

passengerName("bIrKAn"); // Birkan
passengerName("jOnAS"); // Jonas

// ex.) Comparing emails
const email = "jerry@gmail.com";
const loginEmail = " Jerry@Gmail.Com \n";

// The trim() method removes whitespace from both sides of a string.
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); // jerry@gmail.com

// replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS); // 288.97$

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

// replace() method only replaces the first occurrence of the search string
console.log(announcement.replace("door", "gate"));

// to replace all occurrence, we can use regular expressions
console.log(announcement.replace(/door/g, "gate"));

// to replace all occurrence, we have a function that to -> replaceAll()
console.log(announcement.replaceAll("door", "gate"));

// Booleans
const plane2 = "A320neo";
console.log(plane2.includes("A320")); // true
console.log(plane2.includes("Boeing")); // false

console.log(plane2.startsWith("A3")); // true
console.log(plane2.startsWith("Air")); // false

if (plane2.startsWith("Airbus") && plane2.endsWith("neo")) {
  console.log("Part of the new Airbus family");
} else {
  console.log("💔");
}

// practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else {
    console.log("Welcome a board");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

// split and join

// .split() method allows us to split a string into multiple parts based on a divider string. And it will store the results of elements into a new array
console.log("a+very+nice+string".split("+")); // ['a', 'very', 'nice', 'string']

console.log("birkan dogan".split(" ")); // ['birkan', 'dogan']
const [firstName, lastName] = "Birkan Dogan".split(" ");
console.log(firstName); // Birkan
console.log(lastName); // Dogan

// the .join() method returns an array as a string
// syntax: array.join(seperator)

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

// how will we capitalize this name here: "jessica ann smith davis"

const capitalizeName = function (name) {
  const nameArr = name.split(" ");
  const capitalizeArr = [];
  for (const item of nameArr) {
    capitalizeArr.push(item[0].toUpperCase() + item.slice(1));
  }
  console.log(capitalizeArr.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("george costanza");

// padding

const maskCreditCard = function (number) {
  const string = String(number);
  // const string = number + ""  this also works to convert a number to a string
  const lastFour = string.slice(-4);
  return lastFour.padStart(string.length, "*");
};

console.log(maskCreditCard(123456789123)); // ********9123

// .repeat() method

const message = "Bad weather... All departures are delayed! ";
console.log(message.repeat(3));
// Bad weather... All departures are delayed! Bad weather... All departures are delayed! Bad weather... All departures are delayed!
