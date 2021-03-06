// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays for password properties
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
  "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

// Variables for user input to prompts
var length;
var lowerCase;
var upperCase;
var numeric;
var specialCharacters;

// Write password to the #password input
function writePassword() {
  length = prompt("Choose a length for your password. Please select a length between 8 and 128 characters.");

// Checks to see if user input meets criteria for a number between 8 and 128
  if (isNaN(length) || length < 8 || length > 128) {
    confirm("Please enter a number between 8 and 128");
    return;
  }

  lowerCase = confirm("Would you like to include lowercase letters?");
  upperCase = confirm("Would you like to uppercase letters?");
  numeric = confirm("Would you like to include numbers?");
  specialCharacters = confirm("Would you like to include special characters?");

// Checks to see is user selected at least one criteria
  if (!lowerCase && !upperCase && !numeric && !specialCharacters) {
    confirm("Please choose either lowercase letters, uppercase letters, numbers, or special characters");
    return;
  }

// Calls generatePassword function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Creates pool of password characters to choose from based on user input
function createCharacterPool(lowerCase, upperCase, numeric, specialCharacters) {
  var characterPool = [];

  if (lowerCase) {
    characterPool = characterPool.concat(lowerCaseLetters);
  }

  if (upperCase) {
    characterPool = characterPool.concat(upperCaseLetters);
  }

  if (numeric) {
    characterPool = characterPool.concat(numbers);
  }

  if (specialCharacters) {
    characterPool = characterPool.concat(specialChar);
  }

  return characterPool;
}

// Chooses random character from character pool
function getRandomCharacter(characterPool) {
  return characterPool[Math.floor(Math.random() * characterPool.length)];
}

// Generates password based on user criteria
function generatePassword() {
  var password = "";
  var characterPool = createCharacterPool(lowerCase, upperCase, numeric, specialCharacters);
  for (var i = 0; i < length; i++) {
    password = password + getRandomCharacter(characterPool);
  }
  return password;
}