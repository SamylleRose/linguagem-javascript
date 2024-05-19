function checkVoter(age) {
  if (age >= 18 && age <= 70) {
    console.log("Voting is mandatory");
  } else if (age < 16) {
    console.log("Don't vote");
  } else {
    console.log("Optional vote");
  }
}

checkVoter(18);
checkVoter(66);
checkVoter(14);
checkVoter(17);
