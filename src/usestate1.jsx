// import React from 'react'
import React,{useState} from 'react';


const Usestate1 = () => {
  const[counter,setCounter]=useState(10);

  const increment=()=>{
    setCounter(counter+1)
  }

  return (
    <div>
         {counter}<button onClick={increment}>increment</button>
    </div>
  )
}

export default Usestate1