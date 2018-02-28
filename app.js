var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;
var path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

var cars = [
    {
      make: "mini",
      model: "cooper"
    },
    {
        make: "honda",
        model: "accord"
    },
    {
        make: "toyota",
        model: "camry"
    },
    {
        make: "tesla",
        model: "model 3"

    }

  ];

  app.get("/api/cars", function(req, res) {
    res.json(cars);
  });