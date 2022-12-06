// USER LOGIN / SIGNUP
let users = loadUsers()

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  console.log('Sign Up Btn Clicked');
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  console.log('Sign In Btn Clicked');
}


// Create new user
function newUser(nameInput, passwordInput) {
  return {
    name: nameInput,
    password: passwordInput
  }
}

function checkUser (name) {
  for(let i = 0; i < users.length; i++) {
    if (name === users.name[i]) {
      return index = -1
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

