const express = require("express");
require("dotenv").config();
const app = express();
const port = 4000;
app.get("/", (req, res) => {
  res.send("Hello Users");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is Working on port : ${process.env.port}`);
});
