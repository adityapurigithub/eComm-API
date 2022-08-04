const express = require("express");

const port = process.env.PORT || 8000;

const db = require("./config/mongoose");

const app = express();

app.use(express.json());

app.use(require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`server is up on port...${port}`);
});
