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
  let username = document.getElementById("username-input").value;
  let password = document.getElementById("password-input").value;
  let confirmPassword = document.getElementById("confirm-password-input").value;
  let index = indexOfUser(username);
  if (username === "") {
    return alert("Please fill out all fields")
  } else if (password === "") {
    return alert("Please fill out all fields")
  } else if (confirmPassword === "") {
    return alert("Please fill out all fields")
  }
  if (index !== -1 ) {
    if (users[index].name === username) {
      return alert("Username is already in use")
    }
  } else if (password !== confirmPassword) {
    return alert("Passwords do not match")
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

function indexOfUser(input) {
  for(let i = 0; i < users.length; i++) {
    if (input === users[i].name) {
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