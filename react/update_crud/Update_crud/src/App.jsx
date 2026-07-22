import React, { useState } from 'react'
import Todo from './components/todo';
import Products from './components/Products';
import Users from './components/Users';
import Students from './components/Students';

const App = () => {

  const [todos, setTodos] = useState([
  { id: 1, text: "Study React", completed: false },
  { id: 2, text: "Go to gym", completed: false },
  { id: 3, text: "Read a book", completed: true },
]);
 
  return (
    <div>
      Hello!
      {/* <Todo /> */}
      <Products />
      <Users/>
      <Students/>
    </div>
  )
}

export default App
