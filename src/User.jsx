import React, {useContext} from 'react'
import {AppContext} from './useContext'

const User = () => {
    const{username}=useContext(AppContext);
  return (
    <div>
        <h1>USER: {username}</h1>
    </div>
  )
}

export default User