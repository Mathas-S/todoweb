import React from 'react'
import { useNavigate } from 'react-router-dom'
import './profile.css'

const Profile = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <>
      <h1>Profile Page</h1>
      <div className='profile-container'>
        <h2>Account</h2>
        <p>user.email</p>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </>
  )
}

export default Profile
