function calculateAverage(gradeOne, gradeTwo) {
  const average = (gradeOne + gradeTwo) / 2;
  let type =
    average >= 7 ? "Approved student!, média:" : "Failed student!, média:";
  console.log(type, average);
}

calculateAverage(5, 10);
calculateAverage(5, 5);
calculateAverage(7, 8);
