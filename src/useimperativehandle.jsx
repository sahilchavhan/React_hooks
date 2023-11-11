import React, {useRef} from 'react'
import Button from './button'

const UseImperativeHandle = () => {
    const buttonref=useRef(null);

  return (
    <div>
        <button onClick={()=>{buttonref.current.altertoggle();}}>button from parent</button>
        <Button ref={buttonref}/>
    </div>
  )
}

export default UseImperativeHandle