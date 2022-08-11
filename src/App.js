import './App.css';
import { useState } from 'react'
// import CardContainer  from './components/CardContainer';
import Card from './components/Card';
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

  
  return (
    <div className="App">

      <div style={{display: "flex"}} className="cards-container">
        <div className="card-section colors">
            {
              colorPairs.map((el) => <Card word={el.left} />)
            }
        </div>

        
        <div className='card-section stuff'>
          {
            colorPairs.map((el) => <Card word={el.right} />)
          }
        </div>
      </div>
      {/* <Form /> */}
    </div>
  );
}

export default App;
