// link converter

/* https://www.youtube.com/watch?v=b7vfp5G4brE it will convert this normal link to shorter one, 
like that https://youtu.be/b7vfp5G4brE */

const internal = "https://youtu.be/";
const link = prompt("paste a YouTube link to convert: ");


const converted = link.split("=");
const newLink = internal.concat(converted[1]);
console.log(newLink);
