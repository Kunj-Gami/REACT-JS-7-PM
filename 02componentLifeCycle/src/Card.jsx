import React from 'react'

const Card = ({m,n,c,e}) => {
  return (
    <>
        <div className='container'>
                <div className="row">
                    <div className="col">{m}</div>
                    <div className="col">{n}</div>
                    <div className="col">{c}</div>
                    <div className="col">{e}</div>
                </div>
        </div>
    </>
  )
}

export default Card
