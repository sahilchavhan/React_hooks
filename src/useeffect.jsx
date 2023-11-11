import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Useeffect = () => {
    const[email,setEmail]=useState("scscsc")

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>setEmail(response.data[0].email))
    })

  return (
    <div>
        <p>HELLO EVERYONE</p>{email}
    </div>
  )
}

export default Useeffect