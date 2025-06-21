import React from 'react'
import './TodoCard.css'

const TodoCard = ({title, description, onComplete, onEdit, onDelete}) => {
  return (
    <div className='card-container'>
        <h2 className='card-title'>{title}</h2>
        <p className='card-description'>{description}
        </p>
        <div className='card-buttons'>
            <button onClick={onComplete}>Complete</button>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    </div>
  )
}

export default TodoCard