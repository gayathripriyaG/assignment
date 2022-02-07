import React from 'react';
import {v4} from 'uuid'

export const Todoinput = ({todos,setTodos}) => {
    const [value,setValue] = React.useState("")
  return <div>
      <div>
      <input 
      type = "text" 
      value = {value} 
      onChange={(e) => setValue(e.currentTarget.value)}
      />
      <button 
      onClick={() => {
          if(value){
            setTodos([...todos,{value,id:v4()}]);
            setValue("")
          }
          else{
              console.log("enter value")
          }
          
          }
          }>ADD
       </button>
      </div>
  </div>;
};
