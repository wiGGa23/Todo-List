import React, { useState } from 'react'

export const AddTodos = (props) => {
    const [title, setTitle] =  useState("");
    const [desc, setDesc]= useState("");
    const submit = (e)=>{
        e.preventDefault()
        if (!title || !desc) {
            document.getElementById("noText").innerHTML = ("Title or Description cannot be Blank!")
        }
        else { document.getElementById("noText").innerHTML = ""
        
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
    }
    };
    return (
        <div className='container'>
            <h3>Add Your Todo Below:</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label px-2 my-2">Todo Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="todoTitle" aria-describedby=""/>
                    <label htmlFor="desc" className="form-label px-2 my-2">Todo Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="todoDesc"/>
                </div>
                <p id='noText'></p>
                <button type="submit" className="btn btn-success">Add My Todo</button>
            </form>
        </div>
    )
}
