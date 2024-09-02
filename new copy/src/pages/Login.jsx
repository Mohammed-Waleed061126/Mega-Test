import React, { useState } from 'react'; // Explicitly import React
import Identity from '../components/Identity';
import './../assets/css/pages/sign.css';
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to home page
        navigate('/home');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Navbar title="Login" />
      <Identity />
      <div className="container main-sign-container">
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className='custom-btn' onClick={handleLogin}>Login</button>
        <div className='part-sign'>
        <div className="sign-text">
          {"Don't have an account"}
        </div>
        <button className="custom-btn" onClick={() => navigate("/signUp")}>sign up</button>
        </div>
      </div>
    </>
  );
}
