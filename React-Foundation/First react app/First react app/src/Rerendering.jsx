import { useState } from "react"




export function Rerendering(){

  return <div>
     <HeaderWithButton /> 
     <OnlyTitle title="i am amartya2"></OnlyTitle>
  </div>
}


function HeaderWithButton(){

  const[title,setTitle] = useState("I am amartya");


  return <div>
    <button onClick={() => setTitle("I am " + Math.random())}>Click me to change title</button><br />
    {title}
  </div>
}


function OnlyTitle({title}){

  return <div>
     {title}
  </div>
}