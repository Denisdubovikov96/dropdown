const express = require("express");
const app = express();
const data = require("./data.json");

app.get("/", (req, res) => {
  return res.json(data);
});

app.listen(5000);
