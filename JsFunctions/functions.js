console.log("***** A Closer Look At Functions *****");

// Default Parameters

const bookingArray = [];

const createBooking = function (flightNum, numPassengers = 1, price = 100) {
  /*
  old rule to set default values (before ES6)
  numPassengers = numPassengers || 1;
  price = price || 100;
  */

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookingArray.push(booking);
};

createBooking("LH123"); // {flightNum: 'LH123', numPassengers: 1, price: 100}
createBooking("LH123", 2, 800); // {flightNum: 'LH123', numPassengers: 2, price: 800}

const flight = "LH123";
const hank = {
  name: "hank",
  passport: 123456879,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name; // we change the original object here because of the reference value in the stack.

  if (passenger.passport === 123456879) {
    alert("Check in");
  } else {
    alert("Wrong passport!");
  }
};

checkIn(flight, hank); // passing object to function as an argument
console.log(flight, hank); // {name: 'Mr. hank', passport: 123456879}

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(hank);
console.log(hank.passport); // 1617752363

console.log("***** First-class and Higher-order functions *****");

/*
First-class Functions
A programming language is said to have First-class functions when functions in that language are treated like any other variable.
*/

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowercase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

/*
Higher-order Functions

Thanks to first-class functions, we can use and write higher-order functions.
Higher-order function is that receives another function as an argument or that returns a new function or both of them.

*/
const transformer = function (str, fn) {
  console.log(fn(str));
};

transformer("JavaScript is the best!", upperFirstWord); // transformer() is a high-order function and here taking the upperFirstWord() function as an argument. upperFirstWord() function is a callback function.

console.log("***** JS Callback functions *****");

// A callback is a function passed as an argument to another function

const myDisplayer = function (some) {
  document.getElementById("demo").innerHTML = some;
};

const myCalculator = function (num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
};

myCalculator(5, 5, myDisplayer);

/*
 Why we need a callback function:
--> Callback functions make it easy to split up our code into more reusable interconnected parts

--> Callback functions allow us to create abstraction
*/

// higher-order function --> function returns function

const carManufacturer = function (carName) {
  return function (model) {
    console.log(`${carName} ${model}`);
  };
};

const modelName = carManufacturer("Tesla");
modelName("Sun"); // Tesla Sun

carManufacturer("Toyota")("Camry"); // Toyota Camry
// Always, when you see such calls f()()(), know: the functions are back !

// another example
/*
Can you write code for this function: sum(a)(b)(c)....( n)(). This should return the sum of all the numbers a+b+c+..+n.
*/

const sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b); // recursive function
    }
    return a;
  };
};
console.log(sum(1)(2)(3)(4)(5)()); // 15

console.log("***** The Call and Apply Methods *****");

const lufthansa = {
  airline: "Lufthansa",
  code: "LH",
  bookings: [],
  book: function (flightNum, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}`, passengerName });
  },
};

lufthansa.book(239, "Jerry Seinfeld");
lufthansa.book(635, "George Constanza");
console.log(lufthansa.bookings);

const eurowings = {
  name: "Eurowings",
  code: "EW",
  bookings: [],
};

const book = lufthansa.book; // simply taking the function as a value and store it a variable (thanks to first-class functions)

/*
book(23, "Cosmo Kramer")  --> will be return an error, because we have a this keyword in the book() method. But now, the book() is a regular function and cannot find a this property properly. We need to tell JavaScript what the this keyword should be like.

    If we want to book a lufthansa flight, the this keyword should point to lufthansa.
    If we want to book a eurowings flight, the this keyword should point to eurowings.

There are 3 function methods to do that
    call, apply, bind
    (functions are objects, so functions can have methods)

*/

console.log("** Call Method **");

// manually manipulating the this keyword
// With call(), an object can use a method belonging to another object.

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This example calls the fullName method of person, using it on person1:
person.fullName.call(person1); // This will return "John Doe":

// The call() method can accept arguments:

book.call(eurowings, 23, "Cosmo Kramer");
// in the call method, the first argument is exactly what we want the this keyword to point to (this keyword setting to first argument) . And the rest of the arguments

console.log(eurowings.bookings); // {flight: 'EW23', passengerName: 'Cosmo Kramer'}

book.call(lufthansa, 55, "Newman Postman");

const swiss = {
  airline: "Swiss Air Lines",
  code: "LX",
  bookings: [],
};

book.call(swiss, 444, "Tim Whatley");

// another example
const startUp = {
  address: function (continent, country) {
    return `${continent} ${country} ${this.city} ${this.name}`;
  },
};

const startUp1 = {
  city: "Oslo",
  name: "Spotify",
};

startUp.address.call(startUp1, "Europe", "Norway"); // Europe Norway Oslo Spotify

const startUp2 = {
  city: "Madrid",
  name: "Art Design",
};

startUp.address.call(startUp2, "Europe", "Spain");

console.log("** Apply Method **");

// The apply method does basically the same thing that call method does, the only difference is that apply method takes an array of the arguments after the this keyword

const flightData = [582, "Dwight Schrute"];

book.apply(swiss, flightData); // it works
book.call(swiss, ...flightData); // it works too, thanks to spread operator.

// Simulate a Max Method on Arrays
// Since JavaScript arrays do not have a max() method, we can apply the Math.max() method instead.

const arr1 = [1, 5, 3, 7, 9, 55, 22];

console.log(Math.max.apply(null, arr1)); // will return 55
