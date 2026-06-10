import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import {useState} from "react"

const Register = () => {
  const navigate = useNavigate();
  const[username,setUsername] = useState("");
  const[email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {handleRegister,loading} = useAuth();
 

  const handleSubmit = async(e) => {
    e.preventDefault();
    await handleRegister({username,email,password})
    navigate("/login")
  }
    if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              onChange = {(e) => {
                setUsername(e.target.value)
              }}
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
            />
          </div>
           <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onChange = {(e)=> {
                setEmail(e.target.value)
              }}
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email Address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="passoword">Password</label>
            <input
              onChange = {(e) => {
                setPassword(e.target.value)
              }}
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