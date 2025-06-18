import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>TodoNow</div>
        <ul className='navbar-menu'>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/addtodo">Add TODO</Link></li>
        <li><Link to="/history">History</Link></li>    
        </ul>   
        <div className='nav-profile'>
          <Link to="/profile">Profile</Link>
          </div>   
    </div>
  )
}

export default Navbar
