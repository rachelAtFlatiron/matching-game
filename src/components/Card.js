import React from 'react'

export default function Card({ word, handleClick }) {
    
  return (
    <div className="card" onClick={handleClick} style={{}}>{ word }</div>
  )
}
