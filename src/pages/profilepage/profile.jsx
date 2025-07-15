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
      <div className='profile-container'>
        <h1>Profile Page</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </>
  )
}

export default Profile
