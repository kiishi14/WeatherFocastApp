const loginBtn = document.querySelector(".login-btn");

const signIn = () => {
  //   e.preventDefault();
  let password = document.querySelector(".password").value;
  let username = document.querySelector(".name").value;
  console.log(username, password);

  let savedInfo = localStorage.getItem("users");
  if (savedInfo.includes(password) && savedInfo.includes(username)) {
    alert("Login Successful!");
    location.href = "/dashboard";
    welcomeNote.innerHTML = `Welcome + ${username}`;
  } else {
    alert("Incorrect Credentials or You Do Not Have an Accout!");
  }
};

loginBtn.addEventListener("click", (e) => {
  signIn();
});
