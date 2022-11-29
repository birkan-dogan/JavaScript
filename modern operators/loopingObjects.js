/*

Objects are not iterable, but we can loop over an object in indirect way.
we have different options depending on what exactly we want to loop over

*/

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: { open: 0, close: 24 },
};

console.log(Object.keys(openingHours));
// this will return an array and this array has keys of openingHours ['thu', 'fri', 'sat']


// looping objects' keys

const keys = Object.keys(openingHours); // now, we can loop over on this array

let openStr = `The restaurant will be open on ${keys.length} days: `;

for (const day of keys) {
  openStr += `${day} `;
}
console.log(openStr);  // The restaurant will be open on 3 days: thu fri sat



// Let's loop over the property values of an object

const values = Object.values(openingHours);
console.log(values);
/*
[
  { open: 12, close: 22 },
  { open: 11, close: 23 },
  { open: 0, close: 24 },
];

now of course, we can loop over on this array that has values of the object
*/



// Let's loop over the entire object. To loop over the entire object, we need the entries

const entries = Object.entries(openingHours);
console.log(entries);
/*

[

['thu', {…}],
['fri', {…}],
['sat', {…}]

]

now, we can loop over this array
*/


for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
/*

On thu we open at 12 and close at 22
On fri we open at 11 and close at 23
On sat we open at 0 and close at 24

*/
