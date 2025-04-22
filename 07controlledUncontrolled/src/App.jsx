import React from 'react'
import { useState } from 'react'

const App = () => {
  let [name,setName] = useState()
  let handleInput = ((e)=>{
    name = e.target.value
    setName(name)
    console.log(name)
  })
  return (
    <>
        <input type="text" onChange={handleInput}/>
    </>
  )
}

export default App
