import React from "react";

export const TodoItems = ({todo, onDelete}) => {
  return (
    <div align="center">
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  );
};
