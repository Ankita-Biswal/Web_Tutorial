const prompt = require("prompt-sync")();
function checkYear() {
  let year = parseInt(prompt("Enter the year:"));
  let month = parseInt(prompt("Enter the month (1-12):"));
  if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log("It has 30 days!!!!!!");
  } else if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    console.log("It has 31 days!!!!!!");
  } else if (month == 2) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      console.log("It has 29 days");
    } else {
      console.log("It has 28 days");
    }
  } else {
    console.log("Wrong input boss");
  }
}
checkYear();
