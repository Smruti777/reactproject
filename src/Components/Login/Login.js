import React, {useState} from 'react';
import './Login.css'; // Import the CSS styles
import {Navigate, useNavigate} from "react-router-dom";
import axios from 'axios';

const LoginPage = ({setLoginUser}) => {

  const navigate = useNavigate()

  const [ user, setUser] = useState({
    email:"",
    password:""
  })

  const handleChange = e => {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const login = () => {
    axios.post("http://localhost:9002/login", user)
    .then(res => {
        alert(res.data.message)
        setLoginUser(res.data.user)
        navigate.push("/")
    })
}

  return (
    <div className="login-container">
      <div className="login-form-container">
        <form className="login-form">
          <h2 className="login-heading">Login</h2>
          <input type="text" name="email" value={user.email} placeholder="Username or Email" onChange={handleChange} />
          <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
          <button type="submit">Login</button>
          <a href="#" className="login-link">Forgot Password?</a>
        </form>
        <div className="register-container">
          <p>Don't have an account?</p>
          <a className="register-button" href="/signup">Register</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
