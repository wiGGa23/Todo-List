import React, { useState } from 'react';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodos } from './MyComponents/AddTodos';
import './App.css';


function App() {
  const addTodo = (title, desc) =>{
    console.log("I am Adding this Todo", title, desc);
    let sno;
    if (todos.length===0){
      sno=0;
    }
    else {
       sno = todos[todos.length-1].sno + 1;
    }
    let myTodo = {
      sno: sno,
      title: title,
      description: desc,
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  };
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'Go to the market',
      description: 'Go to the market to buy Flowers',
    },
    {
      sno: 2,
      title: 'Go to the Garden',
      description: 'Go to the garden to pick Flowers',
    },
    {
      sno: 3,
      title: 'Go to the House',
      description: 'Go to the house to give Flowers',
    },
    {
      sno: 4,
      title: "Go to the gym",
      description: "Go to the gym to workout"
    },
    {
      sno: 5,
      title: "Finish The Assingment",
      description: "Finish React Assingment before tomorrow"
    }
  ]);

  const onDelete = (todo) => {
    console.log('Deleted ' + todo.title);
    setTodos(todos.filter((t) => t !== todo));
  };

  return (
    <>
      <Header title='My Todos List' searchBar={true} />
      <AddTodos addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
