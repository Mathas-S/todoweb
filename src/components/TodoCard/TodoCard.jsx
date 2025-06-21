import React from 'react'
import './TodoCard.css'

const TodoCard = ({title, description, onComplete, onEdit, onDelete}) => {
  return (
    <div className='card-container'>
        <h2 className='card-title'>{title}</h2>
        <p className='card-description'>{description}
        </p>
        <div className='card-buttons'>
            <button onClick={onComplete} className='complete-button'>Complete</button>
            <button onClick={onEdit} className='edit-button'>Edit</button>
            <button onClick={onDelete} className='delete-button'>Delete</button>
        </div>
    </div>
  )
}

export default TodoCard