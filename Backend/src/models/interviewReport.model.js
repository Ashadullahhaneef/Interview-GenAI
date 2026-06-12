/**
 * => Provided By User :-
 * - job description schema:string
 * - resume text:string
 * - self description:string
 *
 * => Provided By AI :-
 * -matchScore : type:number
 * - Technical Questions : [{ Questinn : "",
 *                            Intention : "",
 *                            Answer : ""
 *                          },]
 * - Behavioural Questions : [{ Questinn : "",
 *                            Intention : "",
 *                            Answer : ""
 *                          },],
 * - Skill Gaps : [{
 *                   Skill : "",
 *                    Severity:"",
 *                    type:String,
 *                     enum :["low","medium","high"]
 *                 }],
 * - Preparation Plan : [{
 *                        day: Number,
 *                        focus:String,
 *                        tasks:[string]
 *                      }]
 */

const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

const technicalQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: Sting,
      required: [true, "Technical Question Is Required"],
    },
    intention: {
      type: String,
      required: [true, "Intention Is Required"],
    },
    answer: {
      type: String,
      required: [true, "Answer Is Required"],
    },
  },
  { _id: false },
);
const behaviourQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: Sting,
      required: [true, "Technical Question Is Required"],
    },
    intention: {
      type: String,
      required: [true, "Intention Is Required"],
    },
    answer: {
      type: String,
      required: [true, "Answer Is Required"],
    },
  },
  { _id: false },
);

const skillGapSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: [true, "Skill Is Required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      required: [true, "Severity Is Required"],
    },
  },
  { _id: false },
);
const preparationPlanSchema = new mongoose.Schema({
  day: {
    type: String,
    required: [true, "Day Is Required"],
  },
  focus: {
    type: String,
    required: [true, "Focus Is Required"],
  },
  tasks: {
    type: String,
    requied: [true, "Task Is Required"],
  },
});

const interviewReportSchema = new mongoose.Schema(
  {
    jobDescription: {
      type: String,
      required: [true, "job description is required"],
    },
    resume: {
      type: String,
      
    },
    selfDescription: {
      type: String,
    },
    matchScore: {
      type: Number,
      min: 0,
      max: 100,
    },
    technicalQuestions: [technicalQuestionSchema],
    behaviourQuestions: [behaviourQuestionSchema],
    skillGaps: [skillGapSchema],
    preparationPlan: [preparationPlanSchema],
  },
  {
    timestamps: true,
  },
);

const interviewReportModel = mongoose.model(
  "interviewReport",
  interviewReportSchema,
);
module.exports = interviewReportModel;
