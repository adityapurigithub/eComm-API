const express = require("express");

const port = process.env.PORT || 8000;

//geeting the  db connection
const db = require("./config/mongoose");

//calling express..
const app = express();

//calling express's json to parse the incoming json requests...
app.use(express.json());

//middleware for route
app.use(require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`server is up on port...${port}`);
});
