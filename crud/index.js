const express = require("express");
var mongoose = require("mongoose");
const router = require("./routes/contact");
var app = express();

//Route
app.get("/", function (req, res) {
  res.send("hello world");
});

app.use("/contact", router);

app.use("/contact", router);

//MongoDB connection
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });
mongoose.connection
  .once("open", function () {
    console.log("Database connected Successfully");
  })
  .on("error", function (err) {
    console.log("Error", err);
  });
//Server
app.listen(8000, function () {
  console.log("Server is Up");
});
