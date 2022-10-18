import React from 'react'
import { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
  const [todos, setTodo] = useState([])

  const addTodo = todo=>{
    if(!todo.text ||/^\s*$/.test(todo.text)){
      return
    }

    const newTodo = [todo,...todos]
    
    setTodo(newTodo)
    console.log([...todos])
  }


  const completeTodo = (id)=>{
    let updateTodo = todos.map(todo =>{
      if(todo.id === id){
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodo(updateTodo)
  }

  const handleRemove = (id) =>{
    const todo = [...todos].filter(t => t.id !== id)
    setTodo(todo)
  }


  return (
    <div>
      <TodoForm  onSubmit={addTodo}/>
      <Todo 
      todos={todos} 
      completeTodo={completeTodo}
      onRemove={handleRemove}
      />
    </div>
    
  )
}

export default TodoList