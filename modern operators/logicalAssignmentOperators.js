// Logical assignment Operators

const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};


// the logical or assignment operator

// we want to set a default number of guests for all the restaurant objects that do not have that property

/*

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

instead of writing that, we can use or assignment operator.

*/

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// basically, this operator assigns a value to a variable if that variable is currently falsy

console.log(rest1.numGuests); // 20
console.log(rest2.numGuests); // 10



// the logical nullish assignment operator

// to check variable's value is null or undefined

const student = {
  name: "Cosmo",
  exam: 0,
};

student.exam ??= 10;
console.log(student); // {name: 'Cosmo', exam: 0}

/*

if we wrote student.exam ||= 10, the value of exam will be wrong
{name: 'Cosmo', exam: 10}

*/



// logical and operator  &&=

// basically, this operator assigns a value to a variable if that variable is currently truthy.

const show = {
  name: "The office",
  writer: undefined,
};

const show2 = {
  name: "Seinfield",
  writer: "Jerry Seinfield",
};

/*

instead of writing like this --> show2.writer = show2.writer && "<ANONYMOUS>"
we can use the logical and operator to avoid code duplicate

*/

show2.writer &&= "<ANONYMOUS>";
console.log(show2); // {name: 'Seinfield', writer: '<ANONYMOUS>'}
