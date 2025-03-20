import { useState , useContext } from 'react'
import { CountContext  } from './context'


function App() {
  const [count, setCount] = useState(0)

  // wrap anyone who needs this count value inside a provider

  return (
    <div>

      <CountContext.Provider value={{count,setCount}}>

        <Count></Count>

      </CountContext.Provider>
      
    </div>
  )

}


function Count(){
  
  console.log(useContext(CountContext));

  return(

    <div>
      <Countrenderer></Countrenderer>
      <Buttons></Buttons>
    </div>
  )
}

function Countrenderer(){
  
  
  
  const {count} = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Buttons() {

  const {count,setCount} = useContext(CountContext)

  return (
    <div>
      <button onClick={() => {
        setCount(count+1)
      }}>Increase</button>
      <button onClick={() => {
        setCount(count-1)
      }}>Decrease</button>
    </div>
  )
  
}

export default App
