const express = require("express");
const app = express();
const path = require("path");
const newfolderPath = path.join(__dirname, "./appViewsPages");
const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));

app.set("views", newfolderPath);
app.set("view engine", "hbs");

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(8080, () => console.log("listening on port 8080"));
