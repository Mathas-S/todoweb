import React from 'react'
import './homepage.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import TodoCard from '../../components/TodoCard/TodoCard'

const homepage = () => {
  const handleComplete = () => alert('Completed');
  const handleEdit = () => alert('Edited');
  const handleDelete = () => alert('Deleted');

  return (
    
      <div className="homepage-content">
        <TodoCard
          title='My Task'
          description='this is a description of this task'
          onComplete={handleComplete}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
     
  )
}

export default homepage
