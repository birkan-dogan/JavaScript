// create a list consist of Fibonacci numbers from user input.

const user = prompt("How many elements does a Fibonacci list contain: ");  

const fibo = [1, 1]; // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...]

for (let i = 0; i <= Number(user) - 2; i++) {  // fibo list has two members already, so we have to use this ( Number(user) - 2 ) in condition
  
  fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]);  // we can reach the last item of fibo list by using this ( fibo.length -1 )
}

console.log(fibo);
