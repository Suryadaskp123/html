function validation(username, password) {
  const usernameError = document.getElementById("username-errorMessage");
  const passwordError = document.getElementById("password-errorMessage");
  if (username === "") {
    usernameError.textContent = "Please Enter The Username";
  } else {
    usernameError.textContent = "";
  }
  if (password === "") {
    passwordError.textContent = "Please Enter The Username";
  } else {
    passwordError.textContent = "";
  }
}

function signIn() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username !== "" && password !== "") {
    //user signIn
  } else {
    validation(username, password);
  }
}
function goToSignUp() {
  window.location.href = "/Components/SignUp/SignUp.html";
}
