const mongoose = require("mongoose");
require("dotenv").config();

async function connectToDB() {
  console.log("mongodb url", process.env.MONGO_URL);
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
}
module.exports = connectToDB;