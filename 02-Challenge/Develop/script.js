// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  // Initialize variables for password criteria
  let length = 0;
  let includeLowercase = false;
  let includeUppercase = false;
  let includeNumeric = false;
  let includeSpecial = false;

  // Prompt user for password length
  while (length < 8 || length > 128) {
    length = parseInt(prompt("Enter a password length (8-128 characters):"));
  }

  // Prompt user for character types to include in password
  includeLowercase = confirm("Include lowercase characters?");
  includeUppercase = confirm("Include uppercase characters?");
  includeNumeric = confirm("Include numeric characters?");
  includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type!");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }

  // Generate password using selected criteria
  let password = "";
  for (let i = 0; i < length; i++) {
    let charSet = "";
    if (includeLowercase) {
      charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUppercase) {
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumeric) {
      charSet += "0123456789";
    }
    if (includeSpecial) {
      charSet += "!@#$%^&*()_+-=[]{}|;':,.<>?";
    }
    password += charSet[Math.floor(Math.random() * charSet.length)];
  }

  // Display or write generated password
  alert(`Your password is: ${password}`);
  
}