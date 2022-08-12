import React from 'react'

export default function Card({ word, handleClick, color }) {
  return (
    <p onClick={handleClick} style={{color: color}} className="card" >{ word }</p>
  )
}


