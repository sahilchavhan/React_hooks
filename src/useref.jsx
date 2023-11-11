import React, { useRef, useState } from 'react'

const Useref = () => {
    const inputref=useRef(null);

    const onclick=()=>{
        console.log(inputref.current.value)
        setText(inputref.current.value)
        inputref.current.value="";
    }

    const[text,setText]=useState("")
  return (
    <div>
        <input type="text" placeholder='Ex' ref={inputref}/>
        <button onClick={onclick}>click</button>
        {text}
    </div>
  )
}

export default Useref