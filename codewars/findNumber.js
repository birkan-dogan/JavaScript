// Write a code to find numbers which are divisible by 3 and 5, between 100 and 1000.

for (let i = 100; i <= 1000; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}
