import React from 'react'
import './addpage.css'
import Navbar from '../../components/Navbar/Navbar'

const addpage = () => {

  return (
    <>
      <Navbar />
      <div className='add-container'>
        <h1>Add New TODO List</h1>
        <input type="text" placeholder='Name' className='add-input' />
        <input type="text" placeholder='Description' className='add-input' />
        <input type="date" className='add-input' />
        <button className='add-button'>Add</button>
        <button className='add-button'>Cancel</button>
      </div>
    </>
  )
}

export default addpage