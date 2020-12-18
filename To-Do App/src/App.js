import React, { Component } from 'react';
import Todo from './components/todo'
import './style.css';
import todoData from './todoData';
import { render } from '@testing-library/react';


class App extends Component{
    constructor(){
      super();
      this.state={
        todos:todoData
       
      }
      this.handleChange=this.handleChange.bind(this);
    }


      handleChange(id){
        this.setState(prevState=>{
          const updateTodo=prevState.todos.map(todo=>{
            if(todo.id===id){
              todo.completed=!todo.completed
            }
            return todo
          })
          return {
            todos:updateTodo
          }
        })
      }

      render(){
        const TodoRender=this.state.todos.map(item=>
          <Todo key={item.id} Todo={item} handleChange={this.handleChange}/>
        )
      
        return (
          <div className="todo-list">
               {TodoRender}
          </div>
        )
      }
    }




export default App;
