// sorts words in alphabetical order
const sentence = prompt("enter a sentence: ");

// converting to an array
const words = sentence.split(" ");

// sort the array elements
words.sort();

for (let i = 0; i <= words.length; i++) {
  console.log(words[i]);
}
