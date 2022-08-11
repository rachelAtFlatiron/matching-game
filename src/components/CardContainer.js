import React, { useState } from 'react'
import LeftCC from './LeftCC'
import RightCC from './RightCC'

export default function CardContainer({ pairs, handleLeftClick, handleRightClick }) {


    console.log(pairs)
    return (          
    <div style={{display: "flex"}}>
        
        <LeftCC handleClick={handleLeftClick} colors={pairs}/>
        <RightCC handleClick={handleRightClick} stuff={pairs}/>
    </div>
    
  )
}
