// program to check leap year

/* The year is a multiple of 400.
The year is a multiple of 4 and not a multiple of 100. */

const year = prompt("enter a year for checking: ");

if ((year % 4 == 0 && year % 100) || year % 400 == 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}
