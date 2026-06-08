import React from "react";
import "../auth.form.scss";
import { Link } from "react-router-dom";

const handleSubmit = (e) => {
  e.preventDefault();
};



const Login = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email Address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="passoword">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Passoword"
            />
            <button className="button primary-button">Sign In</button>
          </div>
        </form>
         <p>Don't have an account? <Link to={"/register"}>Register</Link></p>
      </div>
    </main>
  );
};

export default Login;
