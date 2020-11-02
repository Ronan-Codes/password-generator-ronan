// This Password Generator provides a password based on the criteria that the user specifies.

// Add event listener to generate button
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

// Variable Criteria Declarations
var confirmLength = ""
var confirmSymbols;
var confirmUpper;
var confirmLower;
var confirmNumeric;

// Arrays
var symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



//length
var getLength = function () {
  passLength = prompt("What is the length of your password? Pick a number from 8-128");
};


// lowerCase
var lowerCase = function() {
  confirm("Would you like to include lower case letters?")
};
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
//console.log (getRandomLower());


// upperCase
var upperCase = function() {
  confirm("Would you like to include upper case letters?")
};
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// numeric
var numeric = function() {
  confirm("Would you like to include numeric characters: 0-9?")
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

// symbols
var symbols = function() {
  confirm("Would you like to include symbols? (!@#$%^&*(){}=<>/,.)")
}
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

generateBtn.onclick = function() {
  alert("Select criteria for password.");

  getLength();

  lowerCase();

  upperCase();

  numeric();

  symbols();
  console.log(passLength);

  writePassword();

};

// USE SWITCH TO get different results?








/*

//generate random password
var generate = function() {

  // set password length of at least 8 characters and no more than 128 characters
 // let complexity =

  //possible password values
  let values = "All numbers/letters/symbols"

  // when user hits the generate button
  let passwordGenerated = ""

  // create for loop to choose password characters
  for(var i = 0; i <= complexity; i++)
    passwordGenerated = passwordGenerated + values.chartAt(Math.floor(Math.random()*Math.floor(complexity -1)))

  // add password to textbox/display area
  document.getElementById("display")
};

//GeneratePassword
generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
  //  var password = generatePassword();

//GeneratePassword Function
var generatePassword = function(lower, upper, number, symbol, length) {
  // 1. init pw variable
  // 2. filter out unchecked types
  // 3. loop over length call generator function for each type
  // 4. add final pw to the pw var and return

}
*/

var generatePassword = function() {
  for (i = 0; i <= passLength.length; i++) {
  const answer = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*(){}=<>/,.0123456789'
  return answer[Math.floor(Math.random() * answer.length)]
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
