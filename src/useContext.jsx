import React, { createContext } from 'react'
import Login from './Login.jsx'
import User from './User.jsx'
import { useState } from 'react'

export const AppContext= createContext(null);

const UseContext = () => {
    const[username,setUsername]=useState("")
  return (
    <AppContext.Provider value={{username,setUsername}}>
        <Login/>
        <User/>
    </AppContext.Provider>
  )
}

export default UseContext