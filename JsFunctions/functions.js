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


console.log("bind() method");

/*
Just like the call() method, an object can borrow a method from another object.
The difference is that bind() does not immediately call the function. Instead it returns a new function where the `this` keyword is bound.

So, it sets `this` keyword to whatever value we pass into bind.
*/

// example)

// object definition
const student1 = {
  name: "Hank",
  grade: "5",
  introduction: function () {
    console.log(`${this.name} studies in grade ${this.grade}.`);
  },
};

// object definition
const student2 = {
  name: "Jimmy",
  grade: " 6",
};

// the object student2 is borrowing introduction method from student1
const result = student1.introduction.bind(student2);

result(); // Jimmy  studies in grade  6.

// Example 2: Using bind() Method with two Parameters

// object definition
const candidate1 = {
  name: "George",
  introduction: function (score) {
    console.log(`${this.name} scored ${score} in an exam`);
  },
};

// object definition
const candidate2 = {
  name: "Kramer",
};

const candidateResult = candidate1.introduction.bind(candidate2, 90);
candidateResult(); // Kramer scored 90 in an exam


console.log("***** Closures *****");

/*

In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed

*/

// outer function
const greet = function () {
  let name = "Jerry";

  // inner function
  return function () {
    // accessing name variable

    return `Hi, ${name}`;
  };
};

const displayName = greet();
console.log(displayName); // returns the function definition
console.log(displayName()); // returns the value --> Hi, Jerry

// another example

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    /*
    Any function always has access to the variable environment of the execution context in which the function was created.
    */
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();

/*
the booker() function works to increase the passengerCount variable.

However, this variable is not in the current scope.
And JavaScript will look into the `CLOSURE` and see if it can find the variable there.

It does this even before looking at the scope chain
*/

booker();
booker();

// to look at closure of the function, we can use console.dir(functionName)
console.dir(booker);

// example for creating closure

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g(); // assigning a function to f variable and creating closure there

// f() function can reach the `a` variable that is in the function scope thanks to closure
f(); // 46

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

h();
// f() function can reach the `b` variable that is in the function scope thanks to closure
f(); // 1554
console.dir(f);

// another example

const boardPassengers = function (numPassenger, wait) {
  const perGroup = numPassenger / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${numPassenger} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

/*
Outputs:

Will start boarding in 3 seconds
We are now boarding all 180 passengers
There are 3 groups, each with 60 passengers

*/

