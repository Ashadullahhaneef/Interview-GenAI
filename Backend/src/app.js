// git init -y => se ek node.js app initiate ho jaati hai
// npm i express karne se server create ho jaata hai.(server create karne ke liye express ki need hoti hai)
// dotenv ke karan jo bhi varibles hm banate hai .env me usko process object ke andar daa diya jaata hai jise hm dotenv ke through access kar paate hai
//mongoose ke help se hm server ko db se connect karte hai
//bcryptjs => for hashing the password
//jwt = for make a token when new user login then jwt make a token
//cookie-parser = for cookie me token send karna or read karne ke kaam me aata hai.

//app.js => ka main kaam hai server ka instance create karna or dusra kaam middleware or routes ko create karna or use karna.
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
//middleware => jo help karti hai request ki body se data ko read karne ke liye allow karta hai
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

//routes:-
// require all the routes here
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

/* using all the routes here */
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;
