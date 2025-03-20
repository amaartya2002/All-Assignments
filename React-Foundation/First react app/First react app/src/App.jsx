import React, { useState } from 'react'
import Todos from './Todos';


function App() {

  return (
    <>
        <Todos></Todos>
        <Wrapper>
          <Wrapper>
            <TextComponet></TextComponet>
          </Wrapper>
        </Wrapper>
    </>
  )
}


function Wrapper({children}) {

console.log('Wrapper Component Called!');


  
  return (
    <div style={{border : "2px solid black", padding : "15px"}}>
      {children}
    </div>
  )
}


function TextComponet(){
  return <div>
    Hi there!!
  </div>
}


const Title = React.memo(function Title(props) {

  const title = props.titlee
  console.log(typeof title);


  return <div>
    My name is {title}
  </div>
}) 

export default App
