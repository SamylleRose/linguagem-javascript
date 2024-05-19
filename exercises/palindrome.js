function palindrome(word) {
  const invertedWord = word.split("").reverse().join("");

  if (word === invertedWord) {
    console.log("Is a palindrome!");
  } else {
    console.log("Is not a palindrome!");
  }
}

palindrome("Samylle");
palindrome("ana");
palindrome("natan");
