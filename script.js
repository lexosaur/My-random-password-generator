// Assignment Code
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")"]
//Create generatePassword function
function generatePassword (){
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
getPrompts();

  var password = generatePassword("");
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

}

function getPrompts(){
  //Ask the user how long they want the password to be and convert the input into a number (integer)
  selectionArray = [];
  passwordLength = parseInt(prompt("How long would you like yous password to be? (8-128 characters)"));

  if(isNaN(passwordLength)|| passwordLength < 8|| passwordLength > 128){
    alert ("Please make sure password length is minimum 8 characters and maximum 128.");
    return false
  }

  if (confirm("Do you want to include lowercase letters in the generated password?")){
    selectionArray = selectionArray.concat(lowerCaseLetters)
  }

  if (confirm("Do you want to include uppercase letters in the generated password?")){
    selectionArray = selectionArray.concat(upperCaseLetters)
  }

  if (confirm("Do you want to include special characters in the generated password?")){
    selectionArray = selectionArray.concat(specialCharacters)
  }

  if (confirm("Do you want to include numbers in the generated password?")){
    selectionArray = selectionArray.concat(numbers)
  }
return true;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);