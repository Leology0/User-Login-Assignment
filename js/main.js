// USER LOGIN / SIGNUP
let users = loadUsers()

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  // Check fields and if empty alert user
  loadUsers();
  checkUserSignup();
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  loadUsers(); 
  checkUserLogin()
}

// Helper Functions
// Create new user
function newUser(username, password) {
  return {
    name: username,
    pass: password
  }
}

function checkUserSignup() {
  // Get Inputs
  let usernameSignup = document.getElementById("username-input").value;
  let passwordSignup = document.getElementById("password-input").value;
  let confirmPasswordSignup = document.getElementById("confirm-password-input").value;
  
  // Validate Inputs
  if (usernameSignup === "" || passwordSignup === "" || confirmPasswordSignup === "") {
    return alert("Please fill out all fields")
  }  

  // Check Username Already Used
  let index = indexOfUser(usernameSignup);
  if (index !== -1 ) {
    return alert("Username is already in use")
  } 
  
  // Check Confirm Password
  if (passwordSignup !== confirmPasswordSignup) {
    return alert("Passwords do not match")
  } 
  // Push user into array and alert the user
  else {
    alert("New user created");
    users.push(newUser(usernameSignup, passwordSignup));
    saveUsers();
  }
}



function checkUserLogin(){
  let usernameLogin = document.getElementById("login-username").value;
  let passwordLogin = document.getElementById("login-password").value;
  let index = indexOfUser(usernameLogin);
  if (usernameLogin == "") {
    return alert("Please fill out all fields")
  } else if (passwordLogin === "") {
    return alert("Please fill out all fields")
  }
  if (index !== -1) {
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
    } 
  }
  return -1
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