import React from 'react';
import styles from './todo.module.css'

export const Todo = ({todo,onDeleteItem}) => {
    const [isStriked,setIsStriked] = React.useState(false)
    const [isEditModeOn,setIsEditModeOn] = React.useState(false)
  return (
       <li className = {styles.todoitem}>
           { isEditModeOn ? (
               <input type = "text"/>
           ) :
            ( 
            <>
            <input type = "checkbox" onChange={() => {
                    setIsStriked(!isStriked)
             }}/>
              <span className={isStriked ? styles.strike : styles.normal}>
                  {todo.value}
              </span>
              </>
              )
              }
            
              <button onClick={() => onDeleteItem(todo)}>Delete</button>
              <button onClick={() => setIsEditModeOn(!isEditModeOn)}>
                  {isEditModeOn ? "cancel edit" : "Edit"}
                  </button> 
        </li>
)
};
