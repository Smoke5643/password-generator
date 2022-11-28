// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    TODO:
    var specialCharacter = "!#$%&()*+,-./:;<=>?@[]^_`{|}~"
    var letters = "abcdefghijklmnopqrstuvwxyz"
    var numbers = "0123456789"
    var upperLetters = letters.toUpperCase()

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);