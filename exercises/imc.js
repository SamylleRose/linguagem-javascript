function calculateImc(kg, heigth) {
  imc = kg / heigth ** 2;

  if (imc < 18.5) {
    console.log("Under weight");
  } else if (imc >= 18.5 && imc < 25) {
    console.log("Normal");
  } else if (imc >= 25 && imc < 30) {
    console.log("Overweight");
  } else {
    console.log("Obesity");
  }
}

calculateImc(60, 1.7);
calculateImc(80, 1.7);
calculateImc(90, 1.7);
