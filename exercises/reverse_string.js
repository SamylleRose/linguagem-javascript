string = "Hello";

let invertedString = "";

let i = string.length - 1;
while (i >= 0) {
  invertedString += string[i];
  i--;
}
console.log(invertedString);
