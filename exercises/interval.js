function interval(number, SuperiorLimit, inferiorLimit) {
  if (number <= SuperiorLimit && number >= inferiorLimit) {
    console.log(number, "Is within the limit");
  } else {
    console.log(number, "Is out of bounds");
  }
}

interval(3, 6, 2);
interval(8, 6, 2);
