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
