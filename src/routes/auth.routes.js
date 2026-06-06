// const express  = require("express");
// const authRouter = express.Router() or
const { Router } = require("express");
const authRouter = Router();
const authController = require("../controllers/auth.controller");

authRouter.post("/register", authController.registerUserController);

module.exports = authRouter;
