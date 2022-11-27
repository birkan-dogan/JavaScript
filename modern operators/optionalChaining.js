const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: { open: 0, close: 24 },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    // destructuring parameter object
    // now we have 4 variable names
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};


console.log(restaurant.openingHours.mon);
// this property doesn't exist and it should return undefined


/*

console.log(restaurant.openingHours.mon.open);

this will return an error, because the result of this restaurant.openingHours.mon was undefined and trying to read property of undefined is really an error

*/


// to avoid this error, firstly we should have to check if the property is actually exists


// we can do that with if statements
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// however, this is checking just for one property. So, as a result this is not good for programming logic


// ES2020 introduced a great solution for this, optional chaining (?.)

// With optional chaining, if a certain property doesn't exist, then undefined is returned immediately. And so that will avoid that kind of error


console.log(restaurant.openingHours?.mon?.open);  // undefined
/*
if restaurant.openingHours doesn't exist then it will return undefined before looking the "mon" property
if restaurant.openingHours.mon doesn't exist then it will return undefined before looking the "open" property
*/


// optional chaining also work for calling methods. We can check if a method actually exists before we call it

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");  // ['Focaccia', 'Pasta']

console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");  //Method does not exist



// Also, optional chaining works on arrays

// basically we can use it to check if an array is empty
const users = [{ name: "Jerry", email: "jerry@gmail.com" }];

console.log(users[0]?.name ?? "users array is empty"); // Jerry

// and without optional chaining we have to write conditions and this is not good for programming logic
if (users.length > 0) console.log(users[0].name);  // Jerry
else console.log("users array is empty");



// almost always use optional chaining operator with the nullish coalescing operator, so we can actually do something in case we don't get a result from the object or from the array
