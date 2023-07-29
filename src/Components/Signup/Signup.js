import { useState } from 'react';
import React from 'react';
import './Signup.css'; // Import the CSS styles
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const RegisterPage = () => {

	const [ user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		reEnterPassword: ""
	})

	const handleChange = e => {
		const {name, value} = e.target
		setUser({
			...user,
			[name]:value
		})
	}

  const register = () => {
    const { name, email, password, reEnterPassword } = user
      if( name && email && password && (password === reEnterPassword)){
          axios.post("http://localhost:9002/register", user)
          .then( res => {
              alert(res.data.message)
              //useNavigate("/Login")
          })
        }
        else {
          alert("invalid input")
    }
  }

  return (
    <div className="register-container">
      <form className="register-form">
        <h2 className="register-heading">Register</h2>
        <input type="text" name="name" value={user.name} placeholder="Name" onChange={handleChange}/>
        <input type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange}/>
        <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}/>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm Password" onChange={handleChange}/>
        <button type="submit">Register</button>
      </form>
      <div className="login-link-container">
        <p>Already have an account?</p>
        <a href="/login" className="login-link" onClick={useNavigate("/Login")}>Login</a>
      </div>
    </div>
  );
};

export default RegisterPage;
