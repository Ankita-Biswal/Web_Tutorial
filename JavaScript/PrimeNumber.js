let a = 7;
if (a < 2) {
  console.log("It is Not a Prime Number");
}
for (i = 2; i < a / 2; i++) {
  if (a % i == 0) {
    console.log(a + " is Not a Prime Number");
    break;
  } else {
    console.log(a + " is a Prime Number");
    break;
  }
}
