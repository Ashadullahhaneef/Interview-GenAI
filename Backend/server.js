//server ko run karne ke liye
require("dotenv").config;
const app = require("./src/app");
const connectToDB = require("./src/config/database");
const invokeGeminiAi = require("../Backend/src/services/ai.services")

connectToDB();
invokeGeminiAi();

app.listen(3000, () => {
  console.log("server is running on port no. 3000");
});
