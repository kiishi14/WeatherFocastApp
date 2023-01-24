var express = require("express");
var app = express();

app.use(express.urlencoded({ exteneded: false }));

app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signin.html");
});

app.post("/", async function (req, res) {
  res.sendFile(__dirname + "/dashboard.html");
});

app.get("/signup", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/signup", function (req, res) {
  res.sendFile(__dirname + "/dashboard.html");
});

app.get("/dashboard", function (req, res) {
  res.sendFile(__dirname + "/dashboard.html");
});

app.get("/logout", function (req, res) {
  req.logout(); // Clear the user's authentication session
  res.redirect("/login");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
