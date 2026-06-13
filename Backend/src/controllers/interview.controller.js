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

module.exports = { generateInterViewReportcontroller };
