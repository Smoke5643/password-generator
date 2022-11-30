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
    var howLong = Number(prompt('Between 8-128 characters, how long should the password be?'));
    var userPassword = '';  
    var random = Math.floor(Math.random() * userPassword.length);
    


    if (isUpperCase){
        console.log('uppercase');
        userPassword += upperLetters;
    }
  
    if (isLowerCase){
        console.log('lowercase');
        userPassword += letters;
    }
  
    if (isSpecial){
        console.log('special');
        userPassword += specialCharacters;
    }
  
    if (isNumber){
        console.log('numbers');
        userPassword += numbers;
    }

    if (howLong >= 8 && howLong <= 128){
        console.log(howLong);
        userPassword = random(howLong);
    }   else{
        alert('Password must be between 8 and 128 characters long.');
        return '';
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