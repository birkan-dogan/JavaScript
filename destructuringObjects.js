// object destructuring

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

// we have to specify the name of properties when we destructure objects

// also, we don't need to manually skip elements because the order of element does not matter unlike arrays.

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']


// what can we do, if we want the variable names to be different from the property names?

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
/*
we will call --> name property as a restaurantName
                 openingHours property as a hours
                 categories property as a tags
*/

console.log(restaurantName, hours, tags);



// we can set default values when destucturing objects to avoid undefined return. Just like we can do in arrays.

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [] ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad']



// destructuring nested objects

// take fri object
const {
  openingHours: { fri },
} = restaurant;
console.log(fri); // {open: 11, close: 23}


// take open and close variables
const {
  openingHours: {
    fri: { open, close },
  },
} = restaurant;
console.log(open, close); // 11 23



// trying the orderDelivery property in line 26-33
// we will only pass one object into the function
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});
// Order received Garlic and Risotto will be delivered to Via del Sole, 21 at 22:30



// we only define 2 property and the others come from default values that we set there for destructuring

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});
// Order received Bruschetta and Pizza will be delivered to Via del Sole, 21 at 20:00
