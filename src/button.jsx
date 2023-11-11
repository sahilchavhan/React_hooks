import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Button = forwardRef((props,ref) => {
    const[toggle,setToggle]=useState(true);

    useImperativeHandle(ref,()=>({
        altertoggle(){
            setToggle(!toggle);
        }
    }))

    const altertoggle=()=>{
        setToggle(!toggle)
    }

  return (
    <div>
        <button onClick={altertoggle}>button from child</button>
        {toggle && <p>my name is sahil</p>}
    </div>
  )
})

export default Button