import React, { useState } from 'react';
import './todoPages.css';
import TodoItem from '../components/todo/todo.js';

function TodoPages() {
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState([]);

    function OnChangehandler(e) {
        setTodoText(e.target.value);
    }

    function addItem() {
        setTodos([...todos, todoText]);
        setTodoText("");
    }

    function deleteItem(todoItemDelete) {
        setTodos(todos.filter(todoItem => todoItem !== todoItemDelete));
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="todo-header">
                    <div className="todo-content">
                        <input type="text" placeholder="Add your todo " value={todoText} onChange={OnChangehandler}></input>
                        <button onClick={addItem}>Add</button>
                    </div>
                    <div className='todos-list'>
                        {todos.map((todoItem, index) => (
                            <TodoItem key={index} todoItem={todoItem} onDelete={deleteItem} />
                        ))}
                    </div>
                </div>
            </header>
        </div>
    )
}

export default TodoPages;