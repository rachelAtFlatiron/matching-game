import './App.css';
import { useState } from 'react'
import CardContainer  from './components/CardContainer';


function App() {
  //keeps track of current left card
  const [ leftCard, setLeftCard ] = useState(null);
  //keeps track of current right card
  const [ rightCard, setRightCard ] = useState(null);

  //UPDATES THE CURRENT RIGHT CARD
  const handleRightClick = function(id){
    console.log("APP HANDLE RIGHT CLICK FUNCTION")
    console.log(id)
    setRightCard(id)
  }

  //UPDATES THE CURRENT LEFT CARD
  const handleLeftClick = function(id){
    console.log("APP HANDLE LEFT CLICK FUNCTION")
    console.log(id)
    setLeftCard(id)
  }

  
  const colorPairs = [
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
      <CardContainer handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} pairs={colorPairs}/>
    </div>
  );
}

export default App;
