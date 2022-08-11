import React from 'react'

export default function Card({ word, handleClick }) {
    
  return (
    <div onClick={handleClick} style={{border: "solid 1px black"}}>{ word }</div>
  )
}
