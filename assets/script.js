// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
    var results = "";
    var varlength = parseInt(prompt ("How many charcters would you like your password? Please enter any number between; 8-128"));
    if (varlength < 8 || varlength > 128) 
    {
      window.alert("Your password must be between 8 and 128");
      return results;
    } else 
    {
      var passwordLength = varlength;
    }
    var lowerChar = confirm ("Would you like lowercase letters?");
    if (lowerChar == false) 
    {
    var passwordLowerChar = [];
    } else 
    {
      var passwordLowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    }
    var upperChar = confirm ("Would you like uppercase letters?");
    if (upperChar == false) 
    {
      var passwordUpperChar = [];
    } else 
    {
      var passwordUpperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    }
    var numChar = confirm ("Would you like to use numbers in your password letters?");
    if (numChar == false) 
    {
      var passwordNumChar = [];
    } else 
    {
      var passwordNumChar = ["0","1","2","3","4","5","6","7","8","9"];
    }
    var specialChar = confirm ("Would you like to use special characters in your password letters?");
    if (specialChar == false) 
    {
      var passwordSpecialChar = [];
    } else 
    {
      var passwordSpecialChar = ["!","@","#","$","%","^","&","*","(",")"];
    };
    const passwordPool = passwordLowerChar.concat(passwordUpperChar, passwordNumChar, passwordSpecialChar);
    if (lowerChar == false && upperChar == false && numChar == false && specialChar == false)
    {
      window.alert("You must select at least one password criteria");
      generatePassword();
    } 
    else 
    {
    for (var i = 0; i < passwordLength; i++) 
    {
      results += passwordPool[Math.floor(Math.random() * passwordPool.length)];
    };
    console.log(passwordPool);
    console.log(results);
    return results;
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
