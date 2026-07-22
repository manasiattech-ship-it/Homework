 
import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([
  { id: 1, text: "Study React", completed: false },
  { id: 2, text: "Go to gym", completed: false },
  { id: 3, text: "Read a book", completed: true },
]);

const handleClick = (id) => {
    setTodos((prev) => {
        return prev.map((item) => item.id === id ? {...item, "completed": !item.completed} : item)
    })
}
  return (
    <div>
        {todos.map((todo) =>(
            <div key={todo.id} onClick={() =>handleClick(todo.id)}> 
               {todo.text }- {todo.completed.toString()}
            </div>
  ))}

    </div>
  )
}

export default Todo
