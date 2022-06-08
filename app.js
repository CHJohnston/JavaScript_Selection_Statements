console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const num = 25;

let userInput = window.prompt("Guess a number between 1 and 100:");

if (userInput < num) {
  alert("Too low");
} else if (userInput > num) {
  alert("Too high");
} else {
  alert("Congratulations. You guessed correctly!");
}

// Exercise 2
let birthMonth = window.prompt('Enter your birth month (e.g. "December"):');

switch (birthMonth.toLowerCase()) {
  case "december":
  case "january":
  case "february":
    alert("You were born in Winter.");
    break;
  case "march":
  case "april":
  case "may":
    alert("You were born in Spring.");
    break;
  case "june":
  case "july":
  case "august":
    alert("You were born in Summer.");
    break;
  case "september":
  case "october":
  case "november":
    alert("You were born in Fall.");
    break;
  default:
    alert("You entered a invalid month.");
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
    type = "Other";
}

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "RD":
    color = "Red";
    break;
  case "BU":
    color = "Blue";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}
console.log(`Product: ${size} ${color} ${type}`);

//Exercise 3- Extra Allow User Input
let TypeId = window.prompt("Enter the Type ID: ");
let ColorId = window.prompt("Enter the Color ID: ");
let SizeId = window.prompt("Enter the Size ID: ");
let Type = "";
let Color = "";
let Size = "";

switch (TypeId) {
  case "01":
    Type = "Tank top";
    break;
  case "02":
    Type = "T-Shirt";
    break;
  case "03":
    Type = "Long Sleeve";
    break;
  case "04":
    Type = "Sweat Shirt";
    break;
  default:
    Type = "Other";
}
switch (ColorId) {
  case "BL":
    Color = "Black";
    break;
  case "RD":
    Color = "Red";
    break;
  case "BU":
    Color = "Blue";
    break;
  case "PU":
    Color = "Purple";
    break;
  default:
    Color = "White";
}
switch (SizeId) {
  case "S":
    Size = "Small";
    break;
  case "M":
    Size = "Medium";
    break;
  case "L":
    Size = "Large";
    break;
  case "XL":
    Size = "Extra Large";
    break;
  default:
    Size = "One Size Fits All";
}
alert(`You Selected a ${Color} ${Type} in Size ${Size}`);

// Exercise 1-Extra Modify to Allow Three attempts;

const guessNum = 32;
let wrongNum = true;

for (var i = 1; i <= 3 && wrongNum; i++) {
  let user_Input = window.prompt(
    "Guess another number between 1 and 100: You have a total of three attempts!"
  );
  if (user_Input < guessNum) {
    alert("Too low");
  } else if (user_Input > guessNum) {
    alert("Too high");
  } else if (user_Input == guessNum) {
    alert("Congratulations. You guessed correctly!");
    wrongNum = false;
  }
}
if (wrongNum) {
  alert("Sorry -- No more attempts available!");
} 
