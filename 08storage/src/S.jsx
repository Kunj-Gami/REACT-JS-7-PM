import React from 'react'


const S = () => {
  return (
    <div>
      <h1>SESSIONSTORAGE</h1>
      {sessionStorage.setItem("name","kunj")}
    </div>
  )
}

export default S
