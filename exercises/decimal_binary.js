let decimal = 5;

let binary = "";

do {
  binary = (decimal % 2) + binary;
  decimal = Math.floor(decimal / 2);
} while (decimal > 0);

console.log(binary);
