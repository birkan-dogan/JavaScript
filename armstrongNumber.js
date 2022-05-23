// armstrong number: 371 --> (3 ** 3 + 7 ** 3 + 1 ** 3)

const input = prompt("enter a number: "); // 371

const len = input.length;  // len = 3
let summ = 0;

for (i = 0; i <= input.length - 1; i++) {
  summ += input[i] ** len;  // 3 ** 3 +  7 ** 3 + 1 ** 3
}

if (summ == Number(input)) {  // 371 == 371
  console.log(`${input} is a armstrong number`);
} else {
  console.log(`${input} is not a armstrong number`);
}
