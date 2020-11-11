const express = require("express");
const app = express();
const data = require("./data.json");
const cors = require("cors");

app.use(cors());

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};
app.use(allowCrossDomain);

app.get("/", (req, res) => {
  return res.json(data);
});

app.listen(5000);
