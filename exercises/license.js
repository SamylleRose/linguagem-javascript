function license(age) {
  let message = age >= 18 ? "Can drive" : "Can't drive";
  console.log(message);
}

license(18);
license(16);
license(38);
