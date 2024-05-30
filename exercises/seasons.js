function seasons(month) {
  if (month < 3 || month === 12) {
    console.log("summer");
  } else if (month < 6) {
    console.log("fall");
  } else if (month < 9) {
    console.log("winter");
  } else {
    console.log("spring");
  }
}

seasons(3);
seasons(7);
seasons(2);
seasons(12);
seasons(11);
