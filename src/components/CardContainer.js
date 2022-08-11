import React, { useState } from 'react'
import LeftCC from './LeftCC'
import RightCC from './RightCC'
import Card from './Card'
import Form from './Form'

export default function CardContainer({ pairs }) {


    return (          
    <div style={{display: "flex"}}>
        
        {/* <LeftCC handleClick={handleLeftClick} colors={pairs}/> */}
        <div className="left colors">
          {
            pairs.map((el) => <Card card_num={el.id} word={el.left} />)
          }
        </div>

        {/* <RightCC handleClick={handleRightClick} stuff={pairs}/> */}
        <div className='right stuff'>
          {
            pairs.map((el) => <Card card_num={el.id} word={el.right} />)
          }
        </div>
        <Form />
    </div>
    
  )
}
