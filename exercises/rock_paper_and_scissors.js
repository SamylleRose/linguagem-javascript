const playerChoice = "pedra";
const choiceComputer = ["pedra", "papel", "tessoura"];
let randomIndex;
let chooseRandom;

do {
  randomIndex = Math.floor(Math.random() * choiceComputer.length);
  chooseRandom = choiceComputer[randomIndex];

  console.log("Escolha do jogador: " + playerChoice);
  console.log("Escolha do computador: " + chooseRandom);

  if (
    (playerChoice === "pedra" && chooseRandom === "tessoura") ||
    (playerChoice === "papel" && chooseRandom === "pedra") ||
    (playerChoice === "tessoura" && chooseRandom === "papel")
  ) {
    console.log("User won!");
  } else if (playerChoice === chooseRandom) {
    console.log("A tie!");
  } else {
    console.log("Computer won!");
  }
} while (playerChoice === chooseRandom);
