//jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// app.get("/", function(req, res) {
//   res.send("BMI Calculator");
// });

app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res) {
  //just as the word "get", we're saying 'get' it from here(below) and implement it whenever I run my script code.
  res.sendFile(__dirname + "/bmiCalculator.html");
  //this works because we know the directory on our local PC, where the server is hosted.
  //But for something like an hosted website, what we use is "__dirname"
  //console.log(__dirname);
});

app.post("/", function(req, res) {
  //what post does is to take anything sent to the homepage, then post sth back
  var height= Number(req.body.height);
  var heightSquared = Math.pow(height, 2);
  var weight = Number(req.body.weight);
  var result = weight/heightSquared;

  //
  // function toggleMode() {
  //   if (button.style.left == "0.1rem") {
  if (result>=1) {
    res.send("BMI is " + result);
  } else {
    res.send("BMI is low mehn" + result);
  }

  //   {if (result>2) {
  //   "BMI is " + result + " and it is damn too high";
  // };
  //   else {
  //   "BMI is " + result + " and it is fine";
  // }
  // }
});


app.listen(3000, function(req, res) {
  console.log("I am on port 3000");
});
