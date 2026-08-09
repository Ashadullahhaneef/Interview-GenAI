import React from "react";
import { AuthContext } from "../../auth.context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const { loading, user } = context;
  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default Protected;
