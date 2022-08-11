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


  /*
    TODOS:
    1. create state to keep track of current color and stuff card
    2. update state on card click
    3. set card to be either black or red based on state
    4. create on enter key event evaluate selection

  */
  return (
    <div className="App">
      
      <div style={{display: "flex"}} className="cards-container">
        {/* Left cards */}
        <div className="card-section colors">
            {
              colorPairs.map((el) => <Card word={el.left} />)
            }
        </div>

        {/* Right cards */}
        <div className='card-section stuff'>
          {
            colorPairs.map((el) => <Card word={el.right} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
