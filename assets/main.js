let registration_name;
let registration_email;
let registration_password;
let registration_confirm_password;

function registration() {
  registration_name = document.querySelector("#registration-name").value;
  registration_email = document.querySelector("#registration-email").value;
  registration_password = document.querySelector(
    "#registration-password",
  ).value;
  registration_confirm_password = document.querySelector(
    "#registration-confirm-password",
  ).value;
  registration_error = document.querySelector(".registration-error");

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
  } else {
    sessionStorage.setItem("storedname", registration_name);
    sessionStorage.setItem("storedemail", registration_email);
    sessionStorage.setItem("storedpassword", registration_password);
    alert("Registration successful! Please log in.");
    document.querySelector("#registration-name").value = "";
    document.querySelector("#registration-email").value = "";
    document.querySelector("#registration-password").value = "";
    document.querySelector("#registration-confirm-password").value = "";

    let registrationForm = document.querySelector(".registration-form");
    let loginForm = document.querySelector(".box");
    registrationForm.style.display = "none";
    loginForm.style.display = "block";
  }

  event.preventDefault();
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

function login() {
  let login_email = document.querySelector("#login-email").value;
  let login_password = document.querySelector("#login-password").value;
  let login_error = document.querySelector(".login-error");

  if (login_email == "") {
    login_error.innerHTML = "Please enter your email.";
  } else if (login_password == "") {
    login_error.innerHTML = "Please enter your password.";
  } else if (
    login_email == registration_email &&
    login_password == registration_password
  ) {
    console.log("Login successful!");
    alert("Login successful! Welcome, " + registration_name + "!");
    document.querySelector("#login-email").value = "";
    document.querySelector("#login-password").value = "";
    window.location.href = "dashboard.html";
  } else {
    login_error.innerHTML =
      "Invalid email or password. Please Register if you don't have an account.";
  }
  event.preventDefault();
}
