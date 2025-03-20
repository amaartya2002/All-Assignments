import React, { useEffect, useState } from 'react';

function Secondtodo() {
  // const [todos, setTodos] = useState([]);

  const[id,setId] = useState(1)

  // useEffect(() => {
  //   fetch(`https://sum-server-faraz.onrender.com/todos`)
  //     .then((res) => res.json())
  //     .then((response) => setTodos(response.todos))
  //     .catch((err) => console.error("Error fetching todos:", err));
  // }, []);

  return (
    <div>
      <button onClick={() => setId(1)}>1</button>
      <button onClick={() => setId(2)}>2</button>
      <button onClick={() => setId(3)}>3</button>

      <Todo id={id}></Todo>
    </div>
  );
}



function Todo({ id }) {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`https://sum-server-faraz.onrender.com/todo?id=${id}`)
      .then((res) => res.json())
      .then((response) => setTodo(response.todo))
      .catch((err) => console.error("Error fetching todo:", err));
  }, [id]);

  return (
    <div>
      {todo ? (
        <>
          <h2>{todo.title}</h2>
          <h3>{todo.description}</h3>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}




export default Secondtodo;
