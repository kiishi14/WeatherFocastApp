// signup
const signUp = (e) => {
  e.preventDefault();
  let email = document.querySelector(".email").value;
  let username = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;
  let passwordRepeat = document.querySelector(".password-repeat").value;
  const err = document.querySelector(".err-message");
  const emailErr = document.querySelector(".email-err");
  const pwdErr = document.querySelector(".pwd-err");
  const termsErr = document.querySelector(".terms-err");
  let signupBtn = document.querySelector(".signup-btn");
  let savedInfo = localStorage.getItem("users");
  const checkbox = document.querySelector('input[type="checkbox"]');
  // checkbox.addEventListener("change", () => {
  //   if (!checkbox.checked) {
  //     // The checkbox is unchecked.
  //     termsErr.style.display = "block";
  //   } else {
  //     termsErr.style.display = "none";
  //     location.href = "/";
  //   }
  // });

  if (email === "" || password === "" || username === "") {
    return (err.innerHTML = "Fill in Your Credentials!!!");
  } else if (savedInfo.includes(email)) {
    clearForm();
    err.innerHTML = " ";
    return (emailErr.innerHTML = "Email Already Exist!!");
  } else if (passwordRepeat !== password) {
    err.innerHTML = " ";
    emailErr.innerHTML = "";
    password = "";
    return (pwdErr.innerHTML = "Password Does Not Match!!");
  } else if (password.length < 8 && passwordRepeat.length < 8) {
    err.innerHTML = " ";
    emailErr.innerHTML = "";
    return (pwdErr.innerHTML = "Password must have at least 8 characters");
  } else if (!checkbox.checked) {
    Toastify({
      text: "You Have to Agree to our Terms & Conditions!!",
      duration: 3000,
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
  } else if (password === passwordRepeat && password.length >= 8) {
    let userData = JSON.parse(localStorage.getItem("users")) || [];

    userData.push({
      person_name: username,
      person_email: email,
      person_pwd: password,
    });

    let setItems = localStorage.setItem("users", JSON.stringify(userData));
    clearForm();
    alert("Account Successfully Created!!\n\n You Can Now Log In");
    location.href = "/";
  } else {
    Toastify({
      text: "Error!! Check all information provided",
      duration: 3000,
      destination: "/",
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

const clearForm = () => {
  document.querySelector(".email").value = "";
  document.querySelector(".username").value = "";
  document.querySelector(".password").value = "";
  document.querySelector(".password-repeat").value = "";
};
