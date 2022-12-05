// USER LOGIN / SIGNUP

// Users Array
let users = []
// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  // Create user by taking the inputs and pushing them into users array 
  let username = document.getElementById("username-input").value;
  let password = document.getElementById("password-input").value;
  let confirmPassword = document.getElementById("confirm-password-input").value;
  // Check if user already exists
  for (let i = 0; i < users.length; i++) {
    if (username == users[i].name) {
      return alert("Username is already in use");
    }
  }
  // Check if passwords match
  
  users.push(newUser(username, password))
  alert("New user created")
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  console.log('Sign In Btn Clicked');
}

function newUser(username, password) {
  return {
    name: username,
    pass: password,
  }
}
