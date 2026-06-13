const express = require("express");
const interviewRouter = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const interviewController = require("../controllers/interview.controller");
const upload = require("../middlewares/file.middleware");

/**
 * @route Post/api/interview/
 * @description generate new interview report on the basis of user self description, resume and job description
 * @access private
 */

interviewRouter.post(
  "/",
  authMiddleware.authUser,
  upload.single("resume"),
  interviewController.generateInterViewReportcontroller,
);

module.exports = interviewRouter;
