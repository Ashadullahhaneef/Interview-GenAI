//multer ek dependency hai jo ki file ko handle karta hai or jo bhi resume user upload karega wo pdf file ke form me hoga use mai multer ke help se read kar lenge lekin pdf ke andar jo text hoga use read karne ke liye mai "pdf-parse" library ka use karunga jisse mai pdf file ke andar ke text ko read kar sakunga or uske baad us text ko mai Gemini ko prompt ke form me dunga jisse wo interview report generate kar dega.

const pdfParse = require("pdf-parse");
const generateInterviewReport = require("../services/ai.services");
const interviewReportModel = require("../models/interviewReport.model");

async function generateInterViewReportcontroller(req, res) {
  const resumeContent = await new pdfParse.PDFParse(
    Unit8Array.from(req.file.buffer),
  ).getText();
  const { selfDescription, jobDescription } = req.body;

  const interviewReportByAi = await generateInterviewReport({
    resume: resumeContent.text,
    selfDescription,
    jobDescription,
  });
  const interviewReport = await interviewReportModel.create({
    user: req.user.id,
    resume: resumeContent.text,
    selfDescription,
    jobDescription,
    ...interviewReportByAi,
  });
  res.status(201).json({
    success: true,
    message: "Interview report generated successfully",
    interviewReport,
  });
}

/**
 * @description Controller to get interview report by interviewId.
 */

async function getInterviewReportByIdController(req, res) {
  const { interviewId } = req.params;
  const interviewReport = await interviewReportModel.findOne({
    _id: interviewId,
    user: req.user.id,
  });
  if (!interviewReport) {
    return res.status(404).json({
      message: "Interview Report Not Found",
    });
  }
  res.status(200).json({
    message: "Interview report fetched successfully",
    interviewReport,
  });
}

/**
 * @description Controller to get all interview reports of logged in user.
 */

async function getAllInterviewReportsController(req, res) {
  const interviewReport = await interviewReportModel
    .find({ user: req.user.id })
    .sort({ created: -1 })
    .select(
      "-resume -selfDescription -jobDescription -__v -technicalQuestions -behaviourQuestions -skillGaps -preparationPlan",
    );
  if (!allInterviewReport) {
    return res.status(404).json({
      succes: false,
      message: "Report is Not exist of the user",
    });
  }
  return res.status(200).json({
    success: true,
    allInterviewReport,
  });
}

module.exports = {
  generateInterViewReportcontroller,
  getInterviewReportByIdController,
};
