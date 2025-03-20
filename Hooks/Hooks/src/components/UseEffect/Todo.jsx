import { useEffect } from "react";
import React , {useState} from 'react'

function Todo() {
      const[id,setId] = useState(1);
      const[todo,setTodo] = useState(null);

      useEffect(() => {
        fetch(`https://sum-server-faraz.onrender.com/todo?id=${id}`)
        .then((res) => res.json())
        .then((response) => setTodo(response.todo))
      },[id])


      const myTodo = todo;

      console.log(myTodo);
      

      

  return (
    <div>

      <input type="number" name="id-box" id="id-box" placeholder="Enter the id of the todo" onChange={(e) => setId(+(e.target.value))}/>

      { 
        myTodo ? <Mytodo key={todo.id} title={todo.title} description={todo.description}></Mytodo> : <p>No such todo</p>
      }
      
    </div>
  )
}



function Mytodo({title,description}){

  return (
    <div>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  )
}

export default Todo
