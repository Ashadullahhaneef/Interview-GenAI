//google doc => se ek package install karna hai jo gemeini ka instance dega [npm install @google/genai] fir uske Quickstart me jaana wahan googlegemini ka instance kaise lena hai wo batayega => import { GoogleGenAI } from "@google/genai";

//fir aa [google ai studion] search maarna hai or usse ek new api key generate karwana hai ek new project ke liye.

const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();
const { z } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

//make a function
async function invokeGeminiAi() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Hello Gemini ! Explain What is Interview",
  });
  console.log(response.text);
}

const interviewReportsSchema = z.object({
  matchScore: z
    .number()
    .describe(
      "A score between 0 to 100 indicating how well the candidate's profile matches the job description",
    ),
  technicalQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe("The technical question can be asked in the interview"),
        intention: z
          .string()
          .describe("The intention of interviewer behind asking this question"),
        answer: z
          .string()
          .describe(
            "How to answer this question, what points to cover, what approach to the take etc.",
          ),
      }),
    )
    .describe(
      "technical question that can be asked in the interview along with their intention and how to answer them",
    ),
  behaviourQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe("The technical question can be asked in the interview"),
        intention: z
          .string()
          .describe("The intention of interviewer behind asking this question"),
        answer: z
          .string()
          .describe(
            "How to answer this question, what points to cover, what approach to the take etc.",
          ),
      }),
    )
    .describe(
      "Behavioural Question that can be asked in the interview along with their intention and how to answer them",
    ),
  skillGaps: z
    .array(
      z.object({
        skill: z.string().describe("The skill which the candidate is lacking"),
        severity: z
          .enum(["low", "medium", "high"])
          .describe("The severity of this skill gap, i.e."),
      }),
    )
    .describe(
      "List of skill gaps in the candidate's profile along with their severity",
    ),
  preparationPlan: z
    .array(
      z.object({
        day: z
          .number()
          .describe("The day number in the preparation plan,starting from 1"),
        focus: z
          .string()
          .describe(
            "describe main focus of this day in the preparation plan. e.g. data start",
          ),
        tasks: z.array(z.string()).describe("List of tasks to be done on this"),
      }),
    )
    .describe(
      "A day-wise preparation plan for the candidate to follow in order to perpare for the",
    ),
});

async function generateInterviewReport(
  resume,
  selfDescription,
  jobDescription,
) {
  const prompt = `Generate an interview report for a candidate with the following deatails:
      Resume:${resume}
      Self Description : ${selfDescription}
      Job Description : ${jobDescription}
    `;
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: zodToJsonSchema(interviewReportsSchema),
    },
  });
  return JSON.parse(response.text);
}
module.exports = generateInterviewReport;
