import React from 'react';
import './todo.css';

const TodoItem = ({ todoItem ,onDelete }) => {
  return (
    <div className="todo-item">
      {todoItem}
      <button className='delete-button' onClick={() => onDelete(todoItem)}>Delete</button>
    </div>
  );
};

export default TodoItem;