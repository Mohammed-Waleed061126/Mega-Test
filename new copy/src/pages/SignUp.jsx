import React, {useState} from 'react';
import axios from 'axios';
import Identity from '../components/Identity';
import './../assets/css/pages/sign.css'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', {
        username,
        email,
        password,
      });
      if (response.data.message === 'User created successfully') {
        alert('User created successfully!');
        navigate('/login');
      }
    } catch (error) {
      console.error('There was an error signing up:', error);
      alert('Error: ' + error.response.data.message);
    }
  };
  return (
  <>
      <Navbar title="Sign Up" />
      <Identity />
      <div className="container main-sign-container">
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='custom-btn' onClick={handleSignUp}>Sign Up</button>
        <div className="part-sign">
          <div className="sign-text">
          {"Have already an account ? "}
          </div>
          <button className="custom-btn" onClick={() => navigate("/login")}>Login</button>
        </div>
    </div>
  </>
  )
}