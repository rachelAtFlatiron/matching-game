import React from 'react'

export default function Card({ word, handleClick, color }) {
  console.log(color)
  return (
    <p className="card" onClick={handleClick} style={{color: color}}>{ word }</p>
  )
}
