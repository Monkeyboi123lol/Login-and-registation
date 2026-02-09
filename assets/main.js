function registration() {
  let registration_name = document.querySelector("#registration-name").value;
  let registration_email = document.querySelector("#registration-email").value;
  let registration_password = document.querySelector(
    "#registration-password",
  ).value;
  let registration_confirm_password = document.querySelector(
    "#registration-confirm-password",
  ).value;
  let registration_error = document.querySelector(".registration-error");

  if (registration_name == "") {
    registration_error.innerHTML = "Please enter your name.";
  } else if (registration_email == "") {
    registration_error.innerHTML = "Please enter your email.";
  } else if (registration_password == "") {
    registration_error.innerHTML = "Please enter your password.";
  } else if (registration_confirm_password == "") {
    registration_error.innerHTML = "Please confirm your password.";
  } else if (registration_password !== registration_confirm_password) {
    registration_error.innerHTML = "Passwords do not match.";
  }
}
function signupNavigation() {
  let loginForm = document.querySelector(".box");
  let registrationForm = document.querySelector(".registration-form");
  loginForm.style.display = "none";
  registrationForm.style.display = "block";
}

function Navigation() {
  let registrationForm = document.querySelector(".registration-form");
  let loginForm = document.querySelector(".box");
  registrationForm.style.display = "none";
  loginForm.style.display = "block";
}
