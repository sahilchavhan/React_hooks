import React,{useState} from 'react'


const Reducer = () => {
    const[counter,setCounter]=useState(0);
    const[value,setValue]=useState(true);
    
    const increment=()=>{
        setCounter(counter+1)
        setValue(!value)
    }

  return (
    <div>
        <div>{counter}</div>
        <div>
            <button onClick={increment}> change</button>
        </div>
        <div>
            {value && <p>this is text </p>}
        </div>
    </div>
  )
}

export default Reducer
