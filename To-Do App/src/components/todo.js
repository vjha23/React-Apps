import React from 'react';
import '../style.css'



function Todo(props){
    const completeStyle={
        fontstyle:"italic",
        color:"grey",
        textDecoration:"line-through"
    }
    return(
        <div className="todo-item">
        <input type="checkbox" onChange={()=>props.handleChange(props.Todo.id)} checked={props.Todo.completed}></input>
        <p style={props.Todo.completed?completeStyle:null}>{props.Todo.text}</p>
        </div>
    );
}
export default Todo;