const matrixOne = [
  [1, 2],
  [3, 4],
];
const matrixTwo = [
  [1, 2],
  [3, 4],
];
let sum = [];
let i = 0;

do {
  let j = 0;
  sum[i] = [];
  do {
    sum[i][j] = matrixOne[i][j] + matrixTwo[i][j];
    j++;
  } while (j < matrixOne[i].length);
  i++;
} while (i < matrixOne.length); 

console.log(`A soma das matrizes é ${JSON.stringify(sum)}`);
