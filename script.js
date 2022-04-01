let mockCredentials = [
  { login: "admin", password: "admin" },
  { login: "guest", password: "guest" },
  { login: "andrey", password: "12345" },
];
let isEditMode = false;

document.getElementById("page-title").innerHTML = "Login Form";
document.getElementById("login-button").innerHTML = "Login";

console.log("Initial credentials:");
console.log(mockCredentials);

function onShowClick() {
  document.getElementById("login-form").classList.contains("display-none")
    ? document.getElementById("login-form").classList.remove("display-none")
    : document.getElementById("login-form").classList.add("display-none");
}

function onClearClick() {
  document.getElementById("login").value = "";
  document.getElementById("password").value = "";
}

function onEditClick() {
  isEditMode = !isEditMode;
  document.getElementById("page-title").innerHTML =
    document.getElementById("page-title").innerHTML === "Login Form"
      ? "Change Password Form"
      : "Login Form";
  document.getElementById("login-button").innerHTML =
    document.getElementById("login-button").innerHTML === "Login"
      ? "Change"
      : "Login";
}

function onLoginClick() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  if (isEditMode) {
    mockCredentials = mockCredentials.map((element) => {
      if (element.login === login) {
        element.password = password;

        alert("Password has been changed");
      }

      return element;
    });

    console.log("Changed credentials");
    console.log(mockCredentials);
  } else {
    const currentCred = mockCredentials.find(
      (element) => element.login === login && element.password === password
    );
    const authMessage = currentCred
      ? "Successfully logged in!"
      : "Invalid credentials!";

    alert(authMessage);
  }
}
