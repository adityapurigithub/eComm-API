const mongoose = require("mongoose");
const database =
  "mongodb+srv://adityamongodb:bhcytLiLr5ZL0kqM@cluster0.yk7wzt3.mongodb.net/?retryWrites=true&w=majority";

const db = mongoose
  .connect(database)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

// //local db connection for own ...
// const mongoose = require("mongoose");

// main().catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/EcommAPITesting");
//   console.log("Db Connected");
// }
