import React, {useReducer} from 'react'

const reducer=(state,dispatch)=>{
    switch(dispatch.type){
        case "increment":
            return {counter: state.counter+1, value: state.value};
        case "toggle":
            return {counter: state.counter, value: !state.value};
        default:
            return state;
    }
}

const Reducer1 = () => {
    const[state,dispatch]=useReducer(reducer, {counter:0, value:true})

    const add=()=>{
        dispatch({type:"increment"});
        dispatch({type:"toggle"});

    }
  return (
    <div>
         <div>{state.counter}</div>
        <div>
            <button onClick={add}> change</button>
        </div>
        <div>
            {state.value && <p>this is text </p>}
        </div>
    </div>
  )
}

export default Reducer1