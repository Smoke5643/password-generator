var generateBtn = document.querySelector("#generate");

// Main function to gereate password
function generatePassword(){
    var specialCharacters = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var upperLetters = letters.toUpperCase();
    var isUpperCase = confirm('Would you like to use uppercase?');
    var isLowerCase = confirm('Would you like to use lowercase?');
    var isSpecial = confirm('Would you like to use special characters?');
    var isNumber = confirm('Would you like to use numbers?');
    var howLong = prompt('Between 8-128 characters, how long should the password be?');
    var possiblePassword = '';  
    var random = '';
    var userPassword = '';
    var blank = '';
    
    while (possiblePassword = blank){
        alert('You must choose at least one character type')
        br
    }
    // Making sure the user inputs within the desired range
    if (howLong < 8 || howLong > 128){
        alert ('Password must be between 8 and 128 characters');
        return "";
    }
    // Gathering password components from user input
    if (isUpperCase){
        possiblePassword += upperLetters;
    }
  
    if (isLowerCase){
        possiblePassword += letters;
    }
  
    if (isSpecial){
        possiblePassword += specialCharacters;
    }
  
    if (isNumber){
        possiblePassword += numbers;
    }
    
    // Randomly choosing a password from the inputted length and the characters the user wants
    for (var i = 0; i < howLong; i++){
        random = Math.floor(Math.random() * possiblePassword.length);
        userPassword += possiblePassword[random];
        }
    
    return userPassword;

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);