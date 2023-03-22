const generateButton = document.getElementById("generate");
const passwordTextarea = document.getElementById("password");

generateButton.addEventListener("click", () => {
  const length = prompt("Enter password length between 8 and 128 characters:");

  if (!length || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128");
    return;
  }
})
