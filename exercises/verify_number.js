function verifyNumber(number) {
  if (number > 0) {
    console.log("The number is positive!");
  } else if (number < 0) {
    console.log("The number is negative!");
  } else {
    console.log("The number is zero!");
  }
}

verifyNumber(10);
verifyNumber(-10);
verifyNumber(0);
