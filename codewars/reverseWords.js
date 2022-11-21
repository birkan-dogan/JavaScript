// Purpose of the this coding challenge is to write a code that given a string , returns reverse order of words.


const text = prompt("enter something: ");
let uzunluk = text.length - 1;
let reverseText = "";
for (; 0 <= uzunluk; uzunluk--) {
  reverseText += text.charAt(uzunluk);
}
console.log(reverseText);
