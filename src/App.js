import './App.css';
import { useState } from 'react'
// import CardContainer  from './components/CardContainer';
// import Card from './components/Card';
// import Form from './components/Form';

function App() {

  let colorPairs = [
    {
      id: 1,
      left: "red",
      right: "rose"
    },
    {
      id: 2,
      left: "blue",
      right: "sky"
    },
    {
      id: 3,
      left: "green",
      right: "grass"
    }
  ]

  //keeps track of current left card
  const [ colorCard, setColorCard ] = useState(null);
  //keeps track of current right card
  const [ stuffCard, setStuffCard ] = useState(null);

  return (
    <div className="App">
      {/* <CardContainer handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} pairs={colorPairs}/> */}
      {/* <LeftCC handleClick={handleLeftClick} colors={pairs}/> */}
      <div style={{display: "flex"}} className="cards-container">
        <div className="card-section colors">
            {
              // colorPairs.map((el) => <Card handleClick={function(){setColorCard(el.id)}} card_num={el.id} word={el.left} />)

              colorPairs.map((el) => <div className="card">{el.left}</div>)
            }
        </div>

        {/* <RightCC handleClick={handleRightClick} stuff={pairs}/> */}
        
        <div className='card-section stuff'>
          {
            // colorPairs.map((el) => <Card handleClick={function() {setStuffCard(el.id)} }card_num={el.id} word={el.right} />)
            colorPairs.map((el) => <div className="card">{el.right}</div>)
          }
        </div>
      </div>
      {/* <Form /> */}
    </div>
  );
}

export default App;
