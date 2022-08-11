import React, { useState } from 'react'
import Card from './Card'
export default function LeftCC({ colors, handleClick }) {

    //use state to keep track of current left card selected (use card id)
    // const [curCard, setCurCard] = useState(null)
    
    //populate variable with array of jsx
    // let left = colors.map((el) => {
    //     const updateClick = function(){
    //         handleClick(el.id)
    //     }
    //     return <Card handleClick={updateClick} word={el.left} />
    // });

    //function to return array of jsx
    const createCards = function(){
        return colors.map((el => {
            const updateClick = function(){
                handleClick(el.id)
            }
            return <Card handleClick={updateClick} word={el.left} />
        }))
    }

    return (
    <div>
        <div>LeftCC</div>
        {createCards()}
    </div>
    
  )
}
