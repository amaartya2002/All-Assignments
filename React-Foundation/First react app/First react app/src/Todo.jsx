import React from 'react'
import { useState } from 'react'

function Todo() {

  const[myTodos , setMyTodos] = useState([
  {
    title : 'Sleep',
    description : 'Sleep from 9 to 11'
  },{
    title : 'Food',
    description : 'Food from 9 to 11'
  },
  {
    title : 'movie',
    description : 'movie from 9 to 11'
  }
])


  function addMyTodos(){
    setMyTodos([...myTodos,{title : 'movie',
    description : 'movie from 9 to 11'}])
  }



  return (
    <div>
      <button onClick={addMyTodos}>Add Todo</button><br />
      <input type="text" placeholder='title'/><br />
      <input type="text" placeholder='description' /><br />
      {
        myTodos.map((todo) => {
         return <div>
          <h3>{todo.title}</h3>
          <h3>{todo.description}</h3>
          </div>
        })
      }
    </div>
  )
}

export default Todo
