import React from 'react';
import { Todoinput } from './Todoinput';
import {Todo} from './Todo'

export const Todos = () => {
    const [todos,setTodos] = React.useState([]);
    const onDeleteItem = (itemToDelete) => {
       const newTodoList = todos.filter(todo => todo.id !== itemToDelete.id)
       setTodos(newTodoList)
    }

    const onUpdate = (updatedTodo) => {
       const newTodoList = todos.map((todo) => {
        if(todo.id === updatedTodo.id){
            return updatedTodo
        }
        else{
            return todo;
        }
       })
       
    }
   
  return (
 <div>
     <Todoinput todos = {todos} setTodos = {setTodos}/>
      <div>
          <ul>
          {todos.map((todo) => {
              return (
               <Todo key = {todo.id} todo = {todo} onDeleteItem = {onDeleteItem} onUpdate={onUpdate}/>
               )
          })}
          </ul>
      </div>
  </div>
  );
};
