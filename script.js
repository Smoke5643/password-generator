// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    var specialCharacters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var upperLetters = letters.toUpperCase();
    var isUpperCase = confirm('Would you like to use uppercase?');
    var isLowerCase = confirm('Would you like to use lowercase?');
    var isSpecial = confirm('Would you like to use special characters?');
    var isNumber = confirm('Would you like to use numbers?');
    var howLong = prompt('Between 8-128 characters, how long should the password be?');
    var allCharacters = "";

    if (isUpperCase){
        console.log('uppercase');
        allCharacters += upperLetters;
    }
  
    if (isLowerCase){
        console.log('lowercase');
        allCharacters += letters;
    }
  
    if (isSpecial){
        console.log('special');
        allCharacters += specialCharacters;
    }
  
    if (isNumber){
        console.log('numbers');
        allCharacters += numbers;
    }

    if (howLong){
        console.log('how long');
        console.log(howLong);
    }
  
    //grab random letters
    console.log(allCharacters);

    return "";

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);