const generateButton = document.getElementById("generate");
const passwordTextarea = document.getElementById("password");

generateButton.addEventListener("click", () => {
  const length = prompt("Enter password length between 8 and 128 characters:");

  if (!length || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128");
    return;
  }

  const uppercase = confirm("Do you want to include uppercase letters?");
  const lowercase = confirm("Do you want to include lowercase letters?");
  const symbols = confirm("Do you want to include symbols?");
  const numbers = confirm("Do you want to include numbers?");

  let characters = "";
  if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXZ";
  if (lowercase) characters += "abcdefghijklmnopqrstuvwxz";
  if (symbols) characters += "!@#$%^&*()_+-=";
  if (numbers) characters = "0123456789";

  }

);
