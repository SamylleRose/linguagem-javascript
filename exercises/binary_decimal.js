let binary = "101";
let decimal = 0;

for (let i = binary.length - 1, j = 0; i >= 0; i--, j++) {
  decimal += 2 ** i * binary[j];
}
console.log(decimal);
