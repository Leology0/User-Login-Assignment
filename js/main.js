// USER LOGIN / SIGNUP
let users = loadUsers()

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let username = document.getElementById("username-input").value;
  let password = document.getElementById("password-input").value;
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
  console.log('Sign In Btn Clicked');
}


// Create new user
function newUser(username, password) {
  return {
    name: username,
    pass: password
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

// Save Global users to Local Storage
function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

// Load Tasks from Local Storage
function loadUsers() {
  let userstr = localStorage.getItem('users');
  return JSON.parse(userstr) ?? [];
}

