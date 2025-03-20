import React, { useEffect, useState } from 'react'
import { useMemo } from 'react';

function Assignment1() {

  const[count,setCount] = useState(0)

  const[sum,setSum] = useState(0);

  // useEffect(()=>{
    
  //   const sumValue = (sum*(sum+1))/2;

  //   document.getElementById('sum-val').innerHTML = `Sum is ${sumValue}`;

  // },[sum])


  // BETTER APPROACH

  let sumVal = useMemo(() => {
    let x = 0 ;

    for(let i = 0 ; i<=sum ; i++){
      x = x + i ;
    }

    return x;
  },[sum])

  
  return (
    <div>
      <input type="text" placeholder='Enter a number' defaultValue={0} onChange={(e) => setSum(Number(e.target.value))}/> <br />

      <span id='sum-val' >

        Sum from 1 to {sum} : {sumVal}
        
      </span><br />
      
      <button onClick={() => setCount(count+1)}>Counter({count})</button>
    </div>
  )
}

export default Assignment1
