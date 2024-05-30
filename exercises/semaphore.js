function semaphore(color) {
  color = color.toLowerCase();

  if (color === "red") {
    console.log("Stop!");
  } else if (color === "green") {
    console.log("Go straight on!");
  } else if (color === "yellow") {
    console.log("Attention");
  } else {
    console.log(" Invalid color!");
  }
}

semaphore("red");
semaphore("Red");
semaphore("green");
semaphore("roxo");
semaphore("AMARELO");
