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
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const users = JSON.parse(localStorage.getItem("usersData"));

  if (username !== "" && password !== "") {
    for (let i = 0; i < users.length; i++) {
      if (username === users[i].username && password === users[i].password) {
        window.location.href =
          "/Components/RecentSearchedForcasts/RecentSearchedForcasts.html";
      } else {
        const credentialError = document.getElementById("credential-error");
        credentialError.innerHTML = "Incorrect password or username";
        setTimeout(() => {
          credentialError.innerHTML = "";
        }, 1000);
      }
    }
  } else {
    validation(username, password);
  }
}
function goToSignUp() {
  window.location.href = "/Components/SignUp/SignUp.html";
}
