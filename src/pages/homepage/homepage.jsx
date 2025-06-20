import React from 'react'
import './homepage.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const homepage = () => {
  return (
    <div className="homepage-wrapper">
      <Navbar />
      <div className="homepage-content">
        <h1>Welcome to the Homepage</h1>
      </div>
      <Footer />
    </div>
  )
}

export default homepage
