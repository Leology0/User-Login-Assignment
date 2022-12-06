// USER LOGIN / SIGNUP
let users = loadUsers()

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  // Check fields and if empty alert user
  if (checkFields() == -1) {
    return alert("Fill out all fields")
  }
  // Check if username is already in use
  if (checkUsername() == -1) {
    return alert("Username is already in use");
  }
  // Push username and password into users array if passwords match
  if (checkPasswords() == -1) {
  users.push(newUser(username, password));
  saveUsers();
  alert("New user created");
  } else {
    alert ("Passwords do not match")
  }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  if (checkFields() == -1) {
    return alert("Fill out all fields")
  }
}

// Helper Functions
// Create new user
function newUser(username, password) {
  return {
    name: username,
    pass: password
  }
}
// Check if fields are empty
function checkFields() {
  let username = document.getElementById("username-input").value;
  let password = document.getElementById("password-input").value;
  let confirmPassword = document.getElementById("confirm-password-input").value;
  for(let i = 0; i < users.length; i++) {
    if (username == "") {
      return -1
    } else if (password == "") {
      return -1
    } else if (confirmPassword == "") {
      return -1
    }
  }
}


// Check username
function checkUsername() {
  let username = document.getElementById("username-input").value;
  for (let i = 0; i < users.length; i++) {
    if (username == users[i].name) {
      return -1
    }
  }
}

// Check if password matches confirmed password
function checkPasswords() {
  let password = document.getElementById("password-input").value;
  let confirmPassword = document.getElementById("confirm-password-input").value;
  for(let i = 0; i < users.length; i++) {
    if (password == confirmPassword) {
      return -1
    }
  }
}

// Check when logging in if password matches users array password
function loginPassword() {
  let password = document.getElementById("password-input").value;
  for(let i = 0; i < users.length; i++) {
    if (password == users[i].pass) {
      return -1
    }
  }
}

// Save Global users to Local Storage
function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

// Load Tasks from Local Storage
function loadUsers() {
  let userstr = localStorage.getItem('users');
  return JSON.parse(userstr) ?? [];
}

