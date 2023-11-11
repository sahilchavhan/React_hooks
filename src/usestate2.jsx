// import React from 'react'
import React,{useState} from 'react';


const Usestate2 = () => {
  const[input,setInput]=useState("podo");

  let increment=(event)=>{
    const newvalue= event.target.value;
    setInput(newvalue)
  }

  return (
    <div>
        <input type="text" onChange={increment}/>
         {input}
    </div>
  )
}

export default Usestate2