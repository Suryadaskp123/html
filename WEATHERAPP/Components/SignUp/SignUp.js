const usernameRegex = /^[A-z0-9_]{8,}$/;
const passwordRegex = /^(?=.*[A-z])(?=.*[0-9])(?=.*[!@_])[A-z0-9!@_]{8,16}$/;
const emailRegex = /^[A-z\d.]+[@][a-z]+[.][a-z]{2,3}$/;
const usernameError = document.getElementById("failed-username");
const passwordError = document.getElementById("failed-password");
const emailError = document.getElementById("failed-email");
const signUpButton = document.getElementById("sign-up");
let isValidUsername,isValidPassword,isValidEmail;

function validateInputs(regex, inputValue, inputField) {
  if (inputField === "Username") {
    if (!regex.test(inputValue)) {
      usernameError.textContent = "Invalid Username";
      isValidUsername = false;
    } else {
      usernameError.textContent = "";
      isValidUsername = true;
    }
  }
  if (inputField === "Password") {
    if (!regex.test(inputValue)) {
      passwordError.textContent = "Invalid Password";
      isValidPassword = false;
    } else {
      passwordError.textContent = "";
       isValidPassword = true;
    }
  }
  if (inputField === "Email") {
    if (!regex.test(inputValue)) {
      emailError.textContent = "Invalid Email";
      isValidEmail = false;
    } else {
      emailError.textContent = "";
      isValidEmail = true;
    }
  }
}
function validation() {
  const background = document.querySelector(".background");
  background.addEventListener("keyup", (e) => {
    if (e.target.getAttribute("placeHolder") === "Username") {
      validateInputs(
        usernameRegex,
        e.target.value,
        e.target.getAttribute("placeHolder")
      );
    }
    if (e.target.getAttribute("placeHolder") === "Password") {
      validateInputs(
        passwordRegex,
        e.target.value,
        e.target.getAttribute("placeHolder")
      );
    }
    if (e.target.getAttribute("placeHolder") === "Email") {
      validateInputs(
        emailRegex,
        e.target.value,
        e.target.getAttribute("placeHolder")
      );
    }
  });
}
validation();
function signUp()
{
  if (isValidUsername && isValidEmail && isValidEmail)
  {
    window.location.href =
      "/Components/Login/LoginPage.html";
  }
}
signUpButton.addEventListener("click", signUp);
