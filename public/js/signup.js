// signup
const signUp = (e) => {
  e.preventDefault();
  let email = document.querySelector(".email").value;
  let username = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;
  let passwordRepeat = document.querySelector(".password-repeat").value;
  let signupBtn = document.querySelector(".signup-btn");

  if (password === passwordRepeat && password.length >= 8) {
    let userData = JSON.parse(localStorage.getItem("users")) || [];

    userData.push({
      person_name: username,
      person_email: email,
      person_pwd: password,
    });

    let setItems = localStorage.setItem("users", JSON.stringify(userData));
    location.href = "/";
    clearForm();
    alert("Account Successfully Created!!\n\n Go ahead to login");
  } else {
    alert("Oopppppss!! Password Does Not Match");
  }
};

const clearForm = () => {
  document.querySelector(".email").value = "";
  document.querySelector(".username").value = "";
  document.querySelector(".password").value = "";
  document.querySelector(".password-repeat").value = "";
};
// const signIn = (e) => {
//   e.preventDefault();
//   console.log(clicked);
//   let username = document.querySelector(".username").value;
//   let password = document.querySelector(".password").value;
//   console.log(username, password);
//   // let savedInfo = localStorage.getItem("users");
//   // console.log(savedInfo);
//   // if (savedInfo == true) {
//   //   alert("Logged in Successfully!!");
//   //   window.location.href = "dashboard.html";
//   // } else {
//   //   alert("Incorrect Credentials!");
//   // }
// };

// let userData = JSON.parse(
//   localStorage.setItem("users", JSON.stringify(userData))
// );
// userData.push({ email, username, password, passwordRepeat });
// localStorage.getItem("users");
// console.log(userData);
//
