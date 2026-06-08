import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
            />
          </div>
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
            <button className="button primary-button">Register</button>
          </div>
        </form>
        <p>Already have an account? <Link to={"/login"}>Login</Link></p>
      </div>
    </main>
  )
}

export default Register