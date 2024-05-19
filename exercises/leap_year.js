function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("It's a leap year!");
  } else {
    console.log("It's not a leap year!");
  }
}

leapYear(2000);
leapYear(2001);
leapYear(2100);
