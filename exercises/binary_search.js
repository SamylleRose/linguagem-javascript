let min = 1;
let max = 100;
let guess = Math.floor(min + max) / 2;

let numberThought = 50;

while (guess != numberThought) {
  if (guess > numberThought) {
    max = guess;
  } else {
    min = guess;
  }
  guess = Math.floor(min + max) / 2;
}

console.log("the number thought is:", guess);
