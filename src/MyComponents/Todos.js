import React from 'react'
import {TodoItems} from "./TodoItems"

export const Todos = (props) => {
  return (
    <div className='container my-5'>
      <h3 align="center">This is My To-Do List</h3>
      {props.todos.length === 0 ? <h1 align="center">No Todos To Display!</h1>: 
      props.todos.map((todo)=>{
        return (
          <>
         <TodoItems todo ={todo} key={todo.sno} onDelete={props.onDelete} />
        <hr/>
        </>
        )
      })}
      
    </div>
  )
}
