// is it a prime number?

const nmbr = Number(prompt("enter a number: "));
let counter = 0;

for (let i = 1; nmbr >= i; i++) {
  if (nmbr % i == 0) {
    counter += 1;
  }
}
if (nmbr == 0 || nmbr == 1 || counter >= 3) {

  // setting the counter condition 3 is important for 2
  console.log(nmbr, "is not a prime number");

} else if (nmbr < 0) {
  console.log(nmbr, "is not a prime number. The lowest prime number is 2 ");
} else {
  console.log(nmbr, "is a prime number");
}
