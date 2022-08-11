import React, { useState } from 'react'
import Card from './Card'
export default function RightCC({ stuff, handleClick }) {

    // const [ curCard, setCurCard ] = useState(null);

    // //handle click updates current selected card
    // const handleClick = function(){
        
    // }
    return (
        <div>
            <div>RightCC</div>
            {   //inline js
                stuff.map(el => {
                    console.log(el)
                    return <Card handleClick={ function(){ handleClick(el.id) } } key={el.id} word={el.right}/>
                })
            }
            
        </div>
  )
}
