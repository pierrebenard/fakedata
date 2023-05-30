const express = require("express");
const cors = require("cors")
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
const port = 8000;

app.get("/", (req, res) => {
  res.send("Main page!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
