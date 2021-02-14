// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var number = [1,2,3,4,5,6,7,8,9,0]
var specialChar = ['!', '@', '^', '&', '*', '#', '$', '%', '(', ')'];
var pwLength = 0
var userOptions =[]

function generatePassword() {
  
    pwLength = window.prompt("What length would you like your password?");
     while(pwLength<8 || pwLength>128){
      window.alert("Length must be greater or equal to 8 and less than or equal to 128.");
      return;
     }
  
    var useUppercase= window.confirm("Would you like to use uppercase values?");
    var useLowercase = window.confirm("Would you like to use lowercase values?");
    var useNumber = window.confirm("Would you like to use number values?");
    var useSpecial = window.confirm("Would you like to use special character values?");
  
 if (useUppercase === true){
   userOptions.push(...uppercase)
  };
  if (useLowercase === true) {
    userOptions.push(...lowercase)
  };
  if (useNumber === true) {
    userOptions.push(...number)
  };
  if (useSpecial === true){
    userOptions.push(...specialChar)
  }
  
 fnlPw = ""
  for (var x =0; x <=pwLength; x++){
 fnlPw += userOptions[(Math.floor(Math.random()* userOptions.length))]
}
document.getElementById("password").value = userOptions.join("");
console.log()
  // }  
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

//return final PW
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
