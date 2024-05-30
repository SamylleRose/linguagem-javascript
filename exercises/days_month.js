function daysdays(days) {
  switch (days) {
    case 2:
      console.log("28 or 29 days");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log("30 days");
      break;
    default:
      console.log("31 days");
      break;
  }
}

daysdays(3);
daysdays(7);
daysdays(2);
daysdays(12);
daysdays(11);
