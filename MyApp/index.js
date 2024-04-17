const express = require("express"); // Import here Express Module

app = express();

// Generate a most basic route to display the message in the browser
app.get("/", function (req, res) {
  res.send("Hello World");
});

// to run express app here we call listen function()

app.listen(8080, function () {
  console.log("Server is Run on Port no:8080");
});
