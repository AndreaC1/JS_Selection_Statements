console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let favNumber = 9;
const userInput = window.prompt("Input a number");

if (userInput < favNumber) {
  console.log("Too low");
}
else if (userInput > favNumber) {
  console.log("Too high");
}
else {
  console.log("Congratulations!!!");
}

//Exercise 2
let birthMonth = window.prompt("What is your birth month?");
console.log(birthMonth.toLowerCase());
birthMonthLower = birthMonth.toLowerCase();

switch (birthMonthLower) {
  case "january":
  case "february":
  case "march":
    console.log("Winter");
    break;
  case "april":
  case "may":
  case "june":
    console.log("Spring");
    break;
  case "july":
  case "august":
  case "september":
    console.log("Summer");
    break;
  case "october":
  case "november":
  case "december":
    console.log("Fall");
    break;
  default:
    console.log("no season")
    break;
}

//Exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;

  default:
    type = "Other"
    break;
}
switch (colorId) {
  case "BK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    type = "white";
    break;
}
switch (sizeId) {
  case "S":
    size = "Small"
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
  default:
    type = "One Size Fits All"
}
console.log(`Product: ${size} ${color} ${type}`);