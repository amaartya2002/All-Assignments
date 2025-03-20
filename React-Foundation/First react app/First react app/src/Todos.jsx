import React, { useEffect, useState } from 'react'

function Todos() {

  const[todo,setTodo] = useState([]);

  useEffect(() => {

    const fetchTodos = () => {
      
      fetch('https://sum-server-faraz.onrender.com/todos')
    .then(async(res) => {
      const response = await res.json()
      setTodo(response.todos)
    })
    .catch((err) => console.log('ERROR: ' + err.message));
    
    }

    fetchTodos()


    const fetchId = setInterval(fetchTodos ,10000);

    return () => clearInterval(fetchId);


  },[])


  return (
    <div>
      {
        todo.map((t) => {
          return <EachTodo key={t.id} titleandescription={t}></EachTodo>
        })
      }     
    </div>
  )
}



function EachTodo({titleandescription}){

  return <div>
            <h3>{titleandescription.title}</h3>      
            <h3>{titleandescription.description}</h3> 
          </div>

}

export default Todos
