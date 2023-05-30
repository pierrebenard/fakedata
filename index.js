const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express();
app.use(cors());
const port = 8000;

app.get("/", (req, res) => {
  res.send("Main page!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
