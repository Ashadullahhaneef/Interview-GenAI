import { createContext } from "react";

export const interviewContext = createContext();
export const InterviewProvider = ({ children }) => {
  const [loading, setLoading] = usestate(false);
  const [report, setReport] = usestate(null);
  const [reports,setReports] = useState([]);
};

return (
  <interviewContext.Provider value={{ loading, setLoading, report, setReport }}>
    {children}
  </interviewContext.Provider>
);
