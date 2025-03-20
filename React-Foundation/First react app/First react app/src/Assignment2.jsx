import React, { useEffect, useState } from 'react'

function Assignment2() {

  const[todoId,setTodoId] = useState(1);
  const[todo,setTodo] = useState(null)

  useEffect(() => {

    fetch(`https://sum-server-faraz.onrender.com/todo?id=${todoId}`)
    .then(async(res) => {
      const response = await res.json();
      setTodo(response.todo);
    } )

  },[todoId])

  function nextTodoFetch(){
    setTodoId((prevId) => prevId+1);
  }

  return (
    <div>

      <button onClick={nextTodoFetch}>Next</button>

      <input type="text" value = {todoId} onChange={(e) => setTodoId(Number(e.target.value))}/><br/>

      {
        todo ? <EachTodo todovalue={todo}  /> : "No such todo exists for this id"
      }
      
    </div>
  )


}


function EachTodo({todovalue}){

  return <div>
     <h3>{todovalue.id}</h3>
     <h3>{todovalue.description}</h3>
  </div>
}

export default Assignment2
