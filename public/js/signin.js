const loginBtn = document.querySelector(".login-btn");
const err = document.querySelector(".err-message");
const emailErr = document.querySelector(".email-err");
const pwdErr = document.querySelector(".pwd-err");

const signIn = () => {
  //   e.preventDefault();
  let password = document.querySelector(".password").value;
  let email = document.querySelector(".email").value;
  let rememberCheckbox = document.querySelector(".remember-me");
  console.log(email, password);

  let savedInfo = localStorage.getItem("users");
  if (email === "" || password === "") {
    return (err.innerHTML = "Fill in your credentials!!");
  } else if (!savedInfo.includes(email) && savedInfo.includes(password)) {
    clearForm();
    err.innerHTML = " ";
    return (emailErr.innerHTML = "Email Does not exist!!");
  } else if (savedInfo.includes(email) && !savedInfo.includes(password)) {
    password = "";
    err.innerHTML = " ";
    emailErr.innerHTML = "";
    return (pwdErr.innerHTML = "Incorrect Password!!");
  } else if (!savedInfo.includes(password) || !savedInfo.includes(email)) {
    password = "";
    email = "";
    emailErr.innerHTML = "";
    pwdErr.innerHTML = "";
    Toastify({
      text: "Incorrect Password & Email!!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
        color: "white",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    // return (err.innerHTML = "Incorrect Password & Email!!");
  } else if (
    savedInfo.includes(email) &&
    savedInfo.includes(password) &&
    !rememberCheckbox.checked
  ) {
    // Toastify({
    //   text: "Log In Succesful!!",
    //   duration: 3000,
    //   destination: "/dashboard",
    //   newWindow: true,
    //   close: true,
    //   gravity: "top", // `top` or `bottom`
    //   position: "left", // `left`, `center` or `right`
    //   stopOnFocus: true, // Prevents dismissing of toast on hover
    //   style: {
    //     background: "linear-gradient(to right, #00b09b, #96c93d)",
    //   },
    //   onClick: function () {}, // Callback after click
    // }).showToast();
    alert("Log In Succesful!!");
    location.href = "/dashboard";
    authUser();
  } else if (
    savedInfo.includes(email) &&
    savedInfo.includes(password) &&
    rememberCheckbox.checked
  ) {
    // Toastify({
    //   text: "Log In Succesful!!",
    //   duration: 3000,
    //   newWindow: true,
    //   close: true,
    //   gravity: "top", // `top` or `bottom`
    //   position: "center", // `left`, `center` or `right`
    //   stopOnFocus: true, // Prevents dismissing of toast on hover
    //   style: {
    //     background: "linear-gradient(to right, #00337C, #1C82AD)",
    //   },
    //   onClick: function () {}, // Callback after click
    // }).showToast();
    location.href = "/dashboard";
    authUser();
  } else {
    Toastify({
      text: "Incorrect Credentials or You Do Not Have an Account!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
        color: "white",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
};

loginBtn.addEventListener("click", (e) => {
  signIn();
});

const clearForm = () => {
  document.querySelector(".email").value = "";
  document.querySelector(".password").value = "";
};

const authUser = () => {
  let password = document.querySelector(".password").value;
  let email = document.querySelector(".email").value;
  console.log(email, password);

  let authUser = JSON.parse(localStorage.getItem("auth-users")) || [];

  authUser.push({
    person_email: email,
    person_pwd: password,
  });

  let setAuthUsers = localStorage.setItem(
    "auth-users",
    JSON.stringify(authUser)
  );
};

// function saveCredentials(email, password) {
//   localStorage.setItem("email", email);
//   localStorage.setItem("password", password);
// }

// function retrieveCredentials() {
//   var email = localStorage.getItem("email");
//   var password = localStorage.getItem("password");
//   if (email && password) {
//     document.querySelector(".email").value = email;
//     document.querySelector("password").value = password;
//   }
// }

// var form = document.getElementById("login-form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // prevent the form from being submitted
//   saveCredentials(form.elements.username.value, form.elements.password.value);
// });
