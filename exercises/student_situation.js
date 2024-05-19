function studentSituation(grade) {
  if (grade >= 7 && grade <= 10) {
    console.log("approved");
  } else if (grade > 5 && grade < 6.9) {
    console.log("Recovery");
  } else if (grade < 5) {
    console.log("Disapproved");
  } else {
    console.log("Invalid average");
  }
}

studentSituation(5.5);
studentSituation(10);
studentSituation(7);
studentSituation(16);
studentSituation(4);
