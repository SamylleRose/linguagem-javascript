function higherNumber(numberOne, numberTwo, numberThree) {
  if (numberOne >= numberTwo && numberOne >= numberThree) {
    console.log("The largest number is", numberOne);
  } else if (numberTwo >= numberOne && numberTwo >= numberThree) {
    console.log("The largest number is", numberTwo);
  } else {
    console.log("The largest number is", numberThree);
  }
}

higherNumber(2, 7, 5);
