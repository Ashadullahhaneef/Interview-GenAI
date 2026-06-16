import axios from "axios";

const axiosinstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});
export const generateInterviewReport = async ({
  jobDescription,
  selfDescription,
  resumeFile,
}) => {
  const formData = new FormData();
  formData.append("jobDescription", jobDescription);
  formData.append("selfDescription", jobDescription);
  formData.append("resume", resumeFile);
  const response = await axiosinstance.post("/api/interview", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const getInterviewReportById = async (interviewId) => {
  const response = await axiosinstance.get(
    `/api/interview/report/${interviewId}`,
  );
  return response.data;
};

export const getAllInterviewReports = async () => {
  const response = await axiosinstance.get("/api/interview/");
  return response.data;
};
