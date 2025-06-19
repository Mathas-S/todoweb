import React from 'react'
import {useNavigate} from 'react-router-dom'
import './signinpage.css'
import { Link } from 'react-router-dom'

const signinpage = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate('/home');
  };

  return(
    <div className='signin-container'>
      <h1>Sign In</h1>
      <input type="text" placeholder='Email' className='signin-input' />
      <input type="password" placeholder='Password' className='signin-input' />
      <button onClick={handleSignIn} className='signin-button'>Sign In</button>
      <li className='signup-button'><Link to="/register">Register</Link></li>
      
      
    </div>
  )
}

export default signinpage