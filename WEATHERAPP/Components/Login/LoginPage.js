window.onload = () => {
  const actualUsername = localStorage.getItem("username");
  const actualPassword = localStorage.getItem("password");
  document.getElementById("username").value = actualUsername;
  document.getElementById("password").value = actualPassword;
}

function validation(username, password) {
  const usernameError = document.getElementById("username-errorMessage");
  const passwordError = document.getElementById("password-errorMessage");
  if (username === "") {
    usernameError.textContent = "Please Enter The Username";
  } else {
    usernameError.textContent = "";
  }
  if (password === "") {
    passwordError.textContent = "Please Enter The Password";
  } else {
    passwordError.textContent = "";
  }
}

function preventDefaultFunction(event) {
  event.preventDefault();
}

function signIn() {
  const actualUsername = localStorage.getItem("username");
  const actualPassword = localStorage.getItem("password");
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username !== "" && password !== "") {
    if (username === actualUsername && password === actualPassword) {
      window.location.href =
        "/Components/RecentSearchedForcasts/RecentSearchedForcasts.html";
    } else {
      const credentialError = document.getElementById("credential-error");
      credentialError.innerHTML = "Incorrect password or username";
      setTimeout(() => {
        credentialError.innerHTML = "";
      }, 1000);
    }
  } else {
    validation(username, password);
  }
}
function goToSignUp() {
  window.location.href = "/Components/SignUp/SignUp.html";
}
