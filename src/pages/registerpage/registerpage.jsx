import React from 'react'
import './registerpage.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const registerpage = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate('/');
  };

  return(
    <div className='register-container'>
      <h1>Register</h1>
      <input type="text" placeholder='Email' className='register-input' />
      <input type="password" placeholder='Password' className='register-input' />
      <input type="password" placeholder='Confirm Password' className='register-input' />
      <button onClick={handleRegister} className='register-button'>Register</button>
      <li className='login-button'><Link to="/">Sign in</Link></li>
      
    </div>
  )
}

export default registerpage