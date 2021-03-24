import React from 'react'
import './App.css'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  return (  
    <div className='wrapper'>
      <h2 className='title'>What's your plan for today?</h2>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App
