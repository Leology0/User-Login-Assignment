// USER LOGIN / SIGNUP
let users = loadUsers()

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  // Check fields and if empty alert user
  if (checkFields() === -1) {
    return alert("Fill out all fields")
  }
  // Check if username is already in use
  if (checkUsername() !== -1) {
    return alert("Username is already in use");
  }
  // Push username and password into users array if passwords match
  if (checkPasswords() !== -1) {
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
  loadUsers(); 
  checkUser()
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
    if (username === "") {
      return -1
    } else if (password === "") {
      return -1
    } else if (confirmPassword === "") {
      return -1
    }
  }
}

// Check username
function checkUsername() {
  let username = document.getElementById("username-input").value;
  for (let i = 0; i < users.length; i++) {
    if (username !== users[i].name) {
      return -1
    }
  }
}

// Check if password matches confirmed password
function checkPasswords() {
  let password = document.getElementById("password-input").value;
  let confirmPassword = document.getElementById("confirm-password-input").value;
  for(let i = 0; i < users.length; i++) {
    if (password !== confirmPassword) {
      return -1
    }
  }
}

function checkUser(){
  let usernameLogin = document.getElementById("login-username").value;
  let index = indexOfUser(usernameLogin);
  if (index !== -1) {
    let passwordLogin = document.getElementById("login-password").value;
    if (users[index].pass === passwordLogin) {
      return alert("Login Successful")
    } else {
      return alert("Invalid Password")
    }
  } else {
    return alert("Invalid Username")
  }
}

function indexOfUser(username) {
  for(let i = 0; i < users.length; i++) {
    if (username === users[i].name) {
      return i
    } else {
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




// let username = value of input element
// let index = indexOfUser(username);
// if (index !== -1) {
//   let pwd = value of pwd element
//   if (users[index].password === pwd) {
//     login successful
//   } else {
//     invalid password
//   } else {
//   invalid username
//  }